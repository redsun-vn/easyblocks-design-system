/* with love from shopstory */
import { ChevronDownIcon, CheckIcon } from '../node_modules/@radix-ui/react-icons/dist/react-icons.esm.js';
import { Trigger, Root as Root2, Value, Icon, Portal, Content as Content2, Viewport, Item, ItemIndicator, ItemText, Separator } from '../node_modules/@radix-ui/react-select/dist/index.mjs.js';
import React__default, { forwardRef } from 'react';
import styled from 'styled-components';
import { Colors } from '../colors.js';
import { Fonts } from '../fonts.js';

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
      whiteSpace: "nowrap"
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
      boxShadow: "0px 2px 14px 0px rgba(0, 0, 0, 0.15)"
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
  })), /*#__PURE__*/React__default.createElement(ItemText, null, props.children));
});
const StyledSeparator = styled(Separator).withConfig({
  displayName: "Select__StyledSeparator",
  componentId: "sc-1ehkd60-2"
})(["height:1px;margin:4px;background:", ";"], Colors.black100);
function SelectSeparator() {
  return /*#__PURE__*/React__default.createElement(StyledSeparator, null);
}

export { Select, SelectItem, SelectSeparator };
