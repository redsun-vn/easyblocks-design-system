'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4b342fad.js');
var React = require('react');
var styledComponents = require('styled-components');
var index = require('./index-e658c804.js');
var index$1 = require('./index-5fb6a3ee.js');
var jsxRuntime = require('react/jsx-runtime');
var index$2 = require('./index-4f5b0ced.js');
var colors = require('./colors-807b489d.js');
require('react-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var NAME = "Toggle";
var Toggle = React__namespace.forwardRef((props, forwardedRef) => {
  const { pressed: pressedProp, defaultPressed = false, onPressedChange, ...buttonProps } = props;
  const [pressed = false, setPressed] = index.useControllableState({
    prop: pressedProp,
    onChange: onPressedChange,
    defaultProp: defaultPressed
  });
  return /* @__PURE__ */ jsxRuntime.jsx(
    index.Primitive.button,
    {
      type: "button",
      "aria-pressed": pressed,
      "data-state": pressed ? "on" : "off",
      "data-disabled": props.disabled ? "" : void 0,
      ...buttonProps,
      ref: forwardedRef,
      onClick: index.composeEventHandlers(props.onClick, () => {
        if (!props.disabled) {
          setPressed(!pressed);
        }
      })
    }
  );
});
Toggle.displayName = NAME;

var TOGGLE_GROUP_NAME = "ToggleGroup";
var [createToggleGroupContext, createToggleGroupScope] = index.createContextScope(TOGGLE_GROUP_NAME, [
  index$1.createRovingFocusGroupScope
]);
var useRovingFocusGroupScope = index$1.createRovingFocusGroupScope();
var ToggleGroup$1 = React__default["default"].forwardRef((props, forwardedRef) => {
  const { type, ...toggleGroupProps } = props;
  if (type === "single") {
    const singleProps = toggleGroupProps;
    return /* @__PURE__ */ jsxRuntime.jsx(ToggleGroupImplSingle, { ...singleProps, ref: forwardedRef });
  }
  if (type === "multiple") {
    const multipleProps = toggleGroupProps;
    return /* @__PURE__ */ jsxRuntime.jsx(ToggleGroupImplMultiple, { ...multipleProps, ref: forwardedRef });
  }
  throw new Error(`Missing prop \`type\` expected on \`${TOGGLE_GROUP_NAME}\``);
});
ToggleGroup$1.displayName = TOGGLE_GROUP_NAME;
var [ToggleGroupValueProvider, useToggleGroupValueContext] = createToggleGroupContext(TOGGLE_GROUP_NAME);
var ToggleGroupImplSingle = React__default["default"].forwardRef((props, forwardedRef) => {
  const {
    value: valueProp,
    defaultValue,
    onValueChange = () => {
    },
    ...toggleGroupSingleProps
  } = props;
  const [value, setValue] = index.useControllableState({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange
  });
  return /* @__PURE__ */ jsxRuntime.jsx(
    ToggleGroupValueProvider,
    {
      scope: props.__scopeToggleGroup,
      type: "single",
      value: value ? [value] : [],
      onItemActivate: setValue,
      onItemDeactivate: React__default["default"].useCallback(() => setValue(""), [setValue]),
      children: /* @__PURE__ */ jsxRuntime.jsx(ToggleGroupImpl, { ...toggleGroupSingleProps, ref: forwardedRef })
    }
  );
});
var ToggleGroupImplMultiple = React__default["default"].forwardRef((props, forwardedRef) => {
  const {
    value: valueProp,
    defaultValue,
    onValueChange = () => {
    },
    ...toggleGroupMultipleProps
  } = props;
  const [value = [], setValue] = index.useControllableState({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange
  });
  const handleButtonActivate = React__default["default"].useCallback(
    (itemValue) => setValue((prevValue = []) => [...prevValue, itemValue]),
    [setValue]
  );
  const handleButtonDeactivate = React__default["default"].useCallback(
    (itemValue) => setValue((prevValue = []) => prevValue.filter((value2) => value2 !== itemValue)),
    [setValue]
  );
  return /* @__PURE__ */ jsxRuntime.jsx(
    ToggleGroupValueProvider,
    {
      scope: props.__scopeToggleGroup,
      type: "multiple",
      value,
      onItemActivate: handleButtonActivate,
      onItemDeactivate: handleButtonDeactivate,
      children: /* @__PURE__ */ jsxRuntime.jsx(ToggleGroupImpl, { ...toggleGroupMultipleProps, ref: forwardedRef })
    }
  );
});
ToggleGroup$1.displayName = TOGGLE_GROUP_NAME;
var [ToggleGroupContext, useToggleGroupContext] = createToggleGroupContext(TOGGLE_GROUP_NAME);
var ToggleGroupImpl = React__default["default"].forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeToggleGroup,
      disabled = false,
      rovingFocus = true,
      orientation,
      dir,
      loop = true,
      ...toggleGroupProps
    } = props;
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeToggleGroup);
    const direction = index$2.useDirection(dir);
    const commonProps = { role: "group", dir: direction, ...toggleGroupProps };
    return /* @__PURE__ */ jsxRuntime.jsx(ToggleGroupContext, { scope: __scopeToggleGroup, rovingFocus, disabled, children: rovingFocus ? /* @__PURE__ */ jsxRuntime.jsx(
      index$1.Root,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        orientation,
        dir: direction,
        loop,
        children: /* @__PURE__ */ jsxRuntime.jsx(index.Primitive.div, { ...commonProps, ref: forwardedRef })
      }
    ) : /* @__PURE__ */ jsxRuntime.jsx(index.Primitive.div, { ...commonProps, ref: forwardedRef }) });
  }
);
var ITEM_NAME = "ToggleGroupItem";
var ToggleGroupItem$1 = React__default["default"].forwardRef(
  (props, forwardedRef) => {
    const valueContext = useToggleGroupValueContext(ITEM_NAME, props.__scopeToggleGroup);
    const context = useToggleGroupContext(ITEM_NAME, props.__scopeToggleGroup);
    const rovingFocusGroupScope = useRovingFocusGroupScope(props.__scopeToggleGroup);
    const pressed = valueContext.value.includes(props.value);
    const disabled = context.disabled || props.disabled;
    const commonProps = { ...props, pressed, disabled };
    const ref = React__default["default"].useRef(null);
    return context.rovingFocus ? /* @__PURE__ */ jsxRuntime.jsx(
      index$1.Item,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        focusable: !disabled,
        active: pressed,
        ref,
        children: /* @__PURE__ */ jsxRuntime.jsx(ToggleGroupItemImpl, { ...commonProps, ref: forwardedRef })
      }
    ) : /* @__PURE__ */ jsxRuntime.jsx(ToggleGroupItemImpl, { ...commonProps, ref: forwardedRef });
  }
);
ToggleGroupItem$1.displayName = ITEM_NAME;
var ToggleGroupItemImpl = React__default["default"].forwardRef(
  (props, forwardedRef) => {
    const { __scopeToggleGroup, value, ...itemProps } = props;
    const valueContext = useToggleGroupValueContext(ITEM_NAME, __scopeToggleGroup);
    const singleProps = { role: "radio", "aria-checked": props.pressed, "aria-pressed": void 0 };
    const typeProps = valueContext.type === "single" ? singleProps : void 0;
    return /* @__PURE__ */ jsxRuntime.jsx(
      Toggle,
      {
        ...typeProps,
        ...itemProps,
        ref: forwardedRef,
        onPressedChange: (pressed) => {
          if (pressed) {
            valueContext.onItemActivate(value);
          } else {
            valueContext.onItemDeactivate(value);
          }
        }
      }
    );
  }
);
var Root2 = ToggleGroup$1;
var Item2 = ToggleGroupItem$1;

function ToggleGroup(props) {
  return /*#__PURE__*/React__default["default"].createElement(Root2, {
    type: "single",
    value: props.value,
    onValueChange: props.onChange,
    style: {
      display: "flex",
      gap: "4px",
      flexWrap: "nowrap"
    }
  }, props.children);
}
const StyledToggleGroupItem = styledComponents.styled(Item2).withConfig({
  displayName: "ToggleGroup__StyledToggleGroupItem",
  componentId: "sc-1ceudxu-0"
})(["all:unset;box-sizing:border-box;height:28px;width:28px;display:flex;align-items:center;justify-content:center;background-color:transparent;&[aria-checked=\"true\"]{background-color:", ";}border-radius:2px;@media (hover:hover){cursor:pointer;&:hover{box-shadow:0 0 0 1px ", ";}}& svg{flex-shrink:0;}"], colors.Colors.black10, colors.Colors.black10);
const ToggleGroupItem = /*#__PURE__*/React.forwardRef(function ToggleGroupItem(_ref, forwardedRef) {
  let {
    value,
    children,
    ...props
  } = _ref;
  return /*#__PURE__*/React__default["default"].createElement(StyledToggleGroupItem, _rollupPluginBabelHelpers._extends({
    value: value,
    ref: forwardedRef
  }, props), children);
});
ToggleGroupItem.displayName = "ToggleGroupItem";

exports.ToggleGroup = ToggleGroup;
exports.ToggleGroupItem = ToggleGroupItem;
