import { orchEdgeTypes } from "@/edges";
import { orchNodeTypes } from "@/nodes";
import { useCallback, useMemo, useRef } from "react";
import ReactFlow, {
  Background,
  BackgroundVariant,
  Node,
  ReactFlowProps,
  addEdge,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from "reactflow";
import "reactflow/dist/style.css";
import { IFlowPanel } from "./model";

export const FlowPanel = ({ onDropNewNode, ...rest }: IFlowPanel) => {
  const nodeTypes = useMemo(() => orchNodeTypes, []);
  const edgeTypes = useMemo(() => orchEdgeTypes, []);

  const { screenToFlowPosition } = useReactFlow();

  const onDragOver = useCallback((event: any) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: any) => {
      event.preventDefault();

      const type = event.dataTransfer.getData("application/reactflow");

      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode: Node = {
        id: crypto.randomUUID(),
        type,
        position,
        data: {},
      };

      onDropNewNode?.(newNode);
    },
    [screenToFlowPosition]
  );

  return (
    <>
      <ReactFlow
        {...rest}
        onDrop={onDrop}
        onDragOver={onDragOver}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
      >
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
