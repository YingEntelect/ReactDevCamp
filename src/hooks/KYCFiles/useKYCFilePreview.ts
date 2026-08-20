import { useQuery } from "@tanstack/react-query";
import {
  getDownloadURL,
  getMetadata,
  ref,
  StorageError,
} from "firebase/storage";

import {
  firebaseStorage,
  kycDocumentPath,
  type KycDocumentKind,
} from "@project/services";

export type KYCFilePreview = {
  previewUrl: string | null;
  fileName: string | null;
  fileSize: number | null;
};

const emptyFile: KYCFilePreview = {
  previewUrl: null,
  fileName: null,
  fileSize: null,
};

const fetchKYCFile = async (
  customerId: number,
  kind: KycDocumentKind,
): Promise<KYCFilePreview> => {
  const storageRef = ref(firebaseStorage, kycDocumentPath(customerId, kind));

  try {
    const [previewUrl, metadata] = await Promise.all([
      getDownloadURL(storageRef),
      getMetadata(storageRef),
    ]);

    return {
      previewUrl,
      fileName: metadata.customMetadata?.originalFileName || metadata.name,
      fileSize: metadata.size,
    };
  } catch (err) {
    if (
      err instanceof StorageError &&
      err.code === "storage/object-not-found"
    ) {
      return emptyFile;
    }

    throw err;
  }
};

export const kycFilePreviewKey = (customerId: number | undefined) =>
  ["kycDocumentPreview", customerId] as const;

export const fetchKYCFiles = async (customerId: number) => {
  const [proofOfResidence, selfie] = await Promise.all([
    fetchKYCFile(customerId, "proofOfResidence"),
    fetchKYCFile(customerId, "selfie"),
  ]);

  return { proofOfResidence, selfie };
};

export const useKYCFilePreview = (customerId: number | undefined) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: kycFilePreviewKey(customerId),
    queryFn: () => fetchKYCFiles(customerId as number),
    enabled: customerId !== undefined,
    retry: false,
  });

  return {
    proofOfResidence: data?.proofOfResidence ?? emptyFile,
    selfie: data?.selfie ?? emptyFile,
    isLoading,
    error,
    refetch,
  };
};
