import { _ as _extends } from './_rollupPluginBabelHelpers-c245b26a.js';
import * as React from 'react';
import React__default, { useState, useCallback, useRef, useMemo, forwardRef } from 'react';
import { useCombobox, useMultipleSelection } from 'downshift';
import { u as useFloating, a as autoUpdate, o as offset, s as shift, l as limitShift, f as flip, b as size, c as arrow, h as hide } from './floating-ui.react-dom-4105610d.js';
import * as ReactDOM from 'react-dom';
import { jsx } from 'react/jsx-runtime';
import { Icons } from './icons.js';
import { styled } from 'styled-components';
import { C as Colors } from './colors-b56a153c.js';
import { F as Fonts } from './fonts-84085e3a.js';

// src/compose-refs.tsx
function setRef$2(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs$2(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef$2(ref, node);
      if (!hasCleanup && typeof cleanup == "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup == "function") {
            cleanup();
          } else {
            setRef$2(refs[i], null);
          }
        }
      };
    }
  };
}
function useComposedRefs$2(...refs) {
  return React.useCallback(composeRefs$2(...refs), refs);
}

// src/slot.tsx
// @__NO_SIDE_EFFECTS__
function createSlot$2(ownerName) {
  const Slot2 = React.forwardRef((props, forwardedRef) => {
    let { children, ...slotProps } = props;
    let slottableElement = null;
    let hasSlottable = false;
    const newChildren = [];
    if (isLazyComponent$2(children) && typeof use$2 === "function") {
      children = use$2(children._payload);
    }
    React.Children.forEach(children, (maybeSlottable) => {
      if (isSlottable$2(maybeSlottable)) {
        hasSlottable = true;
        const slottable = maybeSlottable;
        let child = "child" in slottable.props ? slottable.props.child : slottable.props.children;
        if (isLazyComponent$2(child) && typeof use$2 === "function") {
          child = use$2(child._payload);
        }
        slottableElement = getSlottableElementFromSlottable$2(slottable, child);
        newChildren.push(slottableElement?.props?.children);
      } else {
        newChildren.push(maybeSlottable);
      }
    });
    if (slottableElement) {
      slottableElement = React.cloneElement(slottableElement, void 0, newChildren);
    } else if (
      // A `Slottable` was found but it didn't resolve to a single element (e.g.
      // it wrapped multiple elements, text, or a render-prop `child` that
      // wasn't an element). Don't fall back to treating the `Slottable` wrapper
      // itself as the slot target — throw a descriptive error below instead.
      !hasSlottable && React.Children.count(children) === 1 && React.isValidElement(children)
    ) {
      slottableElement = children;
    }
    const slottableElementRef = slottableElement ? getElementRef$2(slottableElement) : void 0;
    const composedRef = useComposedRefs$2(forwardedRef, slottableElementRef);
    if (!slottableElement) {
      if (children || children === 0) {
        throw new Error(
          hasSlottable ? createSlottableError$2(ownerName) : createSlotError$2(ownerName)
        );
      }
      return children;
    }
    const mergedProps = mergeProps$2(slotProps, slottableElement.props ?? {});
    if (slottableElement.type !== React.Fragment) {
      mergedProps.ref = forwardedRef ? composedRef : slottableElementRef;
    }
    return React.cloneElement(slottableElement, mergedProps);
  });
  Slot2.displayName = `${ownerName}.Slot`;
  return Slot2;
}
var SLOTTABLE_IDENTIFIER$2 = Symbol.for("radix.slottable");
var getSlottableElementFromSlottable$2 = (slottable, child) => {
  if ("child" in slottable.props) {
    const child2 = slottable.props.child;
    if (!React.isValidElement(child2)) return null;
    return React.cloneElement(child2, void 0, slottable.props.children(child2.props.children));
  }
  return React.isValidElement(child) ? child : null;
};
function mergeProps$2(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef$2(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}
function isSlottable$2(child) {
  return React.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER$2;
}
var REACT_LAZY_TYPE$2 = Symbol.for("react.lazy");
function isLazyComponent$2(element) {
  return element != null && typeof element === "object" && "$$typeof" in element && element.$$typeof === REACT_LAZY_TYPE$2 && "_payload" in element && isPromiseLike$2(element._payload);
}
function isPromiseLike$2(value) {
  return typeof value === "object" && value !== null && "then" in value;
}
var createSlotError$2 = (ownerName) => {
  return `${ownerName} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`;
};
var createSlottableError$2 = (ownerName) => {
  return `${ownerName} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`;
};
var use$2 = React[" use ".trim().toString()];

// src/primitive.tsx
var NODES$2 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive$2 = NODES$2.reduce((primitive, node) => {
  const Slot = createSlot$2(`Primitive.${node}`);
  const Node = React.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ jsx(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});

// src/arrow.tsx
var NAME = "Arrow";
var Arrow = React.forwardRef((props, forwardedRef) => {
  const { children, width = 10, height = 5, ...arrowProps } = props;
  return /* @__PURE__ */ jsx(
    Primitive$2.svg,
    {
      ...arrowProps,
      ref: forwardedRef,
      width,
      height,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: props.asChild ? children : /* @__PURE__ */ jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Arrow.displayName = NAME;
var Root = Arrow;

// src/compose-refs.tsx
function setRef$1(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs$1(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef$1(ref, node);
      if (!hasCleanup && typeof cleanup == "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup == "function") {
            cleanup();
          } else {
            setRef$1(refs[i], null);
          }
        }
      };
    }
  };
}
function useComposedRefs$1(...refs) {
  return React.useCallback(composeRefs$1(...refs), refs);
}

// src/create-context.tsx
function createContextScope(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext3(rootComponentName, defaultContext) {
    const BaseContext = React.createContext(defaultContext);
    BaseContext.displayName = rootComponentName + "Context";
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider = (props) => {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const value = React.useMemo(() => context, Object.values(context));
      return /* @__PURE__ */ jsx(Context.Provider, { value, children });
    };
    Provider.displayName = rootComponentName + "Provider";
    function useContext2(consumerName, scope) {
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const context = React.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider, useContext2];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return React.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext3, composeContextScopes(createScope, ...createContextScopeDeps)];
}
function composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// src/slot.tsx
// @__NO_SIDE_EFFECTS__
function createSlot$1(ownerName) {
  const Slot2 = React.forwardRef((props, forwardedRef) => {
    let { children, ...slotProps } = props;
    let slottableElement = null;
    let hasSlottable = false;
    const newChildren = [];
    if (isLazyComponent$1(children) && typeof use$1 === "function") {
      children = use$1(children._payload);
    }
    React.Children.forEach(children, (maybeSlottable) => {
      if (isSlottable$1(maybeSlottable)) {
        hasSlottable = true;
        const slottable = maybeSlottable;
        let child = "child" in slottable.props ? slottable.props.child : slottable.props.children;
        if (isLazyComponent$1(child) && typeof use$1 === "function") {
          child = use$1(child._payload);
        }
        slottableElement = getSlottableElementFromSlottable$1(slottable, child);
        newChildren.push(slottableElement?.props?.children);
      } else {
        newChildren.push(maybeSlottable);
      }
    });
    if (slottableElement) {
      slottableElement = React.cloneElement(slottableElement, void 0, newChildren);
    } else if (
      // A `Slottable` was found but it didn't resolve to a single element (e.g.
      // it wrapped multiple elements, text, or a render-prop `child` that
      // wasn't an element). Don't fall back to treating the `Slottable` wrapper
      // itself as the slot target — throw a descriptive error below instead.
      !hasSlottable && React.Children.count(children) === 1 && React.isValidElement(children)
    ) {
      slottableElement = children;
    }
    const slottableElementRef = slottableElement ? getElementRef$1(slottableElement) : void 0;
    const composedRef = useComposedRefs$1(forwardedRef, slottableElementRef);
    if (!slottableElement) {
      if (children || children === 0) {
        throw new Error(
          hasSlottable ? createSlottableError$1(ownerName) : createSlotError$1(ownerName)
        );
      }
      return children;
    }
    const mergedProps = mergeProps$1(slotProps, slottableElement.props ?? {});
    if (slottableElement.type !== React.Fragment) {
      mergedProps.ref = forwardedRef ? composedRef : slottableElementRef;
    }
    return React.cloneElement(slottableElement, mergedProps);
  });
  Slot2.displayName = `${ownerName}.Slot`;
  return Slot2;
}
var SLOTTABLE_IDENTIFIER$1 = Symbol.for("radix.slottable");
var getSlottableElementFromSlottable$1 = (slottable, child) => {
  if ("child" in slottable.props) {
    const child2 = slottable.props.child;
    if (!React.isValidElement(child2)) return null;
    return React.cloneElement(child2, void 0, slottable.props.children(child2.props.children));
  }
  return React.isValidElement(child) ? child : null;
};
function mergeProps$1(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef$1(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}
function isSlottable$1(child) {
  return React.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER$1;
}
var REACT_LAZY_TYPE$1 = Symbol.for("react.lazy");
function isLazyComponent$1(element) {
  return element != null && typeof element === "object" && "$$typeof" in element && element.$$typeof === REACT_LAZY_TYPE$1 && "_payload" in element && isPromiseLike$1(element._payload);
}
function isPromiseLike$1(value) {
  return typeof value === "object" && value !== null && "then" in value;
}
var createSlotError$1 = (ownerName) => {
  return `${ownerName} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`;
};
var createSlottableError$1 = (ownerName) => {
  return `${ownerName} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`;
};
var use$1 = React[" use ".trim().toString()];

// src/primitive.tsx
var NODES$1 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive$1 = NODES$1.reduce((primitive, node) => {
  const Slot = createSlot$1(`Primitive.${node}`);
  const Node = React.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ jsx(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});

// src/use-callback-ref.tsx
function useCallbackRef(callback) {
  const callbackRef = React.useRef(callback);
  React.useEffect(() => {
    callbackRef.current = callback;
  });
  return React.useMemo(() => ((...args) => callbackRef.current?.(...args)), []);
}

// src/use-layout-effect.tsx
var useLayoutEffect2$2 = globalThis?.document ? React.useLayoutEffect : () => {
};

// src/use-layout-effect.tsx
var useLayoutEffect2$1 = globalThis?.document ? React.useLayoutEffect : () => {
};

// src/use-size.tsx
function useSize(element) {
  const [size, setSize] = React.useState(void 0);
  useLayoutEffect2$1(() => {
    if (element) {
      setSize({ width: element.offsetWidth, height: element.offsetHeight });
      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries)) {
          return;
        }
        if (!entries.length) {
          return;
        }
        const entry = entries[0];
        let width;
        let height;
        if ("borderBoxSize" in entry) {
          const borderSizeEntry = entry["borderBoxSize"];
          const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
          width = borderSize["inlineSize"];
          height = borderSize["blockSize"];
        } else {
          width = element.offsetWidth;
          height = element.offsetHeight;
        }
        setSize({ width, height });
      });
      resizeObserver.observe(element, { box: "border-box" });
      return () => resizeObserver.unobserve(element);
    } else {
      setSize(void 0);
    }
  }, [element]);
  return size;
}

var POPPER_NAME = "Popper";
var [createPopperContext, createPopperScope] = createContextScope(POPPER_NAME);
var [PopperProvider, usePopperContext] = createPopperContext(POPPER_NAME);
var Popper = (props) => {
  const { __scopePopper, children } = props;
  const [anchor, setAnchor] = React.useState(null);
  const [placementState, setPlacementState] = React.useState(void 0);
  return /* @__PURE__ */ jsx(
    PopperProvider,
    {
      scope: __scopePopper,
      anchor,
      onAnchorChange: setAnchor,
      placementState,
      setPlacementState,
      children
    }
  );
};
Popper.displayName = POPPER_NAME;
var ANCHOR_NAME = "PopperAnchor";
var PopperAnchor = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopePopper, virtualRef, ...anchorProps } = props;
    const context = usePopperContext(ANCHOR_NAME, __scopePopper);
    const ref = React.useRef(null);
    const onAnchorChange = context.onAnchorChange;
    const callbackRef = React.useCallback(
      (node) => {
        ref.current = node;
        if (node) {
          onAnchorChange(node);
        }
      },
      [onAnchorChange]
    );
    const composedRefs = useComposedRefs$1(forwardedRef, callbackRef);
    const anchorRef = React.useRef(null);
    React.useEffect(() => {
      if (!virtualRef) {
        return;
      }
      const previousAnchor = anchorRef.current;
      anchorRef.current = virtualRef.current;
      if (previousAnchor !== anchorRef.current) {
        onAnchorChange(anchorRef.current);
      }
    });
    const sideAndAlign = context.placementState && getSideAndAlignFromPlacement(context.placementState);
    const placedSide = sideAndAlign?.[0];
    const placedAlign = sideAndAlign?.[1];
    return virtualRef ? null : /* @__PURE__ */ jsx(
      Primitive$1.div,
      {
        "data-radix-popper-side": placedSide,
        "data-radix-popper-align": placedAlign,
        ...anchorProps,
        ref: composedRefs
      }
    );
  }
);
PopperAnchor.displayName = ANCHOR_NAME;
var CONTENT_NAME = "PopperContent";
var [PopperContentProvider, useContentContext] = createPopperContext(CONTENT_NAME);
var PopperContent = React.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopePopper,
      side = "bottom",
      sideOffset = 0,
      align = "center",
      alignOffset = 0,
      arrowPadding = 0,
      avoidCollisions = true,
      collisionBoundary = [],
      collisionPadding: collisionPaddingProp = 0,
      sticky = "partial",
      hideWhenDetached = false,
      updatePositionStrategy = "optimized",
      onPlaced,
      ...contentProps
    } = props;
    const context = usePopperContext(CONTENT_NAME, __scopePopper);
    const [content, setContent] = React.useState(null);
    const composedRefs = useComposedRefs$1(forwardedRef, (node) => setContent(node));
    const [arrow$1, setArrow] = React.useState(null);
    const arrowSize = useSize(arrow$1);
    const arrowWidth = arrowSize?.width ?? 0;
    const arrowHeight = arrowSize?.height ?? 0;
    const desiredPlacement = side + (align !== "center" ? "-" + align : "");
    const collisionPadding = typeof collisionPaddingProp === "number" ? collisionPaddingProp : { top: 0, right: 0, bottom: 0, left: 0, ...collisionPaddingProp };
    const boundary = Array.isArray(collisionBoundary) ? collisionBoundary : [collisionBoundary];
    const hasExplicitBoundaries = boundary.length > 0;
    const detectOverflowOptions = {
      padding: collisionPadding,
      boundary: boundary.filter(isNotNull),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: hasExplicitBoundaries
    };
    const { refs, floatingStyles, placement, isPositioned, middlewareData } = useFloating({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: desiredPlacement,
      whileElementsMounted: (...args) => {
        const cleanup = autoUpdate(...args, {
          animationFrame: updatePositionStrategy === "always"
        });
        return cleanup;
      },
      elements: {
        reference: context.anchor
      },
      middleware: [
        offset({ mainAxis: sideOffset + arrowHeight, alignmentAxis: alignOffset }),
        avoidCollisions && shift({
          mainAxis: true,
          crossAxis: false,
          limiter: sticky === "partial" ? limitShift() : void 0,
          ...detectOverflowOptions
        }),
        avoidCollisions && flip({ ...detectOverflowOptions }),
        size({
          ...detectOverflowOptions,
          apply: ({ elements, rects, availableWidth, availableHeight }) => {
            const { width: anchorWidth, height: anchorHeight } = rects.reference;
            const contentStyle = elements.floating.style;
            contentStyle.setProperty("--radix-popper-available-width", `${availableWidth}px`);
            contentStyle.setProperty("--radix-popper-available-height", `${availableHeight}px`);
            contentStyle.setProperty("--radix-popper-anchor-width", `${anchorWidth}px`);
            contentStyle.setProperty("--radix-popper-anchor-height", `${anchorHeight}px`);
          }
        }),
        arrow$1 && arrow({ element: arrow$1, padding: arrowPadding }),
        transformOrigin({ arrowWidth, arrowHeight }),
        hideWhenDetached && hide({
          strategy: "referenceHidden",
          ...detectOverflowOptions,
          // `hide` detects whether the anchor (reference) is clipped, so when
          // no explicit `collisionBoundary` is set we fall back to Floating
          // UI's default clipping ancestors (e.g. a scrollable menu). This
          // lets an occluded submenu hide once its anchor scrolls out of view
          // (#3237). The collision/size middlewares deliberately keep the
          // viewport-based default to avoid clamping content rendered inside
          // transformed or overflow-clipping portal containers.
          boundary: hasExplicitBoundaries ? detectOverflowOptions.boundary : void 0
        })
      ]
    });
    const setPlacementState = context.setPlacementState;
    useLayoutEffect2$2(() => {
      setPlacementState(placement);
      return () => {
        setPlacementState(void 0);
      };
    }, [placement, setPlacementState]);
    const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
    const handlePlaced = useCallbackRef(onPlaced);
    useLayoutEffect2$2(() => {
      if (isPositioned) {
        handlePlaced?.();
      }
    }, [isPositioned, handlePlaced]);
    const arrowX = middlewareData.arrow?.x;
    const arrowY = middlewareData.arrow?.y;
    const cannotCenterArrow = middlewareData.arrow?.centerOffset !== 0;
    const [contentZIndex, setContentZIndex] = React.useState();
    useLayoutEffect2$2(() => {
      if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
    }, [content]);
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref: refs.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...floatingStyles,
          transform: isPositioned ? floatingStyles.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: contentZIndex,
          "--radix-popper-transform-origin": [
            middlewareData.transformOrigin?.x,
            middlewareData.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...middlewareData.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: props.dir,
        children: /* @__PURE__ */ jsx(
          PopperContentProvider,
          {
            scope: __scopePopper,
            placedSide,
            placedAlign,
            onArrowChange: setArrow,
            arrowX,
            arrowY,
            shouldHideArrow: cannotCenterArrow,
            children: /* @__PURE__ */ jsx(
              Primitive$1.div,
              {
                "data-side": placedSide,
                "data-align": placedAlign,
                ...contentProps,
                ref: composedRefs,
                style: {
                  ...contentProps.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: !isPositioned ? "none" : void 0
                }
              }
            )
          }
        )
      }
    );
  }
);
PopperContent.displayName = CONTENT_NAME;
var ARROW_NAME = "PopperArrow";
var OPPOSITE_SIDE = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
var PopperArrow = React.forwardRef(function PopperArrow2(props, forwardedRef) {
  const { __scopePopper, ...arrowProps } = props;
  const contentContext = useContentContext(ARROW_NAME, __scopePopper);
  const baseSide = OPPOSITE_SIDE[contentContext.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ jsx(
      "span",
      {
        ref: contentContext.onArrowChange,
        style: {
          position: "absolute",
          left: contentContext.arrowX,
          top: contentContext.arrowY,
          [baseSide]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[contentContext.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: `rotate(180deg)`,
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[contentContext.placedSide],
          visibility: contentContext.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ jsx(
          Root,
          {
            ...arrowProps,
            ref: forwardedRef,
            style: {
              ...arrowProps.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
PopperArrow.displayName = ARROW_NAME;
function isNotNull(value) {
  return value !== null;
}
var transformOrigin = (options) => ({
  name: "transformOrigin",
  options,
  fn(data) {
    const { placement, rects, middlewareData } = data;
    const cannotCenterArrow = middlewareData.arrow?.centerOffset !== 0;
    const isArrowHidden = cannotCenterArrow;
    const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
    const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
    const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
    const noArrowAlign = { start: "0%", center: "50%", end: "100%" }[placedAlign];
    const arrowXCenter = (middlewareData.arrow?.x ?? 0) + arrowWidth / 2;
    const arrowYCenter = (middlewareData.arrow?.y ?? 0) + arrowHeight / 2;
    let x = "";
    let y = "";
    if (placedSide === "bottom") {
      x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y = `${-arrowHeight}px`;
    } else if (placedSide === "top") {
      x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y = `${rects.floating.height + arrowHeight}px`;
    } else if (placedSide === "right") {
      x = `${-arrowHeight}px`;
      y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    } else if (placedSide === "left") {
      x = `${rects.floating.width + arrowHeight}px`;
      y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    }
    return { data: { x, y } };
  }
});
function getSideAndAlignFromPlacement(placement) {
  const [side, align = "center"] = placement.split("-");
  return [side, align];
}
var Root2 = Popper;
var Anchor = PopperAnchor;
var Content = PopperContent;

/**
 * Styled building blocks for Autocomplete. Mirrors the box-shadow / focus-ring
 * conventions of `ControlContainer` so the field visually matches Input/Select,
 * but uses a flex shell that grows vertically to host chips in multiple mode.
 *
 * Transient props ($-prefixed) keep styling flags off the DOM (styled-components v6).
 */

/** Outer clickable field. Wraps the value area + end adornments. */
const Shell = styled.div.withConfig({
  displayName: "styles__Shell",
  componentId: "sc-ylfdk5-0"
})(["position:relative;display:flex;align-items:center;gap:4px;box-sizing:border-box;width:100%;min-height:28px;padding:4px 6px;border-radius:2px;background:", ";color:", ";box-shadow:0 0 0 1px ", ";transition:box-shadow 0.1s;cursor:", ";", ";&:hover{box-shadow:0 0 0 1px ", ";}&:focus-within{box-shadow:0 0 0 2px ", ";}"], Colors.white, p => p.$disabled ? Colors.black40 : Colors.black800, p => p.$hasError ? Colors.red : Colors.black10, p => p.$disabled ? "not-allowed" : "text", Fonts.body, p => p.$hasError ? Colors.red : Colors.black20, p => p.$hasError ? Colors.red : Colors.focus);

/** Holds chips (multiple) and the text input; wraps to multiple lines. */
const ValueArea = styled.div.withConfig({
  displayName: "styles__ValueArea",
  componentId: "sc-ylfdk5-1"
})(["display:flex;flex:1 1 auto;flex-wrap:wrap;align-items:center;gap:4px;min-width:0;"]);

/** The raw text input. `all: unset` matches the repo's Input reset pattern. */
const InputEl = styled.input.withConfig({
  displayName: "styles__InputEl",
  componentId: "sc-ylfdk5-2"
})(["all:unset;flex:1 1 auto;min-width:30px;max-width:120px;box-sizing:border-box;color:inherit;", ";&::placeholder{color:", ";}&:disabled{cursor:not-allowed;}"], Fonts.body, Colors.black40);

/** Right-aligned cluster: spinner, clear button, dropdown toggle. */
const EndAdornments = styled.div.withConfig({
  displayName: "styles__EndAdornments",
  componentId: "sc-ylfdk5-3"
})(["display:flex;flex:0 0 auto;align-items:center;gap:2px;"]);

/** Icon-only button used for clear / toggle adornments. */
const IconButton = styled.button.withConfig({
  displayName: "styles__IconButton",
  componentId: "sc-ylfdk5-4"
})(["all:unset;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;color:", ";border-radius:2px;cursor:pointer;&:hover{color:", ";}&:focus-visible{box-shadow:0 0 0 2px ", ";}&:disabled{cursor:not-allowed;opacity:0.5;}"], Colors.black40, Colors.black800, Colors.focus);

/** Dropdown surface (rendered inside Radix Popper.Content). */
const Listbox = styled.ul.withConfig({
  displayName: "styles__Listbox",
  componentId: "sc-ylfdk5-5"
})(["margin:0;padding:4px 0;list-style:none;box-sizing:border-box;max-height:240px;overflow-y:auto;background:", ";border-radius:2px;box-shadow:0 0 0 1px ", ",0 4px 12px ", ";width:var(--radix-popper-anchor-width);min-width:var(--radix-popper-anchor-width);z-index:1000;", ";&:focus{outline:none;}"], Colors.white, Colors.black10, Colors.black10, Fonts.body);

/** A single selectable option row. */
const OptionItem = styled.li.withConfig({
  displayName: "styles__OptionItem",
  componentId: "sc-ylfdk5-6"
})(["display:flex;align-items:center;gap:6px;padding:6px 10px;color:", ";cursor:pointer;font-weight:", ";background:", ";"], Colors.black800, p => p.$selected ? 600 : 400, p => p.$highlighted ? Colors.black5 : "transparent");

/** Non-selectable informational row (loading / empty). */
const StateRow = styled.li.withConfig({
  displayName: "styles__StateRow",
  componentId: "sc-ylfdk5-7"
})(["display:flex;align-items:center;justify-content:center;gap:6px;padding:10px;color:", ";cursor:default;"], Colors.black40);

// src/compose-refs.tsx
function setRef(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef(ref, node);
      if (!hasCleanup && typeof cleanup == "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup == "function") {
            cleanup();
          } else {
            setRef(refs[i], null);
          }
        }
      };
    }
  };
}
function useComposedRefs(...refs) {
  return React.useCallback(composeRefs(...refs), refs);
}

// src/slot.tsx
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
  const Slot2 = React.forwardRef((props, forwardedRef) => {
    let { children, ...slotProps } = props;
    let slottableElement = null;
    let hasSlottable = false;
    const newChildren = [];
    if (isLazyComponent(children) && typeof use === "function") {
      children = use(children._payload);
    }
    React.Children.forEach(children, (maybeSlottable) => {
      if (isSlottable(maybeSlottable)) {
        hasSlottable = true;
        const slottable = maybeSlottable;
        let child = "child" in slottable.props ? slottable.props.child : slottable.props.children;
        if (isLazyComponent(child) && typeof use === "function") {
          child = use(child._payload);
        }
        slottableElement = getSlottableElementFromSlottable(slottable, child);
        newChildren.push(slottableElement?.props?.children);
      } else {
        newChildren.push(maybeSlottable);
      }
    });
    if (slottableElement) {
      slottableElement = React.cloneElement(slottableElement, void 0, newChildren);
    } else if (
      // A `Slottable` was found but it didn't resolve to a single element (e.g.
      // it wrapped multiple elements, text, or a render-prop `child` that
      // wasn't an element). Don't fall back to treating the `Slottable` wrapper
      // itself as the slot target — throw a descriptive error below instead.
      !hasSlottable && React.Children.count(children) === 1 && React.isValidElement(children)
    ) {
      slottableElement = children;
    }
    const slottableElementRef = slottableElement ? getElementRef(slottableElement) : void 0;
    const composedRef = useComposedRefs(forwardedRef, slottableElementRef);
    if (!slottableElement) {
      if (children || children === 0) {
        throw new Error(
          hasSlottable ? createSlottableError(ownerName) : createSlotError(ownerName)
        );
      }
      return children;
    }
    const mergedProps = mergeProps(slotProps, slottableElement.props ?? {});
    if (slottableElement.type !== React.Fragment) {
      mergedProps.ref = forwardedRef ? composedRef : slottableElementRef;
    }
    return React.cloneElement(slottableElement, mergedProps);
  });
  Slot2.displayName = `${ownerName}.Slot`;
  return Slot2;
}
var SLOTTABLE_IDENTIFIER = Symbol.for("radix.slottable");
var getSlottableElementFromSlottable = (slottable, child) => {
  if ("child" in slottable.props) {
    const child2 = slottable.props.child;
    if (!React.isValidElement(child2)) return null;
    return React.cloneElement(child2, void 0, slottable.props.children(child2.props.children));
  }
  return React.isValidElement(child) ? child : null;
};
function mergeProps(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}
function isSlottable(child) {
  return React.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
var REACT_LAZY_TYPE = Symbol.for("react.lazy");
function isLazyComponent(element) {
  return element != null && typeof element === "object" && "$$typeof" in element && element.$$typeof === REACT_LAZY_TYPE && "_payload" in element && isPromiseLike(element._payload);
}
function isPromiseLike(value) {
  return typeof value === "object" && value !== null && "then" in value;
}
var createSlotError = (ownerName) => {
  return `${ownerName} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`;
};
var createSlottableError = (ownerName) => {
  return `${ownerName} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`;
};
var use = React[" use ".trim().toString()];

// src/primitive.tsx
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Slot = createSlot(`Primitive.${node}`);
  const Node = React.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ jsx(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});

// src/use-layout-effect.tsx
var useLayoutEffect2 = globalThis?.document ? React.useLayoutEffect : () => {
};

var PORTAL_NAME = "Portal";
var Portal = React.forwardRef((props, forwardedRef) => {
  const { container: containerProp, ...portalProps } = props;
  const [mounted, setMounted] = React.useState(false);
  useLayoutEffect2(() => setMounted(true), []);
  const container = containerProp || mounted && globalThis?.document?.body;
  return container ? ReactDOM.createPortal(/* @__PURE__ */ jsx(Primitive.div, { ...portalProps, ref: forwardedRef }), container) : null;
});
Portal.displayName = PORTAL_NAME;

/**
 * Shared dropdown surface for single & multiple Autocomplete modes.
 *
 * Positioning only: rendered inside a `Radix Popper.Content` whose `Root`/`Anchor`
 * live in the parent (the input shell). Downshift remains the single source of
 * truth for open state, highlight, and ARIA — Popper just places the listbox.
 *
 * Downshift getter types are intentionally loose (`object`/`Record`) to avoid
 * threading Downshift's verbose generics through every call site.
 */

function AutocompleteListbox(props) {
  const {
    isOpen,
    items,
    highlightedIndex,
    getMenuProps,
    getItemProps,
    getOptionLabel,
    isItemSelected,
    renderOption,
    loading = false,
    loadingText = "Loading…",
    noOptionsText = "No options",
    sideOffset = 4
  } = props;

  // Only mount when open so Popper/floating-ui doesn't recompute while hidden.
  // suppressRefError silences Downshift's mount-time ref check given the
  // conditional render (the ref still attaches on the open render).
  if (!isOpen) return null;
  const menuProps = getMenuProps({}, {
    suppressRefError: true
  });
  return (
    /*#__PURE__*/
    // Portal escapes ancestor overflow:hidden / transform clipping. Downshift
    // keeps focus on the input (not the listbox), so portalling is focus-safe;
    // Popper context propagates through the portal to position against the anchor.
    React__default.createElement(Portal, {
      style: {
        position: "absolute",
        zIndex: 100000
      }
    }, /*#__PURE__*/React__default.createElement(Content, {
      side: "bottom",
      align: "start",
      sideOffset: sideOffset
    }, /*#__PURE__*/React__default.createElement(Listbox, menuProps, loading ? /*#__PURE__*/React__default.createElement(StateRow, {
      "aria-disabled": true,
      role: "presentation"
    }, /*#__PURE__*/React__default.createElement(Icons.LoadingSpinner, {
      size: 16
    }), loadingText) : items.length === 0 ? /*#__PURE__*/React__default.createElement(StateRow, {
      "aria-disabled": true,
      role: "presentation"
    }, noOptionsText) : items.map((item, index) => {
      const selected = isItemSelected ? isItemSelected(item) : false;
      const highlighted = highlightedIndex === index;
      return /*#__PURE__*/React__default.createElement(OptionItem, _extends({
        key: `${getOptionLabel(item)}-${index}`,
        $highlighted: highlighted,
        $selected: selected
      }, getItemProps({
        item,
        index
      })), renderOption ? renderOption(item, {
        selected,
        highlighted,
        index
      }) : getOptionLabel(item));
    }))))
  );
}

/**
 * Default label resolver: identity for strings, `String()` fallback otherwise.
 * Object options should supply their own `getOptionLabel`.
 */
function defaultGetOptionLabel(option) {
  if (typeof option === "string") return option;
  if (option == null) return "";
  return String(option);
}

/**
 * Build an option-equality predicate used for selected-styling and multiple-mode
 * dedupe. Precedence: reference equality → caller's `isOptionEqualToValue` →
 * label-based fallback for object options (handles the common case where a
 * controlled `value` object has a different identity than the matching option).
 * Two strings only match by reference (covers freeSolo entries).
 */
function makeOptionEquals(getOptionLabel, isOptionEqualToValue) {
  return (a, b) => {
    if (a === b) return true;
    if (typeof a === "string" || typeof b === "string") return false;
    if (isOptionEqualToValue) return isOptionEqualToValue(a, b);
    return getOptionLabel(a) === getOptionLabel(b);
  };
}

/**
 * Resolve the visible options for a given input value, honoring a caller-provided
 * `filterOptions` when present and otherwise applying a case-insensitive
 * "contains" match over each option's label.
 *
 * Async callers typically pass `filterOptions={(options) => options}` to disable
 * client-side filtering and rely on server-side results.
 */
function getFilteredOptions(params) {
  const {
    options,
    inputValue,
    getOptionLabel,
    filterOptions
  } = params;
  if (filterOptions) {
    return filterOptions(options, {
      inputValue,
      getOptionLabel
    });
  }
  const query = inputValue.trim().toLowerCase();
  if (!query) return options;
  return options.filter(option => getOptionLabel(option).toLowerCase().includes(query));
}

/**
 * Minimal controlled/uncontrolled state helper (MUI/Radix pattern).
 *
 * When `controlled` is defined the value is owned by the parent and local
 * updates are no-ops (the parent must re-render with a new value). Otherwise the
 * hook owns the state internally, seeded from `defaultValue`.
 */
function useControllableState(params) {
  const {
    controlled,
    defaultValue
  } = params;
  const isControlled = controlled !== undefined;
  const [internal, setInternal] = useState(defaultValue);
  const set = useCallback(next => {
    if (!isControlled) setInternal(next);
  }, [isControlled]);
  const value = isControlled ? controlled : internal;
  return [value, set, isControlled];
}

/**
 * Single-select Autocomplete. Downshift `useCombobox` owns open state, highlight,
 * ARIA and keyboard; this component owns the controlled/uncontrolled value + input
 * text and the freeSolo commit (Enter / blur with no highlighted option).
 *
 * `selectedItem` may be a `string` in freeSolo mode (arbitrary typed text), hence
 * the `T | string` item type throughout.
 */
function SingleAutocomplete(props) {
  const {
    options,
    freeSolo = false,
    loading = false,
    value,
    defaultValue = null,
    onChange,
    inputValue: inputValueProp,
    onInputChange,
    getOptionLabel = defaultGetOptionLabel,
    isOptionEqualToValue,
    filterOptions,
    renderOption,
    renderInput,
    disabled = false,
    placeholder,
    disableClearable = false,
    loadingText,
    noOptionsText,
    className,
    id,
    forwardedRef
  } = props;
  const [selectedItem, setSelectedItem] = useControllableState({
    controlled: value,
    defaultValue: defaultValue ?? null
  });
  const [inputValue, setInputValue] = useControllableState({
    controlled: inputValueProp,
    defaultValue: selectedItem != null ? getOptionLabel(selectedItem) : ""
  });

  // Guards against freeSolo committing the same text twice (Enter, then blur).
  // selectedItem is unreliable for this in controlled mode (setSelectedItem is a
  // no-op until the parent folds the value back), so track the raw committed text.
  const lastCommittedRef = useRef(null);
  const filtered = useMemo(() => getFilteredOptions({
    options,
    inputValue,
    getOptionLabel,
    filterOptions
  }), [options, inputValue, getOptionLabel, filterOptions]);
  const combobox = useCombobox({
    items: filtered,
    inputValue,
    selectedItem,
    itemToString: item => item == null ? "" : getOptionLabel(item),
    onInputValueChange: _ref => {
      let {
        inputValue: next,
        type
      } = _ref;
      const v = next ?? "";
      setInputValue(v);
      const isUserTyping = type === useCombobox.stateChangeTypes.InputChange;
      // Re-enable freeSolo commit once the user edits the text again.
      if (isUserTyping) lastCommittedRef.current = null;
      onInputChange?.(null, v, isUserTyping ? "input" : "reset");
    },
    onSelectedItemChange: _ref2 => {
      let {
        selectedItem: next
      } = _ref2;
      const resolved = next ?? null;
      setSelectedItem(resolved);
      if (resolved != null) setInputValue(getOptionLabel(resolved));
      onChange?.(null, resolved, "selectOption");
    }
  });
  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getToggleButtonProps,
    getItemProps,
    highlightedIndex
  } = combobox;
  const commitFreeSolo = (event, text) => {
    if (lastCommittedRef.current === text) return;
    lastCommittedRef.current = text;
    setSelectedItem(text);
    setInputValue(text);
    onChange?.(event, text, "createOption");
  };
  const handleClear = event => {
    lastCommittedRef.current = null;
    setSelectedItem(null);
    setInputValue("");
    onChange?.(event, null, "clear");
    onInputChange?.(event, "", "clear");
  };
  const handleKeyDown = event => {
    // freeSolo commit only when no option is highlighted (else Downshift selects it).
    if (event.key === "Enter" && freeSolo && combobox.highlightedIndex < 0) {
      const text = inputValue.trim();
      if (text) commitFreeSolo(event, text);
    }
  };
  const handleBlur = event => {
    if (!freeSolo) return;
    const text = inputValue.trim();
    if (text) commitFreeSolo(event, text);
  };
  const optionEquals = makeOptionEquals(getOptionLabel, isOptionEqualToValue);
  const isItemSelected = item => selectedItem != null && optionEquals(item, selectedItem);
  const showClear = !disableClearable && !disabled && (inputValue.length > 0 || selectedItem != null);
  const inputProps = getInputProps({
    ref: forwardedRef ?? undefined,
    onKeyDown: handleKeyDown,
    onBlur: handleBlur,
    disabled,
    placeholder,
    id
  });
  return /*#__PURE__*/React__default.createElement(Root2, null, /*#__PURE__*/React__default.createElement(Anchor, {
    asChild: true
  }, /*#__PURE__*/React__default.createElement(Shell, {
    $disabled: disabled,
    className: className
  }, /*#__PURE__*/React__default.createElement(ValueArea, null, renderInput ? renderInput({
    inputProps,
    disabled,
    placeholder
  }) : /*#__PURE__*/React__default.createElement(InputEl, inputProps)), /*#__PURE__*/React__default.createElement(EndAdornments, null, showClear && /*#__PURE__*/React__default.createElement(IconButton, {
    type: "button",
    "aria-label": "Clear",
    disabled: disabled,
    onClick: handleClear
  }, /*#__PURE__*/React__default.createElement(Icons.Close, {
    size: 14
  })), /*#__PURE__*/React__default.createElement(IconButton, _extends({
    type: "button",
    "aria-label": "Toggle options"
  }, getToggleButtonProps({
    disabled
  })), /*#__PURE__*/React__default.createElement(Icons.ChevronDown, {
    size: 16
  }))))), /*#__PURE__*/React__default.createElement(AutocompleteListbox, {
    isOpen: isOpen,
    items: filtered,
    highlightedIndex: highlightedIndex,
    getMenuProps: getMenuProps,
    getItemProps: getItemProps,
    getOptionLabel: getOptionLabel,
    isItemSelected: isItemSelected,
    renderOption: renderOption,
    loading: loading,
    loadingText: loadingText,
    noOptionsText: noOptionsText
  }));
}

/**
 * Removable tag used by multiple-select Autocomplete. Local component — the repo
 * has no shared Chip/Tag primitive.
 */

const ChipRoot = styled.div.withConfig({
  displayName: "autocomplete-chip__ChipRoot",
  componentId: "sc-5tnk6y-0"
})(["display:inline-flex;align-items:center;gap:4px;box-sizing:border-box;max-width:100%;padding:1px 4px 1px 6px;border-radius:2px;background:", ";color:", ";", ";"], Colors.black5, Colors.black800, Fonts.body);
const ChipLabel = styled.span.withConfig({
  displayName: "autocomplete-chip__ChipLabel",
  componentId: "sc-5tnk6y-1"
})(["overflow:hidden;white-space:nowrap;text-overflow:ellipsis;"]);
const ChipRemove = styled.button.withConfig({
  displayName: "autocomplete-chip__ChipRemove",
  componentId: "sc-5tnk6y-2"
})(["all:unset;display:inline-flex;align-items:center;color:", ";border-radius:2px;cursor:pointer;&:hover{color:", ";}&:focus-visible{box-shadow:0 0 0 2px ", ";}"], Colors.black40, Colors.black800, Colors.focus);
function AutocompleteChip(_ref) {
  let {
    label,
    onRemove,
    disabled,
    selectedItemProps
  } = _ref;
  return /*#__PURE__*/React__default.createElement(ChipRoot, selectedItemProps, /*#__PURE__*/React__default.createElement(ChipLabel, null, label), !disabled && /*#__PURE__*/React__default.createElement(ChipRemove, {
    type: "button",
    "aria-label": `Remove ${label}`,
    onClick: onRemove
  }, /*#__PURE__*/React__default.createElement(Icons.Close, {
    size: 12
  })));
}

/**
 * Multiple-select Autocomplete. Composes Downshift `useMultipleSelection`
 * (selected array, chip nav, Backspace-removes-last) with `useCombobox`
 * (filter/highlight/open). Selected values render as removable chips and are
 * excluded from the dropdown. freeSolo adds the typed string as a chip.
 */
function MultipleAutocomplete(props) {
  const {
    options,
    freeSolo = false,
    loading = false,
    value,
    defaultValue,
    onChange,
    inputValue: inputValueProp,
    onInputChange,
    getOptionLabel = defaultGetOptionLabel,
    isOptionEqualToValue,
    filterOptions,
    renderOption,
    renderInput,
    disabled = false,
    placeholder,
    limitTags,
    loadingText,
    noOptionsText,
    className,
    id,
    forwardedRef
  } = props;
  const isControlled = value !== undefined;
  const [inputValue, setInputValue] = useControllableState({
    controlled: inputValueProp,
    defaultValue: ""
  });
  const multipleSelection = useMultipleSelection({
    ...(isControlled ? {
      selectedItems: value ?? []
    } : {
      initialSelectedItems: defaultValue ?? []
    }),
    onStateChange: _ref => {
      let {
        selectedItems: next,
        type
      } = _ref;
      if (!next) return;
      const t = useMultipleSelection.stateChangeTypes;
      const isRemoval = type === t.SelectedItemKeyDownBackspace || type === t.SelectedItemKeyDownDelete || type === t.DropdownKeyDownBackspace || type === t.FunctionRemoveSelectedItem;
      onChange?.(null, next, isRemoval ? "removeOption" : "selectOption");
    }
  });
  const {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    selectedItems
  } = multipleSelection;
  const optionEquals = makeOptionEquals(getOptionLabel, isOptionEqualToValue);
  const isSelected = option => selectedItems.some(sel => optionEquals(option, sel));
  const available = useMemo(() => getFilteredOptions({
    options,
    inputValue,
    getOptionLabel,
    filterOptions
  }).filter(option => !isSelected(option)),
  // isSelected depends on selectedItems; listed explicitly.
  [options, inputValue, getOptionLabel, filterOptions, selectedItems]);
  const combobox = useCombobox({
    items: available,
    inputValue,
    selectedItem: null,
    itemToString: item => item == null ? "" : getOptionLabel(item),
    stateReducer: (state, _ref2) => {
      let {
        changes,
        type
      } = _ref2;
      switch (type) {
        // Keep menu open and highlight stable after picking an item.
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
          return {
            ...changes,
            isOpen: true,
            highlightedIndex: state.highlightedIndex
          };
        default:
          return changes;
      }
    },
    onStateChange: _ref3 => {
      let {
        inputValue: newInput,
        type,
        selectedItem: newSelected
      } = _ref3;
      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
          if (newSelected != null) {
            addSelectedItem(newSelected);
            setInputValue("");
            onInputChange?.(null, "", "reset");
          }
          break;
        case useCombobox.stateChangeTypes.InputChange:
          setInputValue(newInput ?? "");
          onInputChange?.(null, newInput ?? "", "input");
          break;
      }
    }
  });
  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getToggleButtonProps,
    getItemProps,
    highlightedIndex
  } = combobox;
  const handleFreeSolo = event => {
    if (event.key === "Enter" && freeSolo && combobox.highlightedIndex < 0) {
      const text = inputValue.trim();
      if (text) {
        addSelectedItem(text);
        setInputValue("");
        onInputChange?.(event, "", "reset");
      }
    }
  };
  const dropdownProps = getDropdownProps({
    preventKeyAction: isOpen,
    ref: forwardedRef ?? undefined
  });
  const inputProps = getInputProps({
    ...dropdownProps,
    disabled,
    id,
    placeholder: selectedItems.length === 0 ? placeholder : undefined,
    onKeyDown: event => {
      // Preserve useMultipleSelection's Backspace-removes-last, then freeSolo.
      dropdownProps.onKeyDown?.(event);
      handleFreeSolo(event);
    }
  });
  const collapse = typeof limitTags === "number" && limitTags >= 0 && limitTags < selectedItems.length;
  const visibleChips = collapse ? selectedItems.slice(0, limitTags) : selectedItems;
  const hiddenCount = selectedItems.length - visibleChips.length;
  return /*#__PURE__*/React__default.createElement(Root2, null, /*#__PURE__*/React__default.createElement(Anchor, {
    asChild: true
  }, /*#__PURE__*/React__default.createElement(Shell, {
    $disabled: disabled,
    className: className
  }, /*#__PURE__*/React__default.createElement(ValueArea, null, visibleChips.map((item, index) => /*#__PURE__*/React__default.createElement(AutocompleteChip, {
    key: `${getOptionLabel(item)}-${index}`,
    label: getOptionLabel(item),
    disabled: disabled,
    selectedItemProps: getSelectedItemProps({
      selectedItem: item,
      index
    }),
    onRemove: event => {
      event.stopPropagation();
      removeSelectedItem(item);
    }
  })), hiddenCount > 0 && /*#__PURE__*/React__default.createElement("span", null, `+${hiddenCount}`), renderInput ? renderInput({
    inputProps,
    disabled,
    placeholder
  }) : /*#__PURE__*/React__default.createElement(InputEl, inputProps)), /*#__PURE__*/React__default.createElement(EndAdornments, null, /*#__PURE__*/React__default.createElement(IconButton, _extends({
    type: "button",
    "aria-label": "Toggle options"
  }, getToggleButtonProps({
    disabled
  })), /*#__PURE__*/React__default.createElement(Icons.ChevronDown, {
    size: 16
  }))))), /*#__PURE__*/React__default.createElement(AutocompleteListbox, {
    isOpen: isOpen,
    items: available,
    highlightedIndex: highlightedIndex,
    getMenuProps: getMenuProps,
    getItemProps: getItemProps,
    getOptionLabel: getOptionLabel,
    renderOption: renderOption,
    loading: loading,
    loadingText: loadingText,
    noOptionsText: noOptionsText
  }));
}

/**
 * MUI-like Autocomplete. Headless interaction via Downshift, positioning via
 * Radix Popper, styling via styled-components.
 *
 * Routes to a dedicated single- or multiple-select implementation based on the
 * `multiple` prop so each path can call its own Downshift hooks unconditionally
 * (rules-of-hooks) and stay under the repo's file-size cap.
 */
function AutocompleteInner(props, ref) {
  if (props.multiple) {
    return /*#__PURE__*/React__default.createElement(MultipleAutocomplete, _extends({}, props, {
      forwardedRef: ref
    }));
  }
  return /*#__PURE__*/React__default.createElement(SingleAutocomplete, _extends({}, props, {
    forwardedRef: ref
  }));
}

/**
 * `forwardRef` + generics can't be expressed directly, so we cast the wrapped
 * component back to a generic callable (same approach MUI uses). The forwarded
 * ref targets the underlying `<input>`.
 */
const Autocomplete = /*#__PURE__*/forwardRef(AutocompleteInner);

export { Autocomplete };
