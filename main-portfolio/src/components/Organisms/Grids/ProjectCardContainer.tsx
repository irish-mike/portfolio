import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ProjectCardContainer = ({ children }: Props) => {
  return <div className="project-card-container">{children}</div>;
};

export default ProjectCardContainer;
