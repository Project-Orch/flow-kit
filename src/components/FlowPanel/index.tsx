import { orchEdgeTypes } from "@/edges";
import { orchNodeTypes } from "@/nodes";
import { useMemo } from "react";
import ReactFlow, {
  Background,
  BackgroundVariant,
  ReactFlowProps,
} from "reactflow";
import "reactflow/dist/style.css";

export const FlowPanel = ({
  ...rest
}: Omit<ReactFlowProps, "nodeTypes" | "edgeTypes">) => {
  const nodeTypes = useMemo(() => orchNodeTypes, []);
  const edgeTypes = useMemo(() => orchEdgeTypes, []);

  return (
    <>
      <ReactFlow fitView nodeTypes={nodeTypes} edgeTypes={edgeTypes} {...rest}>
        {/* <Controls />
        <MiniMap /> */}
        <Background
          color="#292929"
          variant={BackgroundVariant.Dots}
          gap={24}
          size={2}
        />
      </ReactFlow>
    </>
  );
};
