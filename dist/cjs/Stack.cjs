'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styledComponents = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const StackWrapper = styledComponents.styled.div.withConfig({
  displayName: "Stack__StackWrapper",
  componentId: "sc-1wi5rsl-0"
})(["display:flex;flex-direction:column;gap:", "px;align-items:", ";"], props => props.gap, props => props.align === "start" ? "flex-start" : props.align === "end" ? "flex-end" : props.align === "stretch" ? "stretch" : "center");
function Stack(props) {
  return /*#__PURE__*/React__default["default"].createElement(StackWrapper, {
    gap: props.gap,
    align: props.align ?? "stretch",
    className: props.className
  }, props.children);
}

exports.Stack = Stack;
