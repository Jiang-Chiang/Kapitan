// 手機達到Hover效果
$(function () {
  $(".inner a").attr('ontouchstart', 'hover(this)');//hover效果
  $(".inner a").attr('ontouchend', 'mouseout(this)');//秒除hover
})
function mouseout(obj) {
  var className = "hover";
  var _ecname = obj.className;
  if (_ecname.length == 0) return;
  if (_ecname == className) {
    obj.className = ""; return;
  }
  if (_ecname.match(new RegExp("(^|\\s)" + className + "(\\s|$)")))
    obj.className = _ecname.replace((new RegExp("(^|\\s)" + className + "(\\s|$)")), " ");
}
function hover(obj) {
  if (!obj) return;
  var className = "hover"
  var _ecname = obj.className;
  if (_ecname.length == 0) {
    obj.className = className; return;
  }
  if (_ecname == className || _ecname.match(new RegExp("(^|\\s)" + className + "(\\s|$)")))
    return;
  obj.className = _ecname + " " + className;
};

//scrollmagic動畫區間開始
$(document).ready(function () {
  var controller = new ScrollMagic.Controller();

  var mv01 = TweenMax.fromTo('.mg', 1, {
    y: 200,
    opacity: 0
  }, {
    y: 0,
    opacity: 1
  });

  var mv02 = TweenMax.fromTo('.mg1', 1, {
    x: -300,
    // opacity: 0,
    display: 'none'
  }, {
    x: 0,
    // opacity: 1
    display: 'block'
  });

  var mv03 = TweenMax.fromTo('.mg2', 1, {
    x: 300,
    // opacity: 0
    display: 'none'
  }, {
    x: 0,
    // opacity: 1
    display: 'block'
  });

  var mv04 = TweenMax.fromTo('.mg3', 1, {
    x: -300,
    // opacity: 0,
    display: 'none'
  }, {
    x: 0,
    // opacity: 1,
    display: 'block',
    delay: 0.4
  });

  var mv05 = TweenMax.fromTo('.mg4', 1, {
    x: 300,
    // opacity: 0
    display: 'none'
  }, {
    x: 0,
    // opacity: 1,
    display: 'block',
    delay: 0.4
  });

  var scene01 = new ScrollMagic.Scene({
    triggerElement: '#point1',
    triggerHook: 0,
    offset: -400
  }).setTween(mv01).addTo(controller)

  var scene02 = new ScrollMagic.Scene({
    triggerElement: '#point2',
    triggerHook: 0,
    offset: -400
  }).setTween(mv02).addTo(controller)

  var scene03 = new ScrollMagic.Scene({
    triggerElement: '#point2',
    triggerHook: 0,
    offset: -400,
  }).setTween(mv03).addTo(controller)

  var scene04 = new ScrollMagic.Scene({
    triggerElement: '#point2',
    triggerHook: 0,
    offset: -400
  }).setTween(mv04).addTo(controller)

  var scene04 = new ScrollMagic.Scene({
    triggerElement: '#point2',
    triggerHook: 0,
    offset: -400
  }).setTween(mv05).addTo(controller)

});





