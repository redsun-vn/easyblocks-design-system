'use strict';

var toast = require('react-hot-toast');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var toast__default = /*#__PURE__*/_interopDefaultLegacy(toast);

const mainFont = `"Roboto,sans-serif",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`;
const fontVariationSettings = `'opsz' 21`;
const Fonts = {
  bodyLarge: {
    fontFamily: mainFont,
    fontVariationSettings,
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 1.2
  },
  body: {
    fontFamily: mainFont,
    fontVariationSettings,
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 1.15
  },
  body4: {
    fontFamily: mainFont,
    fontVariationSettings,
    fontSize: 11,
    fontWeight: 400,
    lineHeight: 1.15
  },
  label: {
    fontFamily: mainFont,
    fontVariationSettings,
    fontSize: 12,
    fontWeight: 600,
    lineHeight: 1.15
  },
  label2: {
    fontFamily: mainFont,
    fontVariationSettings,
    fontSize: 10,
    fontWeight: 600,
    lineHeight: 1.15
  },
  label3: {
    fontFamily: mainFont,
    fontVariationSettings,
    fontSize: 9,
    fontWeight: 600,
    letterSpacing: "0.05em",
    lineHeight: 1.15
  }
};

function useToaster() {
  const style = {
    borderRadius: "4px",
    ...Fonts.body
  };
  return {
    notify: message => {
      toast__default["default"](message, {
        style
      });
    },
    success: function (message) {
      let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      toast__default["default"].success(message, {
        style,
        duration: options.duration
      });
    },
    error: message => {
      toast__default["default"].error(message, {
        style
      });
    }
  };
}

exports.Fonts = Fonts;
exports.useToaster = useToaster;
