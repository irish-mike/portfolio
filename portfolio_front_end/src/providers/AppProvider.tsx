import React, { ReactNode } from "react";
import { SuspenseProvider } from "@providers";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorPage } from "@pages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

type Props = {
  children: ReactNode;
};

const AppProvider = ({ children }: Props) => {
  return (
    <React.StrictMode>
      <ErrorBoundary FallbackComponent={ErrorPage}>
        <QueryClientProvider client={queryClient}>
          <SuspenseProvider>{children}</SuspenseProvider>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </ErrorBoundary>
    </React.StrictMode>
  );
};

export default AppProvider;
