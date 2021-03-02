# eapstyles

_because creative is you_

## Introduction

Hello programmers, this package is to help you create interactive command line

with just 5kb!(may change at any time) You can build an interactive, elegant, and powerfull commandline, of course

this package is inspired by `ansi-styles`, with a few changes we changed the writing style to make it easier and more elegant, of course

this package is recomended to use with eapcase

**note** this package is under `MIT` lisence

## Installation

Before starting to use this package must be installed first using the command below

> npm install --global eapstyles

**note** --global flags to install globally, remove --global if you don't want install globaly

## Fast documentation

### Usage

import eapstyles using `require ("eapstyles")`

example:

```javascript
const { Color, Font, Bg } = require("eapstyles");

// for color example

console.log(Color.green("Success!"));

// for Font example

console.log(Font.underline("Success!"));

// for Bg(background color) example

console.log(Bg.magenta("Success!"));

// for see other color, font, and Bg method ru this

console.dir(Color);

console.log("");

console.dir(Font);

console.log("");

console.dir(Bg);
```

### Color and background color support

| color  | version |
| ------ | ------- |
| green  | 1.1.5   |
| white  | 1.1.5   |
| yellow | 1.1.5   |
| green  | 1.1.5   |
| black  | 1.1.5   |
| gray   | 1.1.5   |
| cyan   | 1.1.5   |

### Font support

| font      | version |
| --------- | ------- |
| italic    | 1.1.5   |
| dim       | 1.1.5   |
| underline | 1.1.5   |
| bold      | 1.1.5   |

### Tips

1. Use {} at import this package

   example:
   `const { Color, Font, Bg } = require("eapstyles");`

2. Give your project comment

3. If you are using VS code(visual studio code) install prettier code formatter extension

## Consclusion

So that was the documentation for eapstyles, a tool to give command line color. The next update will include more Color, font, or background color, so wait for the next update, ok!.

So good-bye, and don't forget the semicolon, bye bye!

_made with LOVE and write in javascript_ ~ erlangga
