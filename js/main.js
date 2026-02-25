$(function(){
    $('.cate').mouseenter(function(){
        $(this).children('ul').css('display','block');
        $(this).children('.cate1').css('color',"#c2950e");
    });
    $('.cate').mouseleave(function(){
        $(this).children('ul').css('display','none');
        $(this).children('.cate1').css('color',"#1e1e1e");
    });
    // 위 코드 : cate클래스요소에 마우스 들어가면 자식ul보이게,색상변경
    $(window).scroll(function(){
        let now = $(document).scrollTop();
        console.log(now);
        if(now >= 200){
            $('.moveNavi').css({'position':'fixed','top':'-70px','background':'rgba(255,255,255,0.8)'});
            $('.up').fadeIn(500);
        }else{
            $('.moveNavi').css({'position':'absolute','top':'1px'});
            $('.up').fadeOut(500);
        }
    });
    //200픽셀이상 스크롤시 monenavi클래스요소 화면상단고정/200픽셀미만:movenavi절대위치로/.up 페이드아웃
    $('.up').click(function(){
        $('html, body').animate({
            scrollTop: 0
        },300);
    });
    //up요소 클릭시 페이지 맨위로 이벤트스크롤/300밀리초동안
    $('.bestItem').mouseenter(function(){
        $(this).children('.bestDescript').fadeIn(200);
    });
    $('.bestItem').mouseleave(function(){
        $(this).children('.bestDescript').fadeOut(100);
    });
});
//bestitem요소에 마우스가 들어가면 자식 bestdescript 페이드 인
