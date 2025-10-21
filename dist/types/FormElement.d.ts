import React from "react";
export type FormElementProps = {
    name: string;
    label: string;
    error?: string;
    required?: boolean;
    position?: "start" | "center" | "end";
    children: React.ReactElement;
};
export declare const FormElement: (props: FormElementProps) => React.JSX.Element;
//# sourceMappingURL=FormElement.d.ts.map