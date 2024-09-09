window.addEventListener("DOMContentLoaded", function () {
    // section2 tab
    const btn1 = document.querySelector("#btn1");
    const btn2 = document.querySelector("#btn2");
    const btn3 = document.querySelector("#btn3");

    const tab1 = document.querySelector("#T1");
    const tab2 = document.querySelector("#T2");
    const tab3 = document.querySelector("#T3");

    // 수정: 탭메뉴 클릭 시 함께 바뀔 배경이미지 찾기
    const BGimg1 = document.querySelector("#tabImage1");
    const BGimg2 = document.querySelector("#tabImage2");
    const BGimg3 = document.querySelector("#tabImage3");
    const BGimg4 = document.querySelector("#tabImage4");
    const BGimg5 = document.querySelector("#tabImage5");

    // 실행 시 보이게할 배경이미지
    BGimg1.classList.add('on');
    BGimg2.classList.add('on');

    btn1.onclick = function () {
        tab1.classList.add('on');
        tab2.classList.remove('on');
        tab3.classList.remove('on');
        BGimg1.classList.add('on');
        BGimg2.classList.add('on');
        BGimg3.classList.remove('on');
        BGimg4.classList.remove('on');
        BGimg5.classList.remove('on');
    }
    btn2.onclick = function () {
        tab1.classList.remove('on');
        tab2.classList.add('on');
        tab3.classList.remove('on');
        BGimg1.classList.remove('on');
        BGimg2.classList.remove('on');
        BGimg3.classList.add('on');
        BGimg4.classList.remove('on');
        BGimg5.classList.remove('on');
    }
    btn3.onclick = function () {
        tab1.classList.remove('on');
        tab2.classList.remove('on');
        tab3.classList.add('on');
        BGimg1.classList.remove('on');
        BGimg2.classList.remove('on');
        BGimg3.classList.remove('on');
        BGimg4.classList.add('on');
        BGimg5.classList.add('on');
    }

    // bxslider
    $('.slider').bxSlider({
        mode: 'fade', // 전환 효과
        speed: 1500,
        auto: true,
        autoControls: false, // 일시정지, 재생 버튼 숨김
        stopAutoOnClick: false,
        pager: false, // 페이지 표시하는 원 아이콘 숨김
        sideWidth: 1920
    });

    // 수정: 페이지 맨 위로 가는 기능 추가(헤더, 푸터 로고 클릭시)
    $('header .Logo a').click(()=>{
        $.fn.fullpage.moveTo(1, 1);
    });

    $('footer>a').click(()=>{
        $.fn.fullpage.moveTo(1, 1);
    });
});

/* 수정: fullpage 기능 추가 */
$(function () {
    $('#wrap').fullpage({
        navigation: true,
        navigationTooltips: ['Main', 'Company', 'Services', 'Gallery', 'Question'],
    });
});