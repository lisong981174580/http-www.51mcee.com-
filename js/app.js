/**
 * Created by Administrator on 2017/9/15.
 */
$(function () {
    var ios_btn=$('.ios-bottom');
    var android_btn=$('.android-bottom');
    var alert_ios=$('.alert-ios');
    var alert_android=$('.alert-android');

    var cancel_ios=$('.cancel_ios');
    var cancel_android=$('.cancel_android')

     ios_btn.click(function () {
         alert_ios.css({display:'block'})
     })
    cancel_ios.click(function () {
        alert_ios.css({display:'none'})
    })
    android_btn.click(function () {
        alert_android.css({display:'block'})
    })
    cancel_android.click(function () {
        alert_android.css({display:'none'})
    })


    /*app页面导航*/
    /*导航盒子*/
    var list_top=document.querySelector('.app-download');

    /*下载版本部分*/
    var download_box=document.querySelector('.download');
    /*产品优势部分*/
    var advantage_box=document.querySelector('.product-advantage');
    /*产品功能部分*/
    var function_box=document.querySelector('.function');

    /*下载版本距离顶部的距离*/
    var d_top=download_box.offsetTop ;
    /*产品优势距离顶部的距离*/
    var a_top=advantage_box.offsetTop;
    /*产品功能距离顶部的距离*/
    var f_top=function_box.offsetTop;

    $(window).scroll( function() {
        /*滚动条滚动的距离*/
      var sTop=document.body.scrollTop;
      if(sTop>=f_top){
            $(list_top).css({ position: 'fixed',top:0,left:0,background: '#fff', zIndex:100,  boxShadow: '0px 1px 8px 0px rgba(0, 0, 0, 0.12)' ,height:'48px',   lineHeight: '48px'})
          $(list_top).find('li ').css({height:'48px',borderBottom:0}).find('a').css({color:'#333333'});
          $(list_top).find("li:contains('产品功能') ").css({borderBottom:'1px solid #2277e6'}).find('a').css({color:'#2277e6'})

          if(sTop>=a_top-100){
              $(list_top).find('li ').css({borderBottom:0}).find('a').css({color:'#333333'});
              $(list_top).find("li:contains('产品优势') ").css({borderBottom:'1px solid #2277e6'}).find('a').css({color:'#2277e6'})
          }

          if(sTop>=d_top-100){
              $(list_top).find('li ').css({borderBottom:0}).find('a').css({color:'#333333'});
              $(list_top).find("li:contains('下载版本') ").css({borderBottom:'1px solid #2277e6'}).find('a').css({color:'#2277e6'})
          }
      }else{

          $(list_top).css({ position: 'relative', boxShadow:'none'})
          $(list_top).find('li ').css({borderBottom:0}).find('a').css({color:'#333333'});
      }
    } );


})