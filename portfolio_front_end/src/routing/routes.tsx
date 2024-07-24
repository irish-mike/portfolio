import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import Layout from "../pages/Layout";
import ProjectDetailPage from "../pages/ProjectDetailPage";
import ProjectsPage from "../pages/ProjectsPage";
import { createBrowserRouter } from "react-router-dom";

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
