import { styled } from "@/styled-system/jsx";

export const Button = styled("button", {
  base: {
    alignItems: "center",
    appearance: "none",
    borderRadius: "4px",
    cursor: "pointer",
    display: "inline-flex",
    fontWeight: "medium",
    minWidth: "0",
    justifyContent: "center",
    outline: "none",
    transition: "0.3s",
    userSelect: "none",
    verticalAlign: "middle",
    whiteSpace: "nowrap",
  },
  defaultVariants: {
    variant: "ghost",
    size: "sm",
  },
  variants: {
    variant: {
      ghost: {
        color: "foreground.200",
        _hover: {
          background: "#3E3E3E",
        },
        _selected: {
          background: "#3E3E3E",
        },
        _disabled: {
          opacity: 0.4,
          cursor: "not-allowed",
          _hover: {
            background: "transparent",
          },
        },
        _focusVisible: {
          outline: "2px solid",
          outlineColor: "foreground.200",
          outlineOffset: "2px",
        },
      },
      link: {
        color: "foreground.200",
        _hover: {
          textDecoration: "underline",
        },
        _selected: {
          background: "#3E3E3E",
        },
        _disabled: {
          opacity: 0.4,
          cursor: "not-allowed",
          _hover: {
            background: "transparent",
          },
        },
        _focusVisible: {
          outline: "2px solid",
          outlineColor: "foreground.200",
          outlineOffset: "2px",
        },
      },
    },
    size: {
      sm: {
        h: "2.25rem",
        minW: "2.25rem",
        fontSize: "0.875rem",
        px: "0.875rem",
        gap: "0.5rem",
        // "& svg": {
        //   width: "1rem",
        //   height: "1rem",
        // },
      },
    },
  },
});
