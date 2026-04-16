import { _ as _extends } from './_rollupPluginBabelHelpers-c245b26a.js';
import React__default from 'react';
import Select from 'react-select';
import { F as Fonts } from './fonts-84085e3a.js';
import { C as Colors } from './colors-b56a153c.js';
import { Icons } from './icons.js';
import 'styled-components';

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
  return /*#__PURE__*/React__default.createElement("div", {
    style: {
      padding: "0px 3px"
    }
  }, /*#__PURE__*/React__default.createElement(Icons.ChevronDown, {
    size: 16
  }));
}
function ClearIndicator(props) {
  return /*#__PURE__*/React__default.createElement("div", _extends({}, props.innerProps, {
    style: {
      padding: "0px 6px"
    }
  }), /*#__PURE__*/React__default.createElement(Icons.Close, {
    size: 12
  }));
}

// export type MutliSelectProps = {
//   value: string,
//   options:
// }

function MultiSelect() {
  return /*#__PURE__*/React__default.createElement(Select, {
    options: options,
    isMulti: true,
    styles: {
      // @ts-ignore
      container: (baseStyles, state) => ({
        ...baseStyles,
        ...Fonts.body
      }),
      // @ts-ignore
      control: (baseStyles, state) => {
        return {
          ...baseStyles,
          borderWidth: 0,
          borderRadius: 2,
          boxShadow: state.isFocused ? `0 0 0 2px ${Colors.focus}` : `0 0 0 1px ${Colors.black10}`,
          "&:hover": {
            borderColor: Colors.black20
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

export { MultiSelect };
