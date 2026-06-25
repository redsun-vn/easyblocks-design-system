import React from "react";
import { styled } from "styled-components";
import { Colors } from "../colors";
import { Fonts } from "../fonts";
import { Icons } from "../icons";

/**
 * Removable tag used by multiple-select Autocomplete. Local component — the repo
 * has no shared Chip/Tag primitive.
 */

const ChipRoot = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  box-sizing: border-box;
  max-width: 100%;
  padding: 1px 4px 1px 6px;
  border-radius: 2px;
  background: ${Colors.black5};
  color: ${Colors.black800};
  ${Fonts.body};
`;

const ChipLabel = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ChipRemove = styled.button`
  all: unset;
  display: inline-flex;
  align-items: center;
  color: ${Colors.black40};
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    color: ${Colors.black800};
  }
  &:focus-visible {
    box-shadow: 0 0 0 2px ${Colors.focus};
  }
`;

export interface AutocompleteChipProps {
  label: string;
  onRemove?: (event: React.MouseEvent) => void;
  disabled?: boolean;
  /** Downshift `getSelectedItemProps` for chip keyboard navigation. */
  selectedItemProps?: Record<string, unknown>;
}

export function AutocompleteChip({
  label,
  onRemove,
  disabled,
  selectedItemProps,
}: AutocompleteChipProps) {
  return (
    <ChipRoot {...selectedItemProps}>
      <ChipLabel>{label}</ChipLabel>
      {!disabled && (
        <ChipRemove
          type="button"
          aria-label={`Remove ${label}`}
          onClick={onRemove}
        >
          <Icons.Close size={12} />
        </ChipRemove>
      )}
    </ChipRoot>
  );
}
