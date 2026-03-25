'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Tooltip = require('./Tooltip-0806136e.js');
var styledComponents = require('styled-components');
var fonts = require('./fonts-c2bffa19.js');
var _extends = require('@babel/runtime/helpers/extends');
var React = require('react');
var ReactDOM = require('react-dom');
var jsxRuntime = require('react/jsx-runtime');
var reactRemoveScroll = require('react-remove-scroll');
var debounce = require('lodash/debounce');
var _ColorPicker = require('react-best-gradient-color-picker');
var ReactModal = require('react-modal');
var Select$2 = require('react-select');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var React__namespace = /*#__PURE__*/_interopNamespace(React);
var ReactDOM__namespace = /*#__PURE__*/_interopNamespace(ReactDOM);
var debounce__default = /*#__PURE__*/_interopDefaultLegacy(debounce);
var _ColorPicker__default = /*#__PURE__*/_interopDefaultLegacy(_ColorPicker);
var ReactModal__default = /*#__PURE__*/_interopDefaultLegacy(ReactModal);
var Select__default = /*#__PURE__*/_interopDefaultLegacy(Select$2);

const DEFAULT_SIZE = 6;
const CustomComponentSymbol = styledComponents.styled.div.withConfig({
  displayName: "CustomComponentSymbol",
  componentId: "sc-1b4wdw-0"
})(["width:", "px;height:", "px;background:", ";transform:rotate(45deg);"], p => p.size ?? DEFAULT_SIZE, p => p.size ?? DEFAULT_SIZE, Tooltip.Colors.purple);

const IconContainer$1 = styledComponents.styled.div.withConfig({
  shouldForwardProp(prop) {
    return !["size", "isStroke"].includes(prop);
  }
}).withConfig({
  displayName: "icons__IconContainer",
  componentId: "sc-9uvw0q-0"
})(["svg{width:", ";height:", ";display:block;}", ""], p => (p.size || 16) + "px", p => (p.size || 16) + "px", p => p.isStroke ? `
    svg > [stroke] {
      stroke: currentColor;
    }
    
    svg > [fill] {
      fill: none;
    }
    
  ` : `
  
    svg > [stroke] {
      fill: none;
    }
    
    svg > [fill] {
      fill: currentColor;
    }
    
  `);
function createIcon(svg) {
  let isStroke = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return props => {
    return /*#__PURE__*/React__default["default"].createElement(IconContainer$1, _extends__default["default"]({}, props, {
      isStroke: isStroke
    }), svg);
  };
}
const Dropdown = createIcon(/*#__PURE__*/React__default["default"].createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M8.35355 10.0606L8.70711 9.70709L11.7071 6.70709L11 5.99998L8.35355 8.64643L5.70711 5.99998L5 6.70709L8 9.70709L8.35355 10.0606Z",
  fill: "black"
})));
const MaxHeight = createIcon(/*#__PURE__*/React__default["default"].createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M14 2H2.5V1H14V2ZM8.54545 2.82172L8.88332 3.13142L11.0651 5.13142L10.3894 5.86858L9.04545 4.63662V10.8634L10.3894 9.63142L11.0651 10.3686L8.88332 12.3686L8.54545 12.6783L8.20759 12.3686L8.54545 12L8.20758 12.3686L8.20753 12.3685L8.20735 12.3684L8.20663 12.3677L8.20375 12.3651L8.19245 12.3547L8.14879 12.3147L7.9865 12.1659L7.4362 11.6615L6.02577 10.3686L6.7015 9.63142L8.04545 10.8634V4.63662L6.7015 5.86858L6.02577 5.13142L8.20759 3.13142L8.54545 2.82172ZM8.54545 15H2.5V14H8.54545H14V15H8.54545Z",
  fill: "black"
})));
const Add = createIcon(/*#__PURE__*/React__default["default"].createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M8 2V14M2 8H14",
  stroke: "black"
})), true);
const AlignLeft = createIcon(/*#__PURE__*/React__default["default"].createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M1 3H15V4H1V3ZM1 7H9V8H1V7ZM11 11H1V12H11V11Z",
  fill: "black"
})));
const AlignCenter = createIcon(/*#__PURE__*/React__default["default"].createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M1 3H15V4H1V3ZM4 7H12V8H4V7ZM13 11H3V12H13V11Z",
  fill: "black"
})));
const AlignRight = createIcon(/*#__PURE__*/React__default["default"].createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M1 3H15V4H1V3ZM7 7H15V8H7V7ZM15 11H5V12H15V11Z",
  fill: "black"
})));
const Close = createIcon(/*#__PURE__*/React__default["default"].createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M7.76732 7.06025L12.2584 2.56918L12.9655 3.27629L8.47443 7.76735L12.9655 12.2584L12.2584 12.9655L7.76732 8.47446L3.2763 12.9655L2.56919 12.2584L7.06021 7.76735L2.56919 3.27637L3.2763 2.56926L7.76732 7.06025Z",
  fill: "black"
})));
const Desktop = createIcon(/*#__PURE__*/React__default["default"].createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M10 13H6V12H10V13Z",
  fill: "black"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M14 3H2V10H14V3ZM1 2V11H15V2H1Z",
  fill: "black"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M11 13L5 13V12L11 12V13Z",
  fill: "black"
})));
const Mobile = createIcon(/*#__PURE__*/React__default["default"].createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M10 2H6C5.44772 2 5 2.44772 5 3V13C5 13.5523 5.44772 14 6 14H10C10.5523 14 11 13.5523 11 13V3C11 2.44772 10.5523 2 10 2ZM6 1C4.89543 1 4 1.89543 4 3V13C4 14.1046 4.89543 15 6 15H10C11.1046 15 12 14.1046 12 13V3C12 1.89543 11.1046 1 10 1H6Z",
  fill: "black"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M10 13H6V12H10V13Z",
  fill: "black"
})));
const Drag = createIcon(/*#__PURE__*/React__default["default"].createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M7 3H5V5H7V3ZM7 7H5V9H7V7ZM5 11H7V13H5V11ZM11 3H9V5H11V3ZM9 7H11V9H9V7ZM11 11H9V13H11V11Z",
  fill: "black",
  fillOpacity: "0.8"
})));
const ArrowDown = createIcon(/*#__PURE__*/React__default["default"].createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M8 12L8 2.5M8 12L5 9M8 12L11 9",
  stroke: "black"
})), true);
const ArrowUp = createIcon(/*#__PURE__*/React__default["default"].createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M8 4L8 13.5M8 4L5 7M8 4L11 7",
  stroke: "black"
})), true);
const ArrowRight = createIcon(/*#__PURE__*/React__default["default"].createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M12 8L2.5 8M12 8L9 11M12 8L9 5",
  stroke: "black"
})), true);
const Master = createIcon(/*#__PURE__*/React__default["default"].createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M5.75417 5.29515L8.04931 3L10.3445 5.29515L8.04931 7.59029L5.75417 5.29515Z",
  fill: "black"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M5.75417 10.8035L8.04931 8.50835L10.3445 10.8035L8.04931 13.0986L5.75417 10.8035Z",
  fill: "black"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M3 8.04933L5.29515 5.75418L7.59029 8.04933L5.29515 10.3445L3 8.04933Z",
  fill: "black"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M8.50835 8.04933L10.8035 5.75418L13.0986 8.04933L10.8035 10.3445L8.50835 8.04933Z",
  fill: "black"
})));
const Redo = createIcon(/*#__PURE__*/React__default["default"].createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M12.0858 6.35355L9.43934 9L10.1464 9.70711L13.6464 6.20711L14 5.85355L13.6464 5.5L10.1464 2L9.43934 2.70711L12.0858 5.35355H8.29289C4.71675 5.35355 1.79289 8.27741 1.79289 11.8536L1.79289 13.3536H2.79289L2.79289 11.8536C2.79289 8.8297 5.26904 6.35355 8.29289 6.35355H12.0858Z",
  fill: "black"
})));
const Undo = createIcon(/*#__PURE__*/React__default["default"].createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M3.91421 6.35355L6.56066 9L5.85355 9.70711L2.35355 6.20711L2 5.85355L2.35355 5.5L5.85355 2L6.56066 2.70711L3.91421 5.35355H7.70711C11.2832 5.35355 14.2071 8.27741 14.2071 11.8536L14.2071 13.3536H13.2071L13.2071 11.8536C13.2071 8.8297 10.731 6.35355 7.70711 6.35355H3.91421Z",
  fill: "black"
})));
const Remove = createIcon(/*#__PURE__*/React__default["default"].createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M14 8.5H2V7.5H14V8.5Z",
  fill: "black",
  fillOpacity: "0.8"
})));
const ChevronRight = createIcon(/*#__PURE__*/React__default["default"].createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M10.0607 8.64645L9.70711 8.29289L6.70711 5.29289L6 6L8.64645 8.64645L6 11.2929L6.70711 12L9.70711 9L10.0607 8.64645Z",
  fill: "black"
})));
const Back = createIcon(/*#__PURE__*/React__default["default"].createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M10.5 3L6 7.5L10.5 12",
  stroke: "black"
})), true);
const Share = createIcon(/*#__PURE__*/React__default["default"].createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M8.35355 0.646461L8 0.292908L7.64645 0.646461L4.64645 3.64646L5.35355 4.35357L7.5 2.20712L7.5 10.5H8.5L8.5 2.20712L10.6464 4.35357L11.3536 3.64646L8.35355 0.646461ZM3 5.50001C2.72386 5.50001 2.5 5.72387 2.5 6.00001V15C2.5 15.2762 2.72386 15.5 3 15.5H13C13.2761 15.5 13.5 15.2762 13.5 15V6.00001C13.5 5.72387 13.2761 5.50001 13 5.50001H10.5V6.50001H12.5V14.5H3.5V6.50001H5.5V5.50001H3Z",
  fill: "black"
})));
const Reset = createIcon(/*#__PURE__*/React__default["default"].createElement("svg", {
  width: "17",
  height: "16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React__default["default"].createElement("mask", {
  id: "a",
  fill: "#fff"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "m1.751 6.349 2.287 2.858 3.381-2.255-.555-.832-2.618 1.746-1.714-2.142-.78.625Z"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M13.858 8a4.56 4.56 0 0 1-4.56 4.56h-.042v1h.042A5.56 5.56 0 1 0 3.754 8.42c.039-.036.077-.079.115-.127l.876-.044A4.56 4.56 0 1 1 13.859 8Z"
})), /*#__PURE__*/React__default["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "m1.751 6.349 2.287 2.858 3.381-2.255-.555-.832-2.618 1.746-1.714-2.142-.78.625Z",
  fill: "#000"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M13.858 8a4.56 4.56 0 0 1-4.56 4.56h-.042v1h.042A5.56 5.56 0 1 0 3.754 8.42c.039-.036.077-.079.115-.127l.876-.044A4.56 4.56 0 1 1 13.859 8Z",
  fill: "#000"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "m1.751 6.349-.624-.781-.781.625.624.78.781-.624Zm2.287 2.858-.781.624.572.716.763-.508-.554-.832Zm3.381-2.255.555.832.832-.554-.555-.832-.832.554Zm-.555-.832.832-.554-.554-.832-.832.554.554.832ZM4.246 7.866l-.781.625.573.716.762-.509-.554-.832ZM2.532 5.724l.781-.625-.625-.78-.78.624.624.781Zm6.724 6.836.01-1-1.01-.01v1.01h1Zm0 1h-1v.993l.993.007.007-1ZM3.754 8.42l-.998.074.154 2.06 1.52-1.398-.676-.736Zm.115-.127-.05-1-.46.024-.282.365.792.61Zm.876-.044.05.998 1.002-.05-.054-1.002-.998.054Zm1.287-1.573.555.832 1.664-1.11-.555-.831-1.664 1.109ZM4.8 8.698 7.42 6.952l-1.11-1.664-2.618 1.746 1.11 1.664Zm-3.049-2.35 1.714 2.143 1.562-1.25L3.313 5.1 1.751 6.35Zm.625.782.78-.625-1.249-1.562-.78.625L2.376 7.13Zm2.442 1.452L2.532 5.724.97 6.974 3.257 9.83l1.561-1.249ZM6.864 6.12 3.483 8.375l1.11 1.664 3.38-2.255L6.865 6.12Zm2.434 7.44A5.56 5.56 0 0 0 14.858 8h-2a3.56 3.56 0 0 1-3.56 3.56v2Zm-.051 0h.051v-2h-.033l-.018 2Zm1.01 0v-1h-2v1h2Zm-1.008 1h.05v-2h-.035l-.015 2Zm.05 0A6.56 6.56 0 0 0 15.858 8h-2a4.56 4.56 0 0 1-4.56 4.56v2ZM15.858 8a6.56 6.56 0 0 0-6.56-6.56v2A4.56 4.56 0 0 1 13.858 8h2Zm-6.56-6.56A6.56 6.56 0 0 0 2.738 8h2a4.56 4.56 0 0 1 4.56-4.56v-2ZM2.738 8c0 .166.005.33.017.493l1.995-.149A4.639 4.639 0 0 1 4.738 8h-2Zm.338-.319c-.007.009-.007.008 0 .001L4.43 9.155c.086-.079.162-.164.23-.253L3.078 7.681Zm1.617-.432-.875.044.1 1.997.876-.044-.1-1.997ZM3.738 8c0 .1.003.201.008.301l1.997-.107A3.629 3.629 0 0 1 5.738 8h-2Zm5.56-5.56A5.56 5.56 0 0 0 3.738 8h2a3.56 3.56 0 0 1 3.56-3.56v-2ZM14.858 8a5.56 5.56 0 0 0-5.56-5.56v2A3.56 3.56 0 0 1 12.858 8h2Z",
  fill: "#000",
  mask: "url(#a)"
})));
const Grid3x3 = createIcon(/*#__PURE__*/React__default["default"].createElement("svg", {
  width: "16",
  height: "17",
  viewBox: "0 0 16 17",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M3 3.34674H5V5.34674H3V3.34674ZM3 7.34674H5V9.34674H3V7.34674ZM5 11.3467H3V13.3467H5V11.3467ZM7 3.34674H9V5.34674H7V3.34674ZM9 7.34674H7V9.34674H9V7.34674ZM7 11.3467H9V13.3467H7V11.3467ZM13 3.34674H11V5.34674H13V3.34674ZM11 7.34674H13V9.34674H11V7.34674ZM13 11.3467H11V13.3467H13V11.3467Z",
  fill: "black"
})));
const ChevronLeft = createIcon(/*#__PURE__*/React__default["default"].createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M10.5 3L6 7.5L10.5 12",
  stroke: "black"
})));
const ChevronUp = createIcon(/*#__PURE__*/React__default["default"].createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg",
  style: {
    transform: "rotate(180deg)"
  }
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M8.35355 10.0606L8.70711 9.70709L11.7071 6.70709L11 5.99998L8.35355 8.64643L5.70711 5.99998L5 6.70709L8 9.70709L8.35355 10.0606Z",
  fill: "black"
})));
const Link = createIcon(/*#__PURE__*/React__default["default"].createElement("svg", {
  width: "16",
  height: "17",
  viewBox: "0 0 16 17",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M10 5.34674V6.63245H11V5.34674C11 3.68989 9.65685 2.34674 8 2.34674C6.34315 2.34674 5 3.68989 5 5.34674V6.63245H6V5.34674C6 4.24217 6.89543 3.34674 8 3.34674C9.10457 3.34674 10 4.24217 10 5.34674ZM10 10.061H11V11.3467C11 13.0036 9.65685 14.3467 8 14.3467C6.34315 14.3467 5 13.0036 5 11.3467V10.061H6V11.3467C6 12.4513 6.89543 13.3467 8 13.3467C9.10457 13.3467 10 12.4513 10 11.3467V10.061ZM7.5 5.77531V10.9182H8.5V5.77531H7.5Z",
  fill: "black"
})));
const MarginBottom = createIcon(/*#__PURE__*/React__default["default"].createElement("svg", {
  width: "16",
  height: "17",
  viewBox: "0 0 16 17",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M14 15.3467H2V14.3467H14V15.3467Z",
  fill: "black"
}), /*#__PURE__*/React__default["default"].createElement("rect", {
  x: "4.5",
  y: "4.84674",
  width: "7",
  height: "7",
  stroke: "black"
})));
const MarginHorizontal = createIcon(/*#__PURE__*/React__default["default"].createElement("svg", {
  width: "16",
  height: "17",
  viewBox: "0 0 16 17",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M0.999999 14.3467L1 2.34674L2 2.34674L2 14.3467L0.999999 14.3467Z",
  fill: "black"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M14 14.3467L14 2.34674L15 2.34674L15 14.3467L14 14.3467Z",
  fill: "black"
}), /*#__PURE__*/React__default["default"].createElement("rect", {
  x: "4.5",
  y: "4.84674",
  width: "7",
  height: "7",
  stroke: "black"
})));
const MarginTop = createIcon(/*#__PURE__*/React__default["default"].createElement("svg", {
  width: "16",
  height: "17",
  viewBox: "0 0 16 17",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M14 2.34674H2V1.34674H14V2.34674Z",
  fill: "black"
}), /*#__PURE__*/React__default["default"].createElement("rect", {
  x: "4.5",
  y: "4.84674",
  width: "7",
  height: "7",
  stroke: "black"
})));
const CornerRadius = createIcon(/*#__PURE__*/React__default["default"].createElement("svg", {
  width: "16",
  height: "17",
  viewBox: "0 0 16 17",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M14 3.34674H10C6.13401 3.34674 3 6.48075 3 10.3467V14.3467H2V10.3467C2 5.92846 5.58172 2.34674 10 2.34674H14V3.34674Z",
  fill: "black"
})));
const ThreeDotsHorizontal = createIcon(/*#__PURE__*/React__default["default"].createElement("svg", {
  width: "17",
  height: "17",
  viewBox: "0 0 17 17",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M3.80444 8.47266C3.80444 7.92037 4.25216 7.47266 4.80444 7.47266C5.35673 7.47266 5.80444 7.92037 5.80444 8.47266C5.80444 9.02494 5.35673 9.47266 4.80444 9.47266C4.25216 9.47266 3.80444 9.02494 3.80444 8.47266ZM7.80444 8.47266C7.80444 7.92037 8.25216 7.47266 8.80444 7.47266C9.35673 7.47266 9.80444 7.92037 9.80444 8.47266C9.80444 9.02494 9.35673 9.47266 8.80444 9.47266C8.25216 9.47266 7.80444 9.02494 7.80444 8.47266ZM12.8044 7.47266C12.2522 7.47266 11.8044 7.92037 11.8044 8.47266C11.8044 9.02494 12.2522 9.47266 12.8044 9.47266C13.3567 9.47266 13.8044 9.02494 13.8044 8.47266C13.8044 7.92037 13.3567 7.47266 12.8044 7.47266Z",
  fill: "black"
})));
const OpenInNew = createIcon(/*#__PURE__*/React__default["default"].createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 -960 960 960",
  width: "24"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"
})));
const LoadingSpinner = createIcon(/*#__PURE__*/React__default["default"].createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 100 100",
  preserveAspectRatio: "xMidYMid",
  width: "40",
  height: "40",
  style: {
    shapeRendering: "auto",
    display: "block",
    background: "rgb(255, 255, 255)"
  },
  xmlnsXlink: "http://www.w3.org/1999/xlink"
}, /*#__PURE__*/React__default["default"].createElement("g", null, /*#__PURE__*/React__default["default"].createElement("circle", {
  strokeDasharray: "164.93361431346415 56.97787143782138",
  r: "35",
  strokeWidth: "10",
  stroke: "#0099e5",
  fill: "none",
  cy: "50",
  cx: "50"
}, /*#__PURE__*/React__default["default"].createElement("animateTransform", {
  keyTimes: "0;1",
  values: "0 50 50;360 50 50",
  dur: "1s",
  repeatCount: "indefinite",
  type: "rotate",
  attributeName: "transform"
})))));
const Save = createIcon(/*#__PURE__*/React__default["default"].createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 256 256",
  width: "24",
  height: "24",
  fill: "currentColor"
}, /*#__PURE__*/React__default["default"].createElement("g", null, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M219.31,72,184,36.69A15.86,15.86,0,0,0,172.69,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V83.31A15.86,15.86,0,0,0,219.31,72ZM168,208H88V152h80Zm40,0H184V152a16,16,0,0,0-16-16H88a16,16,0,0,0-16,16v56H48V48H172.69L208,83.31ZM160,72a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h56A8,8,0,0,1,160,72Z"
}))));
const Save1 = createIcon(/*#__PURE__*/React__default["default"].createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24",
  fill: "#000000",
  style: {
    opacity: 1
  }
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M17 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V7zm2 16H5V5h11.17L19 7.83zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3M6 6h9v4H6z"
})));
const SaveAs = createIcon(/*#__PURE__*/React__default["default"].createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24",
  fill: "#000000",
  style: {
    opacity: 1
  }
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.81c-.36-.62-.61-1.3-.73-2H5V5h11.17L19 7.83v4.25c.7.12 1.38.37 2 .73V7l-4-4zm1 3v4h9V6zm6 6c-1.66 0-3 1.34-3 3s1.34 3 3 3c0-1.89.89-3.66 2.39-4.79C13.85 12.5 13 12 12 12m5 2v3h-3v2h3v3h2v-3h3v-2h-3v-3z"
})));
const Preview$1 = createIcon(/*#__PURE__*/React__default["default"].createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 256 256",
  width: "24",
  height: "24",
  fill: "currentColor"
}, /*#__PURE__*/React__default["default"].createElement("g", null, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48.24-94.78-64-40A8,8,0,0,0,100,88v80a8,8,0,0,0,12.24,6.78l64-40a8,8,0,0,0,0-13.56ZM116,153.57V102.43L156.91,128Z"
}))));
const Duplicate = createIcon(/*#__PURE__*/React__default["default"].createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "lucide lucide-copy-plus-icon lucide-copy-plus"
}, /*#__PURE__*/React__default["default"].createElement("line", {
  x1: "15",
  x2: "15",
  y1: "12",
  y2: "18"
}), /*#__PURE__*/React__default["default"].createElement("line", {
  x1: "12",
  x2: "18",
  y1: "15",
  y2: "15"
}), /*#__PURE__*/React__default["default"].createElement("rect", {
  width: "14",
  height: "14",
  x: "8",
  y: "8",
  rx: "2",
  ry: "2"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
})));
const Trash = createIcon(/*#__PURE__*/React__default["default"].createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "lucide lucide-trash2-icon lucide-trash-2"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M10 11v6"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M14 11v6"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M3 6h18"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
})));
const ColorAndFonts = createIcon(/*#__PURE__*/React__default["default"].createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "87.5%",
  height: "100%",
  viewBox: "0 0 21 19",
  fill: "none"
}, /*#__PURE__*/React__default["default"].createElement("g", {
  clipPath: "url(#clip0_7276_22190)"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M16.2305 10.1904C16.4101 10.1905 16.57 10.2498 16.7197 10.3496C16.8697 10.4496 16.9996 10.61 17.0996 10.8398L17.6299 12L18.3096 13.5098L20.2803 17.8604C20.3701 18.0502 20.3999 18.2102 20.3799 18.3701C20.3499 18.52 20.2898 18.6395 20.1699 18.7295C20.06 18.8094 19.9103 18.8495 19.7305 18.8496C19.5107 18.8496 19.3302 18.7903 19.2002 18.6904C19.0803 18.5805 18.9699 18.4103 18.8799 18.1904L18.2803 16.79H14.1504L13.5596 18.1904C13.4596 18.4201 13.3501 18.5905 13.2402 18.6904C13.1302 18.7904 12.9697 18.8496 12.7598 18.8496C12.5699 18.8496 12.41 18.7999 12.29 18.71C12.1801 18.63 12.1099 18.5101 12.0898 18.3701C12.0599 18.2102 12.09 18.0502 12.1699 17.8604L13.7998 14.25L14.4805 12.75L15.3398 10.8398C15.4398 10.6099 15.57 10.4496 15.71 10.3496C15.8599 10.2497 16.0305 10.1904 16.2305 10.1904ZM16.2002 11.96L15.8701 12.75L15.2402 14.25L14.6797 15.5703H17.7598L17.1504 14.1396L16.5596 12.7295L16.2305 11.96H16.2002Z",
  fill: "#5D5D5D",
  style: {
    fill: "color(display-p3 0.3647 0.3647 0.3647)",
    fillOpacity: 1
  }
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M9.75 0C12.3 0 14.7603 0.999805 16.5703 2.7998C17.4903 3.69979 18.2197 4.76046 18.7197 5.94043C19.2296 7.12033 19.49 8.39004 19.5 9.66992C19.51 10.4199 19.4198 11.1799 19.2598 11.9199C19.2198 12.1199 19.1503 12.3102 19.0703 12.4902L17.9697 10.3799C17.9897 10.1499 18 9.90966 18 9.67969C17.9699 7.50985 17.0897 5.43031 15.5498 3.90039C14.0098 2.37039 11.92 1.51 9.75 1.5H9.66016C7.49016 1.52 5.40965 2.4002 3.88965 3.9502C2.35982 5.49017 1.5 7.58013 1.5 9.75C1.5 13.13 3.61 15.9702 7 17.1602C7.22995 17.2401 7.47002 17.2704 7.70996 17.2305C7.93996 17.2005 8.17012 17.1097 8.37012 16.9697C8.55993 16.8298 8.72012 16.6502 8.83008 16.4404C8.94008 16.2304 9 15.99 9 15.75C9 14.95 9.31988 14.1899 9.87988 13.6299C10.4399 13.0699 11.2 12.75 12 12.75H13.2197L12.4902 14.25H12C11.6 14.25 11.2204 14.4104 10.9404 14.6904C10.6604 14.9704 10.5 15.35 10.5 15.75C10.5 16.2299 10.3801 16.6999 10.1602 17.1299C9.9402 17.5498 9.62037 17.9202 9.23047 18.2002C8.84052 18.4802 8.39008 18.6497 7.91016 18.7197C7.44017 18.7897 6.94999 18.7401 6.5 18.5801C2.49 17.1601 0 13.78 0 9.75C0 7.18 1.01031 4.71965 2.82031 2.88965C4.63028 1.06985 7.08055 0.0299982 9.65039 0H9.75Z",
  fill: "#5D5D5D",
  style: {
    fill: "color(display-p3 0.3647 0.3647 0.3647)",
    fillOpacity: 1
  }
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M5.62988 11.25C5.91988 11.25 6.20992 11.3701 6.41992 11.5801C6.62992 11.7901 6.75 12.0801 6.75 12.3701C6.74998 12.6001 6.67955 12.82 6.55957 13C6.43957 13.1799 6.2595 13.3302 6.05957 13.4102C5.84976 13.5 5.61995 13.5204 5.41016 13.4805C5.19016 13.4305 4.99008 13.3299 4.83008 13.1699C4.67008 13.0099 4.56953 12.8098 4.51953 12.5898C4.47962 12.38 4.50003 12.1502 4.58984 11.9404C4.66981 11.7405 4.82009 11.5604 5 11.4404C5.17997 11.3204 5.39993 11.25 5.62988 11.25Z",
  fill: "#5D5D5D",
  style: {
    fill: "color(display-p3 0.3647 0.3647 0.3647)",
    fillOpacity: 1
  }
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M5.62988 6C5.91988 6 6.20992 6.12008 6.41992 6.33008C6.62989 6.54005 6.74997 6.82992 6.75 7.12988C6.75 7.34988 6.67957 7.57 6.55957 7.75C6.43957 7.92991 6.2595 8.08019 6.05957 8.16016C5.84976 8.24997 5.61995 8.27038 5.41016 8.23047C5.19016 8.18047 4.99008 8.07992 4.83008 7.91992C4.67008 7.75992 4.56953 7.55984 4.51953 7.33984C4.47962 7.13005 4.50003 6.90024 4.58984 6.69043C4.66981 6.4905 4.82009 6.31043 5 6.19043C5.17997 6.07045 5.39993 6.00002 5.62988 6Z",
  fill: "#5D5D5D",
  style: {
    fill: "color(display-p3 0.3647 0.3647 0.3647)",
    fillOpacity: 1
  }
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M13.8701 6C14.1701 6.00003 14.4599 6.12011 14.6699 6.33008C14.8799 6.54005 15 6.82992 15 7.12988C15 7.34988 14.9296 7.57 14.8096 7.75C14.6896 7.92991 14.5095 8.08019 14.3096 8.16016C14.0998 8.24997 13.87 8.27038 13.6602 8.23047C13.4402 8.18047 13.2401 8.07992 13.0801 7.91992C12.9201 7.75992 12.8195 7.55984 12.7695 7.33984C12.7296 7.13005 12.75 6.90024 12.8398 6.69043C12.9198 6.4905 13.0701 6.31043 13.25 6.19043C13.43 6.07043 13.6501 6 13.8701 6Z",
  fill: "#5D5D5D",
  style: {
    fill: "color(display-p3 0.3647 0.3647 0.3647)",
    fillOpacity: 1
  }
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M9.75 3.75C10.05 3.75 10.3298 3.87012 10.5498 4.08008C10.7598 4.29008 10.8701 4.58012 10.8701 4.87012C10.8701 5.09999 10.8103 5.32007 10.6904 5.5C10.5604 5.68 10.3897 5.83016 10.1797 5.91016C9.97987 5.99999 9.75005 6.02036 9.53027 5.98047C9.3103 5.93047 9.11019 5.82989 8.9502 5.66992C8.8002 5.50992 8.69039 5.30984 8.65039 5.08984C8.60044 4.87999 8.63008 4.6503 8.70996 4.44043C8.79992 4.24053 8.94002 4.06043 9.12988 3.94043C9.30988 3.82043 9.53 3.75 9.75 3.75Z",
  fill: "#5D5D5D",
  style: {
    fill: "color(display-p3 0.3647 0.3647 0.3647)",
    fillOpacity: 1
  }
})), /*#__PURE__*/React__default["default"].createElement("defs", null, /*#__PURE__*/React__default["default"].createElement("clipPath", {
  id: "clip0_7276_22190"
}, /*#__PURE__*/React__default["default"].createElement("rect", {
  width: "20.39",
  height: "18.85",
  fill: "white",
  style: {
    fill: "white",
    fillOpacity: 1
  }
})))));
const Pencil = createIcon(/*#__PURE__*/React__default["default"].createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "lucide lucide-pencil-icon lucide-pencil"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "m15 5 4 4"
})));
const Layers = createIcon(/*#__PURE__*/React__default["default"].createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 256 256",
  width: "24",
  height: "24",
  fill: "currentColor"
}, /*#__PURE__*/React__default["default"].createElement("g", null, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M230.91,172A8,8,0,0,1,228,182.91l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,36,169.09l92,53.65,92-53.65A8,8,0,0,1,230.91,172ZM220,121.09l-92,53.65L36,121.09A8,8,0,0,0,28,134.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,121.09ZM24,80a8,8,0,0,1,4-6.91l96-56a8,8,0,0,1,8.06,0l96,56a8,8,0,0,1,0,13.82l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,24,80Zm23.88,0L128,126.74,208.12,80,128,33.26Z"
}))));
const LayerGroup = createIcon(/*#__PURE__*/React__default["default"].createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "data-hook": "symbol"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  "fill-rule": "evenodd",
  d: "M15 15v1H5v-1h10Zm-.25-8c.689 0 1.25.561 1.25 1.25v3.5c0 .689-.561 1.25-1.25 1.25h-9.5C4.561 13 4 12.439 4 11.75v-3.5C4 7.561 4.561 7 5.25 7Zm0 1h-9.5a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25v-3.5a.25.25 0 0 0-.25-.25ZM15 4v1H5V4h10Z"
})));
const LayerChildren = createIcon(/*#__PURE__*/React__default["default"].createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "data-hook": "symbol"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  "fill-rule": "evenodd",
  d: "M9 6H6a2 2 0 0 0-2 2v3h5V6zM8 7v3H5V8c0-.551.449-1 1-1h2zm1 5v5H6a2 2 0 0 1-2-2v-3h5zm-1 1H5v2c0 .551.449 1 1 1h2v-3zm7-1v3a2 2 0 0 1-2 2h-3v-5h5zm-1 1h-3v3h2c.551 0 1-.449 1-1v-2zm1-9a2 2 0 0 1 2 2v5h-7V4h5zm0 1h-4v5h5V6c0-.551-.449-1-1-1z"
})));
const Copy = createIcon(/*#__PURE__*/React__default["default"].createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  className: "lucide lucide-copy-icon lucide-copy"
}, /*#__PURE__*/React__default["default"].createElement("rect", {
  width: "14",
  height: "14",
  x: "8",
  y: "8",
  rx: "2",
  ry: "2"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
})));
const Id = createIcon(/*#__PURE__*/React__default["default"].createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "none"
}, /*#__PURE__*/React__default["default"].createElement("text", {
  x: "50%",
  y: "50%",
  "text-anchor": "middle",
  "dominant-baseline": "central",
  "font-size": "16",
  "font-weight": "600",
  "font-family": "Arial, Helvetica, sans-serif",
  fill: "currentColor"
}, "ID")));
const GlobalSections = createIcon(/*#__PURE__*/React__default["default"].createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 256 256",
  width: "24",
  height: "24",
  fill: "currentColor"
}, /*#__PURE__*/React__default["default"].createElement("g", null, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M122.34,109.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0,0-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40a8,8,0,0,0,0,11.32ZM128,35.31,156.69,64,128,92.69,99.31,64Zm5.66,111a8,8,0,0,0-11.32,0l-40,40a8,8,0,0,0,0,11.32l40,40a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0,0-11.32ZM128,220.69,99.31,192,128,163.31,156.69,192Zm109.66-98.35-40-40a8,8,0,0,0-11.32,0l-40,40a8,8,0,0,0,0,11.32l40,40a8,8,0,0,0,11.32,0l40-40A8,8,0,0,0,237.66,122.34ZM192,156.69,163.31,128,192,99.31,220.69,128Zm-82.34-34.35-40-40a8,8,0,0,0-11.32,0l-40,40a8,8,0,0,0,0,11.32l40,40a8,8,0,0,0,11.32,0l40-40A8,8,0,0,0,109.66,122.34ZM64,156.69,35.31,128,64,99.31,92.69,128Z"
}))));
const Check = createIcon(/*#__PURE__*/React__default["default"].createElement("svg", {
  viewBox: "0 0 24 24",
  width: "16",
  height: "16",
  fill: "none",
  stroke: "#25a55a",
  "stroke-width": "2"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M6 12l4 4 8-8",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
})));
const Icons = {
  Dropdown,
  MaxHeight,
  Add,
  AlignLeft,
  AlignRight,
  AlignCenter,
  Close,
  Desktop,
  Mobile,
  Drag,
  ArrowUp,
  ArrowDown,
  ArrowRight,
  Master,
  ChevronUp,
  ChevronDown: Dropdown,
  ChevronRight,
  ChevronLeft,
  Back,
  Redo,
  Undo,
  Remove,
  Share,
  Reset,
  Grid3x3,
  Link,
  MarginBottom,
  MarginHorizontal,
  MarginTop,
  CornerRadius,
  ThreeDotsHorizontal,
  OpenInNew,
  LoadingSpinner,
  Save,
  Save1,
  SaveAs,
  Preview: Preview$1,
  Duplicate,
  Trash,
  Pencil,
  ColorAndFonts,
  Layers,
  LayerGroup,
  LayerChildren,
  Copy,
  Id,
  GlobalSections,
  Check
};

const Typography = _ref => {
  let {
    children,
    className,
    component: Component = "div",
    color,
    variant = "body",
    align = "left",
    isTruncated = false,
    ...restProps
  } = _ref;
  return /*#__PURE__*/React__default["default"].createElement(TypographyRoot, _extends__default["default"]({
    as: Component,
    className: className,
    variant: variant
    // Don't forward `color` prop to host element since it's our custom prop, not native one.
    ,
    $color: color,
    align: align,
    $isTruncated: isTruncated
  }, restProps), children);
};
// Why use `div` as the default text tag?
// 1. We mostly stack up lines of text so it's natural for typography component to be block element
// 2. We can easily put other `Typography` components within. Why does it matter?
//    Imagine we want to only bold a fragment of text so we use `Typography` as the child of `Typography`.
//    If we would use `p` as the default, there are restricted tags that can be placed within
//    and maybe you would remember about that to change tag of outer `Typography` component
//    or maybe you would get warning from React about incorrect nesting of HTML elements.
//    By using the `div` as the default, you don't have to worry about it.
const TypographyRoot = styledComponents.styled.div.withConfig({
  displayName: "Typography__TypographyRoot",
  componentId: "sc-yrvxxm-0"
})(["color:", ";", " text-align:", ";", ""], _ref2 => {
  let {
    $color
  } = _ref2;
  return $color !== undefined ? Tooltip.Colors[$color] : "black";
}, _ref3 => {
  let {
    variant
  } = _ref3;
  return fonts.Fonts[variant];
}, _ref4 => {
  let {
    align
  } = _ref4;
  return align;
}, _ref5 => {
  let {
    $isTruncated
  } = _ref5;
  return $isTruncated && styledComponents.css(["overflow:hidden;text-overflow:ellipsis;"]);
});

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _excluded$T = ["color"];
var CheckIcon = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$T);

  return React.createElement("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});

var _excluded$W = ["color"];
var ChevronDownIcon = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$W);

  return React.createElement("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});

// packages/core/number/src/number.ts
function clamp(value, [min, max]) {
  return Math.min(max, Math.max(min, value));
}

function createCollection(name) {
  const PROVIDER_NAME = name + "CollectionProvider";
  const [createCollectionContext, createCollectionScope] = Tooltip.createContextScope(PROVIDER_NAME);
  const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(
    PROVIDER_NAME,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  );
  const CollectionProvider = (props) => {
    const { scope, children } = props;
    const ref = React__default["default"].useRef(null);
    const itemMap = React__default["default"].useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ jsxRuntime.jsx(CollectionProviderImpl, { scope, itemMap, collectionRef: ref, children });
  };
  CollectionProvider.displayName = PROVIDER_NAME;
  const COLLECTION_SLOT_NAME = name + "CollectionSlot";
  const CollectionSlot = React__default["default"].forwardRef(
    (props, forwardedRef) => {
      const { scope, children } = props;
      const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
      const composedRefs = Tooltip.useComposedRefs(forwardedRef, context.collectionRef);
      return /* @__PURE__ */ jsxRuntime.jsx(Tooltip.Slot, { ref: composedRefs, children });
    }
  );
  CollectionSlot.displayName = COLLECTION_SLOT_NAME;
  const ITEM_SLOT_NAME = name + "CollectionItemSlot";
  const ITEM_DATA_ATTR = "data-radix-collection-item";
  const CollectionItemSlot = React__default["default"].forwardRef(
    (props, forwardedRef) => {
      const { scope, children, ...itemData } = props;
      const ref = React__default["default"].useRef(null);
      const composedRefs = Tooltip.useComposedRefs(forwardedRef, ref);
      const context = useCollectionContext(ITEM_SLOT_NAME, scope);
      React__default["default"].useEffect(() => {
        context.itemMap.set(ref, { ref, ...itemData });
        return () => void context.itemMap.delete(ref);
      });
      return /* @__PURE__ */ jsxRuntime.jsx(Tooltip.Slot, { ...{ [ITEM_DATA_ATTR]: "" }, ref: composedRefs, children });
    }
  );
  CollectionItemSlot.displayName = ITEM_SLOT_NAME;
  function useCollection(scope) {
    const context = useCollectionContext(name + "CollectionConsumer", scope);
    const getItems = React__default["default"].useCallback(() => {
      const collectionNode = context.collectionRef.current;
      if (!collectionNode) return [];
      const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
      const items = Array.from(context.itemMap.values());
      const orderedItems = items.sort(
        (a, b) => orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current)
      );
      return orderedItems;
    }, [context.collectionRef, context.itemMap]);
    return getItems;
  }
  return [
    { Provider: CollectionProvider, Slot: CollectionSlot, ItemSlot: CollectionItemSlot },
    useCollection,
    createCollectionScope
  ];
}

// packages/react/direction/src/Direction.tsx
var DirectionContext = React__namespace.createContext(void 0);
function useDirection(localDir) {
  const globalDir = React__namespace.useContext(DirectionContext);
  return localDir || globalDir || "ltr";
}

var count = 0;
function useFocusGuards() {
  React__namespace.useEffect(() => {
    const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", edgeGuards[0] ?? createFocusGuard());
    document.body.insertAdjacentElement("beforeend", edgeGuards[1] ?? createFocusGuard());
    count++;
    return () => {
      if (count === 1) {
        document.querySelectorAll("[data-radix-focus-guard]").forEach((node) => node.remove());
      }
      count--;
    };
  }, []);
}
function createFocusGuard() {
  const element = document.createElement("span");
  element.setAttribute("data-radix-focus-guard", "");
  element.tabIndex = 0;
  element.style.outline = "none";
  element.style.opacity = "0";
  element.style.position = "fixed";
  element.style.pointerEvents = "none";
  return element;
}

var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var EVENT_OPTIONS$1 = { bubbles: false, cancelable: true };
var FOCUS_SCOPE_NAME = "FocusScope";
var FocusScope = React__namespace.forwardRef((props, forwardedRef) => {
  const {
    loop = false,
    trapped = false,
    onMountAutoFocus: onMountAutoFocusProp,
    onUnmountAutoFocus: onUnmountAutoFocusProp,
    ...scopeProps
  } = props;
  const [container, setContainer] = React__namespace.useState(null);
  const onMountAutoFocus = Tooltip.useCallbackRef(onMountAutoFocusProp);
  const onUnmountAutoFocus = Tooltip.useCallbackRef(onUnmountAutoFocusProp);
  const lastFocusedElementRef = React__namespace.useRef(null);
  const composedRefs = Tooltip.useComposedRefs(forwardedRef, (node) => setContainer(node));
  const focusScope = React__namespace.useRef({
    paused: false,
    pause() {
      this.paused = true;
    },
    resume() {
      this.paused = false;
    }
  }).current;
  React__namespace.useEffect(() => {
    if (trapped) {
      let handleFocusIn2 = function(event) {
        if (focusScope.paused || !container) return;
        const target = event.target;
        if (container.contains(target)) {
          lastFocusedElementRef.current = target;
        } else {
          focus(lastFocusedElementRef.current, { select: true });
        }
      }, handleFocusOut2 = function(event) {
        if (focusScope.paused || !container) return;
        const relatedTarget = event.relatedTarget;
        if (relatedTarget === null) return;
        if (!container.contains(relatedTarget)) {
          focus(lastFocusedElementRef.current, { select: true });
        }
      }, handleMutations2 = function(mutations) {
        const focusedElement = document.activeElement;
        if (focusedElement !== document.body) return;
        for (const mutation of mutations) {
          if (mutation.removedNodes.length > 0) focus(container);
        }
      };
      document.addEventListener("focusin", handleFocusIn2);
      document.addEventListener("focusout", handleFocusOut2);
      const mutationObserver = new MutationObserver(handleMutations2);
      if (container) mutationObserver.observe(container, { childList: true, subtree: true });
      return () => {
        document.removeEventListener("focusin", handleFocusIn2);
        document.removeEventListener("focusout", handleFocusOut2);
        mutationObserver.disconnect();
      };
    }
  }, [trapped, container, focusScope.paused]);
  React__namespace.useEffect(() => {
    if (container) {
      focusScopesStack.add(focusScope);
      const previouslyFocusedElement = document.activeElement;
      const hasFocusedCandidate = container.contains(previouslyFocusedElement);
      if (!hasFocusedCandidate) {
        const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS$1);
        container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        container.dispatchEvent(mountEvent);
        if (!mountEvent.defaultPrevented) {
          focusFirst$2(removeLinks(getTabbableCandidates(container)), { select: true });
          if (document.activeElement === previouslyFocusedElement) {
            focus(container);
          }
        }
      }
      return () => {
        container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        setTimeout(() => {
          const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS$1);
          container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          container.dispatchEvent(unmountEvent);
          if (!unmountEvent.defaultPrevented) {
            focus(previouslyFocusedElement ?? document.body, { select: true });
          }
          container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          focusScopesStack.remove(focusScope);
        }, 0);
      };
    }
  }, [container, onMountAutoFocus, onUnmountAutoFocus, focusScope]);
  const handleKeyDown = React__namespace.useCallback(
    (event) => {
      if (!loop && !trapped) return;
      if (focusScope.paused) return;
      const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
      const focusedElement = document.activeElement;
      if (isTabKey && focusedElement) {
        const container2 = event.currentTarget;
        const [first, last] = getTabbableEdges(container2);
        const hasTabbableElementsInside = first && last;
        if (!hasTabbableElementsInside) {
          if (focusedElement === container2) event.preventDefault();
        } else {
          if (!event.shiftKey && focusedElement === last) {
            event.preventDefault();
            if (loop) focus(first, { select: true });
          } else if (event.shiftKey && focusedElement === first) {
            event.preventDefault();
            if (loop) focus(last, { select: true });
          }
        }
      }
    },
    [loop, trapped, focusScope.paused]
  );
  return /* @__PURE__ */ jsxRuntime.jsx(Tooltip.Primitive.div, { tabIndex: -1, ...scopeProps, ref: composedRefs, onKeyDown: handleKeyDown });
});
FocusScope.displayName = FOCUS_SCOPE_NAME;
function focusFirst$2(candidates, { select = false } = {}) {
  const previouslyFocusedElement = document.activeElement;
  for (const candidate of candidates) {
    focus(candidate, { select });
    if (document.activeElement !== previouslyFocusedElement) return;
  }
}
function getTabbableEdges(container) {
  const candidates = getTabbableCandidates(container);
  const first = findVisible(candidates, container);
  const last = findVisible(candidates.reverse(), container);
  return [first, last];
}
function getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode()) nodes.push(walker.currentNode);
  return nodes;
}
function findVisible(elements, container) {
  for (const element of elements) {
    if (!isHidden(element, { upTo: container })) return element;
  }
}
function isHidden(node, { upTo }) {
  if (getComputedStyle(node).visibility === "hidden") return true;
  while (node) {
    if (upTo !== void 0 && node === upTo) return false;
    if (getComputedStyle(node).display === "none") return true;
    node = node.parentElement;
  }
  return false;
}
function isSelectableInput(element) {
  return element instanceof HTMLInputElement && "select" in element;
}
function focus(element, { select = false } = {}) {
  if (element && element.focus) {
    const previouslyFocusedElement = document.activeElement;
    element.focus({ preventScroll: true });
    if (element !== previouslyFocusedElement && isSelectableInput(element) && select)
      element.select();
  }
}
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
  let stack = [];
  return {
    add(focusScope) {
      const activeFocusScope = stack[0];
      if (focusScope !== activeFocusScope) {
        activeFocusScope?.pause();
      }
      stack = arrayRemove(stack, focusScope);
      stack.unshift(focusScope);
    },
    remove(focusScope) {
      stack = arrayRemove(stack, focusScope);
      stack[0]?.resume();
    }
  };
}
function arrayRemove(array, item) {
  const updatedArray = [...array];
  const index = updatedArray.indexOf(item);
  if (index !== -1) {
    updatedArray.splice(index, 1);
  }
  return updatedArray;
}
function removeLinks(items) {
  return items.filter((item) => item.tagName !== "A");
}

// packages/react/use-previous/src/usePrevious.tsx
function usePrevious(value) {
  const ref = React__namespace.useRef({ value, previous: value });
  return React__namespace.useMemo(() => {
    if (ref.current.value !== value) {
      ref.current.previous = ref.current.value;
      ref.current.value = value;
    }
    return ref.current.previous;
  }, [value]);
}

var getDefaultParent = function (originalTarget) {
    if (typeof document === 'undefined') {
        return null;
    }
    var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
    return sampleTarget.ownerDocument.body;
};
var counterMap = new WeakMap();
var uncontrolledNodes = new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function (node) {
    return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function (parent, targets) {
    return targets
        .map(function (target) {
        if (parent.contains(target)) {
            return target;
        }
        var correctedTarget = unwrapHost(target);
        if (correctedTarget && parent.contains(correctedTarget)) {
            return correctedTarget;
        }
        console.error('aria-hidden', target, 'in not contained inside', parent, '. Doing nothing');
        return null;
    })
        .filter(function (x) { return Boolean(x); });
};
/**
 * Marks everything except given node(or nodes) as aria-hidden
 * @param {Element | Element[]} originalTarget - elements to keep on the page
 * @param [parentNode] - top element, defaults to document.body
 * @param {String} [markerName] - a special attribute to mark every node
 * @param {String} [controlAttribute] - html Attribute to control
 * @return {Undo} undo command
 */
var applyAttributeToOthers = function (originalTarget, parentNode, markerName, controlAttribute) {
    var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
    if (!markerMap[markerName]) {
        markerMap[markerName] = new WeakMap();
    }
    var markerCounter = markerMap[markerName];
    var hiddenNodes = [];
    var elementsToKeep = new Set();
    var elementsToStop = new Set(targets);
    var keep = function (el) {
        if (!el || elementsToKeep.has(el)) {
            return;
        }
        elementsToKeep.add(el);
        keep(el.parentNode);
    };
    targets.forEach(keep);
    var deep = function (parent) {
        if (!parent || elementsToStop.has(parent)) {
            return;
        }
        Array.prototype.forEach.call(parent.children, function (node) {
            if (elementsToKeep.has(node)) {
                deep(node);
            }
            else {
                try {
                    var attr = node.getAttribute(controlAttribute);
                    var alreadyHidden = attr !== null && attr !== 'false';
                    var counterValue = (counterMap.get(node) || 0) + 1;
                    var markerValue = (markerCounter.get(node) || 0) + 1;
                    counterMap.set(node, counterValue);
                    markerCounter.set(node, markerValue);
                    hiddenNodes.push(node);
                    if (counterValue === 1 && alreadyHidden) {
                        uncontrolledNodes.set(node, true);
                    }
                    if (markerValue === 1) {
                        node.setAttribute(markerName, 'true');
                    }
                    if (!alreadyHidden) {
                        node.setAttribute(controlAttribute, 'true');
                    }
                }
                catch (e) {
                    console.error('aria-hidden: cannot operate on ', node, e);
                }
            }
        });
    };
    deep(parentNode);
    elementsToKeep.clear();
    lockCount++;
    return function () {
        hiddenNodes.forEach(function (node) {
            var counterValue = counterMap.get(node) - 1;
            var markerValue = markerCounter.get(node) - 1;
            counterMap.set(node, counterValue);
            markerCounter.set(node, markerValue);
            if (!counterValue) {
                if (!uncontrolledNodes.has(node)) {
                    node.removeAttribute(controlAttribute);
                }
                uncontrolledNodes.delete(node);
            }
            if (!markerValue) {
                node.removeAttribute(markerName);
            }
        });
        lockCount--;
        if (!lockCount) {
            // clear
            counterMap = new WeakMap();
            counterMap = new WeakMap();
            uncontrolledNodes = new WeakMap();
            markerMap = {};
        }
    };
};
/**
 * Marks everything except given node(or nodes) as aria-hidden
 * @param {Element | Element[]} originalTarget - elements to keep on the page
 * @param [parentNode] - top element, defaults to document.body
 * @param {String} [markerName] - a special attribute to mark every node
 * @return {Undo} undo command
 */
var hideOthers = function (originalTarget, parentNode, markerName) {
    if (markerName === void 0) { markerName = 'data-aria-hidden'; }
    var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
    var activeParentNode = parentNode || getDefaultParent(originalTarget);
    if (!activeParentNode) {
        return function () { return null; };
    }
    // we should not hide ariaLive elements - https://github.com/theKashey/aria-hidden/issues/10
    targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll('[aria-live]')));
    return applyAttributeToOthers(targets, activeParentNode, markerName, 'aria-hidden');
};

var OPEN_KEYS = [" ", "Enter", "ArrowUp", "ArrowDown"];
var SELECTION_KEYS$1 = [" ", "Enter"];
var SELECT_NAME = "Select";
var [Collection$2, useCollection$2, createCollectionScope$2] = createCollection(SELECT_NAME);
var [createSelectContext, createSelectScope] = Tooltip.createContextScope(SELECT_NAME, [
  createCollectionScope$2,
  Tooltip.createPopperScope
]);
var usePopperScope$1 = Tooltip.createPopperScope();
var [SelectProvider, useSelectContext] = createSelectContext(SELECT_NAME);
var [SelectNativeOptionsProvider, useSelectNativeOptionsContext] = createSelectContext(SELECT_NAME);
var Select$1 = (props) => {
  const {
    __scopeSelect,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    value: valueProp,
    defaultValue,
    onValueChange,
    dir,
    name,
    autoComplete,
    disabled,
    required,
    form
  } = props;
  const popperScope = usePopperScope$1(__scopeSelect);
  const [trigger, setTrigger] = React__namespace.useState(null);
  const [valueNode, setValueNode] = React__namespace.useState(null);
  const [valueNodeHasChildren, setValueNodeHasChildren] = React__namespace.useState(false);
  const direction = useDirection(dir);
  const [open = false, setOpen] = Tooltip.useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  const [value, setValue] = Tooltip.useControllableState({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange
  });
  const triggerPointerDownPosRef = React__namespace.useRef(null);
  const isFormControl = trigger ? form || !!trigger.closest("form") : true;
  const [nativeOptionsSet, setNativeOptionsSet] = React__namespace.useState(/* @__PURE__ */ new Set());
  const nativeSelectKey = Array.from(nativeOptionsSet).map((option) => option.props.value).join(";");
  return /* @__PURE__ */ jsxRuntime.jsx(Tooltip.Root2, { ...popperScope, children: /* @__PURE__ */ jsxRuntime.jsxs(
    SelectProvider,
    {
      required,
      scope: __scopeSelect,
      trigger,
      onTriggerChange: setTrigger,
      valueNode,
      onValueNodeChange: setValueNode,
      valueNodeHasChildren,
      onValueNodeHasChildrenChange: setValueNodeHasChildren,
      contentId: Tooltip.useId(),
      value,
      onValueChange: setValue,
      open,
      onOpenChange: setOpen,
      dir: direction,
      triggerPointerDownPosRef,
      disabled,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(Collection$2.Provider, { scope: __scopeSelect, children: /* @__PURE__ */ jsxRuntime.jsx(
          SelectNativeOptionsProvider,
          {
            scope: props.__scopeSelect,
            onNativeOptionAdd: React__namespace.useCallback((option) => {
              setNativeOptionsSet((prev) => new Set(prev).add(option));
            }, []),
            onNativeOptionRemove: React__namespace.useCallback((option) => {
              setNativeOptionsSet((prev) => {
                const optionsSet = new Set(prev);
                optionsSet.delete(option);
                return optionsSet;
              });
            }, []),
            children
          }
        ) }),
        isFormControl ? /* @__PURE__ */ jsxRuntime.jsxs(
          BubbleSelect,
          {
            "aria-hidden": true,
            required,
            tabIndex: -1,
            name,
            autoComplete,
            value,
            onChange: (event) => setValue(event.target.value),
            disabled,
            form,
            children: [
              value === void 0 ? /* @__PURE__ */ jsxRuntime.jsx("option", { value: "" }) : null,
              Array.from(nativeOptionsSet)
            ]
          },
          nativeSelectKey
        ) : null
      ]
    }
  ) });
};
Select$1.displayName = SELECT_NAME;
var TRIGGER_NAME$2 = "SelectTrigger";
var SelectTrigger$1 = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, disabled = false, ...triggerProps } = props;
    const popperScope = usePopperScope$1(__scopeSelect);
    const context = useSelectContext(TRIGGER_NAME$2, __scopeSelect);
    const isDisabled = context.disabled || disabled;
    const composedRefs = Tooltip.useComposedRefs(forwardedRef, context.onTriggerChange);
    const getItems = useCollection$2(__scopeSelect);
    const pointerTypeRef = React__namespace.useRef("touch");
    const [searchRef, handleTypeaheadSearch, resetTypeahead] = useTypeaheadSearch((search) => {
      const enabledItems = getItems().filter((item) => !item.disabled);
      const currentItem = enabledItems.find((item) => item.value === context.value);
      const nextItem = findNextItem(enabledItems, search, currentItem);
      if (nextItem !== void 0) {
        context.onValueChange(nextItem.value);
      }
    });
    const handleOpen = (pointerEvent) => {
      if (!isDisabled) {
        context.onOpenChange(true);
        resetTypeahead();
      }
      if (pointerEvent) {
        context.triggerPointerDownPosRef.current = {
          x: Math.round(pointerEvent.pageX),
          y: Math.round(pointerEvent.pageY)
        };
      }
    };
    return /* @__PURE__ */ jsxRuntime.jsx(Tooltip.Anchor, { asChild: true, ...popperScope, children: /* @__PURE__ */ jsxRuntime.jsx(
      Tooltip.Primitive.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": context.contentId,
        "aria-expanded": context.open,
        "aria-required": context.required,
        "aria-autocomplete": "none",
        dir: context.dir,
        "data-state": context.open ? "open" : "closed",
        disabled: isDisabled,
        "data-disabled": isDisabled ? "" : void 0,
        "data-placeholder": shouldShowPlaceholder(context.value) ? "" : void 0,
        ...triggerProps,
        ref: composedRefs,
        onClick: Tooltip.composeEventHandlers(triggerProps.onClick, (event) => {
          event.currentTarget.focus();
          if (pointerTypeRef.current !== "mouse") {
            handleOpen(event);
          }
        }),
        onPointerDown: Tooltip.composeEventHandlers(triggerProps.onPointerDown, (event) => {
          pointerTypeRef.current = event.pointerType;
          const target = event.target;
          if (target.hasPointerCapture(event.pointerId)) {
            target.releasePointerCapture(event.pointerId);
          }
          if (event.button === 0 && event.ctrlKey === false && event.pointerType === "mouse") {
            handleOpen(event);
            event.preventDefault();
          }
        }),
        onKeyDown: Tooltip.composeEventHandlers(triggerProps.onKeyDown, (event) => {
          const isTypingAhead = searchRef.current !== "";
          const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
          if (!isModifierKey && event.key.length === 1) handleTypeaheadSearch(event.key);
          if (isTypingAhead && event.key === " ") return;
          if (OPEN_KEYS.includes(event.key)) {
            handleOpen();
            event.preventDefault();
          }
        })
      }
    ) });
  }
);
SelectTrigger$1.displayName = TRIGGER_NAME$2;
var VALUE_NAME = "SelectValue";
var SelectValue = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, className, style, children, placeholder = "", ...valueProps } = props;
    const context = useSelectContext(VALUE_NAME, __scopeSelect);
    const { onValueNodeHasChildrenChange } = context;
    const hasChildren = children !== void 0;
    const composedRefs = Tooltip.useComposedRefs(forwardedRef, context.onValueNodeChange);
    Tooltip.useLayoutEffect2(() => {
      onValueNodeHasChildrenChange(hasChildren);
    }, [onValueNodeHasChildrenChange, hasChildren]);
    return /* @__PURE__ */ jsxRuntime.jsx(
      Tooltip.Primitive.span,
      {
        ...valueProps,
        ref: composedRefs,
        style: { pointerEvents: "none" },
        children: shouldShowPlaceholder(context.value) ? /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: placeholder }) : children
      }
    );
  }
);
SelectValue.displayName = VALUE_NAME;
var ICON_NAME = "SelectIcon";
var SelectIcon = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, children, ...iconProps } = props;
    return /* @__PURE__ */ jsxRuntime.jsx(Tooltip.Primitive.span, { "aria-hidden": true, ...iconProps, ref: forwardedRef, children: children || "\u25BC" });
  }
);
SelectIcon.displayName = ICON_NAME;
var PORTAL_NAME$2 = "SelectPortal";
var SelectPortal = (props) => {
  return /* @__PURE__ */ jsxRuntime.jsx(Tooltip.Portal, { asChild: true, ...props });
};
SelectPortal.displayName = PORTAL_NAME$2;
var CONTENT_NAME$3 = "SelectContent";
var SelectContent = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const context = useSelectContext(CONTENT_NAME$3, props.__scopeSelect);
    const [fragment, setFragment] = React__namespace.useState();
    Tooltip.useLayoutEffect2(() => {
      setFragment(new DocumentFragment());
    }, []);
    if (!context.open) {
      const frag = fragment;
      return frag ? ReactDOM__namespace.createPortal(
        /* @__PURE__ */ jsxRuntime.jsx(SelectContentProvider, { scope: props.__scopeSelect, children: /* @__PURE__ */ jsxRuntime.jsx(Collection$2.Slot, { scope: props.__scopeSelect, children: /* @__PURE__ */ jsxRuntime.jsx("div", { children: props.children }) }) }),
        frag
      ) : null;
    }
    return /* @__PURE__ */ jsxRuntime.jsx(SelectContentImpl, { ...props, ref: forwardedRef });
  }
);
SelectContent.displayName = CONTENT_NAME$3;
var CONTENT_MARGIN = 10;
var [SelectContentProvider, useSelectContentContext] = createSelectContext(CONTENT_NAME$3);
var CONTENT_IMPL_NAME = "SelectContentImpl";
var SelectContentImpl = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeSelect,
      position = "item-aligned",
      onCloseAutoFocus,
      onEscapeKeyDown,
      onPointerDownOutside,
      //
      // PopperContent props
      side,
      sideOffset,
      align,
      alignOffset,
      arrowPadding,
      collisionBoundary,
      collisionPadding,
      sticky,
      hideWhenDetached,
      avoidCollisions,
      //
      ...contentProps
    } = props;
    const context = useSelectContext(CONTENT_NAME$3, __scopeSelect);
    const [content, setContent] = React__namespace.useState(null);
    const [viewport, setViewport] = React__namespace.useState(null);
    const composedRefs = Tooltip.useComposedRefs(forwardedRef, (node) => setContent(node));
    const [selectedItem, setSelectedItem] = React__namespace.useState(null);
    const [selectedItemText, setSelectedItemText] = React__namespace.useState(
      null
    );
    const getItems = useCollection$2(__scopeSelect);
    const [isPositioned, setIsPositioned] = React__namespace.useState(false);
    const firstValidItemFoundRef = React__namespace.useRef(false);
    React__namespace.useEffect(() => {
      if (content) return hideOthers(content);
    }, [content]);
    useFocusGuards();
    const focusFirst = React__namespace.useCallback(
      (candidates) => {
        const [firstItem, ...restItems] = getItems().map((item) => item.ref.current);
        const [lastItem] = restItems.slice(-1);
        const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
        for (const candidate of candidates) {
          if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
          candidate?.scrollIntoView({ block: "nearest" });
          if (candidate === firstItem && viewport) viewport.scrollTop = 0;
          if (candidate === lastItem && viewport) viewport.scrollTop = viewport.scrollHeight;
          candidate?.focus();
          if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
        }
      },
      [getItems, viewport]
    );
    const focusSelectedItem = React__namespace.useCallback(
      () => focusFirst([selectedItem, content]),
      [focusFirst, selectedItem, content]
    );
    React__namespace.useEffect(() => {
      if (isPositioned) {
        focusSelectedItem();
      }
    }, [isPositioned, focusSelectedItem]);
    const { onOpenChange, triggerPointerDownPosRef } = context;
    React__namespace.useEffect(() => {
      if (content) {
        let pointerMoveDelta = { x: 0, y: 0 };
        const handlePointerMove = (event) => {
          pointerMoveDelta = {
            x: Math.abs(Math.round(event.pageX) - (triggerPointerDownPosRef.current?.x ?? 0)),
            y: Math.abs(Math.round(event.pageY) - (triggerPointerDownPosRef.current?.y ?? 0))
          };
        };
        const handlePointerUp = (event) => {
          if (pointerMoveDelta.x <= 10 && pointerMoveDelta.y <= 10) {
            event.preventDefault();
          } else {
            if (!content.contains(event.target)) {
              onOpenChange(false);
            }
          }
          document.removeEventListener("pointermove", handlePointerMove);
          triggerPointerDownPosRef.current = null;
        };
        if (triggerPointerDownPosRef.current !== null) {
          document.addEventListener("pointermove", handlePointerMove);
          document.addEventListener("pointerup", handlePointerUp, { capture: true, once: true });
        }
        return () => {
          document.removeEventListener("pointermove", handlePointerMove);
          document.removeEventListener("pointerup", handlePointerUp, { capture: true });
        };
      }
    }, [content, onOpenChange, triggerPointerDownPosRef]);
    React__namespace.useEffect(() => {
      const close = () => onOpenChange(false);
      window.addEventListener("blur", close);
      window.addEventListener("resize", close);
      return () => {
        window.removeEventListener("blur", close);
        window.removeEventListener("resize", close);
      };
    }, [onOpenChange]);
    const [searchRef, handleTypeaheadSearch] = useTypeaheadSearch((search) => {
      const enabledItems = getItems().filter((item) => !item.disabled);
      const currentItem = enabledItems.find((item) => item.ref.current === document.activeElement);
      const nextItem = findNextItem(enabledItems, search, currentItem);
      if (nextItem) {
        setTimeout(() => nextItem.ref.current.focus());
      }
    });
    const itemRefCallback = React__namespace.useCallback(
      (node, value, disabled) => {
        const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
        const isSelectedItem = context.value !== void 0 && context.value === value;
        if (isSelectedItem || isFirstValidItem) {
          setSelectedItem(node);
          if (isFirstValidItem) firstValidItemFoundRef.current = true;
        }
      },
      [context.value]
    );
    const handleItemLeave = React__namespace.useCallback(() => content?.focus(), [content]);
    const itemTextRefCallback = React__namespace.useCallback(
      (node, value, disabled) => {
        const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
        const isSelectedItem = context.value !== void 0 && context.value === value;
        if (isSelectedItem || isFirstValidItem) {
          setSelectedItemText(node);
        }
      },
      [context.value]
    );
    const SelectPosition = position === "popper" ? SelectPopperPosition : SelectItemAlignedPosition;
    const popperContentProps = SelectPosition === SelectPopperPosition ? {
      side,
      sideOffset,
      align,
      alignOffset,
      arrowPadding,
      collisionBoundary,
      collisionPadding,
      sticky,
      hideWhenDetached,
      avoidCollisions
    } : {};
    return /* @__PURE__ */ jsxRuntime.jsx(
      SelectContentProvider,
      {
        scope: __scopeSelect,
        content,
        viewport,
        onViewportChange: setViewport,
        itemRefCallback,
        selectedItem,
        onItemLeave: handleItemLeave,
        itemTextRefCallback,
        focusSelectedItem,
        selectedItemText,
        position,
        isPositioned,
        searchRef,
        children: /* @__PURE__ */ jsxRuntime.jsx(reactRemoveScroll.RemoveScroll, { as: Tooltip.Slot, allowPinchZoom: true, children: /* @__PURE__ */ jsxRuntime.jsx(
          FocusScope,
          {
            asChild: true,
            trapped: context.open,
            onMountAutoFocus: (event) => {
              event.preventDefault();
            },
            onUnmountAutoFocus: Tooltip.composeEventHandlers(onCloseAutoFocus, (event) => {
              context.trigger?.focus({ preventScroll: true });
              event.preventDefault();
            }),
            children: /* @__PURE__ */ jsxRuntime.jsx(
              Tooltip.DismissableLayer,
              {
                asChild: true,
                disableOutsidePointerEvents: true,
                onEscapeKeyDown,
                onPointerDownOutside,
                onFocusOutside: (event) => event.preventDefault(),
                onDismiss: () => context.onOpenChange(false),
                children: /* @__PURE__ */ jsxRuntime.jsx(
                  SelectPosition,
                  {
                    role: "listbox",
                    id: context.contentId,
                    "data-state": context.open ? "open" : "closed",
                    dir: context.dir,
                    onContextMenu: (event) => event.preventDefault(),
                    ...contentProps,
                    ...popperContentProps,
                    onPlaced: () => setIsPositioned(true),
                    ref: composedRefs,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...contentProps.style
                    },
                    onKeyDown: Tooltip.composeEventHandlers(contentProps.onKeyDown, (event) => {
                      const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
                      if (event.key === "Tab") event.preventDefault();
                      if (!isModifierKey && event.key.length === 1) handleTypeaheadSearch(event.key);
                      if (["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
                        const items = getItems().filter((item) => !item.disabled);
                        let candidateNodes = items.map((item) => item.ref.current);
                        if (["ArrowUp", "End"].includes(event.key)) {
                          candidateNodes = candidateNodes.slice().reverse();
                        }
                        if (["ArrowUp", "ArrowDown"].includes(event.key)) {
                          const currentElement = event.target;
                          const currentIndex = candidateNodes.indexOf(currentElement);
                          candidateNodes = candidateNodes.slice(currentIndex + 1);
                        }
                        setTimeout(() => focusFirst(candidateNodes));
                        event.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
SelectContentImpl.displayName = CONTENT_IMPL_NAME;
var ITEM_ALIGNED_POSITION_NAME = "SelectItemAlignedPosition";
var SelectItemAlignedPosition = React__namespace.forwardRef((props, forwardedRef) => {
  const { __scopeSelect, onPlaced, ...popperProps } = props;
  const context = useSelectContext(CONTENT_NAME$3, __scopeSelect);
  const contentContext = useSelectContentContext(CONTENT_NAME$3, __scopeSelect);
  const [contentWrapper, setContentWrapper] = React__namespace.useState(null);
  const [content, setContent] = React__namespace.useState(null);
  const composedRefs = Tooltip.useComposedRefs(forwardedRef, (node) => setContent(node));
  const getItems = useCollection$2(__scopeSelect);
  const shouldExpandOnScrollRef = React__namespace.useRef(false);
  const shouldRepositionRef = React__namespace.useRef(true);
  const { viewport, selectedItem, selectedItemText, focusSelectedItem } = contentContext;
  const position = React__namespace.useCallback(() => {
    if (context.trigger && context.valueNode && contentWrapper && content && viewport && selectedItem && selectedItemText) {
      const triggerRect = context.trigger.getBoundingClientRect();
      const contentRect = content.getBoundingClientRect();
      const valueNodeRect = context.valueNode.getBoundingClientRect();
      const itemTextRect = selectedItemText.getBoundingClientRect();
      if (context.dir !== "rtl") {
        const itemTextOffset = itemTextRect.left - contentRect.left;
        const left = valueNodeRect.left - itemTextOffset;
        const leftDelta = triggerRect.left - left;
        const minContentWidth = triggerRect.width + leftDelta;
        const contentWidth = Math.max(minContentWidth, contentRect.width);
        const rightEdge = window.innerWidth - CONTENT_MARGIN;
        const clampedLeft = clamp(left, [
          CONTENT_MARGIN,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(CONTENT_MARGIN, rightEdge - contentWidth)
        ]);
        contentWrapper.style.minWidth = minContentWidth + "px";
        contentWrapper.style.left = clampedLeft + "px";
      } else {
        const itemTextOffset = contentRect.right - itemTextRect.right;
        const right = window.innerWidth - valueNodeRect.right - itemTextOffset;
        const rightDelta = window.innerWidth - triggerRect.right - right;
        const minContentWidth = triggerRect.width + rightDelta;
        const contentWidth = Math.max(minContentWidth, contentRect.width);
        const leftEdge = window.innerWidth - CONTENT_MARGIN;
        const clampedRight = clamp(right, [
          CONTENT_MARGIN,
          Math.max(CONTENT_MARGIN, leftEdge - contentWidth)
        ]);
        contentWrapper.style.minWidth = minContentWidth + "px";
        contentWrapper.style.right = clampedRight + "px";
      }
      const items = getItems();
      const availableHeight = window.innerHeight - CONTENT_MARGIN * 2;
      const itemsHeight = viewport.scrollHeight;
      const contentStyles = window.getComputedStyle(content);
      const contentBorderTopWidth = parseInt(contentStyles.borderTopWidth, 10);
      const contentPaddingTop = parseInt(contentStyles.paddingTop, 10);
      const contentBorderBottomWidth = parseInt(contentStyles.borderBottomWidth, 10);
      const contentPaddingBottom = parseInt(contentStyles.paddingBottom, 10);
      const fullContentHeight = contentBorderTopWidth + contentPaddingTop + itemsHeight + contentPaddingBottom + contentBorderBottomWidth;
      const minContentHeight = Math.min(selectedItem.offsetHeight * 5, fullContentHeight);
      const viewportStyles = window.getComputedStyle(viewport);
      const viewportPaddingTop = parseInt(viewportStyles.paddingTop, 10);
      const viewportPaddingBottom = parseInt(viewportStyles.paddingBottom, 10);
      const topEdgeToTriggerMiddle = triggerRect.top + triggerRect.height / 2 - CONTENT_MARGIN;
      const triggerMiddleToBottomEdge = availableHeight - topEdgeToTriggerMiddle;
      const selectedItemHalfHeight = selectedItem.offsetHeight / 2;
      const itemOffsetMiddle = selectedItem.offsetTop + selectedItemHalfHeight;
      const contentTopToItemMiddle = contentBorderTopWidth + contentPaddingTop + itemOffsetMiddle;
      const itemMiddleToContentBottom = fullContentHeight - contentTopToItemMiddle;
      const willAlignWithoutTopOverflow = contentTopToItemMiddle <= topEdgeToTriggerMiddle;
      if (willAlignWithoutTopOverflow) {
        const isLastItem = items.length > 0 && selectedItem === items[items.length - 1].ref.current;
        contentWrapper.style.bottom = "0px";
        const viewportOffsetBottom = content.clientHeight - viewport.offsetTop - viewport.offsetHeight;
        const clampedTriggerMiddleToBottomEdge = Math.max(
          triggerMiddleToBottomEdge,
          selectedItemHalfHeight + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (isLastItem ? viewportPaddingBottom : 0) + viewportOffsetBottom + contentBorderBottomWidth
        );
        const height = contentTopToItemMiddle + clampedTriggerMiddleToBottomEdge;
        contentWrapper.style.height = height + "px";
      } else {
        const isFirstItem = items.length > 0 && selectedItem === items[0].ref.current;
        contentWrapper.style.top = "0px";
        const clampedTopEdgeToTriggerMiddle = Math.max(
          topEdgeToTriggerMiddle,
          contentBorderTopWidth + viewport.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (isFirstItem ? viewportPaddingTop : 0) + selectedItemHalfHeight
        );
        const height = clampedTopEdgeToTriggerMiddle + itemMiddleToContentBottom;
        contentWrapper.style.height = height + "px";
        viewport.scrollTop = contentTopToItemMiddle - topEdgeToTriggerMiddle + viewport.offsetTop;
      }
      contentWrapper.style.margin = `${CONTENT_MARGIN}px 0`;
      contentWrapper.style.minHeight = minContentHeight + "px";
      contentWrapper.style.maxHeight = availableHeight + "px";
      onPlaced?.();
      requestAnimationFrame(() => shouldExpandOnScrollRef.current = true);
    }
  }, [
    getItems,
    context.trigger,
    context.valueNode,
    contentWrapper,
    content,
    viewport,
    selectedItem,
    selectedItemText,
    context.dir,
    onPlaced
  ]);
  Tooltip.useLayoutEffect2(() => position(), [position]);
  const [contentZIndex, setContentZIndex] = React__namespace.useState();
  Tooltip.useLayoutEffect2(() => {
    if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
  }, [content]);
  const handleScrollButtonChange = React__namespace.useCallback(
    (node) => {
      if (node && shouldRepositionRef.current === true) {
        position();
        focusSelectedItem?.();
        shouldRepositionRef.current = false;
      }
    },
    [position, focusSelectedItem]
  );
  return /* @__PURE__ */ jsxRuntime.jsx(
    SelectViewportProvider,
    {
      scope: __scopeSelect,
      contentWrapper,
      shouldExpandOnScrollRef,
      onScrollButtonChange: handleScrollButtonChange,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          ref: setContentWrapper,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: contentZIndex
          },
          children: /* @__PURE__ */ jsxRuntime.jsx(
            Tooltip.Primitive.div,
            {
              ...popperProps,
              ref: composedRefs,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...popperProps.style
              }
            }
          )
        }
      )
    }
  );
});
SelectItemAlignedPosition.displayName = ITEM_ALIGNED_POSITION_NAME;
var POPPER_POSITION_NAME = "SelectPopperPosition";
var SelectPopperPosition = React__namespace.forwardRef((props, forwardedRef) => {
  const {
    __scopeSelect,
    align = "start",
    collisionPadding = CONTENT_MARGIN,
    ...popperProps
  } = props;
  const popperScope = usePopperScope$1(__scopeSelect);
  return /* @__PURE__ */ jsxRuntime.jsx(
    Tooltip.Content,
    {
      ...popperScope,
      ...popperProps,
      ref: forwardedRef,
      align,
      collisionPadding,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...popperProps.style,
        // re-namespace exposed content custom properties
        ...{
          "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-select-content-available-width": "var(--radix-popper-available-width)",
          "--radix-select-content-available-height": "var(--radix-popper-available-height)",
          "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    }
  );
});
SelectPopperPosition.displayName = POPPER_POSITION_NAME;
var [SelectViewportProvider, useSelectViewportContext] = createSelectContext(CONTENT_NAME$3, {});
var VIEWPORT_NAME = "SelectViewport";
var SelectViewport = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, nonce, ...viewportProps } = props;
    const contentContext = useSelectContentContext(VIEWPORT_NAME, __scopeSelect);
    const viewportContext = useSelectViewportContext(VIEWPORT_NAME, __scopeSelect);
    const composedRefs = Tooltip.useComposedRefs(forwardedRef, contentContext.onViewportChange);
    const prevScrollTopRef = React__namespace.useRef(0);
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: `[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}`
          },
          nonce
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(Collection$2.Slot, { scope: __scopeSelect, children: /* @__PURE__ */ jsxRuntime.jsx(
        Tooltip.Primitive.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...viewportProps,
          ref: composedRefs,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...viewportProps.style
          },
          onScroll: Tooltip.composeEventHandlers(viewportProps.onScroll, (event) => {
            const viewport = event.currentTarget;
            const { contentWrapper, shouldExpandOnScrollRef } = viewportContext;
            if (shouldExpandOnScrollRef?.current && contentWrapper) {
              const scrolledBy = Math.abs(prevScrollTopRef.current - viewport.scrollTop);
              if (scrolledBy > 0) {
                const availableHeight = window.innerHeight - CONTENT_MARGIN * 2;
                const cssMinHeight = parseFloat(contentWrapper.style.minHeight);
                const cssHeight = parseFloat(contentWrapper.style.height);
                const prevHeight = Math.max(cssMinHeight, cssHeight);
                if (prevHeight < availableHeight) {
                  const nextHeight = prevHeight + scrolledBy;
                  const clampedNextHeight = Math.min(availableHeight, nextHeight);
                  const heightDiff = nextHeight - clampedNextHeight;
                  contentWrapper.style.height = clampedNextHeight + "px";
                  if (contentWrapper.style.bottom === "0px") {
                    viewport.scrollTop = heightDiff > 0 ? heightDiff : 0;
                    contentWrapper.style.justifyContent = "flex-end";
                  }
                }
              }
            }
            prevScrollTopRef.current = viewport.scrollTop;
          })
        }
      ) })
    ] });
  }
);
SelectViewport.displayName = VIEWPORT_NAME;
var GROUP_NAME$3 = "SelectGroup";
var [SelectGroupContextProvider, useSelectGroupContext] = createSelectContext(GROUP_NAME$3);
var SelectGroup = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, ...groupProps } = props;
    const groupId = Tooltip.useId();
    return /* @__PURE__ */ jsxRuntime.jsx(SelectGroupContextProvider, { scope: __scopeSelect, id: groupId, children: /* @__PURE__ */ jsxRuntime.jsx(Tooltip.Primitive.div, { role: "group", "aria-labelledby": groupId, ...groupProps, ref: forwardedRef }) });
  }
);
SelectGroup.displayName = GROUP_NAME$3;
var LABEL_NAME$2 = "SelectLabel";
var SelectLabel = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, ...labelProps } = props;
    const groupContext = useSelectGroupContext(LABEL_NAME$2, __scopeSelect);
    return /* @__PURE__ */ jsxRuntime.jsx(Tooltip.Primitive.div, { id: groupContext.id, ...labelProps, ref: forwardedRef });
  }
);
SelectLabel.displayName = LABEL_NAME$2;
var ITEM_NAME$4 = "SelectItem";
var [SelectItemContextProvider, useSelectItemContext] = createSelectContext(ITEM_NAME$4);
var SelectItem$1 = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeSelect,
      value,
      disabled = false,
      textValue: textValueProp,
      ...itemProps
    } = props;
    const context = useSelectContext(ITEM_NAME$4, __scopeSelect);
    const contentContext = useSelectContentContext(ITEM_NAME$4, __scopeSelect);
    const isSelected = context.value === value;
    const [textValue, setTextValue] = React__namespace.useState(textValueProp ?? "");
    const [isFocused, setIsFocused] = React__namespace.useState(false);
    const composedRefs = Tooltip.useComposedRefs(
      forwardedRef,
      (node) => contentContext.itemRefCallback?.(node, value, disabled)
    );
    const textId = Tooltip.useId();
    const pointerTypeRef = React__namespace.useRef("touch");
    const handleSelect = () => {
      if (!disabled) {
        context.onValueChange(value);
        context.onOpenChange(false);
      }
    };
    if (value === "") {
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    }
    return /* @__PURE__ */ jsxRuntime.jsx(
      SelectItemContextProvider,
      {
        scope: __scopeSelect,
        value,
        disabled,
        textId,
        isSelected,
        onItemTextChange: React__namespace.useCallback((node) => {
          setTextValue((prevTextValue) => prevTextValue || (node?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ jsxRuntime.jsx(
          Collection$2.ItemSlot,
          {
            scope: __scopeSelect,
            value,
            disabled,
            textValue,
            children: /* @__PURE__ */ jsxRuntime.jsx(
              Tooltip.Primitive.div,
              {
                role: "option",
                "aria-labelledby": textId,
                "data-highlighted": isFocused ? "" : void 0,
                "aria-selected": isSelected && isFocused,
                "data-state": isSelected ? "checked" : "unchecked",
                "aria-disabled": disabled || void 0,
                "data-disabled": disabled ? "" : void 0,
                tabIndex: disabled ? void 0 : -1,
                ...itemProps,
                ref: composedRefs,
                onFocus: Tooltip.composeEventHandlers(itemProps.onFocus, () => setIsFocused(true)),
                onBlur: Tooltip.composeEventHandlers(itemProps.onBlur, () => setIsFocused(false)),
                onClick: Tooltip.composeEventHandlers(itemProps.onClick, () => {
                  if (pointerTypeRef.current !== "mouse") handleSelect();
                }),
                onPointerUp: Tooltip.composeEventHandlers(itemProps.onPointerUp, () => {
                  if (pointerTypeRef.current === "mouse") handleSelect();
                }),
                onPointerDown: Tooltip.composeEventHandlers(itemProps.onPointerDown, (event) => {
                  pointerTypeRef.current = event.pointerType;
                }),
                onPointerMove: Tooltip.composeEventHandlers(itemProps.onPointerMove, (event) => {
                  pointerTypeRef.current = event.pointerType;
                  if (disabled) {
                    contentContext.onItemLeave?.();
                  } else if (pointerTypeRef.current === "mouse") {
                    event.currentTarget.focus({ preventScroll: true });
                  }
                }),
                onPointerLeave: Tooltip.composeEventHandlers(itemProps.onPointerLeave, (event) => {
                  if (event.currentTarget === document.activeElement) {
                    contentContext.onItemLeave?.();
                  }
                }),
                onKeyDown: Tooltip.composeEventHandlers(itemProps.onKeyDown, (event) => {
                  const isTypingAhead = contentContext.searchRef?.current !== "";
                  if (isTypingAhead && event.key === " ") return;
                  if (SELECTION_KEYS$1.includes(event.key)) handleSelect();
                  if (event.key === " ") event.preventDefault();
                })
              }
            )
          }
        )
      }
    );
  }
);
SelectItem$1.displayName = ITEM_NAME$4;
var ITEM_TEXT_NAME = "SelectItemText";
var SelectItemText = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, className, style, ...itemTextProps } = props;
    const context = useSelectContext(ITEM_TEXT_NAME, __scopeSelect);
    const contentContext = useSelectContentContext(ITEM_TEXT_NAME, __scopeSelect);
    const itemContext = useSelectItemContext(ITEM_TEXT_NAME, __scopeSelect);
    const nativeOptionsContext = useSelectNativeOptionsContext(ITEM_TEXT_NAME, __scopeSelect);
    const [itemTextNode, setItemTextNode] = React__namespace.useState(null);
    const composedRefs = Tooltip.useComposedRefs(
      forwardedRef,
      (node) => setItemTextNode(node),
      itemContext.onItemTextChange,
      (node) => contentContext.itemTextRefCallback?.(node, itemContext.value, itemContext.disabled)
    );
    const textContent = itemTextNode?.textContent;
    const nativeOption = React__namespace.useMemo(
      () => /* @__PURE__ */ jsxRuntime.jsx("option", { value: itemContext.value, disabled: itemContext.disabled, children: textContent }, itemContext.value),
      [itemContext.disabled, itemContext.value, textContent]
    );
    const { onNativeOptionAdd, onNativeOptionRemove } = nativeOptionsContext;
    Tooltip.useLayoutEffect2(() => {
      onNativeOptionAdd(nativeOption);
      return () => onNativeOptionRemove(nativeOption);
    }, [onNativeOptionAdd, onNativeOptionRemove, nativeOption]);
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(Tooltip.Primitive.span, { id: itemContext.textId, ...itemTextProps, ref: composedRefs }),
      itemContext.isSelected && context.valueNode && !context.valueNodeHasChildren ? ReactDOM__namespace.createPortal(itemTextProps.children, context.valueNode) : null
    ] });
  }
);
SelectItemText.displayName = ITEM_TEXT_NAME;
var ITEM_INDICATOR_NAME$1 = "SelectItemIndicator";
var SelectItemIndicator = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, ...itemIndicatorProps } = props;
    const itemContext = useSelectItemContext(ITEM_INDICATOR_NAME$1, __scopeSelect);
    return itemContext.isSelected ? /* @__PURE__ */ jsxRuntime.jsx(Tooltip.Primitive.span, { "aria-hidden": true, ...itemIndicatorProps, ref: forwardedRef }) : null;
  }
);
SelectItemIndicator.displayName = ITEM_INDICATOR_NAME$1;
var SCROLL_UP_BUTTON_NAME = "SelectScrollUpButton";
var SelectScrollUpButton = React__namespace.forwardRef((props, forwardedRef) => {
  const contentContext = useSelectContentContext(SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
  const viewportContext = useSelectViewportContext(SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
  const [canScrollUp, setCanScrollUp] = React__namespace.useState(false);
  const composedRefs = Tooltip.useComposedRefs(forwardedRef, viewportContext.onScrollButtonChange);
  Tooltip.useLayoutEffect2(() => {
    if (contentContext.viewport && contentContext.isPositioned) {
      let handleScroll2 = function() {
        const canScrollUp2 = viewport.scrollTop > 0;
        setCanScrollUp(canScrollUp2);
      };
      const viewport = contentContext.viewport;
      handleScroll2();
      viewport.addEventListener("scroll", handleScroll2);
      return () => viewport.removeEventListener("scroll", handleScroll2);
    }
  }, [contentContext.viewport, contentContext.isPositioned]);
  return canScrollUp ? /* @__PURE__ */ jsxRuntime.jsx(
    SelectScrollButtonImpl,
    {
      ...props,
      ref: composedRefs,
      onAutoScroll: () => {
        const { viewport, selectedItem } = contentContext;
        if (viewport && selectedItem) {
          viewport.scrollTop = viewport.scrollTop - selectedItem.offsetHeight;
        }
      }
    }
  ) : null;
});
SelectScrollUpButton.displayName = SCROLL_UP_BUTTON_NAME;
var SCROLL_DOWN_BUTTON_NAME = "SelectScrollDownButton";
var SelectScrollDownButton = React__namespace.forwardRef((props, forwardedRef) => {
  const contentContext = useSelectContentContext(SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
  const viewportContext = useSelectViewportContext(SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
  const [canScrollDown, setCanScrollDown] = React__namespace.useState(false);
  const composedRefs = Tooltip.useComposedRefs(forwardedRef, viewportContext.onScrollButtonChange);
  Tooltip.useLayoutEffect2(() => {
    if (contentContext.viewport && contentContext.isPositioned) {
      let handleScroll2 = function() {
        const maxScroll = viewport.scrollHeight - viewport.clientHeight;
        const canScrollDown2 = Math.ceil(viewport.scrollTop) < maxScroll;
        setCanScrollDown(canScrollDown2);
      };
      const viewport = contentContext.viewport;
      handleScroll2();
      viewport.addEventListener("scroll", handleScroll2);
      return () => viewport.removeEventListener("scroll", handleScroll2);
    }
  }, [contentContext.viewport, contentContext.isPositioned]);
  return canScrollDown ? /* @__PURE__ */ jsxRuntime.jsx(
    SelectScrollButtonImpl,
    {
      ...props,
      ref: composedRefs,
      onAutoScroll: () => {
        const { viewport, selectedItem } = contentContext;
        if (viewport && selectedItem) {
          viewport.scrollTop = viewport.scrollTop + selectedItem.offsetHeight;
        }
      }
    }
  ) : null;
});
SelectScrollDownButton.displayName = SCROLL_DOWN_BUTTON_NAME;
var SelectScrollButtonImpl = React__namespace.forwardRef((props, forwardedRef) => {
  const { __scopeSelect, onAutoScroll, ...scrollIndicatorProps } = props;
  const contentContext = useSelectContentContext("SelectScrollButton", __scopeSelect);
  const autoScrollTimerRef = React__namespace.useRef(null);
  const getItems = useCollection$2(__scopeSelect);
  const clearAutoScrollTimer = React__namespace.useCallback(() => {
    if (autoScrollTimerRef.current !== null) {
      window.clearInterval(autoScrollTimerRef.current);
      autoScrollTimerRef.current = null;
    }
  }, []);
  React__namespace.useEffect(() => {
    return () => clearAutoScrollTimer();
  }, [clearAutoScrollTimer]);
  Tooltip.useLayoutEffect2(() => {
    const activeItem = getItems().find((item) => item.ref.current === document.activeElement);
    activeItem?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [getItems]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    Tooltip.Primitive.div,
    {
      "aria-hidden": true,
      ...scrollIndicatorProps,
      ref: forwardedRef,
      style: { flexShrink: 0, ...scrollIndicatorProps.style },
      onPointerDown: Tooltip.composeEventHandlers(scrollIndicatorProps.onPointerDown, () => {
        if (autoScrollTimerRef.current === null) {
          autoScrollTimerRef.current = window.setInterval(onAutoScroll, 50);
        }
      }),
      onPointerMove: Tooltip.composeEventHandlers(scrollIndicatorProps.onPointerMove, () => {
        contentContext.onItemLeave?.();
        if (autoScrollTimerRef.current === null) {
          autoScrollTimerRef.current = window.setInterval(onAutoScroll, 50);
        }
      }),
      onPointerLeave: Tooltip.composeEventHandlers(scrollIndicatorProps.onPointerLeave, () => {
        clearAutoScrollTimer();
      })
    }
  );
});
var SEPARATOR_NAME$2 = "SelectSeparator";
var SelectSeparator$1 = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, ...separatorProps } = props;
    return /* @__PURE__ */ jsxRuntime.jsx(Tooltip.Primitive.div, { "aria-hidden": true, ...separatorProps, ref: forwardedRef });
  }
);
SelectSeparator$1.displayName = SEPARATOR_NAME$2;
var ARROW_NAME$2 = "SelectArrow";
var SelectArrow = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, ...arrowProps } = props;
    const popperScope = usePopperScope$1(__scopeSelect);
    const context = useSelectContext(ARROW_NAME$2, __scopeSelect);
    const contentContext = useSelectContentContext(ARROW_NAME$2, __scopeSelect);
    return context.open && contentContext.position === "popper" ? /* @__PURE__ */ jsxRuntime.jsx(Tooltip.Arrow, { ...popperScope, ...arrowProps, ref: forwardedRef }) : null;
  }
);
SelectArrow.displayName = ARROW_NAME$2;
function shouldShowPlaceholder(value) {
  return value === "" || value === void 0;
}
var BubbleSelect = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const { value, ...selectProps } = props;
    const ref = React__namespace.useRef(null);
    const composedRefs = Tooltip.useComposedRefs(forwardedRef, ref);
    const prevValue = usePrevious(value);
    React__namespace.useEffect(() => {
      const select = ref.current;
      const selectProto = window.HTMLSelectElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(
        selectProto,
        "value"
      );
      const setValue = descriptor.set;
      if (prevValue !== value && setValue) {
        const event = new Event("change", { bubbles: true });
        setValue.call(select, value);
        select.dispatchEvent(event);
      }
    }, [prevValue, value]);
    return /* @__PURE__ */ jsxRuntime.jsx(Tooltip.VisuallyHidden, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx("select", { ...selectProps, ref: composedRefs, defaultValue: value }) });
  }
);
BubbleSelect.displayName = "BubbleSelect";
function useTypeaheadSearch(onSearchChange) {
  const handleSearchChange = Tooltip.useCallbackRef(onSearchChange);
  const searchRef = React__namespace.useRef("");
  const timerRef = React__namespace.useRef(0);
  const handleTypeaheadSearch = React__namespace.useCallback(
    (key) => {
      const search = searchRef.current + key;
      handleSearchChange(search);
      (function updateSearch(value) {
        searchRef.current = value;
        window.clearTimeout(timerRef.current);
        if (value !== "") timerRef.current = window.setTimeout(() => updateSearch(""), 1e3);
      })(search);
    },
    [handleSearchChange]
  );
  const resetTypeahead = React__namespace.useCallback(() => {
    searchRef.current = "";
    window.clearTimeout(timerRef.current);
  }, []);
  React__namespace.useEffect(() => {
    return () => window.clearTimeout(timerRef.current);
  }, []);
  return [searchRef, handleTypeaheadSearch, resetTypeahead];
}
function findNextItem(items, search, currentItem) {
  const isRepeated = search.length > 1 && Array.from(search).every((char) => char === search[0]);
  const normalizedSearch = isRepeated ? search[0] : search;
  const currentItemIndex = currentItem ? items.indexOf(currentItem) : -1;
  let wrappedItems = wrapArray$2(items, Math.max(currentItemIndex, 0));
  const excludeCurrentItem = normalizedSearch.length === 1;
  if (excludeCurrentItem) wrappedItems = wrappedItems.filter((v) => v !== currentItem);
  const nextItem = wrappedItems.find(
    (item) => item.textValue.toLowerCase().startsWith(normalizedSearch.toLowerCase())
  );
  return nextItem !== currentItem ? nextItem : void 0;
}
function wrapArray$2(array, startIndex) {
  return array.map((_, index) => array[(startIndex + index) % array.length]);
}
var Root2$3 = Select$1;
var Trigger$2 = SelectTrigger$1;
var Value = SelectValue;
var Icon = SelectIcon;
var Portal$1 = SelectPortal;
var Content2$2 = SelectContent;
var Viewport = SelectViewport;
var Item$1 = SelectItem$1;
var ItemText = SelectItemText;
var ItemIndicator$1 = SelectItemIndicator;
var Separator$1 = SelectSeparator$1;

const rotationKeyframes = styledComponents.keyframes(["0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}"]);
const LoaderWrapper = styledComponents.styled.div.withConfig({
  displayName: "Loader__LoaderWrapper",
  componentId: "sc-c4rfd8-0"
})(["width:10px;height:10px;border:2px solid ", ";border-bottom-color:transparent;border-radius:50%;animation:", " 1s linear infinite;"], Tooltip.Colors.black40, rotationKeyframes);
function Loader(_ref) {
  let {
    className
  } = _ref;
  return /*#__PURE__*/React__default["default"].createElement(LoaderWrapper, {
    className: className
  });
}

const sharedCSS = p => styledComponents.css(["", ";border:none;outline:none;height:", ";", " border-radius:6px;line-height:1;transition:all 0.1s;display:flex;flex-direction:row;gap:6px;justify-content:center;align-items:center;&:disabled{cursor:default;pointer-events:none;opacity:0.3;}"], fonts.Fonts.body, p.height !== undefined ? p.height : p.variant === "large" ? "36px" : p.variant === "tiny" ? "24px" : "28px", p.hideLabel ? `
    width: ${p.variant === "large" ? "36px" : p.variant === "tiny" ? "24px" : "28px"};
  ` : `
    padding-left: ${p.isGhost ? p.noPadding ? "0px" : "6px" : "10px"};
    padding-right: ${p.isGhost ? p.noPadding ? "0px" : "6px" : "10px"};
  `);
const PrimaryButton = styledComponents.styled.button.withConfig({
  displayName: "buttons__PrimaryButton",
  componentId: "sc-1b20me-0"
})(["", " background-color:", ";color:white;min-width:60px;", ""], p => sharedCSS(p), Tooltip.Colors.blue50, p => p.disabled ? `
    opacity 0.7;
  ` : `
    &:hover {
      background-color: ${Tooltip.Colors.blue60};
    }
  
    &:focus-visible {
      box-shadow: 0 0 0 2px ${Tooltip.Colors.blue60};
    }
  
    &:active {
      background-color: ${Tooltip.Colors.blue70};
    }
    
  `);
const DangerButton = styledComponents.styled.button.withConfig({
  displayName: "buttons__DangerButton",
  componentId: "sc-1b20me-1"
})(["", " background-color:", ";color:white;min-width:60px;", ""], p => sharedCSS(p), Tooltip.Colors.red, p => p.disabled ? `
    opacity 0.7;
  ` : `
    &:hover {
      opacity: 0.7
    }
  
    &:focus-visible {
      box-shadow: 0 0 0 2px ${Tooltip.Colors.blue60};
    }
  
    &:active {
      opacity 0.9;
    }
    
  `);
const SecondaryButton = styledComponents.styled.button.withConfig({
  displayName: "buttons__SecondaryButton",
  componentId: "sc-1b20me-2"
})(["", " background-color:", ";color:black;min-width:60px;", ""], p => sharedCSS(p), Tooltip.Colors.black5, p => p.disabled ? `
    opacity 0.7;
  ` : `
      &:hover {
        background-color: ${Tooltip.Colors.black10};
      }
    
      &:focus-visible {
        box-shadow: 0 0 0 2px ${Tooltip.Colors.blue50};
      }
    
      &:active {
        background-color: ${Tooltip.Colors.black40};
      }
    
  `);
const GhostButton = styledComponents.styled.button.withConfig({
  displayName: "buttons__GhostButton",
  componentId: "sc-1b20me-3"
})(["", " background-color:transparent;color:black;border:1px solid transparent;border-radius:2px;&:hover{border-color:#e5e5e5;}&:focus-visible{box-shadow:0 0 0 2px ", ";}&:active{background-color:", ";}"], p => sharedCSS(p), Tooltip.Colors.blue50, Tooltip.Colors.black20);
const GhostColorButton = styledComponents.styled.button.withConfig({
  displayName: "buttons__GhostColorButton",
  componentId: "sc-1b20me-4"
})(["", " background-color:transparent;color:", ";&:hover{background-color:", ";}&:focus-visible{box-shadow:0 0 0 2px ", ";}&:active{background-color:", ";}"], p => sharedCSS(p), Tooltip.Colors.blue50, Tooltip.Colors.blue10, Tooltip.Colors.blue50, Tooltip.Colors.black20);
const EnhancerContainer = styledComponents.styled.div.withConfig({
  displayName: "buttons__EnhancerContainer",
  componentId: "sc-1b20me-5"
})(["position:relative;width:", ";height:", ";overflow:hidden;flex-shrink:0;"], p => p.variant === "large" ? "24px" : "16px", p => p.variant === "large" ? "24px" : "16px");
const Button = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    component,
    Button,
    ...props
  } = _ref;
  const showTooltip = props.showTooltip ?? true;
  let enhancer = null;
  if (props.isLoading) {
    enhancer = /*#__PURE__*/React__default["default"].createElement(Loader, null);
  } else if (props.enhancer) {
    enhancer = /*#__PURE__*/React__default["default"].createElement(EnhancerContainer, {
      variant: props.variant
    }, props.enhancer);
  } else if (props.icon) {
    const Icon = props.icon;
    enhancer = /*#__PURE__*/React__default["default"].createElement(Icon, null);
  }
  return /*#__PURE__*/React__default["default"].createElement(Tooltip.Tooltip, null, /*#__PURE__*/React__default["default"].createElement(Tooltip.TooltipTrigger, null, /*#__PURE__*/React__default["default"].createElement(Button, _extends__default["default"]({
    as: component
  }, props, {
    ref: ref
  }), enhancer, !props.hideLabel && props.children)), showTooltip && props.children ? /*#__PURE__*/React__default["default"].createElement(Tooltip.TooltipContent, {
    style: {
      ...fonts.Fonts.body
    }
  }, props.children) : null);
});
Button.displayName = "Button";
const ButtonPrimary = props => /*#__PURE__*/React__default["default"].createElement(Button, _extends__default["default"]({}, props, {
  Button: PrimaryButton
}));
const ButtonDanger = props => /*#__PURE__*/React__default["default"].createElement(Button, _extends__default["default"]({}, props, {
  Button: DangerButton
}));
const ButtonSecondary = /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React__default["default"].createElement(Button, _extends__default["default"]({}, props, {
  Button: SecondaryButton,
  ref: ref
})));
ButtonSecondary.displayName = "ButtonSecondary";
const ButtonGhost = /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React__default["default"].createElement(Button, _extends__default["default"]({}, props, {
  Button: GhostButton,
  isGhost: true,
  noPadding: props.noPadding,
  ref: ref
})));
ButtonGhost.displayName = "ButtonGhost";
const ButtonGhostColor = props => /*#__PURE__*/React__default["default"].createElement(Button, _extends__default["default"]({}, props, {
  Button: GhostColorButton,
  isGhost: true,
  noPadding: props.noPadding
}));
const IconButtonPrimaryStyled = styledComponents.styled(Button).withConfig({
  displayName: "buttons__IconButtonPrimaryStyled",
  componentId: "sc-1b20me-6"
})(["min-width:0;border-radius:50%;"]);
const IconButtonPrimary = props => /*#__PURE__*/React__default["default"].createElement(IconButtonPrimaryStyled, _extends__default["default"]({}, props, {
  Button: PrimaryButton,
  hideLabel: true
}));

const Root$6 = styledComponents.styled.div.withConfig({
  displayName: "FormElement__Root",
  componentId: "sc-11sxp3-0"
})(["position:relative;"]);
const Layout = styledComponents.styled.div.withConfig({
  displayName: "FormElement__Layout",
  componentId: "sc-11sxp3-1"
})(["position:relative;display:flex;flex-direction:row;gap:8px;", ""], _ref => {
  let {
    position = "center"
  } = _ref;
  return `align-items: ${position}`;
});
const Label$1 = styledComponents.styled.label.withConfig({
  displayName: "FormElement__Label",
  componentId: "sc-11sxp3-2"
})(["", " color:black;flex:0 0 120px;min-width:0;"], fonts.Fonts.body);
const ControlWrapper = styledComponents.styled.div.withConfig({
  displayName: "FormElement__ControlWrapper",
  componentId: "sc-11sxp3-3"
})(["flex:1 1 auto;min-width:0;display:grid;"]);
const ErrorWrapper = styledComponents.styled.div.withConfig({
  displayName: "FormElement__ErrorWrapper",
  componentId: "sc-11sxp3-4"
})(["margin-top:6px;", " color:", ";"], fonts.Fonts.body, Tooltip.Colors.red);
const FormElement = props => {
  return /*#__PURE__*/React__default["default"].createElement(Root$6, null, /*#__PURE__*/React__default["default"].createElement(Layout, {
    position: props?.position
  }, /*#__PURE__*/React__default["default"].createElement(Label$1, {
    htmlFor: props.name
  }, props.label), /*#__PURE__*/React__default["default"].createElement(ControlWrapper, null, /*#__PURE__*/React__default["default"].cloneElement(props.children, {
    name: props.name,
    hasError: !!props.error
  }))), props.error && /*#__PURE__*/React__default["default"].createElement(Layout, null, /*#__PURE__*/React__default["default"].createElement(Label$1, {
    as: "div"
  }), /*#__PURE__*/React__default["default"].createElement(ErrorWrapper, null, props.error)));
};

function sizing(p) {
  const height = p.controlSize === "tiny" ? 24 : 28;
  const paddingHorizontal = p.controlSize === "tiny" ? 4 : 6;
  let paddingIcon = paddingHorizontal + (p.icon ? 20 : 0);
  if (p.iconOnly) {
    paddingIcon = 0;
  }
  return {
    height: height + "px",
    width: p.controlSize === "full-width" ? "100%" : p.iconOnly ? height + "px" : "auto",
    paddingHorizontal: paddingHorizontal + "px",
    paddingVertical: p.controlSize === "tiny" ? "4px" : "6px",
    paddingIcon: paddingIcon + "px"
  };
}
const Root$5 = styledComponents.styled.div.withConfig({
  displayName: "ControlContainer__Root",
  componentId: "sc-1i70r11-0"
})(["position:relative;height:", ";width:", ";color:black;", " &:focus-within{box-shadow:0 0 0 2px ", ";.ss-arrow{color:black;}}transition:box-shadow 0.1s;border-radius:2px;display:inline-block;", ";"], p => sizing(p).height, p => sizing(p).width, p => {
  const outlineStyles = `
      box-shadow: 0 0 0 1px ${p.hasError ? "red" : Tooltip.Colors.black10};
      .ss-arrow {
        color: black;
      }
    `;
  if (p.withBorder) {
    if (p.disabled) {
      return `
          ${outlineStyles}
          color: ${Tooltip.Colors.black40};
        `;
    } else {
      return `
          ${outlineStyles}
        `;
    }
  } else {
    if (p.disabled) {
      return `
          color: ${Tooltip.Colors.black40};
        `;
    } else {
      return `
          &:hover {
             ${outlineStyles}
          }
        `;
    }
  }
}, p => p.hasError ? Tooltip.Colors.red : Tooltip.Colors.focus, fonts.Fonts.body);
const IconContainer = styledComponents.styled.div.withConfig({
  displayName: "ControlContainer__IconContainer",
  componentId: "sc-1i70r11-1"
})(["color:", ";position:absolute;left:", ";top:", ";pointer-events:none;"], p => p.iconBlack ? "black" : Tooltip.Colors.black40, p => sizing(p).paddingHorizontal, p => sizing(p).paddingVertical);
const ControlContainer = _ref => {
  let {
    className,
    ...props
  } = _ref;
  const Icon = props.icon;
  return /*#__PURE__*/React__default["default"].createElement(Root$5, _extends__default["default"]({
    className: className
  }, props), Icon && /*#__PURE__*/React__default["default"].createElement(IconContainer, props, /*#__PURE__*/React__default["default"].createElement(Icon, null)), props.children);
};
function getControlPadding() {
  return styledComponents.css(["padding-left:", ";padding-right:", ";"], p => sizing(p).paddingIcon, p => sizing(p).paddingHorizontal);
}

const StyledInput = styledComponents.styled.input.withConfig({
  displayName: "Input__StyledInput",
  componentId: "sc-1nyhv3t-0"
})(["all:unset;box-sizing:border-box;width:100%;height:100%;outline:none;border:none;::-webkit-search-decoration,::-webkit-search-cancel-button,::-webkit-search-results-button,::-webkit-search-results-decoration{display:none;}", " ", ";"], p => !p.isRaw && getControlPadding(), fonts.Fonts.body);
const StyledInputColorContainer = styledComponents.styled.div.withConfig({
  displayName: "Input__StyledInputColorContainer",
  componentId: "sc-1nyhv3t-1"
})(["position:relative;width:100%;height:100%;"]);
const StyledInputColorWrapper = styledComponents.styled.div.withConfig({
  displayName: "Input__StyledInputColorWrapper",
  componentId: "sc-1nyhv3t-2"
})(["position:relative;width:100%;height:100%;box-shadow:0 0 0 1px ", ";&:hover{box-shadow:0 0 0 1px ", ";}border-radius:2px;cursor:pointer;outline:none;padding:4px;"], Tooltip.Colors.black10, Tooltip.Colors.black20);
const StyledInputCurrentColor = styledComponents.styled.div.withConfig({
  displayName: "Input__StyledInputCurrentColor",
  componentId: "sc-1nyhv3t-3"
})(["", ";"], _ref => {
  let {
    color = `${Tooltip.Colors.black800}`
  } = _ref;
  return `background: ${color}`;
});
const StyledInputColorDialogWrapper = styledComponents.styled.div.withConfig({
  displayName: "Input__StyledInputColorDialogWrapper",
  componentId: "sc-1nyhv3t-4"
})(["position:fixed;top:20px;right:10px;z-index:1;"]);
const StyledInputColorPickerWrapper = styledComponents.styled.div.withConfig({
  displayName: "Input__StyledInputColorPickerWrapper",
  componentId: "sc-1nyhv3t-5"
})(["", ";border-radius:8px;box-shadow:0 0 6px ", ";padding:8px;position:relative;width:310px;"], _ref2 => {
  let {
    isDark
  } = _ref2;
  return `background: ${isDark ? Tooltip.Colors.black900 : Tooltip.Colors.white}`;
}, Tooltip.Colors.black40);
const StyledInputFileWrapper = styledComponents.styled.div.withConfig({
  displayName: "Input__StyledInputFileWrapper",
  componentId: "sc-1nyhv3t-6"
})(["position:relative;width:168px;height:168px;"]);
const StyledInputFile = styledComponents.styled.img.withConfig({
  displayName: "Input__StyledInputFile",
  componentId: "sc-1nyhv3t-7"
})(["width:100%;height:100%;object-fit:cover;box-shadow:0 0 0 1px ", ";"], Tooltip.Colors.black10);
const StyledInputFileCloseIcon = styledComponents.styled.div.withConfig({
  displayName: "Input__StyledInputFileCloseIcon",
  componentId: "sc-1nyhv3t-8"
})(["position:absolute;right:10px;top:10px;width:20px;height:20px;display:flex;justify-content:center;align-items:center;background:", ";border-radius:100%;cursor:pointer;"], Tooltip.Colors.white);
const StyledInputLabel = styledComponents.styled.label.withConfig({
  displayName: "Input__StyledInputLabel",
  componentId: "sc-1nyhv3t-9"
})(["display:flex;align-items:center;justify-content:center;gap:8px;height:100%;border:1px dashed ", ";cursor:pointer;color:", ";", ";"], Tooltip.Colors.blue50, Tooltip.Colors.blue50, fonts.Fonts.body);
const InputBase = /*#__PURE__*/React.forwardRef((props, ref) => {
  return /*#__PURE__*/React__default["default"].createElement(StyledInput, _extends__default["default"]({}, props, {
    ref: ref
  }));
});
InputBase.displayName = "InputBase";
const Input = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    iconBlack,
    controlSize,
    iconOnly,
    onBlur,
    value,
    ...inputProps
  } = props;
  return /*#__PURE__*/React__default["default"].createElement(ControlContainer, _extends__default["default"]({
    iconBlack: iconBlack,
    controlSize: controlSize,
    iconOnly: iconOnly
  }, inputProps), /*#__PURE__*/React__default["default"].createElement(InputBase, _extends__default["default"]({}, inputProps, {
    value: value,
    onBlur: onBlur,
    ref: ref
  })));
});
Input.displayName = "Input";
const InputFile = /*#__PURE__*/React.forwardRef((props, ref) => {
  const id = React.useId();
  const inputId = props.id ?? id;
  return /*#__PURE__*/React__default["default"].createElement(StyledInputFileWrapper, null, /*#__PURE__*/React__default["default"].createElement(InputBase, _extends__default["default"]({}, props, {
    ref: ref,
    type: "file",
    id: inputId,
    style: {
      display: "none"
    }
  })), props?.src ? /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(StyledInputFile, {
    src: props?.src,
    alt: props?.alt
  }), /*#__PURE__*/React__default["default"].createElement(StyledInputFileCloseIcon, {
    onClick: props?.onClearFile
  }, /*#__PURE__*/React__default["default"].createElement(Icons.Close, {
    size: 12
  }))) : /*#__PURE__*/React__default["default"].createElement(StyledInputLabel, {
    htmlFor: inputId
  }, props?.isLoading ? /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Icons.LoadingSpinner, {
    size: 24
  }), props?.loadingLabel ?? "Uploading...") : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Icons.Add, {
    size: 16
  }), props?.label ?? "Add or drop image")));
});
InputFile.displayName = "InputFile";
const debouncedSave = debounce__default["default"](fn => fn(), 400);
const ColorPicker = props => {
  const {
    value,
    onChange
  } = props;
  const [color, setColor] = React.useState(value);
  const isDark = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const onChangeColor = newColor => {
    setColor(newColor);
    if (newColor) {
      debouncedSave(() => onChange(newColor));
    }
  };
  React.useEffect(() => {
    if (value) {
      setColor(value);
    }
  }, [value]);
  return /*#__PURE__*/React__default["default"].createElement(StyledInputColorPickerWrapper, {
    isDark: isDark
  }, /*#__PURE__*/React__default["default"].createElement(_ColorPicker__default["default"], _extends__default["default"]({
    style: {
      body: {
        borderRadius: 8
      }
    },
    hideEyeDrop: true
  }, props, {
    value: color,
    onChange: onChangeColor
  })));
};
const InputColor = /*#__PURE__*/React.forwardRef((props, ref) => {
  const clickOutsideRef = React.useRef(null);
  const {
    value,
    onChange,
    style = {},
    className
  } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  React.useEffect(() => {
    const handleClickOutside = event => {
      // Only handle object refs (skip callback refs) and close when clicking outside
      if (clickOutsideRef && typeof clickOutsideRef !== "function") {
        const node = clickOutsideRef.current;
        if (node && !node.contains(event.target)) {
          setIsOpen(false);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [clickOutsideRef]);
  return /*#__PURE__*/React__default["default"].createElement(StyledInputColorContainer, {
    ref: ref
  }, /*#__PURE__*/React__default["default"].createElement(StyledInputColorContainer, {
    ref: clickOutsideRef
  }, /*#__PURE__*/React__default["default"].createElement(StyledInputColorWrapper, {
    onClick: () => setIsOpen(prev => !prev)
  }, /*#__PURE__*/React__default["default"].createElement(StyledInputCurrentColor, {
    className: className,
    style: style,
    color: value
  })), isOpen ? /*#__PURE__*/React__default["default"].createElement(StyledInputColorDialogWrapper, null, /*#__PURE__*/React__default["default"].createElement(ColorPicker, {
    value: value,
    onChange: onChange
  })) : null));
});
InputColor.displayName = "InputColor";
const InputRaw = /*#__PURE__*/React.forwardRef((props, ref) => {
  return /*#__PURE__*/React__default["default"].createElement(InputBase, _extends__default["default"]({}, props, {
    ref: ref,
    isRaw: true
  }));
});
InputRaw.displayName = "InputRaw";

var ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
var EVENT_OPTIONS = { bubbles: false, cancelable: true };
var GROUP_NAME$2 = "RovingFocusGroup";
var [Collection$1, useCollection$1, createCollectionScope$1] = createCollection(GROUP_NAME$2);
var [createRovingFocusGroupContext, createRovingFocusGroupScope] = Tooltip.createContextScope(
  GROUP_NAME$2,
  [createCollectionScope$1]
);
var [RovingFocusProvider, useRovingFocusContext] = createRovingFocusGroupContext(GROUP_NAME$2);
var RovingFocusGroup = React__namespace.forwardRef(
  (props, forwardedRef) => {
    return /* @__PURE__ */ jsxRuntime.jsx(Collection$1.Provider, { scope: props.__scopeRovingFocusGroup, children: /* @__PURE__ */ jsxRuntime.jsx(Collection$1.Slot, { scope: props.__scopeRovingFocusGroup, children: /* @__PURE__ */ jsxRuntime.jsx(RovingFocusGroupImpl, { ...props, ref: forwardedRef }) }) });
  }
);
RovingFocusGroup.displayName = GROUP_NAME$2;
var RovingFocusGroupImpl = React__namespace.forwardRef((props, forwardedRef) => {
  const {
    __scopeRovingFocusGroup,
    orientation,
    loop = false,
    dir,
    currentTabStopId: currentTabStopIdProp,
    defaultCurrentTabStopId,
    onCurrentTabStopIdChange,
    onEntryFocus,
    preventScrollOnEntryFocus = false,
    ...groupProps
  } = props;
  const ref = React__namespace.useRef(null);
  const composedRefs = Tooltip.useComposedRefs(forwardedRef, ref);
  const direction = useDirection(dir);
  const [currentTabStopId = null, setCurrentTabStopId] = Tooltip.useControllableState({
    prop: currentTabStopIdProp,
    defaultProp: defaultCurrentTabStopId,
    onChange: onCurrentTabStopIdChange
  });
  const [isTabbingBackOut, setIsTabbingBackOut] = React__namespace.useState(false);
  const handleEntryFocus = Tooltip.useCallbackRef(onEntryFocus);
  const getItems = useCollection$1(__scopeRovingFocusGroup);
  const isClickFocusRef = React__namespace.useRef(false);
  const [focusableItemsCount, setFocusableItemsCount] = React__namespace.useState(0);
  React__namespace.useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener(ENTRY_FOCUS, handleEntryFocus);
      return () => node.removeEventListener(ENTRY_FOCUS, handleEntryFocus);
    }
  }, [handleEntryFocus]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    RovingFocusProvider,
    {
      scope: __scopeRovingFocusGroup,
      orientation,
      dir: direction,
      loop,
      currentTabStopId,
      onItemFocus: React__namespace.useCallback(
        (tabStopId) => setCurrentTabStopId(tabStopId),
        [setCurrentTabStopId]
      ),
      onItemShiftTab: React__namespace.useCallback(() => setIsTabbingBackOut(true), []),
      onFocusableItemAdd: React__namespace.useCallback(
        () => setFocusableItemsCount((prevCount) => prevCount + 1),
        []
      ),
      onFocusableItemRemove: React__namespace.useCallback(
        () => setFocusableItemsCount((prevCount) => prevCount - 1),
        []
      ),
      children: /* @__PURE__ */ jsxRuntime.jsx(
        Tooltip.Primitive.div,
        {
          tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
          "data-orientation": orientation,
          ...groupProps,
          ref: composedRefs,
          style: { outline: "none", ...props.style },
          onMouseDown: Tooltip.composeEventHandlers(props.onMouseDown, () => {
            isClickFocusRef.current = true;
          }),
          onFocus: Tooltip.composeEventHandlers(props.onFocus, (event) => {
            const isKeyboardFocus = !isClickFocusRef.current;
            if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
              const entryFocusEvent = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS);
              event.currentTarget.dispatchEvent(entryFocusEvent);
              if (!entryFocusEvent.defaultPrevented) {
                const items = getItems().filter((item) => item.focusable);
                const activeItem = items.find((item) => item.active);
                const currentItem = items.find((item) => item.id === currentTabStopId);
                const candidateItems = [activeItem, currentItem, ...items].filter(
                  Boolean
                );
                const candidateNodes = candidateItems.map((item) => item.ref.current);
                focusFirst$1(candidateNodes, preventScrollOnEntryFocus);
              }
            }
            isClickFocusRef.current = false;
          }),
          onBlur: Tooltip.composeEventHandlers(props.onBlur, () => setIsTabbingBackOut(false))
        }
      )
    }
  );
});
var ITEM_NAME$3 = "RovingFocusGroupItem";
var RovingFocusGroupItem = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeRovingFocusGroup,
      focusable = true,
      active = false,
      tabStopId,
      ...itemProps
    } = props;
    const autoId = Tooltip.useId();
    const id = tabStopId || autoId;
    const context = useRovingFocusContext(ITEM_NAME$3, __scopeRovingFocusGroup);
    const isCurrentTabStop = context.currentTabStopId === id;
    const getItems = useCollection$1(__scopeRovingFocusGroup);
    const { onFocusableItemAdd, onFocusableItemRemove } = context;
    React__namespace.useEffect(() => {
      if (focusable) {
        onFocusableItemAdd();
        return () => onFocusableItemRemove();
      }
    }, [focusable, onFocusableItemAdd, onFocusableItemRemove]);
    return /* @__PURE__ */ jsxRuntime.jsx(
      Collection$1.ItemSlot,
      {
        scope: __scopeRovingFocusGroup,
        id,
        focusable,
        active,
        children: /* @__PURE__ */ jsxRuntime.jsx(
          Tooltip.Primitive.span,
          {
            tabIndex: isCurrentTabStop ? 0 : -1,
            "data-orientation": context.orientation,
            ...itemProps,
            ref: forwardedRef,
            onMouseDown: Tooltip.composeEventHandlers(props.onMouseDown, (event) => {
              if (!focusable) event.preventDefault();
              else context.onItemFocus(id);
            }),
            onFocus: Tooltip.composeEventHandlers(props.onFocus, () => context.onItemFocus(id)),
            onKeyDown: Tooltip.composeEventHandlers(props.onKeyDown, (event) => {
              if (event.key === "Tab" && event.shiftKey) {
                context.onItemShiftTab();
                return;
              }
              if (event.target !== event.currentTarget) return;
              const focusIntent = getFocusIntent(event, context.orientation, context.dir);
              if (focusIntent !== void 0) {
                if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
                event.preventDefault();
                const items = getItems().filter((item) => item.focusable);
                let candidateNodes = items.map((item) => item.ref.current);
                if (focusIntent === "last") candidateNodes.reverse();
                else if (focusIntent === "prev" || focusIntent === "next") {
                  if (focusIntent === "prev") candidateNodes.reverse();
                  const currentIndex = candidateNodes.indexOf(event.currentTarget);
                  candidateNodes = context.loop ? wrapArray$1(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
                }
                setTimeout(() => focusFirst$1(candidateNodes));
              }
            })
          }
        )
      }
    );
  }
);
RovingFocusGroupItem.displayName = ITEM_NAME$3;
var MAP_KEY_TO_FOCUS_INTENT = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function getDirectionAwareKey(key, dir) {
  if (dir !== "rtl") return key;
  return key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
}
function getFocusIntent(event, orientation, dir) {
  const key = getDirectionAwareKey(event.key, dir);
  if (orientation === "vertical" && ["ArrowLeft", "ArrowRight"].includes(key)) return void 0;
  if (orientation === "horizontal" && ["ArrowUp", "ArrowDown"].includes(key)) return void 0;
  return MAP_KEY_TO_FOCUS_INTENT[key];
}
function focusFirst$1(candidates, preventScroll = false) {
  const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
  for (const candidate of candidates) {
    if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
    candidate.focus({ preventScroll });
    if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
  }
}
function wrapArray$1(array, startIndex) {
  return array.map((_, index) => array[(startIndex + index) % array.length]);
}
var Root$4 = RovingFocusGroup;
var Item = RovingFocusGroupItem;

var SELECTION_KEYS = ["Enter", " "];
var FIRST_KEYS = ["ArrowDown", "PageUp", "Home"];
var LAST_KEYS = ["ArrowUp", "PageDown", "End"];
var FIRST_LAST_KEYS = [...FIRST_KEYS, ...LAST_KEYS];
var SUB_OPEN_KEYS = {
  ltr: [...SELECTION_KEYS, "ArrowRight"],
  rtl: [...SELECTION_KEYS, "ArrowLeft"]
};
var SUB_CLOSE_KEYS = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
var MENU_NAME = "Menu";
var [Collection, useCollection, createCollectionScope] = createCollection(MENU_NAME);
var [createMenuContext, createMenuScope] = Tooltip.createContextScope(MENU_NAME, [
  createCollectionScope,
  Tooltip.createPopperScope,
  createRovingFocusGroupScope
]);
var usePopperScope = Tooltip.createPopperScope();
var useRovingFocusGroupScope$2 = createRovingFocusGroupScope();
var [MenuProvider, useMenuContext] = createMenuContext(MENU_NAME);
var [MenuRootProvider, useMenuRootContext] = createMenuContext(MENU_NAME);
var Menu$1 = (props) => {
  const { __scopeMenu, open = false, children, dir, onOpenChange, modal = true } = props;
  const popperScope = usePopperScope(__scopeMenu);
  const [content, setContent] = React__namespace.useState(null);
  const isUsingKeyboardRef = React__namespace.useRef(false);
  const handleOpenChange = Tooltip.useCallbackRef(onOpenChange);
  const direction = useDirection(dir);
  React__namespace.useEffect(() => {
    const handleKeyDown = () => {
      isUsingKeyboardRef.current = true;
      document.addEventListener("pointerdown", handlePointer, { capture: true, once: true });
      document.addEventListener("pointermove", handlePointer, { capture: true, once: true });
    };
    const handlePointer = () => isUsingKeyboardRef.current = false;
    document.addEventListener("keydown", handleKeyDown, { capture: true });
    return () => {
      document.removeEventListener("keydown", handleKeyDown, { capture: true });
      document.removeEventListener("pointerdown", handlePointer, { capture: true });
      document.removeEventListener("pointermove", handlePointer, { capture: true });
    };
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsx(Tooltip.Root2, { ...popperScope, children: /* @__PURE__ */ jsxRuntime.jsx(
    MenuProvider,
    {
      scope: __scopeMenu,
      open,
      onOpenChange: handleOpenChange,
      content,
      onContentChange: setContent,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        MenuRootProvider,
        {
          scope: __scopeMenu,
          onClose: React__namespace.useCallback(() => handleOpenChange(false), [handleOpenChange]),
          isUsingKeyboardRef,
          dir: direction,
          modal,
          children
        }
      )
    }
  ) });
};
Menu$1.displayName = MENU_NAME;
var ANCHOR_NAME = "MenuAnchor";
var MenuAnchor = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenu, ...anchorProps } = props;
    const popperScope = usePopperScope(__scopeMenu);
    return /* @__PURE__ */ jsxRuntime.jsx(Tooltip.Anchor, { ...popperScope, ...anchorProps, ref: forwardedRef });
  }
);
MenuAnchor.displayName = ANCHOR_NAME;
var PORTAL_NAME$1 = "MenuPortal";
var [PortalProvider, usePortalContext] = createMenuContext(PORTAL_NAME$1, {
  forceMount: void 0
});
var MenuPortal = (props) => {
  const { __scopeMenu, forceMount, children, container } = props;
  const context = useMenuContext(PORTAL_NAME$1, __scopeMenu);
  return /* @__PURE__ */ jsxRuntime.jsx(PortalProvider, { scope: __scopeMenu, forceMount, children: /* @__PURE__ */ jsxRuntime.jsx(Tooltip.Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsxRuntime.jsx(Tooltip.Portal, { asChild: true, container, children }) }) });
};
MenuPortal.displayName = PORTAL_NAME$1;
var CONTENT_NAME$2 = "MenuContent";
var [MenuContentProvider, useMenuContentContext] = createMenuContext(CONTENT_NAME$2);
var MenuContent$1 = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext(CONTENT_NAME$2, props.__scopeMenu);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = useMenuContext(CONTENT_NAME$2, props.__scopeMenu);
    const rootContext = useMenuRootContext(CONTENT_NAME$2, props.__scopeMenu);
    return /* @__PURE__ */ jsxRuntime.jsx(Collection.Provider, { scope: props.__scopeMenu, children: /* @__PURE__ */ jsxRuntime.jsx(Tooltip.Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsxRuntime.jsx(Collection.Slot, { scope: props.__scopeMenu, children: rootContext.modal ? /* @__PURE__ */ jsxRuntime.jsx(MenuRootContentModal, { ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ jsxRuntime.jsx(MenuRootContentNonModal, { ...contentProps, ref: forwardedRef }) }) }) });
  }
);
var MenuRootContentModal = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const context = useMenuContext(CONTENT_NAME$2, props.__scopeMenu);
    const ref = React__namespace.useRef(null);
    const composedRefs = Tooltip.useComposedRefs(forwardedRef, ref);
    React__namespace.useEffect(() => {
      const content = ref.current;
      if (content) return hideOthers(content);
    }, []);
    return /* @__PURE__ */ jsxRuntime.jsx(
      MenuContentImpl,
      {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: context.open,
        disableOutsideScroll: true,
        onFocusOutside: Tooltip.composeEventHandlers(
          props.onFocusOutside,
          (event) => event.preventDefault(),
          { checkForDefaultPrevented: false }
        ),
        onDismiss: () => context.onOpenChange(false)
      }
    );
  }
);
var MenuRootContentNonModal = React__namespace.forwardRef((props, forwardedRef) => {
  const context = useMenuContext(CONTENT_NAME$2, props.__scopeMenu);
  return /* @__PURE__ */ jsxRuntime.jsx(
    MenuContentImpl,
    {
      ...props,
      ref: forwardedRef,
      trapFocus: false,
      disableOutsidePointerEvents: false,
      disableOutsideScroll: false,
      onDismiss: () => context.onOpenChange(false)
    }
  );
});
var MenuContentImpl = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeMenu,
      loop = false,
      trapFocus,
      onOpenAutoFocus,
      onCloseAutoFocus,
      disableOutsidePointerEvents,
      onEntryFocus,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      onDismiss,
      disableOutsideScroll,
      ...contentProps
    } = props;
    const context = useMenuContext(CONTENT_NAME$2, __scopeMenu);
    const rootContext = useMenuRootContext(CONTENT_NAME$2, __scopeMenu);
    const popperScope = usePopperScope(__scopeMenu);
    const rovingFocusGroupScope = useRovingFocusGroupScope$2(__scopeMenu);
    const getItems = useCollection(__scopeMenu);
    const [currentItemId, setCurrentItemId] = React__namespace.useState(null);
    const contentRef = React__namespace.useRef(null);
    const composedRefs = Tooltip.useComposedRefs(forwardedRef, contentRef, context.onContentChange);
    const timerRef = React__namespace.useRef(0);
    const searchRef = React__namespace.useRef("");
    const pointerGraceTimerRef = React__namespace.useRef(0);
    const pointerGraceIntentRef = React__namespace.useRef(null);
    const pointerDirRef = React__namespace.useRef("right");
    const lastPointerXRef = React__namespace.useRef(0);
    const ScrollLockWrapper = disableOutsideScroll ? reactRemoveScroll.RemoveScroll : React__namespace.Fragment;
    const scrollLockWrapperProps = disableOutsideScroll ? { as: Tooltip.Slot, allowPinchZoom: true } : void 0;
    const handleTypeaheadSearch = (key) => {
      const search = searchRef.current + key;
      const items = getItems().filter((item) => !item.disabled);
      const currentItem = document.activeElement;
      const currentMatch = items.find((item) => item.ref.current === currentItem)?.textValue;
      const values = items.map((item) => item.textValue);
      const nextMatch = getNextMatch(values, search, currentMatch);
      const newItem = items.find((item) => item.textValue === nextMatch)?.ref.current;
      (function updateSearch(value) {
        searchRef.current = value;
        window.clearTimeout(timerRef.current);
        if (value !== "") timerRef.current = window.setTimeout(() => updateSearch(""), 1e3);
      })(search);
      if (newItem) {
        setTimeout(() => newItem.focus());
      }
    };
    React__namespace.useEffect(() => {
      return () => window.clearTimeout(timerRef.current);
    }, []);
    useFocusGuards();
    const isPointerMovingToSubmenu = React__namespace.useCallback((event) => {
      const isMovingTowards = pointerDirRef.current === pointerGraceIntentRef.current?.side;
      return isMovingTowards && isPointerInGraceArea(event, pointerGraceIntentRef.current?.area);
    }, []);
    return /* @__PURE__ */ jsxRuntime.jsx(
      MenuContentProvider,
      {
        scope: __scopeMenu,
        searchRef,
        onItemEnter: React__namespace.useCallback(
          (event) => {
            if (isPointerMovingToSubmenu(event)) event.preventDefault();
          },
          [isPointerMovingToSubmenu]
        ),
        onItemLeave: React__namespace.useCallback(
          (event) => {
            if (isPointerMovingToSubmenu(event)) return;
            contentRef.current?.focus();
            setCurrentItemId(null);
          },
          [isPointerMovingToSubmenu]
        ),
        onTriggerLeave: React__namespace.useCallback(
          (event) => {
            if (isPointerMovingToSubmenu(event)) event.preventDefault();
          },
          [isPointerMovingToSubmenu]
        ),
        pointerGraceTimerRef,
        onPointerGraceIntentChange: React__namespace.useCallback((intent) => {
          pointerGraceIntentRef.current = intent;
        }, []),
        children: /* @__PURE__ */ jsxRuntime.jsx(ScrollLockWrapper, { ...scrollLockWrapperProps, children: /* @__PURE__ */ jsxRuntime.jsx(
          FocusScope,
          {
            asChild: true,
            trapped: trapFocus,
            onMountAutoFocus: Tooltip.composeEventHandlers(onOpenAutoFocus, (event) => {
              event.preventDefault();
              contentRef.current?.focus({ preventScroll: true });
            }),
            onUnmountAutoFocus: onCloseAutoFocus,
            children: /* @__PURE__ */ jsxRuntime.jsx(
              Tooltip.DismissableLayer,
              {
                asChild: true,
                disableOutsidePointerEvents,
                onEscapeKeyDown,
                onPointerDownOutside,
                onFocusOutside,
                onInteractOutside,
                onDismiss,
                children: /* @__PURE__ */ jsxRuntime.jsx(
                  Root$4,
                  {
                    asChild: true,
                    ...rovingFocusGroupScope,
                    dir: rootContext.dir,
                    orientation: "vertical",
                    loop,
                    currentTabStopId: currentItemId,
                    onCurrentTabStopIdChange: setCurrentItemId,
                    onEntryFocus: Tooltip.composeEventHandlers(onEntryFocus, (event) => {
                      if (!rootContext.isUsingKeyboardRef.current) event.preventDefault();
                    }),
                    preventScrollOnEntryFocus: true,
                    children: /* @__PURE__ */ jsxRuntime.jsx(
                      Tooltip.Content,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": getOpenState(context.open),
                        "data-radix-menu-content": "",
                        dir: rootContext.dir,
                        ...popperScope,
                        ...contentProps,
                        ref: composedRefs,
                        style: { outline: "none", ...contentProps.style },
                        onKeyDown: Tooltip.composeEventHandlers(contentProps.onKeyDown, (event) => {
                          const target = event.target;
                          const isKeyDownInside = target.closest("[data-radix-menu-content]") === event.currentTarget;
                          const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
                          const isCharacterKey = event.key.length === 1;
                          if (isKeyDownInside) {
                            if (event.key === "Tab") event.preventDefault();
                            if (!isModifierKey && isCharacterKey) handleTypeaheadSearch(event.key);
                          }
                          const content = contentRef.current;
                          if (event.target !== content) return;
                          if (!FIRST_LAST_KEYS.includes(event.key)) return;
                          event.preventDefault();
                          const items = getItems().filter((item) => !item.disabled);
                          const candidateNodes = items.map((item) => item.ref.current);
                          if (LAST_KEYS.includes(event.key)) candidateNodes.reverse();
                          focusFirst(candidateNodes);
                        }),
                        onBlur: Tooltip.composeEventHandlers(props.onBlur, (event) => {
                          if (!event.currentTarget.contains(event.target)) {
                            window.clearTimeout(timerRef.current);
                            searchRef.current = "";
                          }
                        }),
                        onPointerMove: Tooltip.composeEventHandlers(
                          props.onPointerMove,
                          whenMouse((event) => {
                            const target = event.target;
                            const pointerXHasChanged = lastPointerXRef.current !== event.clientX;
                            if (event.currentTarget.contains(target) && pointerXHasChanged) {
                              const newDir = event.clientX > lastPointerXRef.current ? "right" : "left";
                              pointerDirRef.current = newDir;
                              lastPointerXRef.current = event.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
MenuContent$1.displayName = CONTENT_NAME$2;
var GROUP_NAME$1 = "MenuGroup";
var MenuGroup = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenu, ...groupProps } = props;
    return /* @__PURE__ */ jsxRuntime.jsx(Tooltip.Primitive.div, { role: "group", ...groupProps, ref: forwardedRef });
  }
);
MenuGroup.displayName = GROUP_NAME$1;
var LABEL_NAME$1 = "MenuLabel";
var MenuLabel = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenu, ...labelProps } = props;
    return /* @__PURE__ */ jsxRuntime.jsx(Tooltip.Primitive.div, { ...labelProps, ref: forwardedRef });
  }
);
MenuLabel.displayName = LABEL_NAME$1;
var ITEM_NAME$2 = "MenuItem";
var ITEM_SELECT = "menu.itemSelect";
var MenuItem$1 = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const { disabled = false, onSelect, ...itemProps } = props;
    const ref = React__namespace.useRef(null);
    const rootContext = useMenuRootContext(ITEM_NAME$2, props.__scopeMenu);
    const contentContext = useMenuContentContext(ITEM_NAME$2, props.__scopeMenu);
    const composedRefs = Tooltip.useComposedRefs(forwardedRef, ref);
    const isPointerDownRef = React__namespace.useRef(false);
    const handleSelect = () => {
      const menuItem = ref.current;
      if (!disabled && menuItem) {
        const itemSelectEvent = new CustomEvent(ITEM_SELECT, { bubbles: true, cancelable: true });
        menuItem.addEventListener(ITEM_SELECT, (event) => onSelect?.(event), { once: true });
        Tooltip.dispatchDiscreteCustomEvent(menuItem, itemSelectEvent);
        if (itemSelectEvent.defaultPrevented) {
          isPointerDownRef.current = false;
        } else {
          rootContext.onClose();
        }
      }
    };
    return /* @__PURE__ */ jsxRuntime.jsx(
      MenuItemImpl,
      {
        ...itemProps,
        ref: composedRefs,
        disabled,
        onClick: Tooltip.composeEventHandlers(props.onClick, handleSelect),
        onPointerDown: (event) => {
          props.onPointerDown?.(event);
          isPointerDownRef.current = true;
        },
        onPointerUp: Tooltip.composeEventHandlers(props.onPointerUp, (event) => {
          if (!isPointerDownRef.current) event.currentTarget?.click();
        }),
        onKeyDown: Tooltip.composeEventHandlers(props.onKeyDown, (event) => {
          const isTypingAhead = contentContext.searchRef.current !== "";
          if (disabled || isTypingAhead && event.key === " ") return;
          if (SELECTION_KEYS.includes(event.key)) {
            event.currentTarget.click();
            event.preventDefault();
          }
        })
      }
    );
  }
);
MenuItem$1.displayName = ITEM_NAME$2;
var MenuItemImpl = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenu, disabled = false, textValue, ...itemProps } = props;
    const contentContext = useMenuContentContext(ITEM_NAME$2, __scopeMenu);
    const rovingFocusGroupScope = useRovingFocusGroupScope$2(__scopeMenu);
    const ref = React__namespace.useRef(null);
    const composedRefs = Tooltip.useComposedRefs(forwardedRef, ref);
    const [isFocused, setIsFocused] = React__namespace.useState(false);
    const [textContent, setTextContent] = React__namespace.useState("");
    React__namespace.useEffect(() => {
      const menuItem = ref.current;
      if (menuItem) {
        setTextContent((menuItem.textContent ?? "").trim());
      }
    }, [itemProps.children]);
    return /* @__PURE__ */ jsxRuntime.jsx(
      Collection.ItemSlot,
      {
        scope: __scopeMenu,
        disabled,
        textValue: textValue ?? textContent,
        children: /* @__PURE__ */ jsxRuntime.jsx(Item, { asChild: true, ...rovingFocusGroupScope, focusable: !disabled, children: /* @__PURE__ */ jsxRuntime.jsx(
          Tooltip.Primitive.div,
          {
            role: "menuitem",
            "data-highlighted": isFocused ? "" : void 0,
            "aria-disabled": disabled || void 0,
            "data-disabled": disabled ? "" : void 0,
            ...itemProps,
            ref: composedRefs,
            onPointerMove: Tooltip.composeEventHandlers(
              props.onPointerMove,
              whenMouse((event) => {
                if (disabled) {
                  contentContext.onItemLeave(event);
                } else {
                  contentContext.onItemEnter(event);
                  if (!event.defaultPrevented) {
                    const item = event.currentTarget;
                    item.focus({ preventScroll: true });
                  }
                }
              })
            ),
            onPointerLeave: Tooltip.composeEventHandlers(
              props.onPointerLeave,
              whenMouse((event) => contentContext.onItemLeave(event))
            ),
            onFocus: Tooltip.composeEventHandlers(props.onFocus, () => setIsFocused(true)),
            onBlur: Tooltip.composeEventHandlers(props.onBlur, () => setIsFocused(false))
          }
        ) })
      }
    );
  }
);
var CHECKBOX_ITEM_NAME$1 = "MenuCheckboxItem";
var MenuCheckboxItem = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const { checked = false, onCheckedChange, ...checkboxItemProps } = props;
    return /* @__PURE__ */ jsxRuntime.jsx(ItemIndicatorProvider, { scope: props.__scopeMenu, checked, children: /* @__PURE__ */ jsxRuntime.jsx(
      MenuItem$1,
      {
        role: "menuitemcheckbox",
        "aria-checked": isIndeterminate(checked) ? "mixed" : checked,
        ...checkboxItemProps,
        ref: forwardedRef,
        "data-state": getCheckedState(checked),
        onSelect: Tooltip.composeEventHandlers(
          checkboxItemProps.onSelect,
          () => onCheckedChange?.(isIndeterminate(checked) ? true : !checked),
          { checkForDefaultPrevented: false }
        )
      }
    ) });
  }
);
MenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME$1;
var RADIO_GROUP_NAME$1 = "MenuRadioGroup";
var [RadioGroupProvider, useRadioGroupContext] = createMenuContext(
  RADIO_GROUP_NAME$1,
  { value: void 0, onValueChange: () => {
  } }
);
var MenuRadioGroup = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const { value, onValueChange, ...groupProps } = props;
    const handleValueChange = Tooltip.useCallbackRef(onValueChange);
    return /* @__PURE__ */ jsxRuntime.jsx(RadioGroupProvider, { scope: props.__scopeMenu, value, onValueChange: handleValueChange, children: /* @__PURE__ */ jsxRuntime.jsx(MenuGroup, { ...groupProps, ref: forwardedRef }) });
  }
);
MenuRadioGroup.displayName = RADIO_GROUP_NAME$1;
var RADIO_ITEM_NAME$1 = "MenuRadioItem";
var MenuRadioItem = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const { value, ...radioItemProps } = props;
    const context = useRadioGroupContext(RADIO_ITEM_NAME$1, props.__scopeMenu);
    const checked = value === context.value;
    return /* @__PURE__ */ jsxRuntime.jsx(ItemIndicatorProvider, { scope: props.__scopeMenu, checked, children: /* @__PURE__ */ jsxRuntime.jsx(
      MenuItem$1,
      {
        role: "menuitemradio",
        "aria-checked": checked,
        ...radioItemProps,
        ref: forwardedRef,
        "data-state": getCheckedState(checked),
        onSelect: Tooltip.composeEventHandlers(
          radioItemProps.onSelect,
          () => context.onValueChange?.(value),
          { checkForDefaultPrevented: false }
        )
      }
    ) });
  }
);
MenuRadioItem.displayName = RADIO_ITEM_NAME$1;
var ITEM_INDICATOR_NAME = "MenuItemIndicator";
var [ItemIndicatorProvider, useItemIndicatorContext] = createMenuContext(
  ITEM_INDICATOR_NAME,
  { checked: false }
);
var MenuItemIndicator = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenu, forceMount, ...itemIndicatorProps } = props;
    const indicatorContext = useItemIndicatorContext(ITEM_INDICATOR_NAME, __scopeMenu);
    return /* @__PURE__ */ jsxRuntime.jsx(
      Tooltip.Presence,
      {
        present: forceMount || isIndeterminate(indicatorContext.checked) || indicatorContext.checked === true,
        children: /* @__PURE__ */ jsxRuntime.jsx(
          Tooltip.Primitive.span,
          {
            ...itemIndicatorProps,
            ref: forwardedRef,
            "data-state": getCheckedState(indicatorContext.checked)
          }
        )
      }
    );
  }
);
MenuItemIndicator.displayName = ITEM_INDICATOR_NAME;
var SEPARATOR_NAME$1 = "MenuSeparator";
var MenuSeparator$1 = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenu, ...separatorProps } = props;
    return /* @__PURE__ */ jsxRuntime.jsx(
      Tooltip.Primitive.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...separatorProps,
        ref: forwardedRef
      }
    );
  }
);
MenuSeparator$1.displayName = SEPARATOR_NAME$1;
var ARROW_NAME$1 = "MenuArrow";
var MenuArrow = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenu, ...arrowProps } = props;
    const popperScope = usePopperScope(__scopeMenu);
    return /* @__PURE__ */ jsxRuntime.jsx(Tooltip.Arrow, { ...popperScope, ...arrowProps, ref: forwardedRef });
  }
);
MenuArrow.displayName = ARROW_NAME$1;
var SUB_NAME = "MenuSub";
var [MenuSubProvider, useMenuSubContext] = createMenuContext(SUB_NAME);
var SUB_TRIGGER_NAME$1 = "MenuSubTrigger";
var MenuSubTrigger = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const context = useMenuContext(SUB_TRIGGER_NAME$1, props.__scopeMenu);
    const rootContext = useMenuRootContext(SUB_TRIGGER_NAME$1, props.__scopeMenu);
    const subContext = useMenuSubContext(SUB_TRIGGER_NAME$1, props.__scopeMenu);
    const contentContext = useMenuContentContext(SUB_TRIGGER_NAME$1, props.__scopeMenu);
    const openTimerRef = React__namespace.useRef(null);
    const { pointerGraceTimerRef, onPointerGraceIntentChange } = contentContext;
    const scope = { __scopeMenu: props.__scopeMenu };
    const clearOpenTimer = React__namespace.useCallback(() => {
      if (openTimerRef.current) window.clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }, []);
    React__namespace.useEffect(() => clearOpenTimer, [clearOpenTimer]);
    React__namespace.useEffect(() => {
      const pointerGraceTimer = pointerGraceTimerRef.current;
      return () => {
        window.clearTimeout(pointerGraceTimer);
        onPointerGraceIntentChange(null);
      };
    }, [pointerGraceTimerRef, onPointerGraceIntentChange]);
    return /* @__PURE__ */ jsxRuntime.jsx(MenuAnchor, { asChild: true, ...scope, children: /* @__PURE__ */ jsxRuntime.jsx(
      MenuItemImpl,
      {
        id: subContext.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": context.open,
        "aria-controls": subContext.contentId,
        "data-state": getOpenState(context.open),
        ...props,
        ref: Tooltip.composeRefs(forwardedRef, subContext.onTriggerChange),
        onClick: (event) => {
          props.onClick?.(event);
          if (props.disabled || event.defaultPrevented) return;
          event.currentTarget.focus();
          if (!context.open) context.onOpenChange(true);
        },
        onPointerMove: Tooltip.composeEventHandlers(
          props.onPointerMove,
          whenMouse((event) => {
            contentContext.onItemEnter(event);
            if (event.defaultPrevented) return;
            if (!props.disabled && !context.open && !openTimerRef.current) {
              contentContext.onPointerGraceIntentChange(null);
              openTimerRef.current = window.setTimeout(() => {
                context.onOpenChange(true);
                clearOpenTimer();
              }, 100);
            }
          })
        ),
        onPointerLeave: Tooltip.composeEventHandlers(
          props.onPointerLeave,
          whenMouse((event) => {
            clearOpenTimer();
            const contentRect = context.content?.getBoundingClientRect();
            if (contentRect) {
              const side = context.content?.dataset.side;
              const rightSide = side === "right";
              const bleed = rightSide ? -5 : 5;
              const contentNearEdge = contentRect[rightSide ? "left" : "right"];
              const contentFarEdge = contentRect[rightSide ? "right" : "left"];
              contentContext.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: event.clientX + bleed, y: event.clientY },
                  { x: contentNearEdge, y: contentRect.top },
                  { x: contentFarEdge, y: contentRect.top },
                  { x: contentFarEdge, y: contentRect.bottom },
                  { x: contentNearEdge, y: contentRect.bottom }
                ],
                side
              });
              window.clearTimeout(pointerGraceTimerRef.current);
              pointerGraceTimerRef.current = window.setTimeout(
                () => contentContext.onPointerGraceIntentChange(null),
                300
              );
            } else {
              contentContext.onTriggerLeave(event);
              if (event.defaultPrevented) return;
              contentContext.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: Tooltip.composeEventHandlers(props.onKeyDown, (event) => {
          const isTypingAhead = contentContext.searchRef.current !== "";
          if (props.disabled || isTypingAhead && event.key === " ") return;
          if (SUB_OPEN_KEYS[rootContext.dir].includes(event.key)) {
            context.onOpenChange(true);
            context.content?.focus();
            event.preventDefault();
          }
        })
      }
    ) });
  }
);
MenuSubTrigger.displayName = SUB_TRIGGER_NAME$1;
var SUB_CONTENT_NAME$1 = "MenuSubContent";
var MenuSubContent = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext(CONTENT_NAME$2, props.__scopeMenu);
    const { forceMount = portalContext.forceMount, ...subContentProps } = props;
    const context = useMenuContext(CONTENT_NAME$2, props.__scopeMenu);
    const rootContext = useMenuRootContext(CONTENT_NAME$2, props.__scopeMenu);
    const subContext = useMenuSubContext(SUB_CONTENT_NAME$1, props.__scopeMenu);
    const ref = React__namespace.useRef(null);
    const composedRefs = Tooltip.useComposedRefs(forwardedRef, ref);
    return /* @__PURE__ */ jsxRuntime.jsx(Collection.Provider, { scope: props.__scopeMenu, children: /* @__PURE__ */ jsxRuntime.jsx(Tooltip.Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsxRuntime.jsx(Collection.Slot, { scope: props.__scopeMenu, children: /* @__PURE__ */ jsxRuntime.jsx(
      MenuContentImpl,
      {
        id: subContext.contentId,
        "aria-labelledby": subContext.triggerId,
        ...subContentProps,
        ref: composedRefs,
        align: "start",
        side: rootContext.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: false,
        disableOutsideScroll: false,
        trapFocus: false,
        onOpenAutoFocus: (event) => {
          if (rootContext.isUsingKeyboardRef.current) ref.current?.focus();
          event.preventDefault();
        },
        onCloseAutoFocus: (event) => event.preventDefault(),
        onFocusOutside: Tooltip.composeEventHandlers(props.onFocusOutside, (event) => {
          if (event.target !== subContext.trigger) context.onOpenChange(false);
        }),
        onEscapeKeyDown: Tooltip.composeEventHandlers(props.onEscapeKeyDown, (event) => {
          rootContext.onClose();
          event.preventDefault();
        }),
        onKeyDown: Tooltip.composeEventHandlers(props.onKeyDown, (event) => {
          const isKeyDownInside = event.currentTarget.contains(event.target);
          const isCloseKey = SUB_CLOSE_KEYS[rootContext.dir].includes(event.key);
          if (isKeyDownInside && isCloseKey) {
            context.onOpenChange(false);
            subContext.trigger?.focus();
            event.preventDefault();
          }
        })
      }
    ) }) }) });
  }
);
MenuSubContent.displayName = SUB_CONTENT_NAME$1;
function getOpenState(open) {
  return open ? "open" : "closed";
}
function isIndeterminate(checked) {
  return checked === "indeterminate";
}
function getCheckedState(checked) {
  return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
function focusFirst(candidates) {
  const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
  for (const candidate of candidates) {
    if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
    candidate.focus();
    if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
  }
}
function wrapArray(array, startIndex) {
  return array.map((_, index) => array[(startIndex + index) % array.length]);
}
function getNextMatch(values, search, currentMatch) {
  const isRepeated = search.length > 1 && Array.from(search).every((char) => char === search[0]);
  const normalizedSearch = isRepeated ? search[0] : search;
  const currentMatchIndex = currentMatch ? values.indexOf(currentMatch) : -1;
  let wrappedValues = wrapArray(values, Math.max(currentMatchIndex, 0));
  const excludeCurrentMatch = normalizedSearch.length === 1;
  if (excludeCurrentMatch) wrappedValues = wrappedValues.filter((v) => v !== currentMatch);
  const nextMatch = wrappedValues.find(
    (value) => value.toLowerCase().startsWith(normalizedSearch.toLowerCase())
  );
  return nextMatch !== currentMatch ? nextMatch : void 0;
}
function isPointInPolygon(point, polygon) {
  const { x, y } = point;
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i].x;
    const yi = polygon[i].y;
    const xj = polygon[j].x;
    const yj = polygon[j].y;
    const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}
function isPointerInGraceArea(event, area) {
  if (!area) return false;
  const cursorPos = { x: event.clientX, y: event.clientY };
  return isPointInPolygon(cursorPos, area);
}
function whenMouse(handler) {
  return (event) => event.pointerType === "mouse" ? handler(event) : void 0;
}
var Root3 = Menu$1;
var Anchor2 = MenuAnchor;
var Portal = MenuPortal;
var Content2$1 = MenuContent$1;
var Group = MenuGroup;
var Label = MenuLabel;
var Item2$2 = MenuItem$1;
var CheckboxItem = MenuCheckboxItem;
var RadioGroup = MenuRadioGroup;
var RadioItem = MenuRadioItem;
var ItemIndicator = MenuItemIndicator;
var Separator = MenuSeparator$1;
var Arrow2 = MenuArrow;
var SubTrigger = MenuSubTrigger;
var SubContent = MenuSubContent;

var DROPDOWN_MENU_NAME = "DropdownMenu";
var [createDropdownMenuContext, createDropdownMenuScope] = Tooltip.createContextScope(
  DROPDOWN_MENU_NAME,
  [createMenuScope]
);
var useMenuScope = createMenuScope();
var [DropdownMenuProvider, useDropdownMenuContext] = createDropdownMenuContext(DROPDOWN_MENU_NAME);
var DropdownMenu = (props) => {
  const {
    __scopeDropdownMenu,
    children,
    dir,
    open: openProp,
    defaultOpen,
    onOpenChange,
    modal = true
  } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  const triggerRef = React__namespace.useRef(null);
  const [open = false, setOpen] = Tooltip.useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuProvider,
    {
      scope: __scopeDropdownMenu,
      triggerId: Tooltip.useId(),
      triggerRef,
      contentId: Tooltip.useId(),
      open,
      onOpenChange: setOpen,
      onOpenToggle: React__namespace.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
      modal,
      children: /* @__PURE__ */ jsxRuntime.jsx(Root3, { ...menuScope, open, onOpenChange: setOpen, dir, modal, children })
    }
  );
};
DropdownMenu.displayName = DROPDOWN_MENU_NAME;
var TRIGGER_NAME$1 = "DropdownMenuTrigger";
var DropdownMenuTrigger = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDropdownMenu, disabled = false, ...triggerProps } = props;
    const context = useDropdownMenuContext(TRIGGER_NAME$1, __scopeDropdownMenu);
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ jsxRuntime.jsx(Anchor2, { asChild: true, ...menuScope, children: /* @__PURE__ */ jsxRuntime.jsx(
      Tooltip.Primitive.button,
      {
        type: "button",
        id: context.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": context.open,
        "aria-controls": context.open ? context.contentId : void 0,
        "data-state": context.open ? "open" : "closed",
        "data-disabled": disabled ? "" : void 0,
        disabled,
        ...triggerProps,
        ref: Tooltip.composeRefs(forwardedRef, context.triggerRef),
        onPointerDown: Tooltip.composeEventHandlers(props.onPointerDown, (event) => {
          if (!disabled && event.button === 0 && event.ctrlKey === false) {
            context.onOpenToggle();
            if (!context.open) event.preventDefault();
          }
        }),
        onKeyDown: Tooltip.composeEventHandlers(props.onKeyDown, (event) => {
          if (disabled) return;
          if (["Enter", " "].includes(event.key)) context.onOpenToggle();
          if (event.key === "ArrowDown") context.onOpenChange(true);
          if (["Enter", " ", "ArrowDown"].includes(event.key)) event.preventDefault();
        })
      }
    ) });
  }
);
DropdownMenuTrigger.displayName = TRIGGER_NAME$1;
var PORTAL_NAME = "DropdownMenuPortal";
var DropdownMenuPortal = (props) => {
  const { __scopeDropdownMenu, ...portalProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ jsxRuntime.jsx(Portal, { ...menuScope, ...portalProps });
};
DropdownMenuPortal.displayName = PORTAL_NAME;
var CONTENT_NAME$1 = "DropdownMenuContent";
var DropdownMenuContent = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDropdownMenu, ...contentProps } = props;
    const context = useDropdownMenuContext(CONTENT_NAME$1, __scopeDropdownMenu);
    const menuScope = useMenuScope(__scopeDropdownMenu);
    const hasInteractedOutsideRef = React__namespace.useRef(false);
    return /* @__PURE__ */ jsxRuntime.jsx(
      Content2$1,
      {
        id: context.contentId,
        "aria-labelledby": context.triggerId,
        ...menuScope,
        ...contentProps,
        ref: forwardedRef,
        onCloseAutoFocus: Tooltip.composeEventHandlers(props.onCloseAutoFocus, (event) => {
          if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
          hasInteractedOutsideRef.current = false;
          event.preventDefault();
        }),
        onInteractOutside: Tooltip.composeEventHandlers(props.onInteractOutside, (event) => {
          const originalEvent = event.detail.originalEvent;
          const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
          const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
          if (!context.modal || isRightClick) hasInteractedOutsideRef.current = true;
        }),
        style: {
          ...props.style,
          // re-namespace exposed content custom properties
          ...{
            "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
            "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
            "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
          }
        }
      }
    );
  }
);
DropdownMenuContent.displayName = CONTENT_NAME$1;
var GROUP_NAME = "DropdownMenuGroup";
var DropdownMenuGroup = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDropdownMenu, ...groupProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ jsxRuntime.jsx(Group, { ...menuScope, ...groupProps, ref: forwardedRef });
  }
);
DropdownMenuGroup.displayName = GROUP_NAME;
var LABEL_NAME = "DropdownMenuLabel";
var DropdownMenuLabel = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDropdownMenu, ...labelProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ jsxRuntime.jsx(Label, { ...menuScope, ...labelProps, ref: forwardedRef });
  }
);
DropdownMenuLabel.displayName = LABEL_NAME;
var ITEM_NAME$1 = "DropdownMenuItem";
var DropdownMenuItem = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDropdownMenu, ...itemProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ jsxRuntime.jsx(Item2$2, { ...menuScope, ...itemProps, ref: forwardedRef });
  }
);
DropdownMenuItem.displayName = ITEM_NAME$1;
var CHECKBOX_ITEM_NAME = "DropdownMenuCheckboxItem";
var DropdownMenuCheckboxItem = React__namespace.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...checkboxItemProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ jsxRuntime.jsx(CheckboxItem, { ...menuScope, ...checkboxItemProps, ref: forwardedRef });
});
DropdownMenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME;
var RADIO_GROUP_NAME = "DropdownMenuRadioGroup";
var DropdownMenuRadioGroup = React__namespace.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...radioGroupProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ jsxRuntime.jsx(RadioGroup, { ...menuScope, ...radioGroupProps, ref: forwardedRef });
});
DropdownMenuRadioGroup.displayName = RADIO_GROUP_NAME;
var RADIO_ITEM_NAME = "DropdownMenuRadioItem";
var DropdownMenuRadioItem = React__namespace.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...radioItemProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ jsxRuntime.jsx(RadioItem, { ...menuScope, ...radioItemProps, ref: forwardedRef });
});
DropdownMenuRadioItem.displayName = RADIO_ITEM_NAME;
var INDICATOR_NAME = "DropdownMenuItemIndicator";
var DropdownMenuItemIndicator = React__namespace.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...itemIndicatorProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ jsxRuntime.jsx(ItemIndicator, { ...menuScope, ...itemIndicatorProps, ref: forwardedRef });
});
DropdownMenuItemIndicator.displayName = INDICATOR_NAME;
var SEPARATOR_NAME = "DropdownMenuSeparator";
var DropdownMenuSeparator = React__namespace.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...separatorProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ jsxRuntime.jsx(Separator, { ...menuScope, ...separatorProps, ref: forwardedRef });
});
DropdownMenuSeparator.displayName = SEPARATOR_NAME;
var ARROW_NAME = "DropdownMenuArrow";
var DropdownMenuArrow = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDropdownMenu, ...arrowProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ jsxRuntime.jsx(Arrow2, { ...menuScope, ...arrowProps, ref: forwardedRef });
  }
);
DropdownMenuArrow.displayName = ARROW_NAME;
var SUB_TRIGGER_NAME = "DropdownMenuSubTrigger";
var DropdownMenuSubTrigger = React__namespace.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...subTriggerProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ jsxRuntime.jsx(SubTrigger, { ...menuScope, ...subTriggerProps, ref: forwardedRef });
});
DropdownMenuSubTrigger.displayName = SUB_TRIGGER_NAME;
var SUB_CONTENT_NAME = "DropdownMenuSubContent";
var DropdownMenuSubContent = React__namespace.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...subContentProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ jsxRuntime.jsx(
    SubContent,
    {
      ...menuScope,
      ...subContentProps,
      ref: forwardedRef,
      style: {
        ...props.style,
        // re-namespace exposed content custom properties
        ...{
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    }
  );
});
DropdownMenuSubContent.displayName = SUB_CONTENT_NAME;
var Root2$2 = DropdownMenu;
var Trigger$1 = DropdownMenuTrigger;
var Portal2 = DropdownMenuPortal;
var Content2 = DropdownMenuContent;
var Item2$1 = DropdownMenuItem;
var Separator2 = DropdownMenuSeparator;

function Menu(props) {
  return /*#__PURE__*/React__default["default"].createElement(Root2$2, null, props.children);
}
function MenuTrigger(props) {
  return /*#__PURE__*/React__default["default"].createElement(Trigger$1, {
    asChild: true
  }, props.children);
}
const StyledContent = styledComponents.styled(Content2).withConfig({
  displayName: "Menu__StyledContent",
  componentId: "sc-15igjrv-0"
})(["min-width:200px;padding:0 4px;background-color:", ";border-radius:4px;"], Tooltip.Colors.black800);
const StyledItem = styledComponents.styled(Item2$1).withConfig({
  displayName: "Menu__StyledItem",
  componentId: "sc-15igjrv-1"
})(["padding:10px 8px;&:focus{background-color:", ";}@media (hover:hover){&:hover:not([aria-disabled=\"true\"]){cursor:pointer;background-color:", ";}}"], Tooltip.Colors.black700, Tooltip.Colors.black700);
const StyledSeparator$1 = styledComponents.styled(Separator2).withConfig({
  displayName: "Menu__StyledSeparator",
  componentId: "sc-15igjrv-2"
})(["height:1px;background-color:", ";"], Tooltip.Colors.black700);
function MenuContent(props) {
  return /*#__PURE__*/React__default["default"].createElement(Portal2, {
    container: props.container
  }, /*#__PURE__*/React__default["default"].createElement(StyledContent, {
    side: "bottom",
    align: "start",
    sideOffset: 4
  }, props.children));
}
function MenuItem(props) {
  return /*#__PURE__*/React__default["default"].createElement(StyledItem, {
    onClick: props.onClick,
    disabled: props.isDisabled
  }, props.children);
}
function MenuSeparator() {
  return /*#__PURE__*/React__default["default"].createElement(StyledSeparator$1, null);
}

const ModalRoot = styledComponents.styled.div.withConfig({
  displayName: "Modal__ModalRoot",
  componentId: "sc-wv205r-0"
})([""]);
const Root$3 = styledComponents.styled.div.withConfig({
  displayName: "Modal__Root",
  componentId: "sc-wv205r-1"
})(["width:", ";max-width:", ";height:", ";max-height:", ";position:relative;box-shadow:0px 2px 14px rgba(0,0,0,0.15);border-radius:4px;display:grid;grid-template-columns:1fr;grid-template-rows:auto 1fr;background-color:white;overflow:hidden;"], p => p.width || "100%", p => p.maxWidth || "none", p => p.height || "auto", p => p.maxHeight || "none");
const HeaderBody = styledComponents.styled.div.withConfig({
  displayName: "Modal__HeaderBody",
  componentId: "sc-wv205r-2"
})(["position:relative;", " color:black;"], p => p.headerLine && `border-bottom: 1px solid ${Tooltip.Colors.black10};`);
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
})(["width:24px;height:24px;border-radius:4px;background-color:", ";", ";display:flex;justify-content:center;align-items:center;"], Tooltip.Colors.black10, fonts.Fonts.label3);
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
  return /*#__PURE__*/React__default["default"].createElement(Root$3, _extends__default["default"]({
    width: width,
    maxWidth: maxWidth,
    maxHeight: maxHeight
  }, props), /*#__PURE__*/React__default["default"].createElement(HeaderBody, {
    headerLine: headerLine
  }, /*#__PURE__*/React__default["default"].createElement(TitleHeader, null, title && /*#__PURE__*/React__default["default"].createElement(TitleHeaderLabel, null, title), searchProps && /*#__PURE__*/React__default["default"].createElement(InputRaw, _extends__default["default"]({}, searchProps, {
    ref: node => {
      if (node) {
        node.focus();
      }
    }
  })), headerSymbol === "close" && onRequestClose !== undefined && /*#__PURE__*/React__default["default"].createElement(ButtonGhost, {
    icon: Icons.Close,
    hideLabel: true,
    showTooltip: false,
    onClick: () => {
      if (onRequestClose) {
        onRequestClose();
      }
    }
  }, "Close"), headerSymbol && headerSymbol !== "close" && /*#__PURE__*/React__default["default"].createElement(HeaderLetter, null, headerSymbol))), /*#__PURE__*/React__default["default"].createElement(ContentBody, _extends__default["default"]({
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
  const content = /*#__PURE__*/React__default["default"].createElement(ModalRoot, null, /*#__PURE__*/React__default["default"].createElement(ModalBody, _extends__default["default"]({}, modeProps, bodyProps, {
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

const options = [{
  value: "chocolate",
  label: "Chocolate"
}, {
  value: "strawberry",
  label: "Strawberry"
}, {
  value: "vanilla",
  label: "Vanilla"
}];
function DropdownIndicator() {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      padding: "0px 3px"
    }
  }, /*#__PURE__*/React__default["default"].createElement(Icons.ChevronDown, {
    size: 16
  }));
}
function ClearIndicator(props) {
  return /*#__PURE__*/React__default["default"].createElement("div", _extends__default["default"]({}, props.innerProps, {
    style: {
      padding: "0px 6px"
    }
  }), /*#__PURE__*/React__default["default"].createElement(Icons.Close, {
    size: 12
  }));
}

// export type MutliSelectProps = {
//   value: string,
//   options:
// }

function MultiSelect() {
  return /*#__PURE__*/React__default["default"].createElement(Select__default["default"], {
    options: options,
    isMulti: true,
    styles: {
      // @ts-ignore
      container: (baseStyles, state) => ({
        ...baseStyles,
        ...fonts.Fonts.body
      }),
      // @ts-ignore
      control: (baseStyles, state) => {
        return {
          ...baseStyles,
          borderWidth: 0,
          borderRadius: 2,
          boxShadow: state.isFocused ? `0 0 0 2px ${Tooltip.Colors.focus}` : `0 0 0 1px ${Tooltip.Colors.black10}`,
          "&:hover": {
            borderColor: Tooltip.Colors.black20
          },
          minHeight: 28
        };
      },
      // @ts-ignore
      clearIndicator: baseStyles => {
        {
          return {
            ...baseStyles,
            padding: 4
          };
        }
      },
      // @ts-ignore
      dropdownIndicator: baseStyles => {
        return {
          ...baseStyles,
          padding: 4
        };
      },
      // @ts-ignore
      valueContainer: baseStyles => {
        {
          return {
            ...baseStyles,
            padding: "2px 6px"
          };
        }
      }
    },
    components: {
      DropdownIndicator,
      // @ts-ignore
      ClearIndicator
    }
  });
}

const Root$2 = styledComponents.styled.div.withConfig({
  displayName: "NavigationController__Root",
  componentId: "sc-19n3ku4-0"
})(["position:relative;overflow:hidden;display:grid;"]);
const PanelRoot = styledComponents.styled.div.withConfig({
  displayName: "NavigationController__PanelRoot",
  componentId: "sc-19n3ku4-1"
})(["grid-row:1 / span 1;grid-column:1 / span 1;position:relative;display:grid;overflow-y:auto;transform:translateX(", "px);"], p => p.index * 30);
const NavigationController = _ref => {
  let {
    panels
  } = _ref;
  return /*#__PURE__*/React__default["default"].createElement(Root$2, null, panels.map((_ref2, index) => {
    let {
      id,
      title,
      element
    } = _ref2;
    return /*#__PURE__*/React__default["default"].createElement(PanelRoot, {
      index: index
    }, element);
  }));
};

const Root$1 = styledComponents.styled.div.withConfig({
  displayName: "BasicRow__Root",
  componentId: "sc-1ifay80-0"
})(["position:relative;background-color:white;transition:all 0.1s;padding:12px;&:hover{background-color:", ";}display:flex;flex-direction:row;align-items:center;gap:8px;cursor:pointer;&:hover{.EditContainer{opacity:1;visibility:visible;}}"], Tooltip.Colors.black5);
const ImageContainer = styledComponents.styled.div.withConfig({
  displayName: "BasicRow__ImageContainer",
  componentId: "sc-1ifay80-1"
})(["position:relative;box-sizing:border-box;background:", ";width:52px;height:52px;pointer-events:none;padding:2px;flex:0 0 auto;"], Tooltip.Colors.black10);
const Image = styledComponents.styled.img.withConfig({
  displayName: "BasicRow__Image",
  componentId: "sc-1ifay80-2"
})(["width:100%;height:100%;object-fit:contain;"]);
const TextContainer = styledComponents.styled.div.withConfig({
  displayName: "BasicRow__TextContainer",
  componentId: "sc-1ifay80-3"
})(["pointer-events:none;min-width:0;flex:1 1 auto;"]);
const TitleContainer = styledComponents.styled.div.withConfig({
  displayName: "BasicRow__TitleContainer",
  componentId: "sc-1ifay80-4"
})(["display:flex;flex-direction:row;align-items:center;gap:8px;margin-bottom:4px;"]);
const DescriptionContainer = styledComponents.styled.div.withConfig({
  displayName: "BasicRow__DescriptionContainer",
  componentId: "sc-1ifay80-5"
})(["display:flex;flex-direction:row;align-items:center;gap:5px;"]);
const Title = styledComponents.styled.div.withConfig({
  displayName: "BasicRow__Title",
  componentId: "sc-1ifay80-6"
})(["", ";color:", ";"], fonts.Fonts.label, p => p.custom ? Tooltip.Colors.purple : "black");
const Description = styledComponents.styled.div.withConfig({
  displayName: "BasicRow__Description",
  componentId: "sc-1ifay80-7"
})(["", ";color:", ";line-height:1;"], p => p.tinyDescription ? fonts.Fonts.body4 : fonts.Fonts.body, p => p.custom ? Tooltip.Colors.purple : Tooltip.Colors.black40);
const EditContainer = styledComponents.styled.div.withConfig({
  displayName: "BasicRow__EditContainer",
  componentId: "sc-1ifay80-8"
})(["opacity:0;visibility:hidden;"]);
const BasicRow = props => {
  return /*#__PURE__*/React__default["default"].createElement(Root$1, {
    onClick: props.onClick
  }, /*#__PURE__*/React__default["default"].createElement(ImageContainer, props, props.image && /*#__PURE__*/React__default["default"].createElement(Image, {
    src: props.image,
    loading: "lazy"
  })), /*#__PURE__*/React__default["default"].createElement(TextContainer, null, /*#__PURE__*/React__default["default"].createElement(TitleContainer, null, props.customTitle && /*#__PURE__*/React__default["default"].createElement(CustomComponentSymbol, null), /*#__PURE__*/React__default["default"].createElement(Title, {
    custom: props.customTitle
  }, props.title)), /*#__PURE__*/React__default["default"].createElement(DescriptionContainer, null, props.description && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, props.customDescription && /*#__PURE__*/React__default["default"].createElement(CustomComponentSymbol, {
    size: 4
  }), /*#__PURE__*/React__default["default"].createElement(Description, {
    tinyDescription: props.tinyDescription,
    custom: props.customDescription
  }, props.description)))), props.onEdit && /*#__PURE__*/React__default["default"].createElement(EditContainer, {
    className: "EditContainer"
  }, /*#__PURE__*/React__default["default"].createElement(ButtonGhost, {
    onClick: e => {
      e.preventDefault();
      e.stopPropagation();
      props.onEdit?.();
    }
  }, "Edit")));
};

const SelectTrigger = styledComponents.styled(Trigger$2).withConfig({
  displayName: "Select__SelectTrigger",
  componentId: "sc-1ehkd60-0"
})(["all:unset;display:flex;align-items:center;", ";display:flex;gap:4px;max-width:100%;box-sizing:border-box;height:28px;padding:0 2px 0 6px;border-radius:2px;@media (hover:hover){&:hover{box-shadow:0 0 0 1px ", ";}}"], fonts.Fonts.body, Tooltip.Colors.black10);
function Select(props) {
  return /*#__PURE__*/React__default["default"].createElement(Root2$3, {
    value: props.value,
    onValueChange: props.onChange
  }, /*#__PURE__*/React__default["default"].createElement(SelectTrigger, null, /*#__PURE__*/React__default["default"].createElement(Value, {
    style: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      ...props.style
    },
    placeholder: props.placeholder ?? "Select a value..."
  }), /*#__PURE__*/React__default["default"].createElement(Icon, null, /*#__PURE__*/React__default["default"].createElement(ChevronDownIcon, {
    color: Tooltip.Colors.black40
  }))), /*#__PURE__*/React__default["default"].createElement(Portal$1, null, /*#__PURE__*/React__default["default"].createElement(Content2$2, {
    style: {
      minWidth: "100px",
      maxHeight: "600px",
      padding: "4px 0",
      background: "#fff",
      border: `1px solid ${Tooltip.Colors.black10}`,
      borderRadius: "2px",
      boxShadow: "0px 2px 14px 0px rgba(0, 0, 0, 0.15)",
      zIndex: 999999
    }
  }, /*#__PURE__*/React__default["default"].createElement(Viewport, null, props.children))));
}
const SelectItemWrapper = styledComponents.styled(Item$1).withConfig({
  displayName: "Select__SelectItemWrapper",
  componentId: "sc-1ehkd60-1"
})(["display:flex;align-items:center;gap:6px;box-sizing:border-box;min-height:28px;padding:0 6px;", ";color:#000;background:#fff;outline:none;&[data-state=\"unchecked\"]{padding-left:calc(6px + 15px + 6px);}&[data-highlighted]{background:#daeafd;}@media (hover:hover){cursor:pointer;}"], fonts.Fonts.body);
const SelectItem = /*#__PURE__*/React.forwardRef((props, ref) => {
  return /*#__PURE__*/React__default["default"].createElement(SelectItemWrapper, {
    value: props.value,
    disabled: props.isDisabled ?? false,
    ref: ref
  }, /*#__PURE__*/React__default["default"].createElement(ItemIndicator$1, null, /*#__PURE__*/React__default["default"].createElement(CheckIcon, {
    color: "#202123"
  })), /*#__PURE__*/React__default["default"].createElement(ItemText, {
    style: props.style
  }, props.children));
});
SelectItem.displayName = "SelectItem";
const StyledSeparator = styledComponents.styled(Separator$1).withConfig({
  displayName: "Select__StyledSeparator",
  componentId: "sc-1ehkd60-2"
})(["height:1px;margin:4px;background:", ";"], Tooltip.Colors.black100);
function SelectSeparator() {
  return /*#__PURE__*/React__default["default"].createElement(StyledSeparator, null);
}

function ShopstoryIcon(_ref) {
  let {
    width = 40,
    height = 40,
    className
  } = _ref;
  return /*#__PURE__*/React__default["default"].createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 40 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }, /*#__PURE__*/React__default["default"].createElement("rect", {
    width: "40",
    height: "40",
    fill: "#F0FB98"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M24.8625 24.3526C24.8625 22.0386 23.2513 20.4408 21.4253 19.0909L20.0559 18.0716C18.6595 17.0248 17.9076 16.2534 17.9076 15.0964C17.9076 13.7741 19.0354 13.0028 20.4318 13.0028C21.7207 13.0028 22.768 13.4986 23.5467 14.876L26.2857 13.1956C24.9162 10.7989 22.7948 10 20.5661 10C17.3437 10 14.739 11.9559 14.739 15.2066C14.739 17.438 16.0011 19.0083 18.0687 20.5234L19.4382 21.5427C20.942 22.5895 21.6133 23.3884 21.6133 24.6281C21.6133 26.0055 20.4049 26.9972 18.6058 26.9972C16.6724 26.9972 15.464 25.8678 14.7927 24.2424L12 25.9504C13.0741 28.292 15.3298 30 18.4178 30C22.4189 30 24.8625 27.5207 24.8625 24.3526Z",
    fill: "black"
  }));
}

function ShopstoryLogo() {
  return /*#__PURE__*/React__default["default"].createElement("svg", {
    width: "80",
    height: "17",
    viewBox: "0 0 80 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M8.57576 9.71406C8.57576 8.14841 7.50162 7.06658 6.2844 6.15286L5.37068 5.46308C4.44027 4.75469 3.9385 4.23238 3.9385 3.44955C3.9385 2.55444 4.69052 2.03213 5.62157 2.03213C6.48139 2.03213 7.17951 2.36772 7.69861 3.30005L9.52477 2.16303C8.61105 0.540918 7.19748 0 5.71076 0C3.56248 0 1.82616 1.32374 1.82616 3.52399C1.82616 5.03445 2.66737 6.09703 4.0463 7.1224L4.95937 7.81219C5.96164 8.52058 6.40952 9.06149 6.40952 9.90078C6.40952 10.8325 5.6036 11.5036 4.40434 11.5036C3.11461 11.5036 2.30933 10.7401 1.86209 9.63963L0 10.7953C0.71609 12.3801 2.22014 13.5364 4.27922 13.5364C6.94659 13.5364 8.57576 11.8585 8.57576 9.71406ZM9.13464 13.3869H11.1039L12.393 7.01076C13.0192 6.22793 13.8072 5.83588 14.6484 5.83588C16.0633 5.83588 16.6895 6.86125 16.3674 8.40893L15.3472 13.3869H17.3344L18.3726 8.22221C18.8737 5.83588 17.5487 3.9154 15.4184 3.9154C14.3982 3.9154 13.5563 4.21377 12.8402 4.84773L13.8072 0.148865H11.8373L9.13464 13.3869ZM28.6828 8.27867C28.6828 6.00399 27.1614 3.9154 24.4401 3.9154C21.5039 3.9154 19.3376 6.22729 19.3376 9.15454C19.3376 11.4478 20.895 13.5364 23.6162 13.5364C26.5525 13.5364 28.6828 11.2245 28.6828 8.27867ZM21.3608 8.98706C21.3608 7.17823 22.614 5.85449 24.2611 5.85449C25.5861 5.85449 26.6782 6.82403 26.6782 8.46475C26.6782 10.2736 25.443 11.5973 23.7779 11.5973C22.4529 11.5973 21.3608 10.6278 21.3608 8.98706ZM28.2471 16.8179H30.2343L31.0941 12.6041C31.7204 13.2008 32.6155 13.5364 33.6896 13.5364C36.8049 13.5364 38.828 11.0378 38.828 8.11056C38.828 5.85449 37.3419 3.9154 35.0326 3.9154C34.0124 3.9154 33.1885 4.26959 32.5622 4.7919L32.6873 4.0649H30.8432L28.2471 16.8179ZM34.5494 5.83588C35.8918 5.83588 36.7869 6.78682 36.7869 8.3345C36.7869 10.2364 35.4266 11.6159 33.6896 11.6159C32.8298 11.6159 31.9713 11.2617 31.5054 10.5527L32.2754 6.84264C32.5649 6.52751 32.9162 6.27546 33.3075 6.10223C33.6987 5.92901 34.1215 5.83834 34.5494 5.83588ZM45.5853 10.7022C45.5853 9.50873 44.7082 8.72591 43.5981 8.05473L42.9898 7.64407C42.3629 7.25266 42.094 6.95429 42.094 6.48845C42.094 5.96614 42.506 5.64916 43.1329 5.64916C43.7771 5.64916 44.2783 5.98474 44.5651 6.63731L46.1403 5.70562C45.6392 4.56796 44.5298 3.9154 43.1861 3.9154C41.36 3.9154 40.196 5.05306 40.196 6.58149C40.196 7.77497 40.9846 8.53918 41.9689 9.17378L42.6311 9.60241C43.3113 10.031 43.6879 10.348 43.6879 10.8889C43.6879 11.4478 43.1509 11.802 42.488 11.802C41.5037 11.802 40.9307 11.2803 40.5906 10.4225L39.0327 11.3362C39.5165 12.6599 40.6439 13.5364 42.4168 13.5364C44.225 13.5364 45.5853 12.436 45.5853 10.7022ZM47.4262 5.8917H48.8764L47.9992 10.1055C47.5513 12.3057 48.3752 13.3869 50.3445 13.3869H51.8126L52.1886 11.5229H50.9887C49.9864 11.5229 49.7888 11.0564 50.0044 9.99382L50.8636 5.8917H53.2807L53.6747 4.0649H51.2396L51.8126 1.26727L49.6104 2.31189L49.2344 4.0649H47.4262V5.8917ZM62.9441 8.27867C62.9441 6.00399 61.4221 3.9154 58.7008 3.9154C55.7646 3.9154 53.5983 6.22729 53.5983 9.15454C53.5983 11.4478 55.1563 13.5364 57.8776 13.5364C60.8138 13.5364 62.9441 11.2245 62.9441 8.27867ZM55.6215 8.98706C55.6215 7.17823 56.8746 5.85449 58.5218 5.85449C59.8468 5.85449 60.9389 6.82403 60.9389 8.46475C60.9389 10.2736 59.7037 11.5973 58.0386 11.5973C56.7136 11.5973 55.6215 10.6278 55.6215 8.98706ZM63.2065 13.3869H65.1937L66.4649 7.1038C67.0199 6.3768 67.8617 5.96614 68.7209 5.96614C69.0969 5.96614 69.455 6.0226 69.7412 6.15286L70.1711 4.00844C69.9561 3.95261 69.6873 3.93401 69.437 3.93401C68.4161 3.93401 67.5031 4.34467 66.8768 5.07166L67.0918 4.06426H65.1045L63.2065 13.3869ZM70.207 16.8179H72.3553L80 4.0649H77.8158L74.0024 10.6644L72.8384 4.06426H70.7973L72.4804 13.0321L70.207 16.8179Z",
    fill: "#161616"
  }));
}

const Preview = styledComponents.styled.div.withConfig({
  displayName: "ThumbnailButton__Preview",
  componentId: "sc-1bsunzd-0"
})(["display:flex;align-items:center;justify-content:center;margin-left:-1px;width:32px;height:32px;border:1px solid #e5e5e5;border-radius:2px;position:relative;min-width:0;"]);
const PreviewImage = styledComponents.styled.img.withConfig({
  displayName: "ThumbnailButton__PreviewImage",
  componentId: "sc-1bsunzd-1"
})(["display:block;max-width:100%;max-height:100%;object-fit:contain;"]);
const SolidColorPreview = styledComponents.styled.div.withConfig({
  displayName: "ThumbnailButton__SolidColorPreview",
  componentId: "sc-1bsunzd-2"
})(["width:100%;height:100%;background:", ";"], _ref => {
  let {
    color
  } = _ref;
  return color;
});
const ContentRoot = styledComponents.styled.div.withConfig({
  displayName: "ThumbnailButton__ContentRoot",
  componentId: "sc-1bsunzd-3"
})(["display:flex;align-items:center;gap:8px;width:100%;"]);
const Labels = styledComponents.styled.div.withConfig({
  displayName: "ThumbnailButton__Labels",
  componentId: "sc-1bsunzd-4"
})(["flex:1 0;overflow:hidden;min-width:0;display:grid;"]);
function ThumbnailButton(_ref2) {
  let {
    onClick,
    label,
    description,
    thumbnail,
    disabled
  } = _ref2;
  let preview;
  if (thumbnail?.type === "image") {
    preview = /*#__PURE__*/React__namespace.createElement(PreviewImage, {
      src: thumbnail.src,
      "aria-hidden": "true"
    });
  } else if (thumbnail?.type === "color") {
    preview = /*#__PURE__*/React__namespace.createElement(SolidColorPreview, {
      color: thumbnail.color
    });
  } else if (thumbnail?.type === "icon") {
    const ComponentIcon = thumbnail.icon === "link" ? Icons.Link : thumbnail.icon === "grid_3x3" ? Icons.Grid3x3 : Icons.Link;
    preview = /*#__PURE__*/React__namespace.createElement(ComponentIcon, {
      size: 16
    });
  } else {
    preview = /*#__PURE__*/React__namespace.createElement(SolidColorPreview, {
      color: "transparent"
    });
  }
  const content = /*#__PURE__*/React__namespace.createElement(ContentRoot, null, /*#__PURE__*/React__namespace.createElement(Preview, null, preview), /*#__PURE__*/React__namespace.createElement(Labels, null, /*#__PURE__*/React__namespace.createElement(Typography, {
    variant: "label",
    isTruncated: true
  }, label), description && /*#__PURE__*/React__namespace.createElement(Typography, {
    variant: "body",
    color: "black40",
    isTruncated: true
  }, description)));
  if (disabled) {
    return /*#__PURE__*/React__namespace.createElement(ContentRoot, null, content);
  }
  return /*#__PURE__*/React__namespace.createElement("div", {
    style: {
      display: "grid",
      width: "100%"
    }
  }, /*#__PURE__*/React__namespace.createElement(ButtonGhost, {
    showTooltip: false,
    onClick: onClick,
    height: "32px",
    noPadding: true
  }, content));
}

function SimplePicker(_ref) {
  let {
    value,
    onChange,
    getItemById,
    getItems,
    placeholder
  } = _ref;
  return /*#__PURE__*/React__default["default"].createElement(ProductPicker, {
    value: value,
    onChange: onChange,
    api: {
      products: getItems,
      product: getItemById,
      placeholder
    }
  });
}
const ProductPicker = _ref2 => {
  let {
    value,
    onChange,
    api
  } = _ref2;
  const [product, setProduct] = React.useState(getProductFromCache(value ?? null));
  const [isOpen, setOpen] = React.useState(false);
  const [state, setState] = React.useState("unknown");
  function error() {
    setProduct(null);
    setState("error");
  }
  React.useEffect(() => {
    if (product?.id === value) {
      return;
    }
    if (!value) {
      setProduct(null);
      return;
    }
    let isMounted = true;
    getProductFromId(value, api).then(product => {
      if (!isMounted) {
        return;
      }
      if (product === null || product === undefined) {
        error();
      } else {
        if (!isMounted) {
          return;
        }
        setProduct(product);
        saveProductToCache(product);
        setState("success");
      }
    }, () => {
      if (!isMounted) {
        return;
      }
      error();
    });
    return () => {
      isMounted = false;
    };
  }, [value]);
  const placeholder = api.placeholder ?? "Pick an item";
  return /*#__PURE__*/React__default["default"].createElement(Container, null, state === "error" && /*#__PURE__*/React__default["default"].createElement(ErrorMessage, null, "Couldn't fetch data for id: ", value), /*#__PURE__*/React__default["default"].createElement(RowContainer, null, /*#__PURE__*/React__default["default"].createElement(ThumbnailButton, {
    thumbnail: product?.thumbnail ? {
      type: "image",
      src: product.thumbnail
    } : undefined,
    label: state === "loading" ? "Loading..." : product?.title ?? placeholder,
    onClick: () => {
      setOpen(true);
    }
  }), product && /*#__PURE__*/React__default["default"].createElement(ButtonGhost, {
    icon: Icons.Remove,
    hideLabel: true,
    onClick: () => {
      onChange(null);
    }
  }, "Clear"), /*#__PURE__*/React__default["default"].createElement(ItemPickerModal, {
    isOpen: isOpen,
    getItems: api.products,
    onClose: () => {
      setOpen(false);
    },
    onItemPick: item => {
      onChange(item.id);
    }
  })));
};
const Container = styledComponents.styled.div.withConfig({
  displayName: "SimplePicker__Container",
  componentId: "sc-hh69hi-0"
})(["width:100%;"]);
const RowContainer = styledComponents.styled.div.withConfig({
  displayName: "SimplePicker__RowContainer",
  componentId: "sc-hh69hi-1"
})(["display:flex;flex-direction:row;align-items:center;"]);
function getProductFromId(id, api) {
  return new Promise((resolve, reject) => {
    const cached = getProductFromCache(id);
    if (cached) {
      resolve(cached);
    }
    api.product(id).then(product => {
      resolve(product);
    }, () => {
      reject();
    });
  });
}
const productCache = {};
function getProductFromCache(id) {
  if (!id) {
    return null;
  }
  if (productCache[id]) {
    return productCache[id];
  }
  return null;
}
function saveProductToCache(product) {
  productCache[product.id] = product;
}
function ItemPickerModal(_ref3) {
  let {
    isOpen,
    getItems,
    onClose,
    onItemPick
  } = _ref3;
  const [query, setQuery] = React.useState("");
  const previousQuery = React.useRef();
  const [getProductsRequest, setGetProductsRequest] = React.useState({
    status: "idle",
    data: undefined,
    error: null
  });
  React.useEffect(() => {
    previousQuery.current = query;
  }, [query]);
  React.useEffect(() => {
    if (!isOpen && query !== "") {
      setQuery("");
    }
  }, [isOpen, query]);
  React.useEffect(() => {
    let loadingTimeoutId;
    let isCanceled = false;
    const debouncedGetProducts = debounce__default["default"](query => {
      loadingTimeoutId = window.setTimeout(() => {
        setGetProductsRequest({
          status: "loading",
          data: getProductsRequest.data,
          error: null
        });
      }, 1000);
      getItems(query).then(products => {
        setGetProductsRequest({
          status: "success",
          data: products,
          error: null
        });

        // update cache after every download
        products.forEach(product => {
          saveProductToCache(product);
        });
      }).catch(error => {
        setGetProductsRequest({
          status: "error",
          data: undefined,
          error
        });
      }).finally(() => {
        window.clearTimeout(loadingTimeoutId);
        if (isCanceled) {
          return;
        }
      });
    }, 300);
    debouncedGetProducts(query);
    return () => {
      isCanceled = true;
      if (loadingTimeoutId) {
        window.clearTimeout(loadingTimeoutId);
      }
      debouncedGetProducts.cancel();
    };
  }, [query]);
  return isOpen ? /*#__PURE__*/React__default["default"].createElement(Modal, {
    mode: "center-small",
    isOpen: true,
    onRequestClose: () => {
      onClose();
    },
    headerLine: true,
    searchProps: {
      placeholder: "Search...",
      onChange: e => {
        setQuery(e.target.value);
      }
    },
    headerSymbol: "P",
    noPadding: true
  }, getProductsRequest.status === "loading" && /*#__PURE__*/React__default["default"].createElement(LoadingContainer, {
    isEmpty: !getProductsRequest.data?.length
  }, /*#__PURE__*/React__default["default"].createElement(ProductsContainer, null, getProductsRequest.data?.map(product => /*#__PURE__*/React__default["default"].createElement(BasicRow, {
    title: product.title,
    onClick: () => {
      onItemPick(product);
      onClose();
    },
    image: product.thumbnail
  })), /*#__PURE__*/React__default["default"].createElement(LoadingIndicatorBackdrop, null)), /*#__PURE__*/React__default["default"].createElement(LoadingIndicatorWrapper, null, /*#__PURE__*/React__default["default"].createElement(LoadingIndicator, null, loadingIcon))), getProductsRequest.status === "success" && (getProductsRequest.data.length > 0 ? getProductsRequest.data.map(product => /*#__PURE__*/React__default["default"].createElement(BasicRow, {
    key: product.id,
    title: product.title,
    onClick: () => {
      onItemPick(product);
      onClose();
    },
    image: product.thumbnail
  })) : /*#__PURE__*/React__default["default"].createElement(NoResults, null, "No results")), getProductsRequest.status === "error" && /*#__PURE__*/React__default["default"].createElement(NoResults, null, "Couldn't fetch data for query \"", previousQuery.current, "\"")) : null;
}
const ErrorMessage = styledComponents.styled.div.withConfig({
  displayName: "SimplePicker__ErrorMessage",
  componentId: "sc-hh69hi-2"
})(["word-break:break-all;white-space:normal;margin-left:4px;", " color:", ";"], fonts.Fonts.body, Tooltip.Colors.black40);
const LoadingContainer = styledComponents.styled.div.withConfig({
  displayName: "SimplePicker__LoadingContainer",
  componentId: "sc-hh69hi-3"
})(["position:relative;display:flex;flex-direction:column;flex-grow:1;width:100%;", " max-height:331px;"], _ref4 => {
  let {
    isEmpty
  } = _ref4;
  return isEmpty && styledComponents.css(["min-height:72px;"]);
});
const ProductsContainer = styledComponents.styled.div.withConfig({
  displayName: "SimplePicker__ProductsContainer",
  componentId: "sc-hh69hi-4"
})(["width:100%;overflow:hidden;filter:blur(1px);"]);
const LoadingIndicatorBackdrop = styledComponents.styled.div.withConfig({
  displayName: "SimplePicker__LoadingIndicatorBackdrop",
  componentId: "sc-hh69hi-5"
})(["position:absolute;left:0;top:0;width:100%;height:100%;background:#fefefea1;filter:blur(1px);"]);
const LoadingIndicatorWrapper = styledComponents.styled.div.withConfig({
  displayName: "SimplePicker__LoadingIndicatorWrapper",
  componentId: "sc-hh69hi-6"
})(["position:absolute;display:grid;place-items:center;left:0;top:0;width:100%;height:100%;"]);
const rotate = styledComponents.keyframes(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);
const LoadingIndicator = styledComponents.styled.div.withConfig({
  displayName: "SimplePicker__LoadingIndicator",
  componentId: "sc-hh69hi-7"
})(["width:24px;height:24px;font-size:24px;> svg{animation:", " 500ms linear infinite;}"], rotate);
const NoResults = styledComponents.styled.div.withConfig({
  displayName: "SimplePicker__NoResults",
  componentId: "sc-hh69hi-8"
})(["display:grid;place-items:center;height:48px;padding:12px;", ";"], fonts.Fonts.body);
const loadingIcon = /*#__PURE__*/React__default["default"].createElement("svg", {
  width: "1em",
  height: "1em",
  viewBox: "0 0 25 25",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 8.08172 16.9183 4.5 12.5 4.5",
  stroke: "currentColor",
  strokeWidth: 1.2
}));

const trackHeight = "1px";
const thumbSize = "11px";
const thumbRadius = "50%";
const trackColor = Tooltip.Colors.black10;
const trackColorHover = "black";
const thumbColor = "black";
const Root = styledComponents.styled.div.withConfig({
  displayName: "Slider__Root",
  componentId: "sc-1l3g6h4-0"
})(["input[type=\"range\"]{width:100%;margin:5px 0;height:20px;-webkit-appearance:none;cursor:pointer;}input[type=\"range\"]:focus{outline:none;}input[type=\"range\"]::-webkit-slider-runnable-track{background:", ";border:0;width:100%;height:", ";transition:all 0.1s;}input[type=\"range\"]::-webkit-slider-thumb{margin-top:-5px;width:", ";height:", ";border-radius:", ";background:", ";-webkit-appearance:none;}input[type=\"range\"]:focus::-webkit-slider-runnable-track{background:", ";}input[type=\"range\"]:hover::-webkit-slider-runnable-track{background:", ";}input[type=\"range\"]::-moz-range-track{background:", ";border:0;width:100%;height:", ";transition:all 0.1s;}input[type=\"range\"]::-moz-range-thumb{width:", ";height:", ";border-radius:", ";background:", ";border:none;}input[type=\"range\"]:hover::-moz-range-track{background:", ";}input[type=\"range\"]::-ms-track{background:transparent;border-color:transparent;border-width:0px 0;color:transparent;width:100%;height:", ";}input[type=\"range\"]::-ms-fill-lower{background:#000080;border:0;}input[type=\"range\"]::-ms-fill-upper{background:", ";border:0;}input[type=\"range\"]::-ms-thumb{width:", ";height:", ";border-radius:", ";background:", ";margin-top:0px;}input[type=\"range\"]:focus::-ms-fill-lower{background:", ";}input[type=\"range\"]:focus::-ms-fill-upper{background:", ";}"], trackColor, trackHeight, thumbSize, thumbSize, thumbRadius, thumbColor, trackColor, trackColorHover, trackColor, trackHeight, thumbSize, thumbSize, thumbRadius, thumbColor, trackColorHover, trackHeight, trackColor, thumbSize, thumbSize, thumbRadius, thumbColor, trackColor, trackColor);
const SliderStyled = styledComponents.styled.input.withConfig({
  displayName: "Slider__SliderStyled",
  componentId: "sc-1l3g6h4-1"
})([""]);
const RangeSlider = props => {
  return /*#__PURE__*/React__default["default"].createElement(Root, null, /*#__PURE__*/React__default["default"].createElement(SliderStyled, _extends__default["default"]({}, props, {
    type: "range"
  })));
};

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

var TABS_NAME = "Tabs";
var [createTabsContext, createTabsScope] = Tooltip.createContextScope(TABS_NAME, [
  createRovingFocusGroupScope
]);
var useRovingFocusGroupScope$1 = createRovingFocusGroupScope();
var [TabsProvider, useTabsContext] = createTabsContext(TABS_NAME);
var Tabs$1 = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeTabs,
      value: valueProp,
      onValueChange,
      defaultValue,
      orientation = "horizontal",
      dir,
      activationMode = "automatic",
      ...tabsProps
    } = props;
    const direction = useDirection(dir);
    const [value, setValue] = Tooltip.useControllableState({
      prop: valueProp,
      onChange: onValueChange,
      defaultProp: defaultValue
    });
    return /* @__PURE__ */ jsxRuntime.jsx(
      TabsProvider,
      {
        scope: __scopeTabs,
        baseId: Tooltip.useId(),
        value,
        onValueChange: setValue,
        orientation,
        dir: direction,
        activationMode,
        children: /* @__PURE__ */ jsxRuntime.jsx(
          Tooltip.Primitive.div,
          {
            dir: direction,
            "data-orientation": orientation,
            ...tabsProps,
            ref: forwardedRef
          }
        )
      }
    );
  }
);
Tabs$1.displayName = TABS_NAME;
var TAB_LIST_NAME = "TabsList";
var TabsList = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, loop = true, ...listProps } = props;
    const context = useTabsContext(TAB_LIST_NAME, __scopeTabs);
    const rovingFocusGroupScope = useRovingFocusGroupScope$1(__scopeTabs);
    return /* @__PURE__ */ jsxRuntime.jsx(
      Root$4,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        orientation: context.orientation,
        dir: context.dir,
        loop,
        children: /* @__PURE__ */ jsxRuntime.jsx(
          Tooltip.Primitive.div,
          {
            role: "tablist",
            "aria-orientation": context.orientation,
            ...listProps,
            ref: forwardedRef
          }
        )
      }
    );
  }
);
TabsList.displayName = TAB_LIST_NAME;
var TRIGGER_NAME = "TabsTrigger";
var TabsTrigger = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, value, disabled = false, ...triggerProps } = props;
    const context = useTabsContext(TRIGGER_NAME, __scopeTabs);
    const rovingFocusGroupScope = useRovingFocusGroupScope$1(__scopeTabs);
    const triggerId = makeTriggerId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const isSelected = value === context.value;
    return /* @__PURE__ */ jsxRuntime.jsx(
      Item,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        focusable: !disabled,
        active: isSelected,
        children: /* @__PURE__ */ jsxRuntime.jsx(
          Tooltip.Primitive.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": isSelected,
            "aria-controls": contentId,
            "data-state": isSelected ? "active" : "inactive",
            "data-disabled": disabled ? "" : void 0,
            disabled,
            id: triggerId,
            ...triggerProps,
            ref: forwardedRef,
            onMouseDown: Tooltip.composeEventHandlers(props.onMouseDown, (event) => {
              if (!disabled && event.button === 0 && event.ctrlKey === false) {
                context.onValueChange(value);
              } else {
                event.preventDefault();
              }
            }),
            onKeyDown: Tooltip.composeEventHandlers(props.onKeyDown, (event) => {
              if ([" ", "Enter"].includes(event.key)) context.onValueChange(value);
            }),
            onFocus: Tooltip.composeEventHandlers(props.onFocus, () => {
              const isAutomaticActivation = context.activationMode !== "manual";
              if (!isSelected && !disabled && isAutomaticActivation) {
                context.onValueChange(value);
              }
            })
          }
        )
      }
    );
  }
);
TabsTrigger.displayName = TRIGGER_NAME;
var CONTENT_NAME = "TabsContent";
var TabsContent = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, value, forceMount, children, ...contentProps } = props;
    const context = useTabsContext(CONTENT_NAME, __scopeTabs);
    const triggerId = makeTriggerId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const isSelected = value === context.value;
    const isMountAnimationPreventedRef = React__namespace.useRef(isSelected);
    React__namespace.useEffect(() => {
      const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
      return () => cancelAnimationFrame(rAF);
    }, []);
    return /* @__PURE__ */ jsxRuntime.jsx(Tooltip.Presence, { present: forceMount || isSelected, children: ({ present }) => /* @__PURE__ */ jsxRuntime.jsx(
      Tooltip.Primitive.div,
      {
        "data-state": isSelected ? "active" : "inactive",
        "data-orientation": context.orientation,
        role: "tabpanel",
        "aria-labelledby": triggerId,
        hidden: !present,
        id: contentId,
        tabIndex: 0,
        ...contentProps,
        ref: forwardedRef,
        style: {
          ...props.style,
          animationDuration: isMountAnimationPreventedRef.current ? "0s" : void 0
        },
        children: present && children
      }
    ) });
  }
);
TabsContent.displayName = CONTENT_NAME;
function makeTriggerId(baseId, value) {
  return `${baseId}-trigger-${value}`;
}
function makeContentId(baseId, value) {
  return `${baseId}-content-${value}`;
}
var Root2$1 = Tabs$1;
var List = TabsList;
var Trigger = TabsTrigger;

const StyledRoot = styledComponents.styled(Root2$1).withConfig({
  displayName: "Tabs__StyledRoot",
  componentId: "sc-1nxdand-0"
})(["width:100%;"]);
const StyledTabListContainer = styledComponents.styled.div.withConfig({
  displayName: "Tabs__StyledTabListContainer",
  componentId: "sc-1nxdand-1"
})(["display:flex;width:100%;justify-content:space-between;"]);
const StyledList = styledComponents.styled(List).withConfig({
  displayName: "Tabs__StyledList",
  componentId: "sc-1nxdand-2"
})(["display:flex;flex-wrap:nowrap;gap:36px;min-height:36px;"]);
const StyledTrigger = styledComponents.styled(Typography).attrs({
  component: Trigger
}).withConfig({
  displayName: "Tabs__StyledTrigger",
  componentId: "sc-1nxdand-3"
})(["padding:0;margin:0;border:0;background:transparent;@media (hover:hover){cursor:pointer;}&[data-state=\"active\"]{font-weight:bold;}&[data-state=\"inactive\"]{color:", ";}"], Tooltip.Colors.black500);
function Tabs(props) {
  return /*#__PURE__*/React__default["default"].createElement(StyledRoot, {
    value: props.value,
    onValueChange: value => props.onChange(value)
  }, props.children);
}
function TabList(props) {
  return /*#__PURE__*/React__default["default"].createElement(StyledTabListContainer, null, /*#__PURE__*/React__default["default"].createElement(StyledList, null, props.children), props.action);
}
function Tab(props) {
  return /*#__PURE__*/React__default["default"].createElement(StyledTrigger, {
    value: props.value
  }, props.children);
}
function TabPanel(props) {
  return /*#__PURE__*/React__default["default"].createElement(TabsContent, {
    value: props.value
  }, props.children);
}

const Toggle$1 = props => {
  const [internalChecked, setInternalChecked] = React.useState(props.checked ?? false);
  const checked = props.checked === undefined ? internalChecked : props.checked;
  const {
    ...inputProps
  } = props;
  const name = inputProps.name;
  return /*#__PURE__*/React__default["default"].createElement(ToggleWrap, null, /*#__PURE__*/React__default["default"].createElement(ToggleElement, null, /*#__PURE__*/React__default["default"].createElement(ToggleInput, _extends__default["default"]({
    id: name,
    type: "checkbox"
  }, inputProps, {
    checked: checked,
    onChange: e => {
      setInternalChecked(e.target.checked);
      props.onChange?.(e);
    }
  })), /*#__PURE__*/React__default["default"].createElement(ToggleLabel, {
    htmlFor: name,
    role: "switch",
    disabled: !!props.disabled
  }, /*#__PURE__*/React__default["default"].createElement(ToggleSwitch, {
    checked: checked,
    disabled: !!props.disabled
  }, /*#__PURE__*/React__default["default"].createElement("span", null)))));
};
const ToggleWrap = styledComponents.styled.div.withConfig({
  displayName: "Toggle__ToggleWrap",
  componentId: "sc-1ecbsxn-0"
})(["display:flex;align-items:center;> span{color:", ";}"], Tooltip.Colors.black10);
const ToggleElement = styledComponents.styled.div.withConfig({
  displayName: "Toggle__ToggleElement",
  componentId: "sc-1ecbsxn-1"
})(["position:relative;width:32px;height:18px;padding:1px;"]);
const ToggleLabel = styledComponents.styled.label.withConfig({
  displayName: "Toggle__ToggleLabel",
  componentId: "sc-1ecbsxn-2"
})(["background:none;color:inherit;padding:0;opacity:", ";outline:none;width:30px;height:16px;pointer-events:", ";"], props => props.disabled ? "0.4" : "1", props => props.disabled ? "none" : "inherit");
const ToggleSwitch = styledComponents.styled.div.withConfig({
  displayName: "Toggle__ToggleSwitch",
  componentId: "sc-1ecbsxn-3"
})(["position:relative;width:30px;height:16px;border-radius:8px;background-color:white;box-shadow:0 0 0 1px ", ";transition:all 0.1s;pointer-events:none;span{position:absolute;border-radius:8px;left:2px;top:50%;width:10px;height:10px;background:", ";transform:translate3d(", ",-50%,0);transition:transform 150ms ease-out,opacity 0.1s;}"], p => !p.checked || p.disabled ? Tooltip.Colors.black40 : "black", p => !p.checked || p.disabled ? Tooltip.Colors.black40 : "black", p => p.checked ? "16px" : "0");
const ToggleInput = styledComponents.styled.input.withConfig({
  displayName: "Toggle__ToggleInput",
  componentId: "sc-1ecbsxn-4"
})(["position:absolute;left:0;top:0;width:30px;height:16px;opacity:0;margin:0;cursor:", ";pointer-events:auto;", ""], props => props.disabled ? "not-allowed" : "pointer", p => p.disabled ? "" : `
  &:hover {
    + ${ToggleLabel} ${ToggleSwitch} {
      box-shadow: 0 0 0 1px black;
    }
    
    + ${ToggleLabel} ${ToggleSwitch} span {
      background-color: black;
    }
  }
  `);

/**
 * TODO: this toggle button doesn't make much sense from semantic perspective
 */

const StyledButton = styledComponents.styled.button.withConfig({
  displayName: "ToggleButton__StyledButton",
  componentId: "sc-1mpua28-0"
})(["all:unset;box-sizing:border-box;width:100%;height:100%;outline:none;border:none;", " ", " border-radius:2px;background-color:", ";"], getControlPadding(), p => p.hideLabel ? "padding-right: 0;" : "", p => p.selected ? Tooltip.Colors.black10 : "transparent");
const ToggleButton = props => {
  const {
    onChange,
    ...restProps
  } = props;
  return /*#__PURE__*/React__default["default"].createElement(ControlContainer, _extends__default["default"]({}, props, {
    iconBlack: true,
    iconOnly: props.hideLabel
  }), /*#__PURE__*/React__default["default"].createElement(StyledButton, _extends__default["default"]({}, restProps, {
    "aria-label": props.children,
    onClick: () => {
      props.onChange?.(!props.selected);
    }
  }), props.hideLabel ? null : props.children));
};
const SelectInlineRoot = styledComponents.styled.div.withConfig({
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

var NAME = "Toggle";
var Toggle = React__namespace.forwardRef((props, forwardedRef) => {
  const { pressed: pressedProp, defaultPressed = false, onPressedChange, ...buttonProps } = props;
  const [pressed = false, setPressed] = Tooltip.useControllableState({
    prop: pressedProp,
    onChange: onPressedChange,
    defaultProp: defaultPressed
  });
  return /* @__PURE__ */ jsxRuntime.jsx(
    Tooltip.Primitive.button,
    {
      type: "button",
      "aria-pressed": pressed,
      "data-state": pressed ? "on" : "off",
      "data-disabled": props.disabled ? "" : void 0,
      ...buttonProps,
      ref: forwardedRef,
      onClick: Tooltip.composeEventHandlers(props.onClick, () => {
        if (!props.disabled) {
          setPressed(!pressed);
        }
      })
    }
  );
});
Toggle.displayName = NAME;

var TOGGLE_GROUP_NAME = "ToggleGroup";
var [createToggleGroupContext, createToggleGroupScope] = Tooltip.createContextScope(TOGGLE_GROUP_NAME, [
  createRovingFocusGroupScope
]);
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var ToggleGroup$1 = React__default["default"].forwardRef((props, forwardedRef) => {
  const { type, ...toggleGroupProps } = props;
  if (type === "single") {
    const singleProps = toggleGroupProps;
    return /* @__PURE__ */ jsxRuntime.jsx(ToggleGroupImplSingle, { ...singleProps, ref: forwardedRef });
  }
  if (type === "multiple") {
    const multipleProps = toggleGroupProps;
    return /* @__PURE__ */ jsxRuntime.jsx(ToggleGroupImplMultiple, { ...multipleProps, ref: forwardedRef });
  }
  throw new Error(`Missing prop \`type\` expected on \`${TOGGLE_GROUP_NAME}\``);
});
ToggleGroup$1.displayName = TOGGLE_GROUP_NAME;
var [ToggleGroupValueProvider, useToggleGroupValueContext] = createToggleGroupContext(TOGGLE_GROUP_NAME);
var ToggleGroupImplSingle = React__default["default"].forwardRef((props, forwardedRef) => {
  const {
    value: valueProp,
    defaultValue,
    onValueChange = () => {
    },
    ...toggleGroupSingleProps
  } = props;
  const [value, setValue] = Tooltip.useControllableState({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange
  });
  return /* @__PURE__ */ jsxRuntime.jsx(
    ToggleGroupValueProvider,
    {
      scope: props.__scopeToggleGroup,
      type: "single",
      value: value ? [value] : [],
      onItemActivate: setValue,
      onItemDeactivate: React__default["default"].useCallback(() => setValue(""), [setValue]),
      children: /* @__PURE__ */ jsxRuntime.jsx(ToggleGroupImpl, { ...toggleGroupSingleProps, ref: forwardedRef })
    }
  );
});
var ToggleGroupImplMultiple = React__default["default"].forwardRef((props, forwardedRef) => {
  const {
    value: valueProp,
    defaultValue,
    onValueChange = () => {
    },
    ...toggleGroupMultipleProps
  } = props;
  const [value = [], setValue] = Tooltip.useControllableState({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange
  });
  const handleButtonActivate = React__default["default"].useCallback(
    (itemValue) => setValue((prevValue = []) => [...prevValue, itemValue]),
    [setValue]
  );
  const handleButtonDeactivate = React__default["default"].useCallback(
    (itemValue) => setValue((prevValue = []) => prevValue.filter((value2) => value2 !== itemValue)),
    [setValue]
  );
  return /* @__PURE__ */ jsxRuntime.jsx(
    ToggleGroupValueProvider,
    {
      scope: props.__scopeToggleGroup,
      type: "multiple",
      value,
      onItemActivate: handleButtonActivate,
      onItemDeactivate: handleButtonDeactivate,
      children: /* @__PURE__ */ jsxRuntime.jsx(ToggleGroupImpl, { ...toggleGroupMultipleProps, ref: forwardedRef })
    }
  );
});
ToggleGroup$1.displayName = TOGGLE_GROUP_NAME;
var [ToggleGroupContext, useToggleGroupContext] = createToggleGroupContext(TOGGLE_GROUP_NAME);
var ToggleGroupImpl = React__default["default"].forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeToggleGroup,
      disabled = false,
      rovingFocus = true,
      orientation,
      dir,
      loop = true,
      ...toggleGroupProps
    } = props;
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeToggleGroup);
    const direction = useDirection(dir);
    const commonProps = { role: "group", dir: direction, ...toggleGroupProps };
    return /* @__PURE__ */ jsxRuntime.jsx(ToggleGroupContext, { scope: __scopeToggleGroup, rovingFocus, disabled, children: rovingFocus ? /* @__PURE__ */ jsxRuntime.jsx(
      Root$4,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        orientation,
        dir: direction,
        loop,
        children: /* @__PURE__ */ jsxRuntime.jsx(Tooltip.Primitive.div, { ...commonProps, ref: forwardedRef })
      }
    ) : /* @__PURE__ */ jsxRuntime.jsx(Tooltip.Primitive.div, { ...commonProps, ref: forwardedRef }) });
  }
);
var ITEM_NAME = "ToggleGroupItem";
var ToggleGroupItem$1 = React__default["default"].forwardRef(
  (props, forwardedRef) => {
    const valueContext = useToggleGroupValueContext(ITEM_NAME, props.__scopeToggleGroup);
    const context = useToggleGroupContext(ITEM_NAME, props.__scopeToggleGroup);
    const rovingFocusGroupScope = useRovingFocusGroupScope(props.__scopeToggleGroup);
    const pressed = valueContext.value.includes(props.value);
    const disabled = context.disabled || props.disabled;
    const commonProps = { ...props, pressed, disabled };
    const ref = React__default["default"].useRef(null);
    return context.rovingFocus ? /* @__PURE__ */ jsxRuntime.jsx(
      Item,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        focusable: !disabled,
        active: pressed,
        ref,
        children: /* @__PURE__ */ jsxRuntime.jsx(ToggleGroupItemImpl, { ...commonProps, ref: forwardedRef })
      }
    ) : /* @__PURE__ */ jsxRuntime.jsx(ToggleGroupItemImpl, { ...commonProps, ref: forwardedRef });
  }
);
ToggleGroupItem$1.displayName = ITEM_NAME;
var ToggleGroupItemImpl = React__default["default"].forwardRef(
  (props, forwardedRef) => {
    const { __scopeToggleGroup, value, ...itemProps } = props;
    const valueContext = useToggleGroupValueContext(ITEM_NAME, __scopeToggleGroup);
    const singleProps = { role: "radio", "aria-checked": props.pressed, "aria-pressed": void 0 };
    const typeProps = valueContext.type === "single" ? singleProps : void 0;
    return /* @__PURE__ */ jsxRuntime.jsx(
      Toggle,
      {
        ...typeProps,
        ...itemProps,
        ref: forwardedRef,
        onPressedChange: (pressed) => {
          if (pressed) {
            valueContext.onItemActivate(value);
          } else {
            valueContext.onItemDeactivate(value);
          }
        }
      }
    );
  }
);
var Root2 = ToggleGroup$1;
var Item2 = ToggleGroupItem$1;

function ToggleGroup(props) {
  return /*#__PURE__*/React__default["default"].createElement(Root2, {
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
const StyledToggleGroupItem = styledComponents.styled(Item2).withConfig({
  displayName: "ToggleGroup__StyledToggleGroupItem",
  componentId: "sc-1ceudxu-0"
})(["all:unset;box-sizing:border-box;height:28px;width:28px;display:flex;align-items:center;justify-content:center;background-color:transparent;&[aria-checked=\"true\"]{background-color:", ";}border-radius:2px;@media (hover:hover){cursor:pointer;&:hover{box-shadow:0 0 0 1px ", ";}}& svg{flex-shrink:0;}"], Tooltip.Colors.black10, Tooltip.Colors.black10);
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
ToggleGroupItem.displayName = "ToggleGroupItem";

exports.Colors = Tooltip.Colors;
exports.Fonts = fonts.Fonts;
exports.BasicRow = BasicRow;
exports.ButtonDanger = ButtonDanger;
exports.ButtonGhost = ButtonGhost;
exports.ButtonGhostColor = ButtonGhostColor;
exports.ButtonPrimary = ButtonPrimary;
exports.ButtonSecondary = ButtonSecondary;
exports.CheckIcon = CheckIcon;
exports.ChevronDownIcon = ChevronDownIcon;
exports.ColorPicker = ColorPicker;
exports.CustomComponentSymbol = CustomComponentSymbol;
exports.FormElement = FormElement;
exports.GlobalModalStyles = GlobalModalStyles;
exports.IconButtonPrimary = IconButtonPrimary;
exports.Icons = Icons;
exports.Input = Input;
exports.InputColor = InputColor;
exports.InputFile = InputFile;
exports.InputRaw = InputRaw;
exports.Loader = Loader;
exports.Menu = Menu;
exports.MenuContent = MenuContent;
exports.MenuItem = MenuItem;
exports.MenuSeparator = MenuSeparator;
exports.MenuTrigger = MenuTrigger;
exports.Modal = Modal;
exports.ModalBody = ModalBody;
exports.ModalContext = ModalContext;
exports.MultiSelect = MultiSelect;
exports.NavigationController = NavigationController;
exports.RadixSelectContent = Content2$2;
exports.RadixSelectIcon = Icon;
exports.RadixSelectItem = Item$1;
exports.RadixSelectItemIndicator = ItemIndicator$1;
exports.RadixSelectItemText = ItemText;
exports.RadixSelectPortal = Portal$1;
exports.RadixSelectRoot = Root2$3;
exports.RadixSelectSeparator = Separator$1;
exports.RadixSelectTrigger = Trigger$2;
exports.RadixSelectValue = Value;
exports.RadixSelectViewport = Viewport;
exports.RangeSlider = RangeSlider;
exports.Select = Select;
exports.SelectInline = SelectInline;
exports.SelectItem = SelectItem;
exports.SelectSeparator = SelectSeparator;
exports.ShopstoryIcon = ShopstoryIcon;
exports.ShopstoryLogo = ShopstoryLogo;
exports.SimplePicker = SimplePicker;
exports.Stack = Stack;
exports.Tab = Tab;
exports.TabList = TabList;
exports.TabPanel = TabPanel;
exports.Tabs = Tabs;
exports.ThumbnailButton = ThumbnailButton;
exports.Toggle = Toggle$1;
exports.ToggleButton = ToggleButton;
exports.ToggleGroup = ToggleGroup;
exports.ToggleGroupItem = ToggleGroupItem;
exports.Typography = Typography;
