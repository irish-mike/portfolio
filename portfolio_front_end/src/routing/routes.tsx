import { ErrorPage, HomePage, Layout, PostPage, PostsPage, AboutPage, PrivacyPage, TestPage } from "@pages";
import { createBrowserRouter } from "react-router-dom";

const createRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "posts/:category?", element: <PostsPage /> },
        { path: "post/:slug", element: <PostPage /> },
        { path: "about", element: <AboutPage /> },
        { path: "privacy", element: <PrivacyPage /> },
        { path: "test", element: <TestPage /> }
      ]
    }
  ]);

export default createRouter;
