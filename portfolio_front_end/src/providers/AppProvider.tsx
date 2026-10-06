import React, { lazy, ReactNode, Suspense } from "react";
import { SuspenseProvider } from "@providers";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "../pages/ErrorPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const ReactQueryDevtools = import.meta.env.DEV
  ? lazy(async () => {
      const module = await import("@tanstack/react-query-devtools");
      return { default: module.ReactQueryDevtools };
    })
  : null;

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
          {ReactQueryDevtools && (
            <Suspense fallback={null}>
              <ReactQueryDevtools />
            </Suspense>
          )}
        </QueryClientProvider>
      </ErrorBoundary>
    </React.StrictMode>
  );
};

export default AppProvider;
