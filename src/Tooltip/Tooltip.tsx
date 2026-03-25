import {
  Provider,
  Root,
  Trigger,
  Portal,
  Content,
  Arrow,
} from "@radix-ui/react-tooltip";
import React, { CSSProperties, ReactNode } from "react";
import { Colors } from "../colors";

function TooltipProvider(props: { children: ReactNode }) {
  return <Provider>{props.children}</Provider>;
}

function Tooltip(props: { children: ReactNode }) {
  return <Root>{props.children}</Root>;
}

function TooltipTrigger(props: { children: ReactNode }) {
  return <Trigger asChild>{props.children}</Trigger>;
}

function TooltipContent(props: { children: ReactNode; style?: CSSProperties }) {
  return (
    <Portal>
      <Content
        style={{
          display: "flex",
          padding: "6px 8px",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "2px",
          background: Colors.black800,
          color: Colors.white,
          ...props?.style,
        }}
      >
        <Arrow
          style={{
            fill: Colors.black800,
          }}
        />
        {props.children}
      </Content>
    </Portal>
  );
}

export { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent };
