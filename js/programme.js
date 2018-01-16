/**
 * Created by Administrator on 2017/9/29.
 */
$(function () {
    var style=$('.li_style');
    var link=$('.li_style').next('a');
    link.click(function () {
        link.css({color:'#666666'})
        style.css({opacity:0});
        $(this).css({color:'#2277e6'}).prev('.li_style').css({opacity:1});
    })
})