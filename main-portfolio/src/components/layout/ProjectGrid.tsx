import { Col, Row, Spinner } from "react-bootstrap";
import useProjects from "../../hooks/useProjects";
import ProjectCard from "./ProjectCard";
import ProjectCardSkeleton from "./ProjectCardSkeleton";
import ProjectCardContainer from "./ProjectCardContainer";
import { GameQuery } from "src/App";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: GameQuery;
}

export const ProjectGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useProjects(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <p className="text-danger">{error.message}</p>;

  const fetchedProjectsCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedProjectsCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "12px",
          }}
        >
          <Spinner animation="grow" role="status" />
        </div>
      }
      style={{ overflow: "hidden" }}
    >
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
    </InfiniteScroll>
  );
};
