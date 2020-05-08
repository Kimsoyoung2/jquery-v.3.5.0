$(function(){
    tabs(); //tabs 기능 호출(=실행)
    popup(); //popup 기능 호출
});
function tabs(){ // tabs 기능 정의
    notice_on();
    gallery_on();
}
function notice_on(){
    $(".board_title li").click(function(){
        // console.log("클릭한 li : "+$(this).index());
        if(!$(this).hasClass("on")) { // this = .board_title li
            $(this).siblings().removeClass("on");
            $(this).addClass("on");
            $("#gallery").toggleClass("hide");
        }
    });
}
function gallery_on(){
    $(".board_title li").click(function(){
        
    });
}
function popup(){ // popup 기능 정의
    popup_open();
    popup_close();
}
function popup_open(){
    $("#notice li").first().click(function(){
        $("#popup").css("display","block");
    });
}
function popup_close(){
    $("#popup input[type=button]").click(function(){
        $(this).parent().css("display","none");
    })
}
