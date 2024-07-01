import "reactflow/dist/style.css";
import { orchEdgeTypes } from "@/edges";
import { orchNodeTypes } from "@/nodes";
import { useCallback, useMemo, useRef } from "react";
import ReactFlow, { Background, BackgroundVariant, Node } from "reactflow";
import { IFlowPanel } from "./model";
import { css } from "@/styled-system/css";

export const FlowPanel = ({ onDropNewNode, ...rest }: IFlowPanel) => {
  const reactFlowWrapper = useRef(null);
  const nodeTypes = useMemo(() => orchNodeTypes, []);
  const edgeTypes = useMemo(() => orchEdgeTypes, []);

  const onDragOver = useCallback((event: any) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback((event: any) => {
    event.preventDefault();

    const type = event.dataTransfer.getData("application/reactflow");

    if (typeof type === "undefined" || !type) {
      return;
    }

    const newNode: Node = {
      id: crypto.randomUUID(),
      type,
      position: { x: 0, y: 0 },
      data: {},
    };

    onDropNewNode?.(newNode);
  }, []);

  return (
    <div
      ref={reactFlowWrapper}
      className={css({ display: "flex", w: "100%", h: "100%" })}
    >
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
    </div>
  );
};
