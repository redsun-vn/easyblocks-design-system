import { _ as _extends } from './_rollupPluginBabelHelpers-c245b26a.js';
import React__default, { useContext } from 'react';
import { styled, createGlobalStyle } from 'styled-components';
import { F as Fonts } from './fonts-84085e3a.js';
import { ButtonGhost } from './buttons.js';
import { Icons } from './icons.js';
import { C as Colors } from './colors-b56a153c.js';
import { I as InputRaw } from './Input-a67ca8ac.js';
import ReactModal from 'react-modal';
import './Loader.js';
import './Tooltip.js';
import './index-f673d433.js';
import 'react/jsx-runtime';
import 'react-dom';
import './index-6ce467f8.js';
import './index-b883c295.js';
import './index-617be02a.js';
import 'react-best-gradient-color-picker';
import './ControlContainer-40ed87f0.js';

const ModalRoot = styled.div.withConfig({
  displayName: "Modal__ModalRoot",
  componentId: "sc-wv205r-0"
})([""]);
const Root = styled.div.withConfig({
  displayName: "Modal__Root",
  componentId: "sc-wv205r-1"
})(["width:", ";max-width:", ";height:", ";max-height:", ";position:relative;box-shadow:0px 2px 14px rgba(0,0,0,0.15);border-radius:4px;display:grid;grid-template-columns:1fr;grid-template-rows:auto 1fr;background-color:white;overflow:hidden;"], p => p.width || "100%", p => p.maxWidth || "none", p => p.height || "auto", p => p.maxHeight || "none");
const HeaderBody = styled.div.withConfig({
  displayName: "Modal__HeaderBody",
  componentId: "sc-wv205r-2"
})(["position:relative;", " color:black;"], p => p.headerLine && `border-bottom: 1px solid ${Colors.black10};`);
const ContentBody = styled.div.withConfig({
  displayName: "Modal__ContentBody",
  componentId: "sc-wv205r-3"
})(["position:relative;overflow-y:", ";overflow-x:hidden;padding:", ";"], p => p.maxHeight == "auto" ? "auto" : "scroll", p => p.noPadding ? "0" : "12px 12px");
const EndAdornmentContentBody = styled.div.withConfig({
  displayName: "Modal__EndAdornmentContentBody",
  componentId: "sc-wv205r-4"
})(["position:sticky;bottom:0px;padding:", ";"], p => p.noPadding ? "0" : "0 12px 12px 12px");
const TitleHeader = styled.div.withConfig({
  displayName: "Modal__TitleHeader",
  componentId: "sc-wv205r-5"
})(["&:not(:empty){padding:12px;}display:flex;flex-direction:row;justify-content:space-between;align-items:center;gap:2rem;"]);
const TitleHeaderLabel = styled.div.withConfig({
  displayName: "Modal__TitleHeaderLabel",
  componentId: "sc-wv205r-6"
})(["white-space:nowrap;", ";"], Fonts.label);
const HeaderLetter = styled.div.withConfig({
  displayName: "Modal__HeaderLetter",
  componentId: "sc-wv205r-7"
})(["width:24px;height:24px;border-radius:4px;background-color:", ";", ";display:flex;justify-content:center;align-items:center;"], Colors.black10, Fonts.label3);
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
  return /*#__PURE__*/React__default.createElement(Root, _extends({
    width: width,
    maxWidth: maxWidth,
    maxHeight: maxHeight
  }, props), /*#__PURE__*/React__default.createElement(HeaderBody, {
    headerLine: headerLine
  }, /*#__PURE__*/React__default.createElement(TitleHeader, null, title && /*#__PURE__*/React__default.createElement(TitleHeaderLabel, null, title), searchProps && /*#__PURE__*/React__default.createElement(InputRaw, _extends({}, searchProps, {
    ref: node => {
      if (node) {
        node.focus();
      }
    }
  })), headerSymbol === "close" && onRequestClose !== undefined && /*#__PURE__*/React__default.createElement(ButtonGhost, {
    icon: Icons.Close,
    hideLabel: true,
    showTooltip: false,
    onClick: () => {
      if (onRequestClose) {
        onRequestClose();
      }
    }
  }, "Close"), headerSymbol && headerSymbol !== "close" && /*#__PURE__*/React__default.createElement(HeaderLetter, null, headerSymbol))), /*#__PURE__*/React__default.createElement(ContentBody, _extends({
    maxHeight: maxHeight
  }, props), children), /*#__PURE__*/React__default.createElement(EndAdornmentContentBody, props, endAdornment));
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
const ModalContext = /*#__PURE__*/React__default.createContext(null);
const Modal = props => {
  const {
    isOpen,
    onRequestClose,
    mode = "center-small",
    ...bodyProps
  } = props;
  const parentSelector = useContext(ModalContext) ?? (() => {
    return document.querySelector("#modalContainer");
  });
  if (typeof window === "undefined") {
    return null;
  }
  const {
    extraClass,
    ...modeProps
  } = MODES[mode];
  const content = /*#__PURE__*/React__default.createElement(ModalRoot, null, /*#__PURE__*/React__default.createElement(ModalBody, _extends({}, modeProps, bodyProps, {
    onRequestClose: onRequestClose
  })));
  return /*#__PURE__*/React__default.createElement(ReactModal, {
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
const GlobalModalStyles = createGlobalStyle([".Shopstory__ReactModalPortal{position:absolute;top:0;left:0;width:100%;height:100%;}.Shopstory__ReactModal__Overlay{width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;&:before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;opacity:0.2;z-index:-1;}}.Shopstory__ReactModal__Overlay.background-shade{&:before{background-color:black;}}.Shopstory__ReactModal__Content{", "}.Shopstory__ReactModal__Content__Left{", " height:100vh;width:70vw;transition:all 350ms cubic-bezier(0.16,1,0.3,1);transform:translateX(-100%);}.Shopstory__ReactModal__Content__Left.Shopstory__ReactModal__Content__Left--after-open{transform:none;}.Shopstory__ReactModal__Content__Left.Shopstory__ReactModal__Content__Left--before-close{transform:translateX(-100%);}"], sharedContentStyles, sharedContentStyles);

export { GlobalModalStyles, Modal, ModalBody, ModalContext };
