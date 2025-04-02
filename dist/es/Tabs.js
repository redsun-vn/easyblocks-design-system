/* with love from shopstory */
import { Root as Root2, List, Trigger, TabsContent } from './node_modules/@radix-ui/react-tabs/dist/index.mjs.js';
import React__default from 'react';
import { Colors } from './colors.js';
import { Typography } from './Typography.js';
import styled from 'styled-components';

const StyledRoot = styled(Root2).withConfig({
  displayName: "Tabs__StyledRoot",
  componentId: "sc-1nxdand-0"
})(["width:100%;"]);
const StyledTabListContainer = styled.div.withConfig({
  displayName: "Tabs__StyledTabListContainer",
  componentId: "sc-1nxdand-1"
})(["display:flex;width:100%;justify-content:space-between;"]);
const StyledList = styled(List).withConfig({
  displayName: "Tabs__StyledList",
  componentId: "sc-1nxdand-2"
})(["display:flex;flex-wrap:nowrap;gap:36px;min-height:36px;"]);
const StyledTrigger = styled(Typography).attrs({
  component: Trigger
}).withConfig({
  displayName: "Tabs__StyledTrigger",
  componentId: "sc-1nxdand-3"
})(["padding:0;margin:0;border:0;background:transparent;@media (hover:hover){cursor:pointer;}&[data-state=\"active\"]{font-weight:bold;}&[data-state=\"inactive\"]{color:", ";}"], Colors.black500);
function Tabs(props) {
  return /*#__PURE__*/React__default.createElement(StyledRoot, {
    value: props.value,
    onValueChange: value => props.onChange(value)
  }, props.children);
}
function TabList(props) {
  return /*#__PURE__*/React__default.createElement(StyledTabListContainer, null, /*#__PURE__*/React__default.createElement(StyledList, null, props.children), props.action);
}
function Tab(props) {
  return /*#__PURE__*/React__default.createElement(StyledTrigger, {
    value: props.value
  }, props.children);
}
function TabPanel(props) {
  return /*#__PURE__*/React__default.createElement(TabsContent, {
    value: props.value
  }, props.children);
}

export { Tab, TabList, TabPanel, Tabs };
