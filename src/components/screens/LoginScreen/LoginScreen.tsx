import { type FC } from "react";

import { LoginForm } from "@project/components";

export const LoginScreen: FC = () => {
  return (
    <div className="flex flex-col h-dvh bg-[#1C2435]">
      <main className="flex-1 min-h-0 overflow-y-auto p-5">
        <LoginForm />
      </main>
    </div>
  );
};
