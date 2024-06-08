import { Node } from "@/components";
import { TerminalWindow } from "@/icons/TerminalWindow";
import { CommandInput } from "@/components";
import { Handle, NodeProps, Position } from "reactflow";
import { useOrchNode } from "@/nodes";
import { bottomHandleStyle, topHandleStyle } from "./styles";

export const Command = ({ ...rest }: NodeProps) => {
  const { isTarget } = useOrchNode({ nodeId: rest.id });

  return (
    <Node.Root {...rest}>
      <Node.Title>
        <TerminalWindow size={20} weight="regular" /> run command
      </Node.Title>
      <Node.Content>
        <CommandInput w="fit-content" />
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
