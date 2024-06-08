import { Button, Node } from "@/components";
import { Browsers } from "@/icons/Browsers";
import { Handle, NodeProps, Position, useStore } from "reactflow";
import { InvisibleArea, bottomHandleStyle, topHandleStyle } from "./styles";
import { getMainFolder } from "./utils";
import { useGoToFolder } from "./hooks";
import { useOrchNode } from "@/nodes";

interface IGoToFolderProps {
  path?: string;
  onClickFolder?: (nodeId: string) => void;
}

export const GoToFolder = ({
  data: { path, onClickFolder },
  ...rest
}: NodeProps<IGoToFolderProps>) => {
  const { folderContent } = useGoToFolder({ path });
  const { isTarget } = useOrchNode({ nodeId: rest.id });

  return (
    <Node.Root scheme="blue" {...rest}>
      <Node.Title scheme="blue">
        <Browsers size={20} weight="regular" /> go to folder
        {path && <b>: {getMainFolder(path)}</b>}
      </Node.Title>
      <Node.Content>
        <Button
          onClick={() => onClickFolder?.(rest.id)}
          variant={path ? "link" : "ghost"}
        >
          {folderContent}
        </Button>
      </Node.Content>
      <Handle
        id="top"
        style={{
          ...topHandleStyle,
          opacity: isTarget ? 1 : 0,
        }}
        position={Position.Top}
        type="target"
      />
      <Handle
        id="bottom"
        style={{
          ...bottomHandleStyle,
          opacity: rest.selected ? 1 : 0,
        }}
        position={Position.Bottom}
        type="source"
      />
    </Node.Root>
  );
};
