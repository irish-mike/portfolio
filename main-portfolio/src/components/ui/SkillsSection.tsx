import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SkillsNode from "./SkillsNode";

const SkillsSection: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (canvas && container) {
            const ctx = canvas.getContext('2d');
            if (ctx) {
                const containerRect = container.getBoundingClientRect();
                ctx.canvas.width = containerRect.width;
                ctx.canvas.height = containerRect.height;

                const centralNode = document.getElementById('central-node');
                const programmingGroup = document.getElementById('programming-group');
                const languagesGroup = document.getElementById('languages-group');
                const frameworksGroup = document.getElementById('frameworks-group');
                const softSkillsGroup = document.getElementById('softskills-group');

                const groups = [programmingGroup, languagesGroup, frameworksGroup, softSkillsGroup];

                const connectNodes = (startNode: HTMLElement | null, endNode: HTMLElement | null, startDirection: string) => {
                    if (!startNode || !endNode) return;

                    const startRect = startNode.getBoundingClientRect();
                    const endRect = endNode.getBoundingClientRect();

                    // Calculate relative positions
                    const startX = startRect.left + startRect.width / 2 - containerRect.left;
                    const startY = startRect.top + startRect.height / 2 - containerRect.top;

                    const endX = endRect.left + endRect.width / 2 - containerRect.left;
                    const endY = endRect.top + endRect.height / 2 - containerRect.top;

                    drawSoftenedSegmentedLine(ctx, { x: startX, y: startY }, { x: endX, y: endY }, startDirection);
                };

                groups.forEach(group => {
                    if (group === programmingGroup || group === languagesGroup) {
                        connectNodes(centralNode, group, 'x');
                    } else {
                        connectNodes(centralNode, group, 'y');
                    }
                });
            }
        }
    }, []);

    const drawSoftenedSegmentedLine = (ctx: CanvasRenderingContext2D, pointA: { x: number, y: number }, pointB: { x: number, y: number }, startDirection: string) => {
        const midX = (pointA.x + pointB.x) / 2;
        const midY = (pointA.y + pointB.y) / 2;
        const radius = 50;

        ctx.beginPath();
        ctx.moveTo(pointA.x, pointA.y);

        const drawSegment = (lineToX: number, lineToY: number, ctrlToX: number, ctrlToY: number, endX: number, endY: number) => {
            ctx.lineTo(lineToX, lineToY);
            ctx.quadraticCurveTo(ctrlToX, ctrlToY, endX, endY);
        };

        if (startDirection === 'x') {
            const direction = pointB.x > pointA.x ? 1 : -1;
            const radiusY = pointB.y > pointA.y ? radius : -radius;

            drawSegment(pointB.x - radius * direction, pointA.y, pointB.x, pointA.y, pointB.x, pointA.y + radiusY);
        } else {
            const direction = pointB.y < pointA.y ? 1 : -1;
            const radiusX = pointB.x > pointA.x ? radius : -radius;

            drawSegment(pointA.x, midY + radius * direction, pointA.x, midY, pointA.x + radiusX, midY);
            drawSegment(pointB.x - radiusX, midY, pointB.x, midY, pointB.x, midY - radius * direction);
        }

        ctx.lineTo(pointB.x, pointB.y);
        ctx.stroke();
    };

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
                    <SkillsNode id="programming-group" title="Programming" skills={['Skill 1', 'Skill 2', 'Skill 3']} />
                </Col>
                <Col md={{ span: 2, offset: 5 }}>
                    <SkillsNode id="languages-group" title="Languages" skills={['Skill 1', 'Skill 2', 'Skill 3']} />
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 2, offset: 4 }}>
                    <SkillsNode id="softskills-group" title="Soft Skills" skills={['Skill 1', 'Skill 2']} />
                </Col>
                <Col md={{ span: 3, offset: 1 }} className="pt-5">
                    <SkillsNode id="frameworks-group" title="Frameworks" skills={['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4']} />
                </Col>
            </Row>
        </Container>
    );
};

export default SkillsSection;
