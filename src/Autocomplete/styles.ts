import { styled } from "styled-components";
import { Colors } from "../colors";
import { Fonts } from "../fonts";

/**
 * Styled building blocks for Autocomplete. Mirrors the box-shadow / focus-ring
 * conventions of `ControlContainer` so the field visually matches Input/Select,
 * but uses a flex shell that grows vertically to host chips in multiple mode.
 *
 * Transient props ($-prefixed) keep styling flags off the DOM (styled-components v6).
 */

/** Outer clickable field. Wraps the value area + end adornments. */
export const Shell = styled.div<{ $disabled?: boolean; $hasError?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  box-sizing: border-box;
  width: 100%;
  min-height: 28px;
  padding: 4px 6px;
  border-radius: 2px;
  background: ${Colors.white};
  color: ${(p) => (p.$disabled ? Colors.black40 : Colors.black800)};
  box-shadow: 0 0 0 1px ${(p) => (p.$hasError ? Colors.red : Colors.black10)};
  transition: box-shadow 0.1s;
  cursor: ${(p) => (p.$disabled ? "not-allowed" : "text")};
  ${Fonts.body};

  &:hover {
    box-shadow: 0 0 0 1px ${(p) => (p.$hasError ? Colors.red : Colors.black20)};
  }
  &:focus-within {
    box-shadow: 0 0 0 2px ${(p) => (p.$hasError ? Colors.red : Colors.focus)};
  }
`;

/** Holds chips (multiple) and the text input; wraps to multiple lines. */
export const ValueArea = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  min-width: 0;
`;

/** The raw text input. `all: unset` matches the repo's Input reset pattern. */
export const InputEl = styled.input`
  all: unset;
  flex: 1 1 auto;
  min-width: 30px;
  max-width: 120px;
  box-sizing: border-box;
  color: inherit;
  ${Fonts.body};

  &::placeholder {
    color: ${Colors.black40};
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

/** Right-aligned cluster: spinner, clear button, dropdown toggle. */
export const EndAdornments = styled.div`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 2px;
`;

/** Icon-only button used for clear / toggle adornments. */
export const IconButton = styled.button`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  color: ${Colors.black40};
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    color: ${Colors.black800};
  }
  &:focus-visible {
    box-shadow: 0 0 0 2px ${Colors.focus};
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

/** Dropdown surface (rendered inside Radix Popper.Content). */
export const Listbox = styled.ul`
  margin: 0;
  padding: 4px 0;
  list-style: none;
  box-sizing: border-box;
  max-height: 240px;
  overflow-y: auto;
  background: ${Colors.white};
  border-radius: 2px;
  box-shadow:
    0 0 0 1px ${Colors.black10},
    0 4px 12px ${Colors.black10};
  /* Match the trigger width via the var Radix Popper exposes on Content. */
  width: var(--radix-popper-anchor-width);
  min-width: var(--radix-popper-anchor-width);
  z-index: 1000;
  ${Fonts.body};

  &:focus {
    outline: none;
  }
`;

/** A single selectable option row. */
export const OptionItem = styled.li<{
  $highlighted?: boolean;
  $selected?: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  color: ${Colors.black800};
  cursor: pointer;
  font-weight: ${(p) => (p.$selected ? 600 : 400)};
  background: ${(p) => (p.$highlighted ? Colors.black5 : "transparent")};
`;

/** Non-selectable informational row (loading / empty). */
export const StateRow = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px;
  color: ${Colors.black40};
  cursor: default;
`;
