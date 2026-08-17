import type { FC } from "react";
import { Link } from "react-router";

export const NotFoundScreen: FC = () => (
  <div className="flex flex-col h-dvh">
    <main className="flex-1 min-h-0 overflow-y-auto p-5 flex flex-col justify-center items-center space-y-3">
      <h1 className="text-xl font-bold">Page not found</h1>
      <p className="text-[#8E8E93] text-center">
        The page you were looking for doesn&apos;t exist or has moved.
      </p>
      <Link to="/products" className="text-blue-600 underline">
        Back to products
      </Link>
    </main>
  </div>
);
