"use strict";function windowResize(n,i){var o=window.innerHeight;n="function"==typeof n?n:function(){},i="function"==typeof i?i:function(){},window.addEventListener("resize",function(){var e=window.innerHeight;e===o&&n(),e<o&&i()})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.windowResize=windowResize;