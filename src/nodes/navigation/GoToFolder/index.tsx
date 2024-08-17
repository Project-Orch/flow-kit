import { Button, Node as BaseNode } from "@/components";
import { Browsers } from "@/icons/Browsers";
import {
  Handle,
  type Node,
  type NodeProps,
  Position,
  useStore,
} from "@xyflow/react";
import { InvisibleArea, bottomHandleStyle, topHandleStyle } from "./styles";
import { getMainFolder } from "./utils";
import { useGoToFolder } from "./hooks";
import { useOrchNode } from "@/nodes";

type IGoToFolderProps = Node<
  {
    path?: string;
    onClickFolder?: (nodeId: string) => void;
  },
  "gotofolder"
>;

export const GoToFolder = ({
  data: { path, onClickFolder },
  ...rest
}: NodeProps<IGoToFolderProps>) => {
  const { folderContent } = useGoToFolder({ path });
  const { isTarget } = useOrchNode({ nodeId: rest.id });

  return (
    <BaseNode.Root scheme="blue" {...rest}>
      <BaseNode.Title scheme="blue">
        <Browsers size={20} weight="regular" /> go to folder
        {path && <b>: {getMainFolder(path)}</b>}
      </BaseNode.Title>
      <BaseNode.Content>
        <Button
          onClick={() => onClickFolder?.(rest.id)}
          variant={path ? "link" : "ghost"}
        >
          {folderContent}
        </Button>
      </BaseNode.Content>
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
    </BaseNode.Root>
  );
};
