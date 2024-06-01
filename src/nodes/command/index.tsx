import { Node } from "@/components";
import { TerminalWindow } from "@/icons/TerminalWindow";

export const Command = () => {
  return (
    <Node.Root>
      <Node.Title>
        <TerminalWindow size={20} weight="bold" /> run command
      </Node.Title>
      <Node.Content>Novo</Node.Content>
    </Node.Root>
  );
};
