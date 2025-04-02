'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('./node_modules/@radix-ui/react-tabs/dist/index.mjs.js');
var React = require('react');
var colors = require('./colors.js');
var Typography = require('./Typography.js');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const StyledRoot = styled__default["default"](index.Root).withConfig({
  displayName: "Tabs__StyledRoot",
  componentId: "sc-1nxdand-0"
})(["width:100%;"]);
const StyledTabListContainer = styled__default["default"].div.withConfig({
  displayName: "Tabs__StyledTabListContainer",
  componentId: "sc-1nxdand-1"
})(["display:flex;width:100%;justify-content:space-between;"]);
const StyledList = styled__default["default"](index.List).withConfig({
  displayName: "Tabs__StyledList",
  componentId: "sc-1nxdand-2"
})(["display:flex;flex-wrap:nowrap;gap:36px;min-height:36px;"]);
const StyledTrigger = styled__default["default"](Typography.Typography).attrs({
  component: index.Trigger
}).withConfig({
  displayName: "Tabs__StyledTrigger",
  componentId: "sc-1nxdand-3"
})(["padding:0;margin:0;border:0;background:transparent;@media (hover:hover){cursor:pointer;}&[data-state=\"active\"]{font-weight:bold;}&[data-state=\"inactive\"]{color:", ";}"], colors.Colors.black500);
function Tabs(props) {
  return /*#__PURE__*/React__default["default"].createElement(StyledRoot, {
    value: props.value,
    onValueChange: value => props.onChange(value)
  }, props.children);
}
function TabList(props) {
  return /*#__PURE__*/React__default["default"].createElement(StyledTabListContainer, null, /*#__PURE__*/React__default["default"].createElement(StyledList, null, props.children), props.action);
}
function Tab(props) {
  return /*#__PURE__*/React__default["default"].createElement(StyledTrigger, {
    value: props.value
  }, props.children);
}
function TabPanel(props) {
  return /*#__PURE__*/React__default["default"].createElement(index.TabsContent, {
    value: props.value
  }, props.children);
}

exports.Tab = Tab;
exports.TabList = TabList;
exports.TabPanel = TabPanel;
exports.Tabs = Tabs;
