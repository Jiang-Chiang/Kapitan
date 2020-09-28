// 手機達到Hover效果
// $(function () {
//     $(".inner a").attr('ontouchstart', 'hover(this)');//hover效果
//     $(".inner a").attr('ontouchend', 'mouseout(this)');//秒除hover
// })
// function mouseout(obj) {
//  var className = "hover";
//  var _ecname = obj.className;
//  if (_ecname.length == 0) return;
//  if (_ecname == className) {
//   obj.className = "";return;
//  }
//  if (_ecname.match(new RegExp("(^|\\s)" + className + "(\\s|$)")))
//   obj.className = _ecname.replace((new RegExp("(^|\\s)" + className + "(\\s|$)")), " ");
// }
// function hover(obj) {
//  if (!obj) return;
//  var className = "hover"
//  var _ecname = obj.className;
//  if (_ecname.length == 0) {
//   obj.className = className;return;
//  }
//  if (_ecname == className || _ecname.match(new RegExp("(^|\\s)" + className + "(\\s|$)")))
//   return;
//  obj.className = _ecname + " " + className;
// };

//scrollmagic動畫區間開始
// var controller = new ScrollMagic.Controller();

$(document).ready(function(){
  var controller = new ScrollMagic.Controller();

  var mv01 = TweenMax.fromTo('.mg', 1, {
    y: 100,
    opacity: 0
  }, {
    y: 0,
    opacity: 1
  });

  var mv02 = TweenMax.fromTo('.mg1', 1, {
    x: -300,
    opacity: 0
  }, {
    x: 0,
    opacity: 1
  });

  var mv03 = TweenMax.fromTo('.mg2', 1, {
    x: 0,
    opacity: 0
  }, {
    x: 200,
    opacity: 1
  });

  var scene01 = new ScrollMagic.Scene({
    triggerElement: '#point1',
    triggerHook: 0,
    offset: -300
  }).setTween(mv01).addIndicators().addTo(controller)

  var scene02 = new ScrollMagic.Scene({
    triggerElement: '#point2',
    triggerHook: 0,
    offset: -300
  }).setTween(mv02).addIndicators().addTo(controller)

  // var scene03 = new ScrollMagic.Scene({
  //   triggerElement: '#point2',
  //   triggerHook: 0,
  //   offset: -300
  // }).setTween(mv03).addIndicators().addTo(controller)

});



 

