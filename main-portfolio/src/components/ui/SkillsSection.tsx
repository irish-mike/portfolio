import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SkillsNode from "./SkillsNode";
import useDrawConnections from "../../hooks/useDrawConnections";


const SkillsSection: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useDrawConnections(containerRef, canvasRef);

    return (
        <Container className="text-center mt-5" ref={containerRef} style={{ position: 'relative' }}>
            <canvas id="myCanvas" ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></canvas>
            <Row>
                <Col md={12} className="pb-5">
                    <div className="node mx-auto w-25 mb-4" id="central-node">Skills</div>
                </Col>
            </Row>
            <Row className="pb-5">
                <Col md={{ span: 3, offset: 1 }} className="pt-5">
                    <SkillsNode id="programming-group" connection="x" title="Programming" skills={['Skill 1', 'Skill 2', 'Skill 3']} />
                </Col>
                <Col md={{ span: 2, offset: 5 }}>
                    <SkillsNode id="languages-group" connection="x" title="Languages" skills={['Skill 1', 'Skill 2', 'Skill 3']} />
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 2, offset: 4 }}>
                    <SkillsNode id="softskills-group" connection="y" title="Soft Skills" skills={['Skill 1', 'Skill 2']} />
                </Col>
                <Col md={{ span: 3, offset: 1 }} className="pt-5">
                    <SkillsNode id="frameworks-group" connection="y" title="Frameworks" skills={['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4']} />
                </Col>
            </Row>
        </Container>
    );
};

export default SkillsSection;
