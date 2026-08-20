import { useState, type FC } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";

import { LoginForm } from "@project/components";
import {
  useAuthToken,
  useCustomerProfile,
  fetchKYCFiles,
  type KYCFilePreview,
} from "@project/hooks";

export const LoginScreen: FC = () => {
  const { isAuthenticated } = useAuthToken();
  const location = useLocation();
  const navigate = useNavigate();
  const { refetch: refetchCustomer } = useCustomerProfile(isAuthenticated);
  const [isCheckingKyc, setIsCheckingKyc] = useState(false);

  const from =
    (location.state as { from?: { pathname?: string } } | null)?.from
      ?.pathname ?? "/products";

  if (isAuthenticated && !isCheckingKyc) {
    return <Navigate to={from} replace />;
  }

  const kycComplete = (kycFiles?: {
    proofOfResidence: KYCFilePreview;
    selfie: KYCFilePreview;
  }) =>
    kycFiles &&
    kycFiles.proofOfResidence.fileName !== null &&
    kycFiles.proofOfResidence.fileSize !== null &&
    kycFiles.proofOfResidence.previewUrl !== null &&
    kycFiles.selfie.fileName !== null &&
    kycFiles.selfie.fileSize !== null &&
    kycFiles.selfie.previewUrl !== null;

  const handleLoginSuccess = async () => {
    setIsCheckingKyc(true);

    try {
      const { data: customer } = await refetchCustomer();

      if (!customer) {
        navigate(from, { replace: true });
        return;
      }

      const files = await fetchKYCFiles(customer.id);

      navigate(kycComplete(files) ? from : "/kyc", { replace: true });
    } catch (err) {
      console.error("Failed to check KYC status after login", err);
      navigate(from, { replace: true });
    } finally {
      setIsCheckingKyc(false);
    }
  };

  return (
    <div className="flex flex-col h-dvh bg-[#1C2435]">
      <main className="flex-1 min-h-0 overflow-y-auto p-5 space-y-5">
        <LoginForm onSuccess={handleLoginSuccess} />
        <div className="flex justify-center">
          <Link to="/products" className="text-white underline">
            Continue as a guest
          </Link>
        </div>
      </main>
    </div>
  );
};
