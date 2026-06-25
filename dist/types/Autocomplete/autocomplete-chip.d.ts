import React from "react";
export interface AutocompleteChipProps {
    label: string;
    onRemove?: (event: React.MouseEvent) => void;
    disabled?: boolean;
    /** Downshift `getSelectedItemProps` for chip keyboard navigation. */
    selectedItemProps?: Record<string, unknown>;
}
export declare function AutocompleteChip({ label, onRemove, disabled, selectedItemProps, }: AutocompleteChipProps): React.JSX.Element;
//# sourceMappingURL=autocomplete-chip.d.ts.map