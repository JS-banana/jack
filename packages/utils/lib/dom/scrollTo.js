"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.scrollTo=scrollTo;var getScrollTop=require("./getScrollTop"),setScrollTop=require("./setScrollTop"),requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(o){window.setTimeout(o,1e3/60)};function scrollTo(o,e){var r,l;e<0?setScrollTop(o):0!=(r=o-getScrollTop())&&(l=r/e*10,requestAnimFrame(function(){Math.abs(l)>Math.abs(r)?setScrollTop(getScrollTop()+r):(setScrollTop(getScrollTop()+l),0<r&&getScrollTop()>=o||r<0&&getScrollTop()<=o||scrollTo(o,e-16))}))}