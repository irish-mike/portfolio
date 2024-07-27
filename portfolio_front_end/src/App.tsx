import { AppProvider } from "@providers";
import { useMemo } from "react";
import { RouterProvider } from "react-router-dom";
import { createRouter } from "@routing";

const App = () => {
  const router = useMemo(() => createRouter(), []);
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
};

export default App;
