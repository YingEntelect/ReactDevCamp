import type { FC } from "react";
import { Link } from "react-router";

import { ChevronButton } from "@project/components";

import kycBadge from "@project/assets/kyc-badge.png";

export const KYCSubmissionScreen: FC = () => {
  return (
    <div className="flex flex-col h-dvh bg-white items-center justify-center">
      <div className="p-5 w-full gap-5 flex flex-col">
        <div className="w-full flex flex-row items-center justify-center">
          <img src={kycBadge} className="w-28 h-28" />
        </div>
        <h1 className="text-3xl font-bold">Identity verification</h1>
        <p>
          We are committed to providing a safe secure shopping experience for
          our community and therefore your account must be verified by
          completing a KYC verification.
        </p>
        <ChevronButton
          title="Proof of residence"
          subtitle="Proof of identity"
        />
        <ChevronButton title="Selfie upload" subtitle="Proof of identity" />
        <Link
          to="/products"
          className="text-blue-500 underline w-full text-center"
        >
          Continue as a guest
        </Link>
      </div>
    </div>
  );
};
