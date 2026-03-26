'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styledComponents = require('styled-components');
var colors = require('./colors-807b489d.js');

const DEFAULT_SIZE = 6;
const CustomComponentSymbol = styledComponents.styled.div.withConfig({
  displayName: "CustomComponentSymbol",
  componentId: "sc-1b4wdw-0"
})(["width:", "px;height:", "px;background:", ";transform:rotate(45deg);"], p => p.size ?? DEFAULT_SIZE, p => p.size ?? DEFAULT_SIZE, colors.Colors.purple);

exports.CustomComponentSymbol = CustomComponentSymbol;
