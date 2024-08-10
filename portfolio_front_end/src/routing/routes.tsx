import { ErrorPage, HomePage, Layout, PostPage, PostsPage, AboutPage, PrivacyPage } from "@pages";
import { createBrowserRouter } from "react-router-dom";

const createRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />, // Wrap ErrorPage with Layout
      children: [
        { index: true, element: <HomePage /> },
        { path: "posts/:category?", element: <PostsPage /> },
        { path: "post/:slug", element: <PostPage /> },
        { path: "about", element: <AboutPage /> },
        { path: "privacy", element: <PrivacyPage /> }
      ]
    }
  ]);

export default createRouter;
