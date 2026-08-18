import { ref, uploadBytes } from "firebase/storage";

import { firebaseStorage } from "./firebaseClient";
import type { KycDocumentKind } from "./types";

const kycDocumentPath = (customerId: number, kind: KycDocumentKind) =>
  `kyc-documents/${customerId}/${kind}`;

export const uploadKycDocument = async (
  customerId: number,
  kind: KycDocumentKind,
  file: Blob,
) => {
  const storageRef = ref(firebaseStorage, kycDocumentPath(customerId, kind));

  await uploadBytes(storageRef, file, {
    contentType: file.type,
    customMetadata: { uploadedAt: new Date().toISOString() },
  });
};
