function animateLogo() {
  TweenMax.fromTo('#logo', 2, {
    css: {
      y: '20px',
    }
  }, {
    css: {
      y: '-20px',
    },
    repeat: -1,
    yoyo: true,
    ease: Power2.easeInOut
  })
}

function animateRobot() {
  var t = new TimelineMax({yoyo: true, repeat: -1});
  t.to("#android-robot", 0.5, {rotation: '-50deg'})
    .to('#android-robot', 0.5, {rotation: '-30deg'});
}

function updateSliderControl() {
  // 获得所有的 slider 链接
  var links = document.querySelectorAll("#slider-control a");

  for(var i = 0; i < links.length; i++) {
    var link = links[i];

    // 获取被链接指向的部分
    var section = document.querySelector(link.hash);
    var sectionTop = section.offsetTop;
    var sectionBottom = section.offsetHeight + sectionTop;

    // 检查 window.scrollY 是否在这部分中
    if(window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      link.className = "active";
    } else {
      link.className = "";
    }
  }
}

function scrollToElement(element) {
  var topOfElement = element.offsetTop;
  TweenMax.to(window,1,{
    scrollTo: {
      y: topOfElement,
    },
    ease: Power2.easeInOut,
  });
}

function addSmoothScrolling() {
  var links = document.querySelectorAll("#slider-control a");
  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    link.addEventListener("click",function(event) {
      event.preventDefault();
      var el = document.querySelector(this.hash)
      scrollToElement(el);
    });
  }
}

// 当页面加载完毕时开始动画。
window.onload = function() {
  animateLogo();
  animateRobot();
  updateSliderControl();
  addSmoothScrolling();
};

// 使用 onscroll 回调函数来更新 slider
window.onscroll = function() {
  updateSliderControl();
}
