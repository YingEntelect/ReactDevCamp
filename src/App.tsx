import "./App.css";
import { AuthProvider } from "./contexts/Auth/AuthProvider";
import { RootRouter } from "./routing/RootRouter/RootRouter";

export const App = () => {
  return (
    <AuthProvider>
      <RootRouter />
    </AuthProvider>
  );
};
