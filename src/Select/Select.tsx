import {
  CheckIcon,
  ChevronDownIcon,
  // ChevronUpIcon,
} from "@radix-ui/react-icons";
import * as RadixSelect from "@radix-ui/react-select";
import React, { forwardRef, ReactNode } from "react";
import { styled } from "styled-components";
import { Colors } from "../colors";
import { Fonts } from "../fonts";

const SelectTrigger = styled(RadixSelect.Trigger)`
  all: unset;

  display: flex;
  align-items: center;

  ${Fonts.body};
  display: flex;
  gap: 4px;
  max-width: 100%;

  box-sizing: border-box;
  height: 28px;
  padding: 0 2px 0 6px;
  border-radius: 2px;

  @media (hover: hover) {
    &:hover {
      box-shadow: 0 0 0 1px ${Colors.black10};
    }
  }
`;

function Select(props: {
  children: ReactNode;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <RadixSelect.Root value={props.value} onValueChange={props.onChange}>
      <SelectTrigger>
        <RadixSelect.Value
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
          placeholder={props.placeholder ?? "Select a value..."}
        />
        <RadixSelect.Icon>
          <ChevronDownIcon color={Colors.black40} />
        </RadixSelect.Icon>
      </SelectTrigger>
      <RadixSelect.Portal>
        <RadixSelect.Content
          style={{
            minWidth: "100px",
            maxHeight: "600px",
            padding: "4px 0",
            background: "#fff",
            border: `1px solid ${Colors.black10}`,
            borderRadius: "2px",
            boxShadow: "0px 2px 14px 0px rgba(0, 0, 0, 0.15)",
          }}
        >
          {/* <RadixSelect.ScrollUpButton
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ChevronUpIcon />
          </RadixSelect.ScrollUpButton> */}
          <RadixSelect.Viewport>{props.children}</RadixSelect.Viewport>
          {/* <RadixSelect.ScrollDownButton
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ChevronDownIcon />
          </RadixSelect.ScrollDownButton> */}
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
}

const SelectItemWrapper = styled(RadixSelect.Item)`
  display: flex;
  align-items: center;
  gap: 6px;
  box-sizing: border-box;
  min-height: 28px;
  padding: 0 6px;

  ${Fonts.body};
  color: #000;

  background: #fff;
  outline: none;

  &[data-state="unchecked"] {
    // If item is unchecked, we have to move it to the right to recompense space of the missing checkmark icon
    padding-left: calc(6px + 15px + 6px);
  }

  &[data-highlighted] {
    background: #daeafd;
  }

  @media (hover: hover) {
    cursor: pointer;
  }
`;

const SelectItem = forwardRef<
  HTMLDivElement,
  { children: ReactNode; value: string; isDisabled?: boolean }
>((props, ref) => {
  return (
    <SelectItemWrapper
      value={props.value}
      disabled={props.isDisabled ?? false}
      ref={ref}
    >
      <RadixSelect.ItemIndicator>
        <CheckIcon color="#202123" />
      </RadixSelect.ItemIndicator>
      <RadixSelect.ItemText>{props.children}</RadixSelect.ItemText>
    </SelectItemWrapper>
  );
});

const StyledSeparator = styled(RadixSelect.Separator)`
  height: 1px;
  margin: 4px;
  background: ${Colors.black100};
`;

function SelectSeparator() {
  return <StyledSeparator />;
}

export { Select, SelectItem, SelectSeparator };
