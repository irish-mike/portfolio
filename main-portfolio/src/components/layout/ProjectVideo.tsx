import React from 'react';
import useVideos from "../../hooks/UseVideos";
import { Spinner } from 'react-bootstrap';

interface Props {
    projectId: number;
}

const ProjectVideo: React.FC<Props> = ({ projectId }) => {
    const { data, error, isLoading } = useVideos(projectId);

    if (isLoading) {
        return <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading video...</span>
        </Spinner>;
    }

    if (error) {
        return <p>Error loading video: {error.message}</p>;
    }

    const first = data?.results[0];

    return first ? (
        <video src={first.data[480]} poster={first.preview} controls>
            Your browser does not support the video tag.
        </video>
    ) : (
        <p>No video available :(</p>
    );
};

export default ProjectVideo;
