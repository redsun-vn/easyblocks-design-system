import { Root as Root2, Trigger, Content as Content2, Item as Item2, Separator as Separator2, Portal as Portal2 } from './node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs.js';
import React__default from 'react';
import { Colors } from './colors.js';
import styled from 'styled-components';

function Menu(props) {
  return /*#__PURE__*/React__default.createElement(Root2, null, props.children);
}
function MenuTrigger(props) {
  return /*#__PURE__*/React__default.createElement(Trigger, {
    asChild: true
  }, props.children);
}
const StyledContent = styled(Content2).withConfig({
  displayName: "Menu__StyledContent",
  componentId: "sc-15igjrv-0"
})(["min-width:200px;padding:0 4px;background-color:", ";border-radius:4px;"], Colors.black800);
const StyledItem = styled(Item2).withConfig({
  displayName: "Menu__StyledItem",
  componentId: "sc-15igjrv-1"
})(["padding:10px 8px;&:focus{background-color:", ";}@media (hover:hover){&:hover:not([aria-disabled=\"true\"]){cursor:pointer;background-color:", ";}}"], Colors.black700, Colors.black700);
const StyledSeparator = styled(Separator2).withConfig({
  displayName: "Menu__StyledSeparator",
  componentId: "sc-15igjrv-2"
})(["height:1px;background-color:", ";"], Colors.black700);
function MenuContent(props) {
  return /*#__PURE__*/React__default.createElement(Portal2, {
    container: props.container
  }, /*#__PURE__*/React__default.createElement(StyledContent, {
    side: "bottom",
    align: "start",
    sideOffset: 4
  }, props.children));
}
function MenuItem(props) {
  return /*#__PURE__*/React__default.createElement(StyledItem, {
    onClick: props.onClick,
    disabled: props.isDisabled
  }, props.children);
}
function MenuSeparator() {
  return /*#__PURE__*/React__default.createElement(StyledSeparator, null);
}

export { Menu, MenuContent, MenuItem, MenuSeparator, MenuTrigger };
