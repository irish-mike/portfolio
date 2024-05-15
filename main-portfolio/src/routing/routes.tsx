import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProjectsPage from "../pages/ProjectsPage";
import Layout from "../pages/Layout";
import Error404Page from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <Error404Page />,
        children: [
            { index: true, element: <HomePage /> },
            { path: '/projects', element: <ProjectsPage /> }
        ]
    }
])

export default router;