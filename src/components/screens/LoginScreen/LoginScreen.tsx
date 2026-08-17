import type { FC } from "react";
import { Navigate, useLocation, useNavigate } from "react-router";

import { LoginForm } from "@project/components";
import { useAuthToken } from "@project/hooks";

export const LoginScreen: FC = () => {
  const { isAuthenticated } = useAuthToken();
  const location = useLocation();
  const navigate = useNavigate();

  const from =
    (location.state as { from?: { pathname?: string } } | null)?.from
      ?.pathname ?? "/";

  if (isAuthenticated) {
    return <Navigate to={from} replace />;
  }

  return (
    <div className="flex flex-col h-dvh bg-[#1C2435]">
      <main className="flex-1 min-h-0 overflow-y-auto p-5">
        <LoginForm onSuccess={() => void navigate(from, { replace: true })} />
      </main>
    </div>
  );
};
