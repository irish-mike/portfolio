import { Button, Col, Row } from "react-bootstrap";
import useProjects from "../../hooks/useProjects";
import ProjectCard from "./ProjectCard";
import ProjectCardSkeleton from "./ProjectCardSkeleton";
import ProjectCardContainer from "./ProjectCardContainer";
import { GameQuery } from "src/App";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}

export const ProjectGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useProjects(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <p className="text-danger">{error.message}</p>;

  return (
    <>
      <Row xs={1} md={2} className="g-4">
        {isLoading &&
          skeletons.map((skeleton) => (
            <Col md={6} key={`skeleton-${skeleton}`}>
              <ProjectCardContainer>
                <ProjectCardSkeleton />
              </ProjectCardContainer>
            </Col>
          ))}

        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((project) => (
              <Col md={6} key={project.id || project.name}>
                <ProjectCardContainer>
                  <ProjectCard project={project} />
                </ProjectCardContainer>
              </Col>
            ))}
          </React.Fragment>
        ))}
      </Row>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )}
    </>
  );
};
