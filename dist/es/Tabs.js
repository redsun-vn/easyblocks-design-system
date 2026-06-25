import * as React from 'react';
import React__default from 'react';
import { c as createContextScope, f as useControllableState, e as useId, P as Primitive, d as composeEventHandlers } from './index-a61f46cd.js';
import { c as createRovingFocusGroupScope, R as Root, I as Item } from './index-3cd78f3c.js';
import { P as Presence } from './index-ac70c049.js';
import { u as useDirection } from './index-996c91ca.js';
import { jsx } from 'react/jsx-runtime';
import { C as Colors } from './colors-b56a153c.js';
import { Typography } from './Typography.js';
import { styled } from 'styled-components';
import 'react-dom';
import './_rollupPluginBabelHelpers-c245b26a.js';
import './fonts-84085e3a.js';

var TABS_NAME = "Tabs";
var [createTabsContext, createTabsScope] = createContextScope(TABS_NAME, [
  createRovingFocusGroupScope
]);
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var [TabsProvider, useTabsContext] = createTabsContext(TABS_NAME);
var Tabs$1 = React.forwardRef(
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
    const [value, setValue] = useControllableState({
      prop: valueProp,
      onChange: onValueChange,
      defaultProp: defaultValue
    });
    return /* @__PURE__ */ jsx(
      TabsProvider,
      {
        scope: __scopeTabs,
        baseId: useId(),
        value,
        onValueChange: setValue,
        orientation,
        dir: direction,
        activationMode,
        children: /* @__PURE__ */ jsx(
          Primitive.div,
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
var TabsList = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, loop = true, ...listProps } = props;
    const context = useTabsContext(TAB_LIST_NAME, __scopeTabs);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
    return /* @__PURE__ */ jsx(
      Root,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        orientation: context.orientation,
        dir: context.dir,
        loop,
        children: /* @__PURE__ */ jsx(
          Primitive.div,
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
var TabsTrigger = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, value, disabled = false, ...triggerProps } = props;
    const context = useTabsContext(TRIGGER_NAME, __scopeTabs);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
    const triggerId = makeTriggerId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const isSelected = value === context.value;
    return /* @__PURE__ */ jsx(
      Item,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        focusable: !disabled,
        active: isSelected,
        children: /* @__PURE__ */ jsx(
          Primitive.button,
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
            onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
              if (!disabled && event.button === 0 && event.ctrlKey === false) {
                context.onValueChange(value);
              } else {
                event.preventDefault();
              }
            }),
            onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
              if ([" ", "Enter"].includes(event.key)) context.onValueChange(value);
            }),
            onFocus: composeEventHandlers(props.onFocus, () => {
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
var TabsContent = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, value, forceMount, children, ...contentProps } = props;
    const context = useTabsContext(CONTENT_NAME, __scopeTabs);
    const triggerId = makeTriggerId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const isSelected = value === context.value;
    const isMountAnimationPreventedRef = React.useRef(isSelected);
    React.useEffect(() => {
      const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
      return () => cancelAnimationFrame(rAF);
    }, []);
    return /* @__PURE__ */ jsx(Presence, { present: forceMount || isSelected, children: ({ present }) => /* @__PURE__ */ jsx(
      Primitive.div,
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
var Root2 = Tabs$1;
var List = TabsList;
var Trigger = TabsTrigger;

const StyledRoot = styled(Root2).withConfig({
  displayName: "Tabs__StyledRoot",
  componentId: "sc-1nxdand-0"
})(["width:100%;"]);
const StyledTabListContainer = styled.div.withConfig({
  displayName: "Tabs__StyledTabListContainer",
  componentId: "sc-1nxdand-1"
})(["display:flex;width:100%;justify-content:space-between;"]);
const StyledList = styled(List).withConfig({
  displayName: "Tabs__StyledList",
  componentId: "sc-1nxdand-2"
})(["display:flex;flex-wrap:nowrap;gap:36px;min-height:36px;"]);
const StyledTrigger = styled(Typography).attrs({
  component: Trigger
}).withConfig({
  displayName: "Tabs__StyledTrigger",
  componentId: "sc-1nxdand-3"
})(["padding:0;margin:0;border:0;background:transparent;@media (hover:hover){cursor:pointer;}&[data-state=\"active\"]{font-weight:bold;}&[data-state=\"inactive\"]{color:", ";}"], Colors.black500);
function Tabs(props) {
  return /*#__PURE__*/React__default.createElement(StyledRoot, {
    value: props.value,
    onValueChange: value => props.onChange(value)
  }, props.children);
}
function TabList(props) {
  return /*#__PURE__*/React__default.createElement(StyledTabListContainer, null, /*#__PURE__*/React__default.createElement(StyledList, null, props.children), props.action);
}
function Tab(props) {
  return /*#__PURE__*/React__default.createElement(StyledTrigger, {
    value: props.value
  }, props.children);
}
function TabPanel(props) {
  return /*#__PURE__*/React__default.createElement(TabsContent, {
    value: props.value
  }, props.children);
}

export { Tab, TabList, TabPanel, Tabs };
