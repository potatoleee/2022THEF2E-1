"use strict";

// const { gsap } = require("../../../node_modules/gsap/dist/gsap");
// const { ScrollTrigger } = require("../../../node_modules/gsap/dist/ScrollTrigger");
// const { TextPlugin } = require("../../../node_modules/gsap/dist/TextPlugin");
// gsap.registerPlugin(ScrollTrigger, TextPlugin);
var _require = require("../node_modules/gsap/dist/gsap"),
    gsap = _require.gsap;

var _require2 = require("../node_modules/gsap/dist/ScrollTrigger"),
    ScrollTrigger = _require2.ScrollTrigger;

var _require3 = require("../node_modules/gsap/dist/TextPlugin"),
    TextPlugin = _require3.TextPlugin;

gsap.registerPlugin(ScrollTrigger, TextPlugin);
gsap.to('.cursor', {
  opacity: 0,
  duration: 1,
  repeat: -1
});
//# sourceMappingURL=all.js.map
