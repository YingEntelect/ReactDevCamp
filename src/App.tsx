import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createTheme, ThemeProvider } from "flowbite-react";

import "./App.css";
import { RootRouter } from "./routing/RootRouter/RootRouter";

const queryClient = new QueryClient();

export const App = () => {
  const customTheme = createTheme({
    floatingLabel: {
      label: {
        default: {
          outlined: {
            md: "bg-[#1C2435] dark:bg-[#1C2435]",
          },
        },
        error: {
          outlined: {
            md: "bg-[#1C2435] dark:bg-[#1C2435]",
          },
        },
      },
      input: {
        default: {
          outlined: {
            md: "border-2 rounded-sm border-[#E5E5EA]",
          },
        },
        error: {
          outlined: {
            md: "border-2 rounded-sm border-[#E5E5EA]",
          },
        },
      },
    },
    button: {
      base: "bg-linear-to-r from-blue-600 to-cyan-400 w-full text-white rounded-full h-11 cursor-pointer",
    },
    toast: {
      root: {
        base: "h-12",
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={customTheme}>
        <RootRouter />
      </ThemeProvider>
    </QueryClientProvider>
  );
};
