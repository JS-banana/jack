"use strict";function timeLeft(e,t){var o,a,r;if(e&&t)return o=void 0,o=e instanceof Date?e:new Date(e.replace(/-/g,"/")),e=(t instanceof Date?t:new Date(t.replace(/-/g,"/"))).getTime()-o.getTime(),t=0,o=0,a=0,r=0,0<=e&&(t=Math.floor(e/1e3/3600/24),o=Math.floor(e/1e3/60/60%24),a=Math.floor(e/1e3/60%60),r=Math.floor(e/1e3%60)),{d:t,h:o,m:a,s:r}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=timeLeft;