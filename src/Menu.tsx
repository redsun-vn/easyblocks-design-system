import {
  Root,
  Portal,
  Content,
  Item,
  Trigger,
  Separator,
} from "@radix-ui/react-dropdown-menu";
import React from "react";
import { Colors } from "./colors";
import styled from "styled-components";

function Menu(props: { children: React.ReactNode }) {
  return <Root>{props.children}</Root>;
}

function MenuTrigger(props: { children: React.ReactNode }) {
  return <Trigger asChild>{props.children}</Trigger>;
}

const StyledContent = styled(Content)`
  min-width: 200px;
  padding: 0 4px;
  background-color: ${Colors.black800};
  border-radius: 4px;
`;

const StyledItem = styled(Item)`
  padding: 10px 8px;

  &:focus {
    background-color: ${Colors.black700};
  }

  @media (hover: hover) {
    &:hover:not([aria-disabled="true"]) {
      cursor: pointer;
      background-color: ${Colors.black700};
    }
  }
`;

const StyledSeparator = styled(Separator)`
  height: 1px;
  background-color: ${Colors.black700};
`;

function MenuContent(props: {
  children: React.ReactNode;
  container?: HTMLElement | null;
}) {
  return (
    <Portal container={props.container}>
      <StyledContent side="bottom" align="start" sideOffset={4}>
        {props.children}
      </StyledContent>
    </Portal>
  );
}

function MenuItem(props: {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  isDisabled?: boolean;
}) {
  return (
    <StyledItem onClick={props.onClick} disabled={props.isDisabled}>
      {props.children}
    </StyledItem>
  );
}

function MenuSeparator() {
  return <StyledSeparator />;
}

export { Menu, MenuTrigger, MenuContent, MenuItem, MenuSeparator };
