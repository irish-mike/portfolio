import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import DOMPurify from 'dompurify';
import useProject from "src/hooks/useProject";
import DefinitionItem from "src/components/Atoms/DefinitionItem";
import ProjectVideo from "src/components/Organisms/Media/ProjectVideo";

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
