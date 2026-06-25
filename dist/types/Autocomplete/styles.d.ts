/**
 * Styled building blocks for Autocomplete. Mirrors the box-shadow / focus-ring
 * conventions of `ControlContainer` so the field visually matches Input/Select,
 * but uses a flex shell that grows vertically to host chips in multiple mode.
 *
 * Transient props ($-prefixed) keep styling flags off the DOM (styled-components v6).
 */
/** Outer clickable field. Wraps the value area + end adornments. */
export declare const Shell: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $disabled?: boolean;
    $hasError?: boolean;
}>> & string;
/** Holds chips (multiple) and the text input; wraps to multiple lines. */
export declare const ValueArea: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
/** The raw text input. `all: unset` matches the repo's Input reset pattern. */
export declare const InputEl: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, never>> & string;
/** Right-aligned cluster: spinner, clear button, dropdown toggle. */
export declare const EndAdornments: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
/** Icon-only button used for clear / toggle adornments. */
export declare const IconButton: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, never>> & string;
/** Dropdown surface (rendered inside Radix Popper.Content). */
export declare const Listbox: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLUListElement>, HTMLUListElement>, never>> & string;
/** A single selectable option row. */
export declare const OptionItem: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, {
    $highlighted?: boolean;
    $selected?: boolean;
}>> & string;
/** Non-selectable informational row (loading / empty). */
export declare const StateRow: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, never>> & string;
//# sourceMappingURL=styles.d.ts.map