import { getDownloadURL, getMetadata, ref, StorageError } from "firebase/storage";

import { firebaseStorage, kycDocumentPath } from "./firebaseClient";
import type { KycDocumentKind } from "./types";

export type KYCFilePreview = {
  previewUrl: string | null;
  fileName: string | null;
  fileSize: number | null;
};

export const emptyKYCFile: KYCFilePreview = {
  previewUrl: null,
  fileName: null,
  fileSize: null,
};

export const fetchKYCFile = async (
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
      return emptyKYCFile;
    }

    throw err;
  }
};

export const fetchKYCFiles = async (customerId: number) => {
  const [proofOfResidence, selfie] = await Promise.all([
    fetchKYCFile(customerId, "proofOfResidence"),
    fetchKYCFile(customerId, "selfie"),
  ]);

  return { proofOfResidence, selfie };
};
