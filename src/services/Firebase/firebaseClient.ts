import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

import type { KycDocumentKind } from "./types";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export const firebaseApp = initializeApp(firebaseConfig);

export const firebaseStorage = getStorage(firebaseApp);

export const kycDocumentPath = (customerId: number, kind: KycDocumentKind) =>
  `kyc-documents/${customerId}/${kind}`;
