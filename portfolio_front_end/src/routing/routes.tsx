import { ErrorPage, HomePage, Layout, PostPage, PostsPage } from "@pages";
import { createBrowserRouter } from "react-router-dom";

const createRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "projects/:category?", element: <PostsPage /> },
        { path: "project/:slug", element: <PostPage /> }
      ]
    }
  ]);

export default createRouter;
