import { ErrorPage, HomePage, Layout, ProjectDetailPage, ProjectsPage } from "@pages";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "projects/:category?", element: <ProjectsPage /> },
      { path: "project/:slug", element: <ProjectDetailPage /> }
    ]
  }
]);

export default router;
