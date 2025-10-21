import React, { forwardRef, useId } from "react";
import { styled } from "styled-components";
import { Fonts } from "./fonts";

import {
  ControlContainer,
  ControlProps,
  getControlPadding,
} from "./ControlContainer";
import { Colors } from "./colors";
import { Icons } from "./icons";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  ControlProps & {
    placeholder?: string;
    type?: string;
    debounce?: boolean;
    align?: "left" | "right";
  };

const StyledInput = styled.input<InputProps & { isRaw?: boolean }>`
  all: unset;
  box-sizing: border-box;

  width: 100%;
  height: 100%;

  outline: none;
  border: none;

  ::-webkit-search-decoration,
  ::-webkit-search-cancel-button,
  ::-webkit-search-results-button,
  ::-webkit-search-results-decoration {
    display: none;
  }

  ${(p) => !p.isRaw && getControlPadding()}

  ${Fonts.body};
`;

const StyledInputFileWrapper = styled.div`
  position: relative;
  width: 168px;
  height: 168px;
`;

const StyledInputFile = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0 0 0 1px ${Colors.black10};
`;

const StyledInputFileCloseIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${Colors.white};
  border-radius: 100%;
  cursor: pointer;
`;

const StyledInputLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 100%;
  border: 1px dashed ${Colors.blue50};
  cursor: pointer;
  color: ${Colors.blue50};
  ${Fonts.body};
`;

const InputBase = forwardRef<
  HTMLInputElement,
  InputProps & { isRaw?: boolean }
>((props, ref) => {
  return <StyledInput {...props} ref={ref} />;
});

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { iconBlack, controlSize, iconOnly, onBlur, value, ...inputProps } =
    props;

  return (
    <ControlContainer
      iconBlack={iconBlack}
      controlSize={controlSize}
      iconOnly={iconOnly}
      {...inputProps}
    >
      <InputBase {...inputProps} value={value} onBlur={onBlur} ref={ref} />
    </ControlContainer>
  );
});

export const InputFile = forwardRef<
  HTMLInputElement,
  InputProps & {
    label?: string;
    isRaw?: boolean;
    isLoading?: boolean;
    loadingLabel?: boolean;
    onClearFile?: () => void;
  }
>((props, ref) => {
  const id = useId();
  const inputId = props.id ?? id;

  return (
    <StyledInputFileWrapper>
      <InputBase
        {...props}
        ref={ref}
        type="file"
        id={inputId}
        style={{ display: "none" }}
      />

      {props?.src ? (
        <>
          <StyledInputFile src={props?.src} alt={props?.alt} />

          <StyledInputFileCloseIcon onClick={props?.onClearFile}>
            <Icons.Close size={12} />
          </StyledInputFileCloseIcon>
        </>
      ) : (
        <StyledInputLabel htmlFor={inputId}>
          {props?.isLoading ? (
            <>
              <Icons.LoadingSpinner size={24} />
              {props?.loadingLabel ?? "Uploading..."}
            </>
          ) : (
            <>
              <Icons.Add size={16} />
              {props?.label ?? "Add or drop image"}
            </>
          )}
        </StyledInputLabel>
      )}
    </StyledInputFileWrapper>
  );
});

export const InputRaw = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    return <InputBase {...props} ref={ref} isRaw={true} />;
  }
);
