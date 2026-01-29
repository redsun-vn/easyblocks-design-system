import React, {
  CSSProperties,
  forwardRef,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { styled } from "styled-components";
import { Fonts } from "./fonts";
import debounce from "lodash/debounce";

import _ColorPicker, {
  ColorPickerProps,
} from "react-best-gradient-color-picker";
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

export type InputColorProps = {
  className?: string;
  style?: CSSProperties;
  value: string;
  onChange: (color: string) => void;
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

const StyledInputColorContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledInputColorWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 0 1px ${Colors.black10};
  &:hover {
    box-shadow: 0 0 0 1px ${Colors.black20};
  }
  border-radius: 2px;
  cursor: pointer;
  outline: none;
  padding: 4px;
`;

const StyledInputCurrentColor = styled.div<{
  color: string;
}>`
  ${({ color = `${Colors.black800}` }) => `background: ${color}`};
`;

const StyledInputColorDialogWrapper = styled.div`
  position: fixed;
  top: 20px;
  right: 10px;
  z-index: 1;
  overflow: auto;
  max-height: 95vh;
`;

const StyledInputColorPickerWrapper = styled.div<{ isDark: boolean }>`
  ${({ isDark }) => `background: ${isDark ? Colors.black900 : Colors.white}`};
  border-radius: 8px;
  box-shadow: 0 0 6px ${Colors.black40};
  padding: 8px;
  position: relative;
  width: 310px;
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

const debouncedSave = debounce((fn: () => void) => fn(), 400);

export const ColorPicker = (props: ColorPickerProps) => {
  const { value, onChange } = props;
  const [color, setColor] = useState(value);

  const isDark =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const onChangeColor = (newColor: string) => {
    setColor(newColor);

    if (newColor) {
      debouncedSave(() => onChange(newColor));
    }
  };

  useEffect(() => {
    if (value) {
      setColor(value);
    }
  }, [value]);

  return (
    <StyledInputColorPickerWrapper isDark={isDark}>
      <_ColorPicker
        style={{ body: { borderRadius: 8 } }}
        hideEyeDrop
        {...props}
        value={color}
        onChange={onChangeColor}
      />
    </StyledInputColorPickerWrapper>
  );
};

export const InputColor = forwardRef<HTMLInputElement, InputColorProps>(
  (props, ref) => {
    const clickOutsideRef = useRef<HTMLInputElement | null>(null);
    const { value, onChange, style = {}, className } = props;
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        // Only handle object refs (skip callback refs) and close when clicking outside
        if (clickOutsideRef && typeof clickOutsideRef !== "function") {
          const node = clickOutsideRef.current;
          if (node && !node.contains(event.target as Node)) {
            setIsOpen(false);
          }
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, [clickOutsideRef]);

    return (
      <StyledInputColorContainer ref={ref}>
        <StyledInputColorContainer ref={clickOutsideRef}>
          <StyledInputColorWrapper onClick={() => setIsOpen((prev) => !prev)}>
            <StyledInputCurrentColor
              className={className}
              style={style}
              color={value}
            />
          </StyledInputColorWrapper>

          {isOpen ? (
            <StyledInputColorDialogWrapper>
              <ColorPicker value={value} onChange={onChange} />
            </StyledInputColorDialogWrapper>
          ) : null}
        </StyledInputColorContainer>
      </StyledInputColorContainer>
    );
  },
);

export const InputRaw = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    return <InputBase {...props} ref={ref} isRaw={true} />;
  },
);
