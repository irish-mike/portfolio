import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return (
            <div>
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>Sorry, the page you are looking for does not exist.</p>
                <Link to="/">Go to Home</Link>
            </div>
        );
    } else {
        console.log(error);

        return (
            <div>
                <h1>Something Went Wrong</h1>
                <p>An unexpected error has occurred. Please try again later.</p>
                <Link to="/">Go to Home</Link>
            </div>
        );
    }
};

export default ErrorPage;
