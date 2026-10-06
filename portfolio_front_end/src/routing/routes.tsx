import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import Layout from "../pages/Layout";
import { createBrowserRouter } from "react-router-dom";

const createRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      hydrateFallbackElement: (
        <div className="d-flex justify-content-center align-items-center min-vh-100" role="status">
          <span className="spinner-border" aria-hidden="true" />
          <span className="visually-hidden">Loading...</span>
        </div>
      ),
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "posts/:category?",
          lazy: async () => ({ Component: (await import("../pages/PostsPage")).default })
        },
        {
          path: "post/:slug",
          lazy: async () => ({ Component: (await import("../pages/PostPage")).default })
        },
        {
          path: "about",
          lazy: async () => ({ Component: (await import("../pages/AboutPage")).default })
        },
        {
          path: "privacy",
          lazy: async () => ({ Component: (await import("../pages/PrivacyPage")).default })
        }
      ]
    }
  ]);

export default createRouter;
