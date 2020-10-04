// 回到頂端
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});

// tab頁籤
$(function () {
    var $tabPanel = $('#tab_panel'),
        $tabs = $tabPanel.find('.tabs'),
        $tab = $tabs.find('a'),
        $tabContent = $tabPanel.find('.tabs_content'),
        $content = $tabContent.find('> li');

    $tab.eq(0).addClass('active');
    $content.eq(0).show();

    $tab.on('click', function () {
        var $tabIndex = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $content.eq($tabIndex).show().siblings().hide();
    });
});