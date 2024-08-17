import { Node, ReactFlowProps } from "@xyflow/react";

export interface IFlowPanel
  extends Omit<ReactFlowProps, "nodeTypes" | "edgeTypes"> {
  onDropNewNode?: (node: Node) => void;
}
