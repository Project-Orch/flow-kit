import { BaseEdge, EdgeProps, MarkerType, getSmoothStepPath } from "reactflow";

export default function ArrowEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
}: EdgeProps) {
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return (
    <>
      <BaseEdge
        style={{ strokeWidth: "2px", stroke: "#858585" }}
        id={id}
        path={edgePath}
        markerEnd={MarkerType.ArrowClosed}
      />
    </>
  );
}
