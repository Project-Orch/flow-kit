import { orchEdgeTypes } from "@/edges";
import { Command, orchNodeTypes } from "@/nodes";
import { useCallback, useMemo, useState } from "react";
import ReactFlow, {
  Background,
  BackgroundVariant,
  Controls,
  Edge,
  MiniMap,
  Node,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow";
import "reactflow/dist/style.css";

const initialNodes: Node[] = [
  {
    id: "1",
    position: { x: 0, y: 100 },
    data: { label: "1" },
    type: "command",
  },
  {
    id: "2",
    position: { x: 0, y: 0 },
    data: { label: "2" },
    type: "gotofolder",
  },
  {
    id: "3",
    position: { x: 0, y: 200 },
    data: { path: "user/desktop/workspace" },
    type: "gotofolder",
  },
];
const initialEdges: Edge[] = [];

export const FlowPanel = () => {
  const nodeTypes = useMemo(() => orchNodeTypes, []);
  const edgeTypes = useMemo(() => orchEdgeTypes, []);

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes: any) =>
      setNodes((nds) => applyNodeChanges(changes, nds as any) as any),
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
        edgeTypes={edgeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        {/* <Controls />
        <MiniMap /> */}
        <Background
          color="#292929"
          variant={BackgroundVariant.Dots}
          gap={14}
          size={1}
        />
      </ReactFlow>
    </>
  );
};
