// const { gsap } = require("../../../node_modules/gsap/dist/gsap");
// const { ScrollTrigger } = require("../../../node_modules/gsap/dist/ScrollTrigger");
// const { TextPlugin } = require("../../../node_modules/gsap/dist/TextPlugin");

// gsap.registerPlugin(ScrollTrigger, TextPlugin);

const { gsap } = require("../node_modules/gsap/dist/gsap");
const { ScrollTrigger } = require("../node_modules/gsap/dist/ScrollTrigger");
const { TextPlugin } = require("../node_modules/gsap/dist/TextPlugin");
gsap.registerPlugin(ScrollTrigger, TextPlugin);
gsap.to('.cursor', {opacity:0, duration:1, repeat: -1})