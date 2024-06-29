import ReactFlow, {
  Background,
  BackgroundVariant,
  ReactFlowProps,
} from "reactflow";
import "reactflow/dist/style.css";

let id = 0;
const getId = () => `dndnode_${id++}`;

export const FlowPanel = ({ ...rest }: ReactFlowProps) => {
  return (
    <>
      <ReactFlow fitView {...rest}>
        {/* <Controls />
        <MiniMap /> */}
        <Background
          color="#292929"
          variant={BackgroundVariant.Dots}
          gap={20}
          size={2}
        />
      </ReactFlow>
    </>
  );
};
