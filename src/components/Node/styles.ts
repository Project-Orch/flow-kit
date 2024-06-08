import { styled } from "@/styled-system/jsx";

export const Container = styled("div", {
  base: {
    display: "flex",
    flexDir: "column",
    borderRadius: "8px",
  },
  defaultVariants: {
    scheme: "purple",
  },
  variants: {
    scheme: {
      purple: {
        _hover: {
          boxShadow: "0 0 6px 2px rgba(99, 78, 215, 0.08)",
        },
      },
      blue: {
        _hover: {
          boxShadow: "0 0 6px 2px rgba(4, 114, 241, 0.08)",
        },
      },
    },
  },
});

export const Title = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    padding: "4px 8px",

    color: "neutral.600",
    fontSize: "0.9rem",
    fontWeight: "medium",
    fontFamily: "default",
    gap: "4px",
  },
  variants: {
    scheme: {
      purple: {
        bgColor: "purple.800",
        borderWidth: "1px",
        borderColor: "purple.700",

        borderRadius: "8px 8px 0 0",
      },
      blue: {
        bgColor: "blue.600",
        borderWidth: "1px",
        borderColor: "blue.500",

        borderRadius: "8px 8px 0 0",
      },
    },
  },
  defaultVariants: {
    scheme: "purple",
  },
});

export const Content = styled("div", {
  base: {
    display: "flex",

    borderRightWidth: "1px",
    borderLeftWidth: "1px",
    borderBottomWidth: "1px",

    borderRadius: "0 0 8px 8px",

    borderColor: "neutral.400",
    bgColor: "neutral.500",

    padding: "8px",

    color: "foreground.100",
  },
});
