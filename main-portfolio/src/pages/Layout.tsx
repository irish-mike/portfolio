import { Outlet } from "react-router-dom";
import NavbarMain from "../features/NavbarMain";
import { Container } from "react-bootstrap";

const Layout = () => {
    return (
        <Container>
            <NavbarMain></NavbarMain>
            <Outlet />
        </Container>
    )
}

export default Layout