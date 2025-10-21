import React from "react";
import { styled } from "styled-components";
import { Colors } from "./colors";
import { Fonts } from "./fonts";

export type FormElementProps = {
  name: string;
  label: string;
  error?: string;
  required?: boolean;
  position?: "start" | "center" | "end";
  children: React.ReactElement;
};

const Root = styled.div`
  position: relative;
`;

const Layout = styled.div<Pick<FormElementProps, "position">>`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 8px;
  ${({ position = "center" }) => `align-items: ${position}`}
`;

const Label = styled.label`
  ${Fonts.body}
  color: black;
  flex: 0 0 120px;
  min-width: 0;
`;

const ControlWrapper = styled.div`
  flex: 1 1 auto;
  min-width: 0;
  display: grid;
`;

const ErrorWrapper = styled.div`
  margin-top: 6px;
  ${Fonts.body}
  color: ${Colors.red};
`;
export const FormElement = (props: FormElementProps) => {
  return (
    <Root>
      <Layout position={props?.position}>
        <Label htmlFor={props.name}>{props.label}</Label>
        <ControlWrapper>
          {React.cloneElement(props.children, {
            name: props.name,
            hasError: !!props.error,
          })}
        </ControlWrapper>
      </Layout>
      {props.error && (
        <Layout>
          <Label as={"div"}></Label>
          <ErrorWrapper>{props.error}</ErrorWrapper>
        </Layout>
      )}
    </Root>
  );
};
