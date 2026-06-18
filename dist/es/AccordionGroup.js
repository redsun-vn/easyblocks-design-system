import React__default, { useState } from 'react';
import styled from 'styled-components';
import { C as Colors } from './colors-b56a153c.js';
import { Icons } from './icons.js';
import { Typography } from './Typography.js';
import './_rollupPluginBabelHelpers-c245b26a.js';
import './fonts-84085e3a.js';

const HorizontalLine = styled.div.withConfig({
  displayName: "AccordionGroup__HorizontalLine",
  componentId: "sc-968q5l-0"
})(["height:1px;margin-top:-1px;background-color:", ";margin:4px 10px;"], Colors.black10);
const StyledWrapperChevronIcon = styled(Typography).withConfig({
  displayName: "AccordionGroup__StyledWrapperChevronIcon",
  componentId: "sc-968q5l-1"
})(["transition:transform 0.2s ease;", ""], _ref => {
  let {
    isOpen
  } = _ref;
  return `transform: rotate(${isOpen ? 180 : 0}deg);`;
});
const StyledAccordionGroup = styled(Typography).withConfig({
  displayName: "AccordionGroup__StyledAccordionGroup",
  componentId: "sc-968q5l-2"
})(["display:flex;align-items:center;justify-content:space-between;width:fit-content;min-width:100%;cursor:pointer;padding:6px 10px;gap:2px;"]);
const StyledAccordionGroupLabel = styled(Typography).withConfig({
  displayName: "AccordionGroup__StyledAccordionGroupLabel",
  componentId: "sc-968q5l-3"
})(["display:block;font-weight:700;max-width:240px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;cursor:pointer;"]);
const AccordionGroup = _ref2 => {
  let {
    id,
    title,
    children,
    defaultExpanded = false,
    subTitle,
    enableBottomLine = true
  } = _ref2;
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(StyledAccordionGroup, {
    id: id,
    onClick: () => setIsExpanded(prev => !prev)
  }, /*#__PURE__*/React__default.createElement(StyledAccordionGroupLabel, {
    variant: "body",
    component: "label"
  }, title, subTitle), /*#__PURE__*/React__default.createElement(StyledWrapperChevronIcon, {
    isOpen: isExpanded
  }, /*#__PURE__*/React__default.createElement(Icons.ChevronDown, {
    size: 22
  }))), isExpanded ? children : null, isExpanded && enableBottomLine ? /*#__PURE__*/React__default.createElement(HorizontalLine, null) : null);
};

export { AccordionGroup };
