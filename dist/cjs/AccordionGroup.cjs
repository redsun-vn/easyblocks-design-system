'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var colors = require('./colors-807b489d.js');
var icons = require('./icons.cjs');
var Typography = require('./Typography.cjs');
require('./_rollupPluginBabelHelpers-4b342fad.js');
require('./fonts-c2bffa19.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const HorizontalLine = styled__default["default"].div.withConfig({
  displayName: "AccordionGroup__HorizontalLine",
  componentId: "sc-968q5l-0"
})(["height:1px;margin-top:-1px;background-color:", ";margin:4px 10px;"], colors.Colors.black10);
const StyledWrapperChevronIcon = styled__default["default"](Typography.Typography).withConfig({
  displayName: "AccordionGroup__StyledWrapperChevronIcon",
  componentId: "sc-968q5l-1"
})(["transition:transform 0.2s ease;", ""], _ref => {
  let {
    isOpen
  } = _ref;
  return `transform: rotate(${isOpen ? 180 : 0}deg);`;
});
const StyledAccordionGroup = styled__default["default"](Typography.Typography).withConfig({
  displayName: "AccordionGroup__StyledAccordionGroup",
  componentId: "sc-968q5l-2"
})(["display:flex;align-items:center;justify-content:space-between;width:fit-content;min-width:100%;cursor:pointer;padding:6px 10px;gap:2px;"]);
const StyledAccordionGroupLabel = styled__default["default"](Typography.Typography).withConfig({
  displayName: "AccordionGroup__StyledAccordionGroupLabel",
  componentId: "sc-968q5l-3"
})(["display:block;font-weight:700;max-width:240px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;cursor:pointer;"]);
const AccordionGroup = _ref2 => {
  let {
    id,
    title,
    children,
    defaultExpanded = false,
    subTitle,
    enableBottomLine = true
  } = _ref2;
  const [isExpanded, setIsExpanded] = React.useState(defaultExpanded);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(StyledAccordionGroup, {
    id: id,
    onClick: () => setIsExpanded(prev => !prev)
  }, /*#__PURE__*/React__default["default"].createElement(StyledAccordionGroupLabel, {
    variant: "body",
    component: "label"
  }, title, subTitle), /*#__PURE__*/React__default["default"].createElement(StyledWrapperChevronIcon, {
    isOpen: isExpanded
  }, /*#__PURE__*/React__default["default"].createElement(icons.Icons.ChevronDown, {
    size: 22
  }))), isExpanded ? children : null, isExpanded && enableBottomLine ? /*#__PURE__*/React__default["default"].createElement(HorizontalLine, null) : null);
};

exports.AccordionGroup = AccordionGroup;
