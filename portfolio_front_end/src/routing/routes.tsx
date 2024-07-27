import { ErrorPage, HomePage, Layout, ProjectDetailPage, ProjectsPage } from "@pages";
import { createBrowserRouter } from "react-router-dom";

const createRouter = () =>
  createBrowserRouter([
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

export default createRouter;
