import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Command } from "@/nodes";
import { ReactFlowProvider } from "reactflow";
import { Center } from "../../components/Center";

const meta = {
  title: "Nodes/Command",
  component: Command,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
  decorators: [
    (Story) => (
      <ReactFlowProvider>
        <Center>
          <Story />
        </Center>
      </ReactFlowProvider>
    ),
  ],
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
