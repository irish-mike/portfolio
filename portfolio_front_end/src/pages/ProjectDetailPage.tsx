import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import DefinitionItem from "../components/Atoms/DefinitionItem";
import ProjectVideo from "../components/Organisms/Media/ProjectVideo";
import useProject from "../hooks/useProject";

import DOMPurify from "dompurify";

const ProjectDetailPage = () => {
    const { slug } = useParams();
    const { data: project, isLoading, error } = useProject(slug!);

    if (isLoading) return <Spinner />;

    if (error || !project) throw error;

    // Sanitize the HTML content
    const sanitizedDescription = DOMPurify.sanitize(project.description);

    return (
        <>
            <h1>{project.name}</h1>
            <p dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
            <DefinitionItem term="Platforms">
                {project.parent_platforms?.map(({ platform }) => <p key={platform.id}>
                    {platform.name}
                </p>)}
            </DefinitionItem>
            <ProjectVideo projectId={project.id} />
        </>
    );
}

export default ProjectDetailPage;
