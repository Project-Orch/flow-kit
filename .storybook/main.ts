import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: async (config, { configType }) => {
    return mergeConfig(config, {
      resolve: {
        alias: {
          "@/components": path.resolve(__dirname, "../src/components"),
          "@/styled-system": path.resolve(__dirname, "../styled-system"),
          "@/lib": path.resolve(__dirname, "../src/lib"),
          "@/recipes": path.resolve(__dirname, "../src/recipes"),
          "@/icons": path.resolve(__dirname, "../src/assets/icons/components"),
        },
      },
    });
  },
};
export default config;
