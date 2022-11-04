"use strict";

// import { gsap } from "../../../gsap/dist/gsap";
// import { ScrollTrigger } from "../../../gsap/dist/ScrollTrigger";
// import { TextPlugin } from "../../../gsap/dist/TextPlugin";
// import { gsap, ScrollTrigger, TextPlugin } from "../../node_modules/gsap/all.js";
// const { gsap } = require("../../../node_modules/gsap/dist/gsap");
// const { ScrollTrigger } = require("../../../node_modules/gsap/dist/ScrollTrigger");
// const { TextPlugin } = require("../../../node_modules/gsap/dist/TextPlugin");
// import { gsap, ScrollTrigger, TextPlugin } from "../../../node_modules/gsap/all.js";
//上面那些官方建議的import方式都不需要了，我想是因為加上這段的原因 `${nodePath}/gsap/dist/all.js`
//但如果有增加 gsap 其他的套件一樣要新增這段註冊，也不需要加上 type="module"; 但我目前還不知道真正原因，自己測試出來的，助教沒解釋道這部分。
gsap.registerPlugin(ScrollTrigger, TextPlugin); //套件選填

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
