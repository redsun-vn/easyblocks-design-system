/* with love from shopstory */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var reactIcons_esm = require('../node_modules/@radix-ui/react-icons/dist/react-icons.esm.cjs');
var index = require('../node_modules/@radix-ui/react-select/dist/index.cjs');
var React = require('react');
var styled = require('styled-components');
var colors = require('../colors.cjs');
var fonts = require('../fonts.cjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const SelectTrigger = styled__default["default"](index.Trigger).withConfig({
  displayName: "Select__SelectTrigger",
  componentId: "sc-1ehkd60-0"
})(["all:unset;display:flex;align-items:center;", ";display:flex;gap:4px;max-width:100%;box-sizing:border-box;height:28px;padding:0 2px 0 6px;border-radius:2px;@media (hover:hover){&:hover{box-shadow:0 0 0 1px ", ";}}"], fonts.Fonts.body, colors.Colors.black10);
function Select(props) {
  return /*#__PURE__*/React__default["default"].createElement(index.Root, {
    value: props.value,
    onValueChange: props.onChange
  }, /*#__PURE__*/React__default["default"].createElement(SelectTrigger, null, /*#__PURE__*/React__default["default"].createElement(index.Value, {
    style: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    },
    placeholder: props.placeholder ?? "Select a value..."
  }), /*#__PURE__*/React__default["default"].createElement(index.Icon, null, /*#__PURE__*/React__default["default"].createElement(reactIcons_esm.ChevronDownIcon, {
    color: colors.Colors.black40
  }))), /*#__PURE__*/React__default["default"].createElement(index.Portal, null, /*#__PURE__*/React__default["default"].createElement(index.Content, {
    style: {
      minWidth: "100px",
      maxHeight: "600px",
      padding: "4px 0",
      background: "#fff",
      border: `1px solid ${colors.Colors.black10}`,
      borderRadius: "2px",
      boxShadow: "0px 2px 14px 0px rgba(0, 0, 0, 0.15)"
    }
  }, /*#__PURE__*/React__default["default"].createElement(index.Viewport, null, props.children))));
}
const SelectItemWrapper = styled__default["default"](index.Item).withConfig({
  displayName: "Select__SelectItemWrapper",
  componentId: "sc-1ehkd60-1"
})(["display:flex;align-items:center;gap:6px;box-sizing:border-box;min-height:28px;padding:0 6px;", ";color:#000;background:#fff;outline:none;&[data-state=\"unchecked\"]{padding-left:calc(6px + 15px + 6px);}&[data-highlighted]{background:#daeafd;}@media (hover:hover){cursor:pointer;}"], fonts.Fonts.body);
const SelectItem = /*#__PURE__*/React.forwardRef((props, ref) => {
  return /*#__PURE__*/React__default["default"].createElement(SelectItemWrapper, {
    value: props.value,
    disabled: props.isDisabled ?? false,
    ref: ref
  }, /*#__PURE__*/React__default["default"].createElement(index.ItemIndicator, null, /*#__PURE__*/React__default["default"].createElement(reactIcons_esm.CheckIcon, {
    color: "#202123"
  })), /*#__PURE__*/React__default["default"].createElement(index.ItemText, null, props.children));
});
const StyledSeparator = styled__default["default"](index.Separator).withConfig({
  displayName: "Select__StyledSeparator",
  componentId: "sc-1ehkd60-2"
})(["height:1px;margin:4px;background:", ";"], colors.Colors.black100);
function SelectSeparator() {
  return /*#__PURE__*/React__default["default"].createElement(StyledSeparator, null);
}

exports.Select = Select;
exports.SelectItem = SelectItem;
exports.SelectSeparator = SelectSeparator;
