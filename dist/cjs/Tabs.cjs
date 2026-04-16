'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var index = require('./index-e658c804.js');
var index$1 = require('./index-5fb6a3ee.js');
var index$3 = require('./index-004169c7.js');
var index$2 = require('./index-4f5b0ced.js');
var jsxRuntime = require('react/jsx-runtime');
var colors = require('./colors-807b489d.js');
var Typography = require('./Typography.cjs');
var styledComponents = require('styled-components');
require('react-dom');
require('./_rollupPluginBabelHelpers-4b342fad.js');
require('./fonts-c2bffa19.js');

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

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var TABS_NAME = "Tabs";
var [createTabsContext, createTabsScope] = index.createContextScope(TABS_NAME, [
  index$1.createRovingFocusGroupScope
]);
var useRovingFocusGroupScope = index$1.createRovingFocusGroupScope();
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
    const direction = index$2.useDirection(dir);
    const [value, setValue] = index.useControllableState({
      prop: valueProp,
      onChange: onValueChange,
      defaultProp: defaultValue
    });
    return /* @__PURE__ */ jsxRuntime.jsx(
      TabsProvider,
      {
        scope: __scopeTabs,
        baseId: index.useId(),
        value,
        onValueChange: setValue,
        orientation,
        dir: direction,
        activationMode,
        children: /* @__PURE__ */ jsxRuntime.jsx(
          index.Primitive.div,
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
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
    return /* @__PURE__ */ jsxRuntime.jsx(
      index$1.Root,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        orientation: context.orientation,
        dir: context.dir,
        loop,
        children: /* @__PURE__ */ jsxRuntime.jsx(
          index.Primitive.div,
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
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
    const triggerId = makeTriggerId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const isSelected = value === context.value;
    return /* @__PURE__ */ jsxRuntime.jsx(
      index$1.Item,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        focusable: !disabled,
        active: isSelected,
        children: /* @__PURE__ */ jsxRuntime.jsx(
          index.Primitive.button,
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
            onMouseDown: index.composeEventHandlers(props.onMouseDown, (event) => {
              if (!disabled && event.button === 0 && event.ctrlKey === false) {
                context.onValueChange(value);
              } else {
                event.preventDefault();
              }
            }),
            onKeyDown: index.composeEventHandlers(props.onKeyDown, (event) => {
              if ([" ", "Enter"].includes(event.key)) context.onValueChange(value);
            }),
            onFocus: index.composeEventHandlers(props.onFocus, () => {
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
    return /* @__PURE__ */ jsxRuntime.jsx(index$3.Presence, { present: forceMount || isSelected, children: ({ present }) => /* @__PURE__ */ jsxRuntime.jsx(
      index.Primitive.div,
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

const StyledRoot = styledComponents.styled(Root2).withConfig({
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
const StyledTrigger = styledComponents.styled(Typography.Typography).attrs({
  component: Trigger
}).withConfig({
  displayName: "Tabs__StyledTrigger",
  componentId: "sc-1nxdand-3"
})(["padding:0;margin:0;border:0;background:transparent;@media (hover:hover){cursor:pointer;}&[data-state=\"active\"]{font-weight:bold;}&[data-state=\"inactive\"]{color:", ";}"], colors.Colors.black500);
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

exports.Tab = Tab;
exports.TabList = TabList;
exports.TabPanel = TabPanel;
exports.Tabs = Tabs;
