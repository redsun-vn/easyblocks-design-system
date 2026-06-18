'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4b342fad.js');
var React = require('react');
var styled = require('styled-components');
var colors = require('./colors-807b489d.js');
var ControlContainer = require('./ControlContainer-6e9e5d42.js');
require('./fonts-c2bffa19.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/**
 * TODO: this toggle button doesn't make much sense from semantic perspective
 */

const StyledButton = styled.styled.button.withConfig({
  displayName: "ToggleButton__StyledButton",
  componentId: "sc-1mpua28-0"
})(["all:unset;box-sizing:border-box;width:100%;height:100%;outline:none;border:none;", " ", " border-radius:2px;background-color:", ";"], ControlContainer.getControlPadding(), p => p.hideLabel ? "padding-right: 0;" : "", p => p.selected ? colors.Colors.black10 : "transparent");
const ToggleButton = props => {
  const {
    onChange,
    ...restProps
  } = props;
  return /*#__PURE__*/React__default["default"].createElement(ControlContainer.ControlContainer, _rollupPluginBabelHelpers._extends({}, props, {
    iconBlack: true,
    iconOnly: props.hideLabel
  }), /*#__PURE__*/React__default["default"].createElement(StyledButton, _rollupPluginBabelHelpers._extends({}, restProps, {
    "aria-label": props.children,
    onClick: () => {
      props.onChange?.(!props.selected);
    }
  }), props.hideLabel ? null : props.children));
};
const SelectInlineRoot = styled.styled.div.withConfig({
  displayName: "ToggleButton__SelectInlineRoot",
  componentId: "sc-1mpua28-1"
})(["display:flex;flex-direction:row;gap:4px;flex-wrap:nowrap;"]);
const SelectInline = props => {
  const buttons = React__default["default"].Children.toArray(props.children);
  return /*#__PURE__*/React__default["default"].createElement(SelectInlineRoot, null, buttons.map(button => {
    return /*#__PURE__*/React__default["default"].cloneElement(button, {
      selected: button.props.value === props.value,
      onChange: () => {
        props.onChange(button.props.value);
      }
    });
  }));
};

exports.SelectInline = SelectInline;
exports.ToggleButton = ToggleButton;
