import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import * as RadixSelect from "@radix-ui/react-select";
import React, { CSSProperties, forwardRef, ReactNode } from "react";
import { css, styled } from "styled-components";
import { Colors } from "../colors";
import { Fonts } from "../fonts";

/**
 * How a select trigger looks, kept apart so there is one of it.
 *
 * The colour field in the editor draws its own trigger — it shows a swatch
 * rather than text — and did so by copying these rules. Both copies were then
 * missing the same resting outline, which is how a fix in one place left the
 * other still invisible.
 */
export const selectTriggerStyles = css`
  all: unset;

  display: flex;
  align-items: center;

  ${Fonts.body};
  gap: 4px;
  max-width: 100%;

  box-sizing: border-box;
  height: 28px;
  padding: 0 2px 0 6px;
  border-radius: 2px;

  /*
   * A resting outline, the same one every other control in the panel wears.
   *
   * The reset above leaves the trigger with no edge of its own, and the only
   * rule here used to be a hover one — so a panel of a dozen dropdowns was a
   * column of bare words with nothing to say they could be opened, and the
   * pointer had to find them one at a time. Worse, the shade it showed on
   * hover is the shade everything else shows at rest, so the select was a step
   * behind its neighbours in every state.
   *
   * The two shades and the focus ring are ControlContainer's, because a select
   * and a text field sitting in the same row should not be lit differently.
   */
  box-shadow: 0 0 0 1px ${Colors.black10};
  transition: box-shadow 0.1s;

  @media (hover: hover) {
    &:hover {
      box-shadow: 0 0 0 1px ${Colors.black20};
    }
  }

  &:focus-visible,
  &[data-state="open"] {
    box-shadow: 0 0 0 2px ${Colors.focus};
  }
`;

const SelectTrigger = styled(RadixSelect.Trigger)`
  ${selectTriggerStyles}
`;

function Select(props: {
  children: ReactNode;
  value: string;
  onChange: (value: string) => void;
  style?: CSSProperties;
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
            ...props.style,
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
            zIndex: 999999,
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
  {
    children: ReactNode;
    value: string;
    isDisabled?: boolean;
    style?: CSSProperties;
  }
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
      <RadixSelect.ItemText style={props.style}>
        {props.children}
      </RadixSelect.ItemText>
    </SelectItemWrapper>
  );
});

SelectItem.displayName = "SelectItem";

const StyledSeparator = styled(RadixSelect.Separator)`
  height: 1px;
  margin: 4px;
  background: ${Colors.black100};
`;

function SelectSeparator() {
  return <StyledSeparator />;
}

export { Select, SelectItem, SelectSeparator };
