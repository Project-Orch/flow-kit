import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { FlowPanel } from "@/components";
import { Container } from "../components/Container";
import { ReactFlowProvider } from "reactflow";

const meta = {
  title: "Modules/FlowPanel",
  component: FlowPanel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
  decorators: [
    (Story) => (
      <ReactFlowProvider>
        <Container>
          <Story />
        </Container>
      </ReactFlowProvider>
    ),
  ],
} satisfies Meta<typeof FlowPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
