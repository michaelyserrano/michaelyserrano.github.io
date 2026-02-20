"use client";

import {
  ReactFlow,
  Background,
  BackgroundVariant,
  useNodesState,
  useEdgesState,
  useReactFlow,
  ReactFlowProvider,
  type Node,
  type Edge,
  type OnNodeDrag,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useCallback, useRef, useMemo, useEffect } from "react";
import { siteConfig } from "@/config/site";
import { useGraphStore, type GraphCategoryId } from "@/store/graph-store";
import { OriginNode } from "@/components/portfolio/nodes/origin-node";
import { CategoryNode } from "@/components/portfolio/nodes/category-node";
import { LeafNode } from "@/components/portfolio/nodes/leaf-node";
import type { OriginNodeData } from "@/components/portfolio/nodes/origin-node";
import type { CategoryNodeData } from "@/components/portfolio/nodes/category-node";
import type { LeafNodeData } from "@/components/portfolio/nodes/leaf-node";
import { experiences } from "@/config/experience";
import { Projects } from "@/config/projects";
import { education } from "@/config/education";
import { skillsByCategory } from "@/config/skills";
import { formatExperienceDate } from "@/lib/format-date";

const NODE_TYPES = {
  origin: OriginNode,
  category: CategoryNode,
  leaf: LeafNode,
};

const ORIGIN_ID = "origin";
const CATEGORY_IDS: GraphCategoryId[] = [
  "experience",
  "projects",
  "education",
  "skills",
];

const CATEGORY_LABELS: Record<GraphCategoryId, string> = {
  experience: "Experience",
  projects: "Projects",
  education: "Education",
  skills: "Skills",
};

const RADIUS = 220;

function restPositions(): Map<string, { x: number; y: number }> {
  const map = new Map<string, { x: number; y: number }>();
  map.set(ORIGIN_ID, { x: 0, y: 0 });
  CATEGORY_IDS.forEach((id, i) => {
    const angle = (i * 2 * Math.PI) / 4 - Math.PI / 2;
    map.set(id, {
      x: RADIUS * Math.cos(angle),
      y: RADIUS * Math.sin(angle),
    });
  });
  return map;
}

const REST_POSITIONS = restPositions();

const DEFAULT_VIEWPORT = { x: 0, y: 0, zoom: 0.9 };

function lerp(
  a: { x: number; y: number },
  b: { x: number; y: number },
  t: number
) {
  return {
    x: a.x + (b.x - a.x) * t,
    y: a.y + (b.y - a.y) * t,
  };
}

function easeOutElastic(t: number): number {
  if (t === 0) return 0;
  if (t === 1) return 1;
  return (
    Math.pow(2, -10 * t) * Math.sin(((t * 10 - 0.75) * (2 * Math.PI)) / 3) + 1
  );
}

const LEAF_RADIUS = 140;

function leafPositionsAround(
  center: { x: number; y: number },
  count: number
): { x: number; y: number }[] {
  if (count <= 0) return [];
  if (count === 1) return [{ x: center.x, y: center.y + LEAF_RADIUS }];
  const positions: { x: number; y: number }[] = [];
  const startAngle = -Math.PI / 2;
  const span = Math.PI * 0.85;
  for (let i = 0; i < count; i++) {
    const t = count === 1 ? 0.5 : i / (count - 1);
    const angle = startAngle + t * span;
    positions.push({
      x: center.x + LEAF_RADIUS * Math.cos(angle),
      y: center.y + LEAF_RADIUS * Math.sin(angle),
    });
  }
  return positions;
}

function buildLeafNodesAndEdges(
  expandedCategories: Set<GraphCategoryId>,
  focusedNodeId: string | null
): { nodes: Node[]; edges: Edge[] } {
  const nodes: Node[] = [];
  const edges: Edge[] = [];

  expandedCategories.forEach((categoryId) => {
    const center = REST_POSITIONS.get(categoryId)!;
    let leafNodes: Node[] = [];
    const sourceId = categoryId;

    if (categoryId === "experience") {
      const positions = leafPositionsAround(center, experiences.length);
      leafNodes = experiences.map((exp, i) => ({
        id: exp.id,
        type: "leaf" as const,
        position: positions[i] ?? center,
        data: {
          label: exp.company,
          isFocused: exp.id === focusedNodeId,
          tooltip: {
            role: exp.position,
            company: exp.company,
            date: formatExperienceDate(exp.startDate, exp.endDate),
            summary: exp.achievements[0],
          },
        } satisfies LeafNodeData,
        draggable: false,
      }));
    } else if (categoryId === "projects") {
      const positions = leafPositionsAround(center, Projects.length);
      leafNodes = Projects.map((proj, i) => ({
        id: proj.id,
        type: "leaf" as const,
        position: positions[i] ?? center,
        data: {
          label: proj.companyName,
          isFocused: proj.id === focusedNodeId,
          tooltip: {
            shortDescription: proj.shortDescription,
          },
        } satisfies LeafNodeData,
        draggable: false,
      }));
    } else if (categoryId === "education") {
      const positions = leafPositionsAround(center, education.length);
      leafNodes = education.map((entry, i) => ({
        id: entry.id,
        type: "leaf" as const,
        position: positions[i] ?? center,
        data: {
          label: entry.institution,
          isFocused: entry.id === focusedNodeId,
          tooltip: {
            institution: entry.institution,
            degrees: entry.degrees.join(" · "),
            summary: entry.researchFocus,
          },
        } satisfies LeafNodeData,
        draggable: false,
      }));
    } else if (categoryId === "skills") {
      const positions = leafPositionsAround(center, skillsByCategory.length);
      leafNodes = skillsByCategory.map((group, i) => ({
        id: `skills-${group.category.replace(/\s+/g, "-")}`,
        type: "leaf" as const,
        position: positions[i] ?? center,
        data: {
          label: group.category,
          isFocused: false,
          tooltip: {
            category: group.category,
            skills: group.skills.map((s) => s.name),
          },
        } satisfies LeafNodeData,
        draggable: false,
      }));
    }

    leafNodes.forEach((n) => {
      nodes.push(n);
      edges.push({
        id: `e-${sourceId}-${n.id}`,
        source: sourceId,
        target: n.id,
      });
    });
  });

  return { nodes, edges };
}

function GraphInner() {
  const expandedCategories = useGraphStore((s) => s.expandedCategories);
  const focusedNodeId = useGraphStore((s) => s.focusedNodeId);
  const setFocusedNodeId = useGraphStore((s) => s.setFocusedNodeId);
  const toggleCategory = useGraphStore((s) => s.toggleCategory);
  const restPosRef = useRef(REST_POSITIONS);
  const animationRef = useRef<number | null>(null);

  const { nodes: initialNodes, edges: initialEdges } = useMemo(() => {
    const nodes: Node[] = [
      {
        id: ORIGIN_ID,
        type: "origin",
        position: { x: 0, y: 0 },
        data: {
          name: siteConfig.authorName,
          tagline:
            "ML Engineer & Researcher · MIT MEng · Scalable ML, agentic tools, full-stack AI.",
          imageUrl: "/profile-img.png",
        } satisfies OriginNodeData,
        draggable: true,
      },
      ...CATEGORY_IDS.map((id, i) => {
        const angle = (i * 2 * Math.PI) / 4 - Math.PI / 2;
        return {
          id,
          type: "category" as const,
          position: {
            x: RADIUS * Math.cos(angle),
            y: RADIUS * Math.sin(angle),
          },
          data: {
            label: CATEGORY_LABELS[id],
            categoryId: id,
            expanded: false,
          } satisfies CategoryNodeData,
          draggable: true,
        };
      }),
    ];
    const edges: Edge[] = CATEGORY_IDS.map((id) => ({
      id: `e-${ORIGIN_ID}-${id}`,
      source: ORIGIN_ID,
      target: id,
    }));
    return { nodes, edges };
  }, []);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const reactFlowInstance = useReactFlow();

  useEffect(() => {
    restPosRef.current = REST_POSITIONS;
  }, []);

  useEffect(() => {
    const { nodes: leafNodes, edges: leafEdges } = buildLeafNodesAndEdges(
      expandedCategories,
      focusedNodeId
    );
    setNodes((prev) => {
      const base = prev.slice(0, 1 + CATEGORY_IDS.length);
      const baseWithData = base.map((n) => ({
        ...n,
        data: {
          ...n.data,
          ...(n.type === "category" && n.data && typeof n.data === "object"
            ? {
                expanded: expandedCategories.has(n.id as GraphCategoryId),
                isFocused: n.id === focusedNodeId,
              }
            : {}),
        },
      }));
      return [...baseWithData, ...leafNodes];
    });
    setEdges((prev) => {
      const baseEdges = prev.filter(
        (e) =>
          e.source === ORIGIN_ID &&
          CATEGORY_IDS.includes(e.target as GraphCategoryId)
      );
      return [...baseEdges, ...leafEdges];
    });
  }, [expandedCategories, focusedNodeId, setNodes, setEdges]);

  const onNodeDragStop: OnNodeDrag = useCallback(
    (_ev: React.MouseEvent, node: Node) => {
      const rest = restPosRef.current.get(node.id);
      if (!rest) return;

      const startPos = { ...node.position };
      const startTime = performance.now();
      const duration = 450;

      const animate = () => {
        const elapsed = performance.now() - startTime;
        const t = Math.min(elapsed / duration, 1);
        const eased = easeOutElastic(t);
        const pos = lerp(startPos, rest, eased);

        setNodes((prev) =>
          prev.map((n) =>
            n.id === node.id ? { ...n, position: pos } : n
          )
        );

        if (t < 1) {
          animationRef.current = requestAnimationFrame(animate);
        } else {
          animationRef.current = null;
        }
      };

      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
      animationRef.current = requestAnimationFrame(animate);
    },
    [setNodes]
  );

  useEffect(() => {
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const onNodeClick = useCallback(
    (_: React.MouseEvent, node: Node) => {
      setFocusedNodeId(node.id);
      if (reactFlowInstance && (CATEGORY_IDS as string[]).includes(node.id)) {
        toggleCategory(node.id as GraphCategoryId);
      }
    },
    [setFocusedNodeId, toggleCategory, reactFlowInstance]
  );

  const focusClearRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    if (!focusedNodeId || !reactFlowInstance?.setCenter) return;
    const id = focusedNodeId;
    const timer = setTimeout(() => {
      const node = reactFlowInstance.getNode(id);
      if (node) {
        const pos = node.position;
        const isOrigin = node.id === ORIGIN_ID;
        const isCategory = (CATEGORY_IDS as string[]).includes(node.id);
        const cx = isOrigin ? 110 : isCategory ? 60 : 50;
        const cy = isOrigin ? 70 : isCategory ? 20 : 16;
        reactFlowInstance.setCenter(pos.x + cx, pos.y + cy, {
          duration: 400,
          zoom: 1,
        });
        focusClearRef.current = setTimeout(() => setFocusedNodeId(null), 2500);
      }
    }, 100);
    return () => {
      clearTimeout(timer);
      if (focusClearRef.current) {
        clearTimeout(focusClearRef.current);
        focusClearRef.current = null;
      }
    };
  }, [focusedNodeId, nodes, reactFlowInstance, setFocusedNodeId]);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onNodeDragStop={onNodeDragStop}
      onNodeClick={onNodeClick}
      nodeTypes={NODE_TYPES as import("@xyflow/react").NodeTypes}
      defaultViewport={DEFAULT_VIEWPORT}
      minZoom={0.25}
      maxZoom={1.5}
      panOnDrag
      zoomOnScroll
      zoomOnPinch
      nodesDraggable
      nodesConnectable={false}
      elementsSelectable
      fitView
      fitViewOptions={{ padding: 0.2, maxZoom: 0.95 }}
      className="bg-background"
    >
      <Background
        variant={BackgroundVariant.Dots}
        gap={24}
        size={1}
        color="var(--border)"
        className="opacity-40"
      />
    </ReactFlow>
  );
}

export function NodeGraphCanvas() {
  return (
    <ReactFlowProvider>
      <GraphInner />
    </ReactFlowProvider>
  );
}
