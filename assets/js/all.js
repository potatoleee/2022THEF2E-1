"use strict";

gsap.registerPlugin(ScrollTrigger, TextPlugin); //套件選填

var timeline = gsap.timeline();
timeline.to('.box', {
  x: 100,
  duration: 1
});
timeline.to('.box', {
  y: 100,
  duration: 4
}, "<");
var timeline2 = gsap.timeline();
timeline2.to('.box5', {
  x: 100,
  duration: 1
}).to('.box6', {
  x: 100,
  duration: 2
}, "<");
gsap.to(".loop", {
  xPercent: "-50",
  ease: "none",
  duration: 10,
  repeat: -1
});
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".box1",
    // 決定scrolltrigger要以哪一個元素作為觸發基準點
    markers: true,
    // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
    start: 'top 35%',
    // 決定動畫開始點的位置
    end: 'top 1%',
    // 決定動畫結束點的位置
    scrub: true //重要！開啟scrub來決定動畫播放是否依賴視窗滾動

  }
}); // 撰寫動畫屬性的感覺其實類似於在寫一般CSS

tl.to('.box1', {
  //第一段
  top: 0,
  // 距外層容器top 0px
  left: '50%',
  // 距外層容器left 50%
  xPercent: '-50',
  // translate(-50%, 0)
  duration: 10,
  // 動畫持續時間之比例
  position: 'absolute' // position: 'absolute'，絕對位置才能使用left, right...等

}).to('.box1', {
  //第二段
  top: '100%',
  yPercent: '-100',
  // translate(0, -100%)
  duration: 20,
  position: 'absolute'
});
var srollTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".section3",
    pin: true,
    //重要！ pin需設為true
    markers: true,
    scrub: true
  }
});
srollTL.to(".gate-left-1", {
  yPercent: "-100"
});
srollTL.to(".gate-right-1", {
  yPercent: "100"
}, "<");
srollTL.to(".gate-left-2", {
  yPercent: "-100"
});
srollTL.to(".gate-right-2", {
  yPercent: "100"
}, "<");
gsap.fromTo(".cursor", 0, {
  visibility: "hidden"
}, {
  visibility: "visible",
  repeat: -1,
  yoyo: true,
  repeatDelay: 0.3
});

function hide(element) {
  gsap.set(element, {
    opacity: 0,
    visibility: "hidden"
  });
}

function animated(element) {
  var x = 0; //依照條件設定x初始值

  if (element.classList.contains("from-left")) {
    x = -100;
  } else if (element.classList.contains("from-right")) {
    x = 100;
  } //設定元素初始值


  element.style.transform = "translate(".concat(x, "px, 0px)");
  gsap.fromTo(element, {
    x: x,
    y: 0,
    opacity: 0,
    visibility: "hidden"
  }, {
    duration: 1,
    delay: 0.2,
    x: 0,
    y: 0,
    visibility: "visible",
    opacity: "1",
    ease: "expo",
    overwrite: "auto"
  });
}

gsap.utils.toArray(".animation-wrapper").forEach(function (element) {
  if (element.classList.contains("from-left") || element.classList.contains("from-right")) {
    hide(element);
    ScrollTrigger.create({
      trigger: element,
      markers: true,
      onEnter: function onEnter() {
        animated(element);
      },
      onEnterBack: function onEnterBack() {
        animated(element);
      },
      onLeave: function onLeave() {
        hide(element);
      }
    });
  } else if (element.classList.contains("typing")) {
    var typing1Content = "這裡是第一段";
    var typing2Content = "這裡是第二段";
    var typing3Content = "這裡是第三段";
    gsap.to(".typing1", {
      text: typing1Content,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".typing1",
        toggleActions: "play pause resume reset"
      }
    });
    gsap.to(".typing2", {
      text: typing2Content,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".typing2",
        toggleActions: "play pause resume reset"
      }
    });
    gsap.to(".typing3", {
      text: typing3Content,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".typing3",
        toggleActions: "play pause resume reset"
      }
    });
  }
}); // function animated(element) {
//   let x = 0;
//   //設定元素初始值
//   if(element.classList.contains("from-left")){
//     x = -100;
//   }else if (element.classList.contains("from-right")){
//     x = -100;
//   }
//   element.style.transform = `translate(${x}px, 0px)`;
//   gsap.fromTo(
//     element,
//     // from 開始
//     { x: x, y: 100, opacity: 0, visibility: "hidden" },
//     // to 結束
//     {
//       duration: 1,
//       delay: 0.2,
//       x: 0,
//       y: 0,
//       visibility: "visible",
//       opacity: "1",
//       ease: "expo", // 元素的運動速度變化
//       overwrite: "auto",
//     }
//   );
// }
// function hide(element) {
//   gsap.set(element, { opacity: 0, visibility: "hidden" });
// }
// gsap.to(".typing1", {
//   text: "這裡是第一段", //text屬性將自動為DOM元素嵌入我們所輸入的文字
//   duration: 1.5,
//   scrollTrigger: {
// 		trigger: ".typing1",
//     toggleActions: "play pause resume reset ", //見備註
//   },
// });
// gsap.fromTo(".cursor",0,
// {
//   visibility :"hidden",
// },
// {
//   visibility : "visible",
//   repeat : -1,
//   yoyo : true,  // 若為true，則動畫repeat運行順序將會以倒放的形式回去，如溜溜球一樣
//   repeatDelay : 0.3,  // 下一次repeat的delay時間
// }
// );
// 3D tilt Effect with Vanilla-Tilt.js

VanillaTilt.init();
VanillaTilt.init(document.querySelector(".image1"), {
  max: 25,
  scale: 1.1,
  speed: 1000
});
VanillaTilt.init(document.querySelector(".image2"), {
  max: 25,
  scale: 1.1,
  speed: 1000
});
VanillaTilt.init(document.querySelector(".image3"), {
  max: 25,
  scale: 1.1,
  speed: 1000
});
//# sourceMappingURL=all.js.map
