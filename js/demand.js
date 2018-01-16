/**
 * Created by Administrator on 2017/9/23.
 */
$(function () {
    var p = new Promise(function(resolve,reject){
        var select=$('.form-scene1 .input-box  input');
        resolve(select);
    }).then(function(select){
        /*下拉菜单部分*/
            //直接以input控件为基点
            select.focus(function () {
                /*获取焦点之后*/
                $(this).parent('.input-box').css({border:'1px solid rgb(0, 157, 243)'});
                $(this).next('.option-box').css({display:'block'});
                $(this).nextAll('.input-triangle').css({ borderTop: '5px  solid  #ffffff'});
                /*存一下that*/
                var that=this;
                /*选中所有子节点 即li 点击之后整个整个ul消失，同时给input附上选中的值*/
                $(this).next('.option-box').children().each(function (index,value) {
                    $(value).click(function () {
                        that.value=$(value).text();
                        $(that).parent('.input-box').css({border:'1px solid #fff'});
                        $(that).next('.option-box').css({display:'none'});
                        $(that).nextAll('.input-triangle').css({ borderTop: '5px  solid  #ccc'});
                    })
                })
            /*监测系统是否选中*/
            if(this.className=='type' && $('.system').val()==''){
                $('.form-alert').css({display:'block'}).find('.tips').html('对不起，您未选择设施系统，无法操作')
                $(this).parent('.input-box').css({border:'1px solid #fff'});
                $(this).next('.option-box').css({display:'none'});
                $(this).nextAll('.input-triangle').css({ borderTop: '5px  solid  #ccc'});
            }
        })
    }).then( function(){
        /*单选按钮组*/
        /*同样以隐藏的input控件作为基点*/
        var redio=$('.form-radio .radio-box input[type=hidden] ');
        /*遍历所有控件*/
        redio.each(function (index,value) {
            /*设置默认值*/
            value.value='';
            $(value).next('.radio-box-top').find('li').each(function (i,val) {
                /*为了使对号可以重复勾选，设置一个开关*/
                var flag=true;
                $(val).click(function () {
                    var input=document.querySelectorAll('.form-scene1 .input-box  input');
                    if(input[0].value==''){
                        $('.form-alert').css({display:'block'}).find('.tips').html('对不起，您未选择设施系统，无法操作');
                        flag=false;

                    }else if(input[1].value==''){
                        $('.form-alert').css({display:'block'}).find('.tips').html(' 对不起，您未选择设施类型，无法操作');
                        flag=false;
                    }else{

                        if(index==1 && $('.control').val()==''&& (!!window.ActiveXObject || "ActiveXObject" in window)==false ){
                            $('.form-alert').css({display:'block'}).find('.tips').html(' 对不起，您未选择远程控制类型，无法操作');
                            flag=false;

                        }

                        if(flag){
                            $(this).find('.right').css({display:'block'});
                            flag=false;
                            /*根据内容拼接字符串，下同*/
                            if(!value.value.includes($(this).find('span').text())){
                                value.value+=$(this).find('span').text()+'+';
                            }

                        }else{
                            $(this).find('.right').css({display:'none'});
                            flag=true;
                            if(value.value.includes($(this).find('span').text())){
                                value.value=$(value).val().replace($(this).find('span').text()+'+','');
                            }
                        }

                    }
                })
            })

        })
    } )



    var system=document.querySelector('.system');
    var type=document.querySelector('.type');
    var control=document.querySelector('.control');
    var control_other=document.querySelector('.control-other');
    var monitor=document.querySelector('.monitor');
    var monitor_other=document.querySelector('.monitor-other');

    /*下一步*/
    /*点击下一步，表单一隐藏，表单二显示*/
    var next_btn=$('.next-buttom');
    next_btn.click(function () {
        if((system.value!=='' && type.value!=='' && (control.value!=='' || control_other.value!=='' ) && (monitor.value!=='' || monitor_other.value!=='')) || (!!window.ActiveXObject || "ActiveXObject" in window)==true){
            $('.form-scene1').css({opacity:0,zIndex:5});
            $('.form-scene2').css({opacity:1,zIndex:6});
        }else{
            $('.form-alert').css({display:'block'}).find('.tips').html(' 对不起，请完善您的需求信息');
        }

    })


    var name=document.querySelector('.name');
    var company=document.querySelector('.company');
    var tel=document.querySelector('.tel');
    var note=document.querySelector('.note');


    /*提交成功*/
    /*点击提交，显示弹框*/
    var submit_btn=$('.submit');
    submit_btn.click(function () {

        if(name.value!=='' && company.value!=='' && tel.value!==''  && note.value!==''){

            var data={
                name: name.value,
                company: company.value,
                tel:tel.value,
                system:system.value ,
                type:type.value,
                control:control.value,
                control_other:control_other.value,
                monitor:monitor.value,
                monitor_other:monitor_other.value,
                note:note.value
            }

            console.log(data)
            $.ajax({
                type: "POST",
                url: "http://192.168.11.115:3380/Terminal/login",
                data: {'username':'123456','password':'123456'} ,
                success: function(msg){
                   console.log(msg)
                }
            });


            $('.success').css({display:'block',opacity:1}).animate({
                opacity:0
            },2000)


        }else{
            $('.form-alert').css({display:'block'}).find('.tips').html(' 对不起，请完善您的个人信息');
        }

    });

    /*弹框*/

    $('.cancel').click(function () {
        $('.form-alert').css({display:'none'})
    })

    $('.determine').click(function () {
        $('.form-alert').css({display:'none'})
    })


})












