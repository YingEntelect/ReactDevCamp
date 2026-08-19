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

export const kycFilePreviewKey = (customerId: number, kind: KycDocumentKind) =>
  ["kycDocumentPreview", customerId, kind] as const;

export const useKYCFilePreview = (
  customerId: number,
  kind: KycDocumentKind,
) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: kycFilePreviewKey(customerId, kind),
    queryFn: async () => {
      const storageRef = ref(
        firebaseStorage,
        kycDocumentPath(customerId as number, kind),
      );

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
          return null;
        }

        throw err;
      }
    },
    enabled: customerId !== undefined,
    retry: false,
  });

  return {
    file: {
      previewUrl: data?.previewUrl ?? null,
      fileName: data?.fileName ?? null,
      fileSize: data?.fileSize ?? null,
    },
    isLoading,
    error,
    refetch,
  };
};
