import React from "react";
import { useStore } from "reactflow";

interface IUseOrchNode {
  nodeId: string;
}

export const useOrchNode = ({ nodeId }: IUseOrchNode) => {
  const connectionNodeId = useStore((state) => state.connectionNodeId);
  const isTarget = connectionNodeId && connectionNodeId !== nodeId;

  return {
    isTarget,
  };
};
