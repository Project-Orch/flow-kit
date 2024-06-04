import { ComponentProps } from "react";
import { Command } from "./command";
import { GoToFolder } from "./navigation";

export * from "./command";
export * from "./navigation";

interface IOrchNodeTypes {
  command: () => JSX.Element;
  gotofolder: (args: ComponentProps<typeof GoToFolder>) => JSX.Element;
}

export const orchNodeTypes: IOrchNodeTypes = {
  command: Command,
  gotofolder: GoToFolder,
};
