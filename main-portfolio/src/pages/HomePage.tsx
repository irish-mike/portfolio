import { Link } from "react-router-dom"


const HomePage = () => {
    return (
        <>
            <h1>This is the Homepage</h1>
            <Link to="/projects"> Projects </Link>
        </>
    )
}

export default HomePage