window.addEventListener("DOMContentLoaded", function () {
    // section2 tab
    const btn1 = document.querySelector("#btn1");
    const btn2 = document.querySelector("#btn2");
    const btn3 = document.querySelector("#btn3");

    const tab1 = document.querySelector("#T1");
    const tab2 = document.querySelector("#T2");
    const tab3 = document.querySelector("#T3");

    btn1.onclick = function () {
        tab1.classList.add('on');
        tab2.classList.remove('on');
        tab3.classList.remove('on');
    }
    btn2.onclick = function () {
        tab1.classList.remove('on');
        tab2.classList.add('on');
        tab3.classList.remove('on');
    }
    btn3.onclick = function () {
        tab1.classList.remove('on');
        tab2.classList.remove('on');
        tab3.classList.add('on');
    }

    $('.slider').bxSlider({
        mode: 'fade', // 전환 효과
        speed: 1000,
        auto: true,
        autoControls: false, // 일시정지, 재생 버튼 숨김
        stopAutoOnClick: false,
        pager: false, // 페이지 표시하는 원 아이콘 숨김
        sideWidth: 1920
    });
});

/* fullpage */
$(function () {
    $('#wrap').fullpage({
        navigation: true,
        navigationTooltips: ['Main', 'Company', 'Services', 'Gallery', 'Question'],
    });
});