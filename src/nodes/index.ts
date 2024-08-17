import { Command } from "./command";
import { GoToFolder } from "./navigation";
import { NodeTypes } from "@xyflow/react";

export * from "./command";
export * from "./navigation";
export * from "./hooks";

export const orchNodeTypes: NodeTypes = {
  command: Command,
  gotofolder: GoToFolder,
};
