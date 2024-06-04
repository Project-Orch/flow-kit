import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { GoToFolder } from "@/nodes";
import { ReactFlowProvider } from "reactflow";
import { Center } from "../../components/Center";

const meta: Meta = {
  title: "Nodes/GoToFolder",
  component: GoToFolder,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story) => (
      <ReactFlowProvider>
        <Center>
          <Story />
        </Center>
      </ReactFlowProvider>
    ),
  ],
} satisfies Meta<typeof GoToFolder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: {
      path: "",
    },
  },
};

export const WithPath: Story = {
  args: {
    data: { path: "user/desktop/workspace" },
  },
};
