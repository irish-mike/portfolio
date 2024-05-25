import React from 'react';
import { Stack } from 'react-bootstrap';

interface SkillsNodeProps {
    id: string;
    title: string;
    skills: string[];
    connection: 'x' | 'y';
}

const SkillsNode: React.FC<SkillsNodeProps> = ({ id, title, skills, connection }) => {
    return (

        <Stack className="group-node p-3" gap={0} id={id} data-connection={connection}>
            <div className="node p-2">
                <h4>{title}</h4>
            </div>
            {skills.map((skill, index) => (
                <div className="skill p-2" key={index}>{skill}</div>
            ))}
        </Stack>
    );
};

export default SkillsNode;
