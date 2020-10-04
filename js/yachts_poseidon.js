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
        $(this).find('div.tab_btn').addClass('_present').parent('a').siblings().find('div.tab_btn').removeClass('_present');
        $(this).find('img.selected_icon').show().siblings('img.normal_icon').hide().parents('a').siblings().find('img.normal_icon').show().siblings('img.selected_icon').hide();
        $content.eq($tabIndex).show().siblings().hide();
    });
});