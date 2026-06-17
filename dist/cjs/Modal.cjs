'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4b342fad.js');
var React = require('react');
var styledComponents = require('styled-components');
var fonts = require('./fonts-c2bffa19.js');
var buttons = require('./buttons.cjs');
var icons = require('./icons.cjs');
var colors = require('./colors-807b489d.js');
var Input = require('./Input-a459c103.js');
var ReactModal = require('react-modal');
require('./Loader.cjs');
require('./Tooltip.cjs');
require('./index-e658c804.js');
require('react/jsx-runtime');
require('react-dom');
require('./index-8160a594.js');
require('./index-004169c7.js');
require('./index-d3e89138.js');
require('react-best-gradient-color-picker');
require('./ControlContainer-eeaacf1a.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ReactModal__default = /*#__PURE__*/_interopDefaultLegacy(ReactModal);

const ModalRoot = styledComponents.styled.div.withConfig({
  displayName: "Modal__ModalRoot",
  componentId: "sc-wv205r-0"
})([""]);
const Root = styledComponents.styled.div.withConfig({
  displayName: "Modal__Root",
  componentId: "sc-wv205r-1"
})(["width:", ";max-width:", ";height:", ";max-height:", ";position:relative;box-shadow:0px 2px 14px rgba(0,0,0,0.15);border-radius:4px;display:grid;grid-template-columns:1fr;grid-template-rows:auto 1fr;background-color:white;overflow:hidden;"], p => p.width || "100%", p => p.maxWidth || "none", p => p.height || "auto", p => p.maxHeight || "none");
const HeaderBody = styledComponents.styled.div.withConfig({
  displayName: "Modal__HeaderBody",
  componentId: "sc-wv205r-2"
})(["position:relative;", " color:black;"], p => p.headerLine && `border-bottom: 1px solid ${colors.Colors.black10};`);
const ContentBody = styledComponents.styled.div.withConfig({
  displayName: "Modal__ContentBody",
  componentId: "sc-wv205r-3"
})(["position:relative;overflow-y:", ";overflow-x:hidden;padding:", ";"], p => p.maxHeight == "auto" ? "auto" : "scroll", p => p.noPadding ? "0" : "12px 12px");
const EndAdornmentContentBody = styledComponents.styled.div.withConfig({
  displayName: "Modal__EndAdornmentContentBody",
  componentId: "sc-wv205r-4"
})(["position:sticky;bottom:0px;padding:", ";"], p => p.noPadding ? "0" : "0 12px 12px 12px");
const TitleHeader = styledComponents.styled.div.withConfig({
  displayName: "Modal__TitleHeader",
  componentId: "sc-wv205r-5"
})(["&:not(:empty){padding:12px;}display:flex;flex-direction:row;justify-content:space-between;align-items:center;gap:2rem;"]);
const TitleHeaderLabel = styledComponents.styled.div.withConfig({
  displayName: "Modal__TitleHeaderLabel",
  componentId: "sc-wv205r-6"
})(["white-space:nowrap;", ";"], fonts.Fonts.label);
const HeaderLetter = styledComponents.styled.div.withConfig({
  displayName: "Modal__HeaderLetter",
  componentId: "sc-wv205r-7"
})(["width:24px;height:24px;border-radius:4px;background-color:", ";", ";display:flex;justify-content:center;align-items:center;"], colors.Colors.black10, fonts.Fonts.label3);
const ModalBody = _ref => {
  let {
    onRequestClose,
    title,
    width,
    maxHeight,
    maxWidth,
    headerLine,
    ...props
  } = _ref;
  const {
    children,
    endAdornment,
    headerSymbol = "close",
    searchProps
  } = props;
  return /*#__PURE__*/React__default["default"].createElement(Root, _rollupPluginBabelHelpers._extends({
    width: width,
    maxWidth: maxWidth,
    maxHeight: maxHeight
  }, props), /*#__PURE__*/React__default["default"].createElement(HeaderBody, {
    headerLine: headerLine
  }, /*#__PURE__*/React__default["default"].createElement(TitleHeader, null, title && /*#__PURE__*/React__default["default"].createElement(TitleHeaderLabel, null, title), searchProps && /*#__PURE__*/React__default["default"].createElement(Input.InputRaw, _rollupPluginBabelHelpers._extends({}, searchProps, {
    ref: node => {
      if (node) {
        node.focus();
      }
    }
  })), headerSymbol === "close" && onRequestClose !== undefined && /*#__PURE__*/React__default["default"].createElement(buttons.ButtonGhost, {
    icon: icons.Icons.Close,
    hideLabel: true,
    showTooltip: false,
    onClick: () => {
      if (onRequestClose) {
        onRequestClose();
      }
    }
  }, "Close"), headerSymbol && headerSymbol !== "close" && /*#__PURE__*/React__default["default"].createElement(HeaderLetter, null, headerSymbol))), /*#__PURE__*/React__default["default"].createElement(ContentBody, _rollupPluginBabelHelpers._extends({
    maxHeight: maxHeight
  }, props), children), /*#__PURE__*/React__default["default"].createElement(EndAdornmentContentBody, props, endAdornment));
};
const MODES = {
  "center-small": {
    width: "320px",
    maxHeight: "420px",
    extraClass: ""
  },
  "center-huge": {
    width: "80vw",
    maxWidth: "1200px",
    height: "90vh",
    extraClass: "background-shade"
  },
  fit: {
    width: "fit-content",
    height: "80vh",
    extraClass: ""
  }
};
const ModalContext = /*#__PURE__*/React__default["default"].createContext(null);
const Modal = props => {
  const {
    isOpen,
    onRequestClose,
    mode = "center-small",
    ...bodyProps
  } = props;
  const parentSelector = React.useContext(ModalContext) ?? (() => {
    return document.querySelector("#modalContainer");
  });
  if (typeof window === "undefined") {
    return null;
  }
  const {
    extraClass,
    ...modeProps
  } = MODES[mode];
  const content = /*#__PURE__*/React__default["default"].createElement(ModalRoot, null, /*#__PURE__*/React__default["default"].createElement(ModalBody, _rollupPluginBabelHelpers._extends({}, modeProps, bodyProps, {
    onRequestClose: onRequestClose
  })));
  return /*#__PURE__*/React__default["default"].createElement(ReactModal__default["default"], {
    isOpen: isOpen,
    onRequestClose: onRequestClose,
    parentSelector: parentSelector,
    className: {
      base: `Shopstory__ReactModal__Content`,
      afterOpen: `Shopstory__ReactModal__Content--after-open`,
      beforeClose: `Shopstory__ReactModal__Content--before-close`
    },
    overlayClassName: {
      base: `Shopstory__ReactModal__Overlay ${extraClass}`,
      afterOpen: `Shopstory__ReactModal__Overlay--after-open ${extraClass}`,
      beforeClose: `Shopstory__ReactModal__Overlay--before-close ${extraClass}`
    },
    ariaHideApp: false,
    portalClassName: "Shopstory__ReactModalPortal",
    closeTimeoutMS: 0
  }, content);
};
const sharedContentStyles = `
    &:focus {
      border: none;
      outline: none;
    }
`;
const GlobalModalStyles = styledComponents.createGlobalStyle([".Shopstory__ReactModalPortal{position:absolute;top:0;left:0;width:100%;height:100%;}.Shopstory__ReactModal__Overlay{width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;&:before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;opacity:0.2;z-index:-1;}}.Shopstory__ReactModal__Overlay.background-shade{&:before{background-color:black;}}.Shopstory__ReactModal__Content{", "}.Shopstory__ReactModal__Content__Left{", " height:100vh;width:70vw;transition:all 350ms cubic-bezier(0.16,1,0.3,1);transform:translateX(-100%);}.Shopstory__ReactModal__Content__Left.Shopstory__ReactModal__Content__Left--after-open{transform:none;}.Shopstory__ReactModal__Content__Left.Shopstory__ReactModal__Content__Left--before-close{transform:translateX(-100%);}"], sharedContentStyles, sharedContentStyles);

exports.GlobalModalStyles = GlobalModalStyles;
exports.Modal = Modal;
exports.ModalBody = ModalBody;
exports.ModalContext = ModalContext;
