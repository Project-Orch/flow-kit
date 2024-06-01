import { defineConfig } from "@pandacss/dev";
import { stagePreset } from "@stage-lib/styled-system";

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  presets: [stagePreset],

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },
  jsxFramework: "react",

  // The output directory for your css system
  outdir: "styled-system",
});
