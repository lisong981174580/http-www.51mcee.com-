/**
 * Created by Administrator on 2017/9/18.
 */
$(function () {
    /*导航下拉菜单js效果*/
    var  navlist=document.querySelectorAll('nav>.index-nav>li');
    var drop=document.querySelectorAll('.drop');
    var nav=document.querySelector('nav');
    var li_child=document.querySelectorAll('.drop ol>li');

    $.each(li_child,function (index,value) {

        value.onmouseenter=function () {
            $(value).find('.img').css({display:'none'});
            $(value).find('.hover-img').css({display:'block'});
        }

        value.onmouseleave=function () {
            $(value).find('.img').css({display:'block'});
            $(value).find('.hover-img').css({display:'none'});
        }

    })

    $.each(navlist,function (index,value) {
        value.onmouseenter=function () {

            nav.style.background="#1e2339";
            nav.style.borderTop="1px solid #0d1039";
            value.style.background='#171b2b';
            if(drop[index].children.length!=0){
                $(drop[index]).show(0.3);
            }
        }

        value.onmouseleave=function () {
            nav.style.background="#0d1039";
            nav.style.borderTop=0;
            value.style.background='none';
            $(drop[index]).hide();
        }
    })

    /*回到顶部js*/
    /*回到顶部*/
    var r_top=$('.top');
    $(window).scroll( function() {
        /*滚动条滚动的距离*/
        var sTop=document.body.scrollTop;
        if(sTop>=800) {
            r_top.css({display: 'block'})
        }else{
            r_top.css({display:'none'})
        }

    })

})