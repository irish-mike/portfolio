import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProjectsPage from "../pages/ProjectsPage";
import Layout from "../pages/Layout";
import ErrorPage from "../pages/ErrorPage";
import ProjectDetailPage from "../pages/ProjectDetailPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'projects/:category?', element: <ProjectsPage /> },
            { path: 'project/:slug', element: <ProjectDetailPage /> }
        ]
    }
]);

export default router;
