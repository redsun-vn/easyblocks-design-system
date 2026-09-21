import React, { CSSProperties, ReactNode } from "react";
/**
 * How a select trigger looks, kept apart so there is one of it.
 *
 * The colour field in the editor draws its own trigger — it shows a swatch
 * rather than text — and did so by copying these rules. Both copies were then
 * missing the same resting outline, which is how a fix in one place left the
 * other still invisible.
 */
export declare const selectTriggerStyles: import("styled-components").RuleSet<object>;
declare function Select(props: {
    children: ReactNode;
    value: string;
    onChange: (value: string) => void;
    style?: CSSProperties;
    placeholder?: string;
}): React.JSX.Element;
declare const SelectItem: React.ForwardRefExoticComponent<{
    children: ReactNode;
    value: string;
    isDisabled?: boolean;
    style?: CSSProperties;
} & React.RefAttributes<HTMLDivElement>>;
declare function SelectSeparator(): React.JSX.Element;
export { Select, SelectItem, SelectSeparator };
//# sourceMappingURL=Select.d.ts.map