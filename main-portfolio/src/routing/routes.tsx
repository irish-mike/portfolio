import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "src/pages/ErrorPage";
import HomePage from "src/pages/HomePage";
import Layout from "src/pages/Layout";
import ProjectDetailPage from "src/pages/ProjectDetailPage";
import ProjectsPage from "src/pages/ProjectsPage";

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
