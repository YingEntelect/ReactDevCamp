import { useState } from "react";
import {
  ref,
  type UploadTaskSnapshot,
  uploadBytesResumable,
} from "firebase/storage";

import { firebaseStorage, type KycDocumentKind } from "@project/services";

const kycDocumentPath = (customerId: number, kind: KycDocumentKind) =>
  `kyc-documents/${customerId}/${kind}`;

export const useKYCFileUpload = () => {
  const [progress, setProgress] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const uploadFile = (
    customerId: number,
    kind: KycDocumentKind,
    file: Blob,
  ): Promise<UploadTaskSnapshot> => {
    const storageRef = ref(firebaseStorage, kycDocumentPath(customerId, kind));
    const uploadTask = uploadBytesResumable(storageRef, file, {
      contentType: file.type,
      customMetadata: { uploadedAt: new Date().toISOString() },
    });

    return new Promise<UploadTaskSnapshot>((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) =>
          setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100),
        (uploadError) => {
          setError(
            uploadError instanceof Error
              ? uploadError.message
              : "Upload failed. Please try again.",
          );
          setProgress(null);
          reject(uploadError);
        },
        () => {
          setProgress(null);
          resolve(uploadTask.snapshot);
        },
      );
    });
  };

  return {
    uploadFile,
    progress,
    error,
  };
};
