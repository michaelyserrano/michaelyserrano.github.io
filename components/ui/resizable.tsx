"use client";

import { GripHorizontal, GripVertical } from "lucide-react";
import * as React from "react";
import {
  Group,
  Panel,
  type PanelProps,
  Separator,
  type SeparatorProps,
} from "react-resizable-panels";

import { cn } from "@/lib/utils";

type ResizablePanelGroupProps = React.ComponentProps<typeof Group> & {
  /** Alias for orientation (react-resizable-panels uses orientation) */
  direction?: "horizontal" | "vertical";
};

const ResizablePanelGroup = ({
  className,
  direction,
  orientation,
  ...props
}: ResizablePanelGroupProps) => (
  <Group
    className={cn(
      "flex h-full w-full data-[panel-group-orientation=vertical]:flex-col",
      className
    )}
    orientation={orientation ?? direction ?? "horizontal"}
    {...props}
  />
);

const ResizablePanel = Panel;

const ResizableHandle = ({
  withHandle,
  direction,
  className,
  ...props
}: SeparatorProps & {
  withHandle?: boolean;
  /** When inside a vertical panel group, pass "vertical" for horizontal grip icon */
  direction?: "horizontal" | "vertical";
}) => (
  <Separator
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-orientation=vertical]:h-px data-[panel-group-orientation=vertical]:w-full data-[panel-group-orientation=vertical]:after:left-0 data-[panel-group-orientation=vertical]:after:h-1 data-[panel-group-orientation=vertical]:after:w-full data-[panel-group-orientation=vertical]:after:-translate-y-1/2 data-[panel-group-orientation=vertical]:after:translate-x-0 [&[data-panel-group-orientation=vertical]]:py-1",
      className
    )}
    {...props}
  >
    {withHandle ? (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        {direction === "vertical" ? (
          <GripHorizontal className="h-3 w-4 text-muted-foreground" />
        ) : (
          <GripVertical className="h-4 w-3 text-muted-foreground" />
        )}
      </div>
    ) : null}
  </Separator>
);

export { ResizableHandle, ResizablePanel, ResizablePanelGroup };
