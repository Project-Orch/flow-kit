import { Node } from "@/components";
import { TerminalWindow } from "@/icons/TerminalWindow";
import { CommandInput } from "@/components";

export const Command = () => {
  return (
    <Node.Root>
      <Node.Title>
        <TerminalWindow size={20} weight="regular" /> run command
      </Node.Title>
      <Node.Content>
        <CommandInput w="fit-content" />
      </Node.Content>
    </Node.Root>
  );
};
