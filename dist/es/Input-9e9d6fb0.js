import { _ as _extends } from './_rollupPluginBabelHelpers-c245b26a.js';
import React__default, { forwardRef, useId, useState, useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import { F as Fonts } from './fonts-84085e3a.js';
import _ColorPicker from 'react-best-gradient-color-picker';
import { g as getControlPadding, C as ControlContainer } from './ControlContainer-40ed87f0.js';
import { C as Colors } from './colors-b56a153c.js';
import { Icons } from './icons.js';

/**
 * Creates a debounced version of the given function that delays invocation
 * until `delay` ms have elapsed since the last call. Supports `.cancel()`.
 */
function debounce(fn, delay) {
  let timerId;
  const debounced = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      timerId = undefined;
      fn(...args);
    }, delay);
  };
  debounced.cancel = () => {
    if (timerId !== undefined) {
      clearTimeout(timerId);
      timerId = undefined;
    }
  };
  return debounced;
}

const StyledInput = styled.input.withConfig({
  displayName: "Input__StyledInput",
  componentId: "sc-1nyhv3t-0"
})(["all:unset;box-sizing:border-box;width:100%;height:100%;outline:none;border:none;::-webkit-search-decoration,::-webkit-search-cancel-button,::-webkit-search-results-button,::-webkit-search-results-decoration{display:none;}", " ", ";"], p => !p.isRaw && getControlPadding(), Fonts.body);
const StyledInputColorContainer = styled.div.withConfig({
  displayName: "Input__StyledInputColorContainer",
  componentId: "sc-1nyhv3t-1"
})(["position:relative;width:100%;height:100%;"]);
const StyledInputColorWrapper = styled.div.withConfig({
  displayName: "Input__StyledInputColorWrapper",
  componentId: "sc-1nyhv3t-2"
})(["position:relative;width:100%;height:100%;box-shadow:0 0 0 1px ", ";&:hover{box-shadow:0 0 0 1px ", ";}border-radius:2px;cursor:pointer;outline:none;padding:4px;"], Colors.black10, Colors.black20);
const StyledInputCurrentColor = styled.div.withConfig({
  displayName: "Input__StyledInputCurrentColor",
  componentId: "sc-1nyhv3t-3"
})(["", ";"], _ref => {
  let {
    color = `${Colors.black800}`
  } = _ref;
  return `background: ${color}`;
});
const StyledInputColorDialogWrapper = styled.div.withConfig({
  displayName: "Input__StyledInputColorDialogWrapper",
  componentId: "sc-1nyhv3t-4"
})(["position:fixed;top:20px;right:10px;z-index:1;"]);
const StyledInputColorPickerWrapper = styled.div.withConfig({
  displayName: "Input__StyledInputColorPickerWrapper",
  componentId: "sc-1nyhv3t-5"
})(["", ";border-radius:8px;box-shadow:0 0 6px ", ";padding:8px;position:relative;width:310px;"], _ref2 => {
  let {
    isDark
  } = _ref2;
  return `background: ${isDark ? Colors.black900 : Colors.white}`;
}, Colors.black40);
const StyledInputFileWrapper = styled.div.withConfig({
  displayName: "Input__StyledInputFileWrapper",
  componentId: "sc-1nyhv3t-6"
})(["position:relative;width:168px;height:168px;"]);
const StyledInputFile = styled.img.withConfig({
  displayName: "Input__StyledInputFile",
  componentId: "sc-1nyhv3t-7"
})(["width:100%;height:100%;object-fit:cover;box-shadow:0 0 0 1px ", ";"], Colors.black10);
const StyledInputFileCloseIcon = styled.div.withConfig({
  displayName: "Input__StyledInputFileCloseIcon",
  componentId: "sc-1nyhv3t-8"
})(["position:absolute;right:10px;top:10px;width:20px;height:20px;display:flex;justify-content:center;align-items:center;background:", ";border-radius:100%;cursor:pointer;"], Colors.white);
const StyledInputLabel = styled.label.withConfig({
  displayName: "Input__StyledInputLabel",
  componentId: "sc-1nyhv3t-9"
})(["display:flex;align-items:center;justify-content:center;gap:8px;height:100%;border:1px dashed ", ";cursor:pointer;color:", ";", ";"], Colors.blue50, Colors.blue50, Fonts.body);
const InputBase = /*#__PURE__*/forwardRef((props, ref) => {
  return /*#__PURE__*/React__default.createElement(StyledInput, _extends({}, props, {
    ref: ref
  }));
});
InputBase.displayName = "InputBase";
const Input = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    iconBlack,
    controlSize,
    iconOnly,
    onBlur,
    value,
    ...inputProps
  } = props;
  return /*#__PURE__*/React__default.createElement(ControlContainer, _extends({
    iconBlack: iconBlack,
    controlSize: controlSize,
    iconOnly: iconOnly
  }, inputProps), /*#__PURE__*/React__default.createElement(InputBase, _extends({}, inputProps, {
    value: value,
    onBlur: onBlur,
    ref: ref
  })));
});
Input.displayName = "Input";
const InputFile = /*#__PURE__*/forwardRef((props, ref) => {
  const id = useId();
  const inputId = props.id ?? id;
  return /*#__PURE__*/React__default.createElement(StyledInputFileWrapper, null, /*#__PURE__*/React__default.createElement(InputBase, _extends({}, props, {
    ref: ref,
    type: "file",
    id: inputId,
    style: {
      display: "none"
    }
  })), props?.src ? /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(StyledInputFile, {
    src: props?.src,
    alt: props?.alt
  }), /*#__PURE__*/React__default.createElement(StyledInputFileCloseIcon, {
    onClick: props?.onClearFile
  }, /*#__PURE__*/React__default.createElement(Icons.Close, {
    size: 12
  }))) : /*#__PURE__*/React__default.createElement(StyledInputLabel, {
    htmlFor: inputId
  }, props?.isLoading ? /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Icons.LoadingSpinner, {
    size: 24
  }), props?.loadingLabel ?? "Uploading...") : /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Icons.Add, {
    size: 16
  }), props?.label ?? "Add or drop image")));
});
InputFile.displayName = "InputFile";
const debouncedSave = debounce(fn => fn(), 400);
const ColorPicker = props => {
  const {
    value,
    onChange
  } = props;
  const [color, setColor] = useState(value);
  const isDark = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const onChangeColor = newColor => {
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
  return /*#__PURE__*/React__default.createElement(StyledInputColorPickerWrapper, {
    isDark: isDark
  }, /*#__PURE__*/React__default.createElement(_ColorPicker, _extends({
    style: {
      body: {
        borderRadius: 8
      }
    },
    hideEyeDrop: true
  }, props, {
    value: color,
    onChange: onChangeColor
  })));
};
const InputColor = /*#__PURE__*/forwardRef((props, ref) => {
  const clickOutsideRef = useRef(null);
  const {
    value,
    onChange,
    style = {},
    className
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleClickOutside = event => {
      // Only handle object refs (skip callback refs) and close when clicking outside
      if (clickOutsideRef && typeof clickOutsideRef !== "function") {
        const node = clickOutsideRef.current;
        if (node && !node.contains(event.target)) {
          setIsOpen(false);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [clickOutsideRef]);
  return /*#__PURE__*/React__default.createElement(StyledInputColorContainer, {
    ref: ref
  }, /*#__PURE__*/React__default.createElement(StyledInputColorContainer, {
    ref: clickOutsideRef
  }, /*#__PURE__*/React__default.createElement(StyledInputColorWrapper, {
    onClick: () => setIsOpen(prev => !prev)
  }, /*#__PURE__*/React__default.createElement(StyledInputCurrentColor, {
    className: className,
    style: style,
    color: value
  })), isOpen ? /*#__PURE__*/React__default.createElement(StyledInputColorDialogWrapper, null, /*#__PURE__*/React__default.createElement(ColorPicker, {
    value: value,
    onChange: onChange
  })) : null));
});
InputColor.displayName = "InputColor";
const InputRaw = /*#__PURE__*/forwardRef((props, ref) => {
  return /*#__PURE__*/React__default.createElement(InputBase, _extends({}, props, {
    ref: ref,
    isRaw: true
  }));
});
InputRaw.displayName = "InputRaw";

export { ColorPicker as C, InputRaw as I, Input as a, InputFile as b, InputColor as c, debounce as d };
