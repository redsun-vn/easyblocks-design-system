'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4b342fad.js');
var React = require('react');
var styled = require('styled-components');
var fonts = require('./fonts-c2bffa19.js');
var _ColorPicker = require('react-best-gradient-color-picker');
var ControlContainer = require('./ControlContainer-6e9e5d42.js');
var colors = require('./colors-807b489d.js');
var icons = require('./icons.cjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var _ColorPicker__default = /*#__PURE__*/_interopDefaultLegacy(_ColorPicker);

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

const StyledInput = styled.styled.input.withConfig({
  displayName: "Input__StyledInput",
  componentId: "sc-1nyhv3t-0"
})(["all:unset;box-sizing:border-box;width:100%;height:100%;outline:none;border:none;::-webkit-search-decoration,::-webkit-search-cancel-button,::-webkit-search-results-button,::-webkit-search-results-decoration{display:none;}", " ", ";"], p => !p.isRaw && ControlContainer.getControlPadding(), fonts.Fonts.body);
const StyledInputColorContainer = styled.styled.div.withConfig({
  displayName: "Input__StyledInputColorContainer",
  componentId: "sc-1nyhv3t-1"
})(["position:relative;width:100%;height:100%;"]);
const StyledInputColorWrapper = styled.styled.div.withConfig({
  displayName: "Input__StyledInputColorWrapper",
  componentId: "sc-1nyhv3t-2"
})(["position:relative;width:100%;height:100%;box-shadow:0 0 0 1px ", ";&:hover{box-shadow:0 0 0 1px ", ";}border-radius:2px;cursor:pointer;outline:none;padding:4px;"], colors.Colors.black10, colors.Colors.black20);
const StyledInputCurrentColor = styled.styled.div.withConfig({
  displayName: "Input__StyledInputCurrentColor",
  componentId: "sc-1nyhv3t-3"
})(["", ";"], _ref => {
  let {
    color = `${colors.Colors.black800}`
  } = _ref;
  return `background: ${color}`;
});
const StyledInputColorDialogWrapper = styled.styled.div.withConfig({
  displayName: "Input__StyledInputColorDialogWrapper",
  componentId: "sc-1nyhv3t-4"
})(["position:fixed;top:20px;right:10px;z-index:1;"]);
const StyledInputColorPickerWrapper = styled.styled.div.withConfig({
  displayName: "Input__StyledInputColorPickerWrapper",
  componentId: "sc-1nyhv3t-5"
})(["", ";border-radius:8px;box-shadow:0 0 6px ", ";padding:8px;position:relative;width:310px;"], _ref2 => {
  let {
    isDark
  } = _ref2;
  return `background: ${isDark ? colors.Colors.black900 : colors.Colors.white}`;
}, colors.Colors.black40);
const StyledInputFileWrapper = styled.styled.div.withConfig({
  displayName: "Input__StyledInputFileWrapper",
  componentId: "sc-1nyhv3t-6"
})(["position:relative;width:168px;height:168px;"]);
const StyledInputFile = styled.styled.img.withConfig({
  displayName: "Input__StyledInputFile",
  componentId: "sc-1nyhv3t-7"
})(["width:100%;height:100%;object-fit:cover;box-shadow:0 0 0 1px ", ";"], colors.Colors.black10);
const StyledInputFileCloseIcon = styled.styled.div.withConfig({
  displayName: "Input__StyledInputFileCloseIcon",
  componentId: "sc-1nyhv3t-8"
})(["position:absolute;right:10px;top:10px;width:20px;height:20px;display:flex;justify-content:center;align-items:center;background:", ";border-radius:100%;cursor:pointer;"], colors.Colors.white);
const StyledInputLabel = styled.styled.label.withConfig({
  displayName: "Input__StyledInputLabel",
  componentId: "sc-1nyhv3t-9"
})(["display:flex;align-items:center;justify-content:center;gap:8px;height:100%;border:1px dashed ", ";cursor:pointer;color:", ";", ";"], colors.Colors.blue50, colors.Colors.blue50, fonts.Fonts.body);
const InputBase = /*#__PURE__*/React.forwardRef((props, ref) => {
  return /*#__PURE__*/React__default["default"].createElement(StyledInput, _rollupPluginBabelHelpers._extends({}, props, {
    ref: ref
  }));
});
InputBase.displayName = "InputBase";
const Input = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    iconBlack,
    controlSize,
    iconOnly,
    onBlur,
    value,
    ...inputProps
  } = props;
  return /*#__PURE__*/React__default["default"].createElement(ControlContainer.ControlContainer, _rollupPluginBabelHelpers._extends({
    iconBlack: iconBlack,
    controlSize: controlSize,
    iconOnly: iconOnly
  }, inputProps), /*#__PURE__*/React__default["default"].createElement(InputBase, _rollupPluginBabelHelpers._extends({}, inputProps, {
    value: value,
    onBlur: onBlur,
    ref: ref
  })));
});
Input.displayName = "Input";
const InputFile = /*#__PURE__*/React.forwardRef((props, ref) => {
  const id = React.useId();
  const inputId = props.id ?? id;
  return /*#__PURE__*/React__default["default"].createElement(StyledInputFileWrapper, null, /*#__PURE__*/React__default["default"].createElement(InputBase, _rollupPluginBabelHelpers._extends({}, props, {
    ref: ref,
    type: "file",
    id: inputId,
    style: {
      display: "none"
    }
  })), props?.src ? /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(StyledInputFile, {
    src: props?.src,
    alt: props?.alt
  }), /*#__PURE__*/React__default["default"].createElement(StyledInputFileCloseIcon, {
    onClick: props?.onClearFile
  }, /*#__PURE__*/React__default["default"].createElement(icons.Icons.Close, {
    size: 12
  }))) : /*#__PURE__*/React__default["default"].createElement(StyledInputLabel, {
    htmlFor: inputId
  }, props?.isLoading ? /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(icons.Icons.LoadingSpinner, {
    size: 24
  }), props?.loadingLabel ?? "Uploading...") : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(icons.Icons.Add, {
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
  const [color, setColor] = React.useState(value);
  const isDark = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const onChangeColor = newColor => {
    setColor(newColor);
    if (newColor) {
      debouncedSave(() => onChange(newColor));
    }
  };
  React.useEffect(() => {
    if (value) {
      setColor(value);
    }
  }, [value]);
  return /*#__PURE__*/React__default["default"].createElement(StyledInputColorPickerWrapper, {
    isDark: isDark
  }, /*#__PURE__*/React__default["default"].createElement(_ColorPicker__default["default"], _rollupPluginBabelHelpers._extends({
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
const InputColor = /*#__PURE__*/React.forwardRef((props, ref) => {
  const clickOutsideRef = React.useRef(null);
  const {
    value,
    onChange,
    style = {},
    className
  } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  React.useEffect(() => {
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
  return /*#__PURE__*/React__default["default"].createElement(StyledInputColorContainer, {
    ref: ref
  }, /*#__PURE__*/React__default["default"].createElement(StyledInputColorContainer, {
    ref: clickOutsideRef
  }, /*#__PURE__*/React__default["default"].createElement(StyledInputColorWrapper, {
    onClick: () => setIsOpen(prev => !prev)
  }, /*#__PURE__*/React__default["default"].createElement(StyledInputCurrentColor, {
    className: className,
    style: style,
    color: value
  })), isOpen ? /*#__PURE__*/React__default["default"].createElement(StyledInputColorDialogWrapper, null, /*#__PURE__*/React__default["default"].createElement(ColorPicker, {
    value: value,
    onChange: onChange
  })) : null));
});
InputColor.displayName = "InputColor";
const InputRaw = /*#__PURE__*/React.forwardRef((props, ref) => {
  return /*#__PURE__*/React__default["default"].createElement(InputBase, _rollupPluginBabelHelpers._extends({}, props, {
    ref: ref,
    isRaw: true
  }));
});
InputRaw.displayName = "InputRaw";

exports.ColorPicker = ColorPicker;
exports.Input = Input;
exports.InputColor = InputColor;
exports.InputFile = InputFile;
exports.InputRaw = InputRaw;
exports.debounce = debounce;
