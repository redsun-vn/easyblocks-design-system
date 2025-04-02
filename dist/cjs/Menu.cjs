'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('./node_modules/@radix-ui/react-dropdown-menu/dist/index.cjs');
var React = require('react');
var colors = require('./colors.cjs');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

function Menu(props) {
  return /*#__PURE__*/React__default["default"].createElement(index.Root, null, props.children);
}
function MenuTrigger(props) {
  return /*#__PURE__*/React__default["default"].createElement(index.Trigger, {
    asChild: true
  }, props.children);
}
const StyledContent = styled__default["default"](index.Content).withConfig({
  displayName: "Menu__StyledContent",
  componentId: "sc-15igjrv-0"
})(["min-width:200px;padding:0 4px;background-color:", ";border-radius:4px;"], colors.Colors.black800);
const StyledItem = styled__default["default"](index.Item).withConfig({
  displayName: "Menu__StyledItem",
  componentId: "sc-15igjrv-1"
})(["padding:10px 8px;&:focus{background-color:", ";}@media (hover:hover){&:hover:not([aria-disabled=\"true\"]){cursor:pointer;background-color:", ";}}"], colors.Colors.black700, colors.Colors.black700);
const StyledSeparator = styled__default["default"](index.Separator).withConfig({
  displayName: "Menu__StyledSeparator",
  componentId: "sc-15igjrv-2"
})(["height:1px;background-color:", ";"], colors.Colors.black700);
function MenuContent(props) {
  return /*#__PURE__*/React__default["default"].createElement(index.Portal, {
    container: props.container
  }, /*#__PURE__*/React__default["default"].createElement(StyledContent, {
    side: "bottom",
    align: "start",
    sideOffset: 4
  }, props.children));
}
function MenuItem(props) {
  return /*#__PURE__*/React__default["default"].createElement(StyledItem, {
    onClick: props.onClick,
    disabled: props.isDisabled
  }, props.children);
}
function MenuSeparator() {
  return /*#__PURE__*/React__default["default"].createElement(StyledSeparator, null);
}

exports.Menu = Menu;
exports.MenuContent = MenuContent;
exports.MenuItem = MenuItem;
exports.MenuSeparator = MenuSeparator;
exports.MenuTrigger = MenuTrigger;
