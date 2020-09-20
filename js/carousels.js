// 首頁置頂輪播大BN
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

//首頁船艇輪播中BN
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

//首頁引言輪播小BN
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
  
//分頁置頂輪播中BN
$(document).ready(function() {
    $('#middle_banner_block').lightSlider({
        adaptiveHeight:true,
        item:1,
        slideMargin:0,
        loop:true
    });
});