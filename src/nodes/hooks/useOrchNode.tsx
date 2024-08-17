import React from "react";
import { useConnection, useStore } from "@xyflow/react";

interface IUseOrchNode {
  nodeId: string;
}

export const useOrchNode = ({ nodeId }: IUseOrchNode) => {
  const connection = useConnection();

  const isTarget = connection.inProgress && connection.fromNode.id !== nodeId;

  return {
    isTarget,
  };
};
