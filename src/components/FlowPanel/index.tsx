import { Command, orchNodeTypes } from "@/nodes";
import { useCallback, useMemo, useState } from "react";
import ReactFlow, {
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow";
import "reactflow/dist/style.css";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" }, type: "command" },
  {
    id: "2",
    position: { x: 0, y: 100 },
    data: { label: "2" },
    type: "command",
  },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export const FlowPanel = () => {
  const nodeTypes = useMemo(() => orchNodeTypes, []);

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes: any) => setNodes((nds) => applyNodeChanges(changes, nds) as any),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes: any) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection: any) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <>
      <ReactFlow
        fitView
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        {/* <Controls />
        <MiniMap /> */}
        <Background
          color="#292929"
          variant={BackgroundVariant.Dots}
          gap={12}
          size={1}
        />
      </ReactFlow>
    </>
  );
};
