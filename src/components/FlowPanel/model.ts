import { Node, ReactFlowProps } from "reactflow";

export interface IFlowPanel
  extends Omit<ReactFlowProps, "nodeTypes" | "edgeTypes"> {
  onDropNewNode?: (node: Node) => void;
}
