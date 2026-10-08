import React, { type ReactElement, type ReactNode } from "react";
import { SuspenseProvider } from "@providers";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "../pages/ErrorPage";

type Props = {
  children: ReactNode;
};

const AppProvider = ({ children }: Props): ReactElement => {
  return (
    <React.StrictMode>
      <ErrorBoundary FallbackComponent={ErrorPage}>
        <SuspenseProvider>{children}</SuspenseProvider>
      </ErrorBoundary>
    </React.StrictMode>
  );
};

export default AppProvider;
