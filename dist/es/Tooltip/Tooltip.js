import { Provider, Root as Root3, Trigger, Portal, Content as Content2, Arrow as Arrow2 } from '../node_modules/@radix-ui/react-tooltip/dist/index.mjs.js';
import React__default from 'react';
import { Colors } from '../colors.js';

function TooltipProvider(props) {
  return /*#__PURE__*/React__default.createElement(Provider, null, props.children);
}
function Tooltip(props) {
  return /*#__PURE__*/React__default.createElement(Root3, null, props.children);
}
function TooltipTrigger(props) {
  return /*#__PURE__*/React__default.createElement(Trigger, {
    asChild: true
  }, props.children);
}
function TooltipContent(props) {
  return /*#__PURE__*/React__default.createElement(Portal, null, /*#__PURE__*/React__default.createElement(Content2, {
    style: {
      display: "flex",
      padding: "6px 4px",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "2px",
      background: Colors.black800,
      color: Colors.white
    }
  }, /*#__PURE__*/React__default.createElement(Arrow2, {
    style: {
      fill: Colors.black800
    }
  }), props.children));
}

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };
