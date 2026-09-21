'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var reactIcons_esm = require('./react-icons.esm-402e7dcb.js');
var index = require('./index-47fa8157.js');
var React = require('react');
var styled = require('styled-components');
var colors = require('./colors-807b489d.js');
var fonts = require('./fonts-c2bffa19.js');
require('react-dom');
require('./index-e658c804.js');
require('react/jsx-runtime');
require('./index-4f5b0ced.js');
require('./index-242953d1.js');
require('./index-bee2af92.js');
require('./floating-ui.react-dom-93d904eb.js');
require('./index-d3e89138.js');
require('react-remove-scroll');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/**
 * How a select trigger looks, kept apart so there is one of it.
 *
 * The colour field in the editor draws its own trigger — it shows a swatch
 * rather than text — and did so by copying these rules. Both copies were then
 * missing the same resting outline, which is how a fix in one place left the
 * other still invisible.
 */
const selectTriggerStyles = styled.css`
  all: unset;

  display: flex;
  align-items: center;

  ${fonts.Fonts.body};
  gap: 4px;
  max-width: 100%;

  box-sizing: border-box;
  height: 28px;
  padding: 0 2px 0 6px;
  border-radius: 2px;

  /*
   * A resting outline, the same one every other control in the panel wears.
   *
   * The reset above leaves the trigger with no edge of its own, and the only
   * rule here used to be a hover one — so a panel of a dozen dropdowns was a
   * column of bare words with nothing to say they could be opened, and the
   * pointer had to find them one at a time. Worse, the shade it showed on
   * hover is the shade everything else shows at rest, so the select was a step
   * behind its neighbours in every state.
   *
   * The two shades and the focus ring are ControlContainer's, because a select
   * and a text field sitting in the same row should not be lit differently.
   */
  box-shadow: 0 0 0 1px ${colors.Colors.black10};
  transition: box-shadow 0.1s;

  @media (hover: hover) {
    &:hover {
      box-shadow: 0 0 0 1px ${colors.Colors.black20};
    }
  }

  &:focus-visible,
  &[data-state="open"] {
    box-shadow: 0 0 0 2px ${colors.Colors.focus};
  }
`;
const SelectTrigger = styled.styled(index.Trigger).withConfig({
  displayName: "Select__SelectTrigger",
  componentId: "sc-1ehkd60-0"
})(["", ""], selectTriggerStyles);
function Select(props) {
  return /*#__PURE__*/React__default["default"].createElement(index.Root2, {
    value: props.value,
    onValueChange: props.onChange
  }, /*#__PURE__*/React__default["default"].createElement(SelectTrigger, null, /*#__PURE__*/React__default["default"].createElement(index.Value, {
    style: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      ...props.style
    },
    placeholder: props.placeholder ?? "Select a value..."
  }), /*#__PURE__*/React__default["default"].createElement(index.Icon, null, /*#__PURE__*/React__default["default"].createElement(reactIcons_esm.ChevronDownIcon, {
    color: colors.Colors.black40
  }))), /*#__PURE__*/React__default["default"].createElement(index.Portal, null, /*#__PURE__*/React__default["default"].createElement(index.Content2, {
    style: {
      minWidth: "100px",
      maxHeight: "600px",
      padding: "4px 0",
      background: "#fff",
      border: `1px solid ${colors.Colors.black10}`,
      borderRadius: "2px",
      boxShadow: "0px 2px 14px 0px rgba(0, 0, 0, 0.15)",
      zIndex: 999999
    }
  }, /*#__PURE__*/React__default["default"].createElement(index.Viewport, null, props.children))));
}
const SelectItemWrapper = styled.styled(index.Item).withConfig({
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
  })), /*#__PURE__*/React__default["default"].createElement(index.ItemText, {
    style: props.style
  }, props.children));
});
SelectItem.displayName = "SelectItem";
const StyledSeparator = styled.styled(index.Separator).withConfig({
  displayName: "Select__StyledSeparator",
  componentId: "sc-1ehkd60-2"
})(["height:1px;margin:4px;background:", ";"], colors.Colors.black100);
function SelectSeparator() {
  return /*#__PURE__*/React__default["default"].createElement(StyledSeparator, null);
}

exports.Select = Select;
exports.SelectItem = SelectItem;
exports.SelectSeparator = SelectSeparator;
exports.selectTriggerStyles = selectTriggerStyles;
