"use strict";function parseQueryString(e){if(-1===(e=e||window.location.href).indexOf("?"))return{};if(""===(r="?"===e[0]?e.substr(1):e.substring(e.lastIndexOf("?")+1)))return{};for(var r=r.split("&"),t={},n=0;n<r.length;n++){var o=r[n].split("=");t[decodeURIComponent(o[0])]=decodeURIComponent(o[1]||"")}return t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=parseQueryString;