import { a as ChevronDownIcon, C as CheckIcon } from './react-icons.esm-a49c4ce5.js';
import { T as Trigger, a as Item, S as Separator, R as Root2, V as Value, I as Icon, P as Portal, C as Content2, d as Viewport, b as ItemIndicator, c as ItemText } from './index-5da56672.js';
import React__default, { forwardRef } from 'react';
import { styled } from 'styled-components';
import { C as Colors } from './colors-b56a153c.js';
import { F as Fonts } from './fonts-84085e3a.js';
import 'react-dom';
import './index-f673d433.js';
import 'react/jsx-runtime';
import './index-3198ca37.js';
import './index-6ce467f8.js';
import './index-ad9819aa.js';
import './index-617be02a.js';
import 'react-remove-scroll';

const SelectTrigger = styled(Trigger).withConfig({
  displayName: "Select__SelectTrigger",
  componentId: "sc-1ehkd60-0"
})(["all:unset;display:flex;align-items:center;", ";display:flex;gap:4px;max-width:100%;box-sizing:border-box;height:28px;padding:0 2px 0 6px;border-radius:2px;@media (hover:hover){&:hover{box-shadow:0 0 0 1px ", ";}}"], Fonts.body, Colors.black10);
function Select(props) {
  return /*#__PURE__*/React__default.createElement(Root2, {
    value: props.value,
    onValueChange: props.onChange
  }, /*#__PURE__*/React__default.createElement(SelectTrigger, null, /*#__PURE__*/React__default.createElement(Value, {
    style: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      ...props.style
    },
    placeholder: props.placeholder ?? "Select a value..."
  }), /*#__PURE__*/React__default.createElement(Icon, null, /*#__PURE__*/React__default.createElement(ChevronDownIcon, {
    color: Colors.black40
  }))), /*#__PURE__*/React__default.createElement(Portal, null, /*#__PURE__*/React__default.createElement(Content2, {
    style: {
      minWidth: "100px",
      maxHeight: "600px",
      padding: "4px 0",
      background: "#fff",
      border: `1px solid ${Colors.black10}`,
      borderRadius: "2px",
      boxShadow: "0px 2px 14px 0px rgba(0, 0, 0, 0.15)",
      zIndex: 999999
    }
  }, /*#__PURE__*/React__default.createElement(Viewport, null, props.children))));
}
const SelectItemWrapper = styled(Item).withConfig({
  displayName: "Select__SelectItemWrapper",
  componentId: "sc-1ehkd60-1"
})(["display:flex;align-items:center;gap:6px;box-sizing:border-box;min-height:28px;padding:0 6px;", ";color:#000;background:#fff;outline:none;&[data-state=\"unchecked\"]{padding-left:calc(6px + 15px + 6px);}&[data-highlighted]{background:#daeafd;}@media (hover:hover){cursor:pointer;}"], Fonts.body);
const SelectItem = /*#__PURE__*/forwardRef((props, ref) => {
  return /*#__PURE__*/React__default.createElement(SelectItemWrapper, {
    value: props.value,
    disabled: props.isDisabled ?? false,
    ref: ref
  }, /*#__PURE__*/React__default.createElement(ItemIndicator, null, /*#__PURE__*/React__default.createElement(CheckIcon, {
    color: "#202123"
  })), /*#__PURE__*/React__default.createElement(ItemText, {
    style: props.style
  }, props.children));
});
SelectItem.displayName = "SelectItem";
const StyledSeparator = styled(Separator).withConfig({
  displayName: "Select__StyledSeparator",
  componentId: "sc-1ehkd60-2"
})(["height:1px;margin:4px;background:", ";"], Colors.black100);
function SelectSeparator() {
  return /*#__PURE__*/React__default.createElement(StyledSeparator, null);
}

export { Select, SelectItem, SelectSeparator };
