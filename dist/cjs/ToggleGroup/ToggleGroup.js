'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('@babel/runtime/helpers/extends');
var React = require('react');
var styled = require('styled-components');
var index = require('../node_modules/@radix-ui/react-toggle-group/dist/index.mjs.js');
var colors = require('../colors.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

function ToggleGroup(props) {
  return /*#__PURE__*/React__default["default"].createElement(index.Root, {
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
const StyledToggleGroupItem = styled__default["default"](index.Item).withConfig({
  displayName: "ToggleGroup__StyledToggleGroupItem",
  componentId: "sc-1ceudxu-0"
})(["all:unset;box-sizing:border-box;height:28px;width:28px;display:flex;align-items:center;justify-content:center;background-color:transparent;&[aria-checked=\"true\"]{background-color:", ";}border-radius:2px;@media (hover:hover){cursor:pointer;&:hover{box-shadow:0 0 0 1px ", ";}}& svg{flex-shrink:0;}"], colors.Colors.black10, colors.Colors.black10);
const ToggleGroupItem = /*#__PURE__*/React.forwardRef(function ToggleGroupItem(_ref, forwardedRef) {
  let {
    value,
    children,
    ...props
  } = _ref;
  return /*#__PURE__*/React__default["default"].createElement(StyledToggleGroupItem, _extends__default["default"]({
    value: value,
    ref: forwardedRef
  }, props), children);
});

exports.ToggleGroup = ToggleGroup;
exports.ToggleGroupItem = ToggleGroupItem;
