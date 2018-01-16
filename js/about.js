/**
 * Created by Administrator on 2017/9/15.
 */
$(function () {

    /*banner导航部分*/
    var banner_nav_list=$('.app-banner .nav li');
    var banner_nav_list_a=$('.app-banner .nav li a');
    banner_nav_list.mouseenter(function () {
        banner_nav_list_a.css({borderBottom:0,color:'#808080'})
        $(this).find('a').css({borderBottom: '2px solid #fbc000', color: '#333333'})
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

    /*知识产权部分*/
    var power_box=document.querySelector('.power');



    /*下载版本距离顶部的距离*/
    var d_top=download_box.offsetTop ;
    /*产品优势距离顶部的距离*/
    var a_top=advantage_box.offsetTop;
    /*产品功能距离顶部的距离*/
    var f_top=function_box.offsetTop;

    /*知识产权顶部距离距离*/
    var p_top=power_box.offsetTop;

    $(window).scroll( function() {
        /*滚动条滚动的距离*/
      var sTop=document.body.scrollTop;
      if(sTop>=d_top){
          $(list_top).css({display:'block'});
          $(list_top).find('li ').css({height:'48px',borderBottom:0}).find('a').css({color:'#333333'});
          $(list_top).find("li:contains('平台愿景') ").css({borderBottom:'1px solid #2277e6'}).find('a').css({color:'#2277e6'})

          if(sTop>=a_top-100){
              $(list_top).find('li ').css({borderBottom:0}).find('a').css({color:'#333333'});
              $(list_top).find("li:contains('商业理念') ").css({borderBottom:'1px solid #2277e6'}).find('a').css({color:'#2277e6'})



          }

          if(sTop>=f_top-100){
              $(list_top).find('li ').css({borderBottom:0}).find('a').css({color:'#333333'});
              $(list_top).find("li:contains('公司简介') ").css({borderBottom:'1px solid #2277e6'}).find('a').css({color:'#2277e6'})


          }

          if(sTop>=p_top-100){
              $(list_top).find('li ').css({borderBottom:0}).find('a').css({color:'#333333'});
              $(list_top).find("li:contains('知识产权') ").css({borderBottom:'1px solid #2277e6'}).find('a').css({color:'#2277e6'})


          }

      }else{
          $(list_top).css({display:'none'});

          banner_nav_list_a.css({borderBottom:0,color:'#808080'});
          banner_nav_list.find("a:contains('平台愿景')").css({borderBottom: '2px solid #fbc000', color: '#333333'})
        }
    } );


    /*软著部分js效果*/
    var li_ruanzhu=$('.certificate_box li');
    var alert_ruanzhu=$('.about_alert')
    var mask_ranzhu=$('.about_alert .mask')

    li_ruanzhu.click(function () {
        alert_ruanzhu.css({display:'block'}).find('img').prop('src', $(this).find('img').prop('src'))
    })
    mask_ranzhu.click(function(){
            alert_ruanzhu.css({display:'none'})
        })


    /*图标旋转*/
    $('.Idea_box  li').mouseenter(function () {
        $(this).css({ boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)'}).find('.tubiao').css({ zIndex: 100, transition:' all 1s',transform: 'rotateY(180deg)'});
    }).mouseleave(function () {

        $(this).css({ boxShadow: 'none'}).find('.tubiao').css({ transition:' all 0s',transform: 'rotateY(0deg)'})
    })




})