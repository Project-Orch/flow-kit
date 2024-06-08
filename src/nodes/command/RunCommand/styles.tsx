import React from "react";

export const bottomHandleStyle: React.CSSProperties = {
  transition: "0.3s",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#FFF",
  bottom: "-6px",

  border: "1px solid #644ED7",
  borderRadius: "8px",

  height: "12px",
  width: "12px",

  zIndex: 1,
};

export const topHandleStyle: React.CSSProperties = {
  transition: "0.3s",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#FFF",
  bottom: "6px",

  border: "1px solid #644ED7",
  borderRadius: "8px",

  height: "12px",
  width: "12px",

  zIndex: 1,
};
