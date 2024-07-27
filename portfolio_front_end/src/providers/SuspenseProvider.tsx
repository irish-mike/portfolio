import { ReactNode, Suspense } from "react";
import { Spinner } from "react-bootstrap";

type Props = {
  children: ReactNode;
};

const SuspenseProvider = ({ children }: Props) => {
  const spinner = (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Spinner animation="grow" role="status" />
    </div>
  );

  return <Suspense fallback={spinner}>{children}</Suspense>;
};

export default SuspenseProvider;
