import React, { useState } from "react";
import styled from "styled-components";
import { Colors } from "../colors";
import { Icons } from "../icons";
import { Typography } from "../Typography";

const HorizontalLine = styled.div`
  height: 1px;
  margin-top: -1px;
  background-color: ${Colors.black10};
  margin: 4px 10px;
`;

const StyledWrapperChevronIcon = styled(Typography)<{ isOpen: boolean }>`
  transition: transform 0.2s ease;
  ${({ isOpen }) => `transform: rotate(${isOpen ? 180 : 0}deg);`}
`;

const StyledAccordionGroup = styled(Typography)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  min-width: 100%;
  cursor: pointer;
  padding: 6px 10px;
  gap: 2px;
`;

const StyledAccordionGroupLabel = styled(Typography)`
  display: block;
  font-weight: 700;
  max-width: 240px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
`;

export const AccordionGroup = <T,>({
  id,
  title,
  children,
  defaultExpanded = false,
  subTitle,
  enableBottomLine = true,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  subTitle?: string;
  enableBottomLine?: boolean;
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(defaultExpanded);

  return (
    <>
      <StyledAccordionGroup
        id={id}
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <StyledAccordionGroupLabel variant="body" component="label">
          {title}
          {subTitle}
        </StyledAccordionGroupLabel>
        <StyledWrapperChevronIcon isOpen={isExpanded}>
          <Icons.ChevronDown size={22} />
        </StyledWrapperChevronIcon>
      </StyledAccordionGroup>

      {isExpanded ? children : null}
      {isExpanded && enableBottomLine ? <HorizontalLine /> : null}
    </>
  );
};
