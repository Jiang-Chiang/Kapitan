// 輪播大BN：置頂
$(document).ready(function() {
    $('#large_banner_list').lightSlider({
        item:1,
        auto:true,
        loop:true,
        pauseOnHover:true,
        slideMove:1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:1500,
        responsive : [
            {
                breakpoint:1199,
                settings: {
                    item:1,
                    slideMove:1,
                    slideMargin:0,
                  }
            },
            {
                breakpoint:767,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
    });  
  });

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
  obj.className = "";return;
 }
 if (_ecname.match(new RegExp("(^|\\s)" + className + "(\\s|$)")))
  obj.className = _ecname.replace((new RegExp("(^|\\s)" + className + "(\\s|$)")), " ");
}
function hover(obj) {
 if (!obj) return;
 var className = "hover"
 var _ecname = obj.className;
 if (_ecname.length == 0) {
  obj.className = className;return;
 }
 if (_ecname == className || _ecname.match(new RegExp("(^|\\s)" + className + "(\\s|$)")))
  return;
 obj.className = _ecname + " " + className;
}

// 輪播中BN：船艇
$(document).ready(function() {
    $('#yachts_list').lightSlider({
        item:3,
        auto:true,
        loop:true,
        pauseOnHover:true,
        slideMove:1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:1500,
        controls:false,
        pager:false,
        responsive : [
            {
                breakpoint:1199,
                settings: {
                    item:1,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:767,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
    });  
  });

// 輪播小BN：引言
$(document).ready(function() {
    $('#prologue_img_list').lightSlider({
        item:1,
        auto:true,
        loop:true,
        pauseOnHover:true,
        slideMove:1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:1500,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:768,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
    });  
  });
  