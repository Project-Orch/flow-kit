import { styled } from "@/styled-system/jsx";

export const CommandInput = styled("input", {
  base: {
    appearance: "none",
    background: "neutral.300",
    borderColor: "neutral.100",
    borderRadius: "4px",
    borderWidth: "1px",
    colorPalette: "accent",
    color: "foreground.100",
    outline: 0,
    position: "relative",
    width: "full",

    fontFamily: "code",
    fontWeight: "medium",

    transition: "0.3s",

    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
    },
    _focus: {
      borderColor: "foreground.800",
    },

    px: "0.625rem",
    h: "2.25rem",
    minW: "4rem",
    fontSize: "sm",
  },
});
