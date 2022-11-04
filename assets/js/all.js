"use strict";

// import { gsap } from "../../../gsap/dist/gsap";
// import { ScrollTrigger } from "../../../gsap/dist/ScrollTrigger";
// import { TextPlugin } from "../../../gsap/dist/TextPlugin";
// import { gsap, ScrollTrigger, TextPlugin } from "../../node_modules/gsap/all.js";
// const { gsap } = require("../../../node_modules/gsap/dist/gsap");
// const { ScrollTrigger } = require("../../../node_modules/gsap/dist/ScrollTrigger");
// const { TextPlugin } = require("../../../node_modules/gsap/dist/TextPlugin");
// import { gsap, ScrollTrigger, TextPlugin } from "../../../node_modules/gsap/all.js";
// 上面那些都不需要
gsap.registerPlugin(ScrollTrigger, TextPlugin);
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".box1",
    markers: true,
    start: 'top 35%',
    end: 'top 1%',
    scrub: true
  }
});
tl.to('.box1', {
  top: 0,
  left: '50%',
  xPercent: '-50',
  // duration: 10,
  position: 'absolute'
}).to('.box1', {
  top: '100%',
  yPercent: '-100',
  // duration: 20,
  position: 'absolute'
});
//# sourceMappingURL=all.js.map
