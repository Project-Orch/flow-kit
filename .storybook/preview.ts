import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import "../src/stories/styles/index.css";
import "reactflow/dist/style.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark",
          value: "#161616",
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
    },
  },
};

export default preview;
