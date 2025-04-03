import { Root, List, Trigger, TabsContent } from "@radix-ui/react-tabs";
import React from "react";
import { Colors } from "./colors";
import { Typography } from "./Typography";
import { styled } from "styled-components";

const StyledRoot = styled(Root)`
  width: 100%;
`;

const StyledTabListContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const StyledList = styled(List)`
  display: flex;
  flex-wrap: nowrap;
  gap: 36px;
  min-height: 36px;
`;

const StyledTrigger = styled(Typography).attrs<{ value: string }>({
  component: Trigger,
})`
  padding: 0;
  margin: 0;
  border: 0;
  background: transparent;

  @media (hover: hover) {
    cursor: pointer;
  }

  &[data-state="active"] {
    font-weight: bold;
  }

  &[data-state="inactive"] {
    color: ${Colors.black500};
  }
`;

function Tabs(props: {
  children: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <StyledRoot
      value={props.value}
      onValueChange={(value) => props.onChange(value)}
    >
      {props.children}
    </StyledRoot>
  );
}

function TabList(props: {
  children: React.ReactNode;
  action: React.ReactNode;
}) {
  return (
    <StyledTabListContainer>
      <StyledList>{props.children}</StyledList>
      {props.action}
    </StyledTabListContainer>
  );
}

function Tab(props: { children: React.ReactNode; value: string }) {
  return <StyledTrigger value={props.value}>{props.children}</StyledTrigger>;
}

function TabPanel(props: { children: React.ReactNode; value: string }) {
  return <TabsContent value={props.value}>{props.children}</TabsContent>;
}

export { Tabs, TabList, Tab, TabPanel };
