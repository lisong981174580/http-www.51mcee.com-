/**
 * Created by Administrator on 2017/9/12.
 */

$(function () {
    /*解决方案处js效果*/
    var li=document.querySelectorAll('.programme-box  li');
    var  mask=document.querySelectorAll('.mask-content');
    var  hover=document.querySelectorAll('.hover');

    $.each(mask,function (index,value) {

        $(value).mouseenter(function () {
            hover[index].style.height="100%";
            value.style.display='none'
        })

        $(li[index]).mouseleave(function () {
            hover[index].style.height="0";
            value.style.display='block';
        })


    })


    /*行业痛点处文字轮播*/
   var pain_list=$('.pain .content  .text-box li ');
   var now=next=0;
   setInterval(function () {
       next++;
       if(next==pain_list.length){
           next=0;
       }
       pain_list.eq(now).animate({left:'-100%'});
       pain_list.eq(next).css({left:'100%'}).animate({left:0},1000,function () {
           now=next;
       })
   },4000)



    /*服务处js*/
    var server_li=$('.server main .product-box li')
    server_li.mouseenter(function () {
        server_li.removeClass('active');
       $(this).addClass('active');
    })

})

