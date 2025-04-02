/* with love from shopstory */
import _extends from '@babel/runtime/helpers/extends';
import React__default, { forwardRef } from 'react';
import styled from 'styled-components';
import { Root as Root2, Item as Item2 } from '../node_modules/@radix-ui/react-toggle-group/dist/index.mjs.js';
import { Colors } from '../colors.js';

function ToggleGroup(props) {
  return /*#__PURE__*/React__default.createElement(Root2, {
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
const StyledToggleGroupItem = styled(Item2).withConfig({
  displayName: "ToggleGroup__StyledToggleGroupItem",
  componentId: "sc-1ceudxu-0"
})(["all:unset;box-sizing:border-box;height:28px;width:28px;display:flex;align-items:center;justify-content:center;background-color:transparent;&[aria-checked=\"true\"]{background-color:", ";}border-radius:2px;@media (hover:hover){cursor:pointer;&:hover{box-shadow:0 0 0 1px ", ";}}& svg{flex-shrink:0;}"], Colors.black10, Colors.black10);
const ToggleGroupItem = /*#__PURE__*/forwardRef(function ToggleGroupItem(_ref, forwardedRef) {
  let {
    value,
    children,
    ...props
  } = _ref;
  return /*#__PURE__*/React__default.createElement(StyledToggleGroupItem, _extends({
    value: value,
    ref: forwardedRef
  }, props), children);
});

export { ToggleGroup, ToggleGroupItem };
