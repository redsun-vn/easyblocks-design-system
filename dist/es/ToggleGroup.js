import { _ as _extends } from './_rollupPluginBabelHelpers-c245b26a.js';
import * as React from 'react';
import React__default, { forwardRef } from 'react';
import { styled } from 'styled-components';
import { d as useControllableState, P as Primitive, a as composeEventHandlers, c as createContextScope } from './index-f673d433.js';
import { c as createRovingFocusGroupScope, R as Root, I as Item } from './index-ce357cf2.js';
import { jsx } from 'react/jsx-runtime';
import { u as useDirection } from './index-3198ca37.js';
import { C as Colors } from './colors-b56a153c.js';
import 'react-dom';

var NAME = "Toggle";
var Toggle = React.forwardRef((props, forwardedRef) => {
  const { pressed: pressedProp, defaultPressed = false, onPressedChange, ...buttonProps } = props;
  const [pressed = false, setPressed] = useControllableState({
    prop: pressedProp,
    onChange: onPressedChange,
    defaultProp: defaultPressed
  });
  return /* @__PURE__ */ jsx(
    Primitive.button,
    {
      type: "button",
      "aria-pressed": pressed,
      "data-state": pressed ? "on" : "off",
      "data-disabled": props.disabled ? "" : void 0,
      ...buttonProps,
      ref: forwardedRef,
      onClick: composeEventHandlers(props.onClick, () => {
        if (!props.disabled) {
          setPressed(!pressed);
        }
      })
    }
  );
});
Toggle.displayName = NAME;

var TOGGLE_GROUP_NAME = "ToggleGroup";
var [createToggleGroupContext, createToggleGroupScope] = createContextScope(TOGGLE_GROUP_NAME, [
  createRovingFocusGroupScope
]);
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var ToggleGroup$1 = React__default.forwardRef((props, forwardedRef) => {
  const { type, ...toggleGroupProps } = props;
  if (type === "single") {
    const singleProps = toggleGroupProps;
    return /* @__PURE__ */ jsx(ToggleGroupImplSingle, { ...singleProps, ref: forwardedRef });
  }
  if (type === "multiple") {
    const multipleProps = toggleGroupProps;
    return /* @__PURE__ */ jsx(ToggleGroupImplMultiple, { ...multipleProps, ref: forwardedRef });
  }
  throw new Error(`Missing prop \`type\` expected on \`${TOGGLE_GROUP_NAME}\``);
});
ToggleGroup$1.displayName = TOGGLE_GROUP_NAME;
var [ToggleGroupValueProvider, useToggleGroupValueContext] = createToggleGroupContext(TOGGLE_GROUP_NAME);
var ToggleGroupImplSingle = React__default.forwardRef((props, forwardedRef) => {
  const {
    value: valueProp,
    defaultValue,
    onValueChange = () => {
    },
    ...toggleGroupSingleProps
  } = props;
  const [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange
  });
  return /* @__PURE__ */ jsx(
    ToggleGroupValueProvider,
    {
      scope: props.__scopeToggleGroup,
      type: "single",
      value: value ? [value] : [],
      onItemActivate: setValue,
      onItemDeactivate: React__default.useCallback(() => setValue(""), [setValue]),
      children: /* @__PURE__ */ jsx(ToggleGroupImpl, { ...toggleGroupSingleProps, ref: forwardedRef })
    }
  );
});
var ToggleGroupImplMultiple = React__default.forwardRef((props, forwardedRef) => {
  const {
    value: valueProp,
    defaultValue,
    onValueChange = () => {
    },
    ...toggleGroupMultipleProps
  } = props;
  const [value = [], setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange
  });
  const handleButtonActivate = React__default.useCallback(
    (itemValue) => setValue((prevValue = []) => [...prevValue, itemValue]),
    [setValue]
  );
  const handleButtonDeactivate = React__default.useCallback(
    (itemValue) => setValue((prevValue = []) => prevValue.filter((value2) => value2 !== itemValue)),
    [setValue]
  );
  return /* @__PURE__ */ jsx(
    ToggleGroupValueProvider,
    {
      scope: props.__scopeToggleGroup,
      type: "multiple",
      value,
      onItemActivate: handleButtonActivate,
      onItemDeactivate: handleButtonDeactivate,
      children: /* @__PURE__ */ jsx(ToggleGroupImpl, { ...toggleGroupMultipleProps, ref: forwardedRef })
    }
  );
});
ToggleGroup$1.displayName = TOGGLE_GROUP_NAME;
var [ToggleGroupContext, useToggleGroupContext] = createToggleGroupContext(TOGGLE_GROUP_NAME);
var ToggleGroupImpl = React__default.forwardRef(
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
    const direction = useDirection(dir);
    const commonProps = { role: "group", dir: direction, ...toggleGroupProps };
    return /* @__PURE__ */ jsx(ToggleGroupContext, { scope: __scopeToggleGroup, rovingFocus, disabled, children: rovingFocus ? /* @__PURE__ */ jsx(
      Root,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        orientation,
        dir: direction,
        loop,
        children: /* @__PURE__ */ jsx(Primitive.div, { ...commonProps, ref: forwardedRef })
      }
    ) : /* @__PURE__ */ jsx(Primitive.div, { ...commonProps, ref: forwardedRef }) });
  }
);
var ITEM_NAME = "ToggleGroupItem";
var ToggleGroupItem$1 = React__default.forwardRef(
  (props, forwardedRef) => {
    const valueContext = useToggleGroupValueContext(ITEM_NAME, props.__scopeToggleGroup);
    const context = useToggleGroupContext(ITEM_NAME, props.__scopeToggleGroup);
    const rovingFocusGroupScope = useRovingFocusGroupScope(props.__scopeToggleGroup);
    const pressed = valueContext.value.includes(props.value);
    const disabled = context.disabled || props.disabled;
    const commonProps = { ...props, pressed, disabled };
    const ref = React__default.useRef(null);
    return context.rovingFocus ? /* @__PURE__ */ jsx(
      Item,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        focusable: !disabled,
        active: pressed,
        ref,
        children: /* @__PURE__ */ jsx(ToggleGroupItemImpl, { ...commonProps, ref: forwardedRef })
      }
    ) : /* @__PURE__ */ jsx(ToggleGroupItemImpl, { ...commonProps, ref: forwardedRef });
  }
);
ToggleGroupItem$1.displayName = ITEM_NAME;
var ToggleGroupItemImpl = React__default.forwardRef(
  (props, forwardedRef) => {
    const { __scopeToggleGroup, value, ...itemProps } = props;
    const valueContext = useToggleGroupValueContext(ITEM_NAME, __scopeToggleGroup);
    const singleProps = { role: "radio", "aria-checked": props.pressed, "aria-pressed": void 0 };
    const typeProps = valueContext.type === "single" ? singleProps : void 0;
    return /* @__PURE__ */ jsx(
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
  return /*#__PURE__*/React__default.createElement(Root2, {
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
const StyledToggleGroupItem = styled(Item2).withConfig({
  displayName: "ToggleGroup__StyledToggleGroupItem",
  componentId: "sc-1ceudxu-0"
})(["all:unset;box-sizing:border-box;height:28px;width:28px;display:flex;align-items:center;justify-content:center;background-color:transparent;&[aria-checked=\"true\"]{background-color:", ";}border-radius:2px;@media (hover:hover){cursor:pointer;&:hover{box-shadow:0 0 0 1px ", ";}}& svg{flex-shrink:0;}"], Colors.black10, Colors.black10);
const ToggleGroupItem = /*#__PURE__*/forwardRef(function ToggleGroupItem(_ref, forwardedRef) {
  let {
    value,
    children,
    ...props
  } = _ref;
  return /*#__PURE__*/React__default.createElement(StyledToggleGroupItem, _extends({
    value: value,
    ref: forwardedRef
  }, props), children);
});
ToggleGroupItem.displayName = "ToggleGroupItem";

export { ToggleGroup, ToggleGroupItem };
