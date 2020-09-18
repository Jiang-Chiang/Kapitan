$(document).ready(function() {
    $('#large_banner_list').lightSlider({
        adaptiveHeight:true,
        item:1,
        slideMargin:0,
        loop:true
    });
});

$(document).ready(function() {
    $('#yachts_list').lightSlider({
        item:3,
        auto:true,
        loop:true,
        pauseOnHover:true,
        slideMove:1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:1000,
        controls:false,
        pager:false,
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
                breakpoint:480,
                settings: {
                    item:2,
                    slideMove:1
                  }
            }
        ]
    });  
  });