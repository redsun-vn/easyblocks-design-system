import React, { CSSProperties, ReactNode } from "react";
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
} & React.RefAttributes<HTMLDivElement>>;
declare function SelectSeparator(): React.JSX.Element;
export { Select, SelectItem, SelectSeparator };
//# sourceMappingURL=Select.d.ts.map