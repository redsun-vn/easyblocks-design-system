'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('../node_modules/@radix-ui/react-tooltip/dist/index.cjs');
var React = require('react');
var colors = require('../colors.cjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function TooltipProvider(props) {
  return /*#__PURE__*/React__default["default"].createElement(index.Provider, null, props.children);
}
function Tooltip(props) {
  return /*#__PURE__*/React__default["default"].createElement(index.Root, null, props.children);
}
function TooltipTrigger(props) {
  return /*#__PURE__*/React__default["default"].createElement(index.Trigger, {
    asChild: true
  }, props.children);
}
function TooltipContent(props) {
  return /*#__PURE__*/React__default["default"].createElement(index.Portal, null, /*#__PURE__*/React__default["default"].createElement(index.Content, {
    style: {
      display: "flex",
      padding: "6px 4px",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "2px",
      background: colors.Colors.black800,
      color: colors.Colors.white
    }
  }, /*#__PURE__*/React__default["default"].createElement(index.Arrow, {
    style: {
      fill: colors.Colors.black800
    }
  }), props.children));
}

exports.Tooltip = Tooltip;
exports.TooltipContent = TooltipContent;
exports.TooltipProvider = TooltipProvider;
exports.TooltipTrigger = TooltipTrigger;
