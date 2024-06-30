import { css } from "@/styled-system/css";

const asiderecipe = css({
  borderRight: "1px solid #eee",
  padding: "15px 10px",
  fontSize: "12px",
  background: "#fcfcfc",
});

const noderecipe = css({
  height: "20px",
  padding: "4px",
  border: "1px solid #1a192b",
  borderRadius: "2px",
  marginBottom: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "grab",
});

export const Sidebar = () => {
  const onDragStart = (event: any, nodeType: string) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside className={asiderecipe}>
      <div className="description">
        You can drag these nodes to the pane on the right.
      </div>
      <div
        className={noderecipe}
        onDragStart={(event) => onDragStart(event, "command")}
        draggable
      >
        Input Node
      </div>
      <div
        className={noderecipe}
        onDragStart={(event) => onDragStart(event, "default")}
        draggable
      >
        Default Node
      </div>
      <div
        className={noderecipe}
        onDragStart={(event) => onDragStart(event, "output")}
        draggable
      >
        Output Node
      </div>
    </aside>
  );
};
