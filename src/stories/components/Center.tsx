import { css } from "@/styled-system/css";
import { ReactNode } from "react";

interface ICenter {
  children: ReactNode | ReactNode[];
}

export const Center = ({ children }: ICenter) => {
  return (
    <div
      className={css({
        display: "flex",
        flex: 1,
        height: "screen",
        width: "screen",
        bgColor: "neutral.700",
        alignItems: "center",
        justifyContent: "center",
      })}
    >
      {children}
    </div>
  );
};
