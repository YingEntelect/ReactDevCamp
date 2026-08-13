import { useAuth } from "@project/contexts";
import type { FC } from "react";

export const LoginScreen: FC = () => {
  const { mockLogin } = useAuth();

  return (
    <div className="flex flex-col h-dvh">
      <main className="flex-1 min-h-0 overflow-y-auto">
        <p>LOGIN SCREEN</p>
        <button onClick={mockLogin}>MOCK LOGIN</button>
      </main>
    </div>
  );
};
