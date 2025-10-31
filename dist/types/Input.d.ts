import React, { CSSProperties } from "react";
import { ControlProps } from "./ControlContainer";
export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & ControlProps & {
    placeholder?: string;
    type?: string;
    debounce?: boolean;
    align?: "left" | "right";
};
export type InputColorProps = {
    className?: string;
    style?: CSSProperties;
    value: string;
    onChange: (color: string) => void;
};
export declare const Input: React.ForwardRefExoticComponent<React.InputHTMLAttributes<HTMLInputElement> & ControlProps & {
    placeholder?: string;
    type?: string;
    debounce?: boolean;
    align?: "left" | "right";
} & React.RefAttributes<HTMLInputElement>>;
export declare const InputFile: React.ForwardRefExoticComponent<React.InputHTMLAttributes<HTMLInputElement> & ControlProps & {
    placeholder?: string;
    type?: string;
    debounce?: boolean;
    align?: "left" | "right";
} & {
    label?: string;
    isRaw?: boolean;
    isLoading?: boolean;
    loadingLabel?: boolean;
    onClearFile?: () => void;
} & React.RefAttributes<HTMLInputElement>>;
export declare const InputColor: React.ForwardRefExoticComponent<InputColorProps & React.RefAttributes<HTMLInputElement>>;
export declare const InputRaw: React.ForwardRefExoticComponent<React.InputHTMLAttributes<HTMLInputElement> & ControlProps & {
    placeholder?: string;
    type?: string;
    debounce?: boolean;
    align?: "left" | "right";
} & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=Input.d.ts.map