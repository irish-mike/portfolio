import { Row } from "react-bootstrap"
import { ProjectGrid } from "../components/layout/ProjectGrid"
import Tags from "../components/form/Tags"


const ProjectsPage = () => {
    return (
        <>
            <Row className="m-2">
                <Tags options={["C++", "Python", "Web Development"]}></Tags>
            </Row>
            <Row className="m-2">
                <ProjectGrid />
            </Row>
        </>

    )
}

export default ProjectsPage