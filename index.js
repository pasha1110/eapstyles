// eapstyles - because creative is you
// created by erlanggaabdeepasha@gmail.com
// 2 march 2021
//!  DO NOT COPY PASTE IT'S ILLEGAL!

const version = require("./package.json").version;
const { yellow, modifier } = require("ansi-styles");
const style = require("ansi-styles");

// Color object
const Color = {
  // show version of the current version
  version: version,

  // "to show all color"
  allSupportCollor: [
    "red",
    "yellow",
    "green",
    "blue",
    "magenta",
    "black",
    "white",
    "gray",
    "cyan",
  ],

  // color method
  red: function (...text) {
    result = text.toString();
    return style.red.open + result + style.red.close;
  },

  green: function (...text) {
    result = text.toString();
    return style.green.open + result + style.green.close;
  },
  blue: function (...text) {
    result = text.toString();
    return style.blue.open + result + style.blue.close;
  },
  magenta: function (...text) {
    result = text.toString();
    return style.magenta.open + result + style.magenta.close;
  },
  yellow: function (...text) {
    result = text.toString();
    return style.yellow.open + result + style.yellow.close;
  },
  black: function (...text) {
    result = text.toString();
    return style.black.open + result + style.black.close;
  },
  cyan: function (...text) {
    result = text.toString();
    return style.cyan.open + result + style.cyan.close;
  },
  white: function (...text) {
    result = text.toString();
    return style.white.open + result + style.white.close;
  },
  gray: function (...text) {
    result = text.toString();
    return modifier.gray.open + result + modifier.gray.close;
  },
};

// font object
const Font = {
  version: version,
  allSupportCollor: ["italic", "bold", "underline", "dim"],
  italic: function (...text) {
    result = text.toString();
    return style.italic.open + result + style.italic.close;
  },
  bold: function (...text) {
    result = text.toString();
    return style.bold.open + result + style.bold.close;
  },
  underline: function (...text) {
    result = text.toString();
    return style.underline.open + result + style.underline.close;
  },
  dim: function (...text) {
    result = text.toString();
    return style.dim.open + result + style.dim.close;
  },
};

// for background color
const Bg = {
  red: function (...text) {
    result = text.toString();
    return style.bgRed.open + result + style.bgRed.close;
  },

  green: function (...text) {
    result = text.toString();
    return style.bgGreen.open + result + style.bgGreen.close;
  },
  blue: function (...text) {
    result = text.toString();
    return style.bgBlue.open + result + style.bgBlue.close;
  },
  magenta: function (...text) {
    result = text.toString();
    return style.bgMagenta.open + result + style.bgMagenta.close;
  },
  yellow: function (...text) {
    result = text.toString();
    return style.bgYellow.open + result + style.bgYellow.close;
  },
  black: function (...text) {
    result = text.toString();
    return style.bgBlack.open + result + style.bgBlack.close;
  },
  cyan: function (...text) {
    result = text.toString();
    return style.bgCyan.open + result + style.bgCyan.close;
  },
  white: function (...text) {
    result = text.toString();
    return style.bgWhite.open + result + style.bgWhite.close;
  },
};

console.log(Font.italic("halo"));

module.exports.Color = Color;
module.exports.Font = Font;
module.exports.Bg = Bg;
//* made with LOVE and write in javascript
