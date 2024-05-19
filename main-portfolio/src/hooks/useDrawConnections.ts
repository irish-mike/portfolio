import { useEffect, RefObject } from "react";

interface Point {
    x: number;
    y: number;
}

const useDrawConnections = (containerRef: RefObject<HTMLDivElement>, canvasRef: RefObject<HTMLCanvasElement>) => {
    const drawSoftenedSegmentedLine = (ctx: CanvasRenderingContext2D, pointA: Point, pointB: Point, startDirection: string) => {
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
                if (!centralNode) return;

                const nodes = container.querySelectorAll<HTMLDivElement>('.group-node');

                const connectNodes = (startNode: HTMLElement, endNode: HTMLElement, startDirection: 'x' | 'y') => {
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

                nodes.forEach(node => {
                    const direction = node.getAttribute('data-connection');
                    if (direction === 'x' || direction === 'y') {
                        connectNodes(centralNode, node, direction);
                    }
                });
            }
        }
    }, [canvasRef, containerRef]);
};

export default useDrawConnections;
