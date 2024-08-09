window.addEventListener("DOMContentLoaded", () => {
    // 요소 찾기
    const collapsedMenuIcon = document.querySelector(".collapsedMenuIcon");
    const nav = document.querySelector("nav");

    // 이벤트 처리
    collapsedMenuIcon.onclick = ()=>{
        // 함수 호출
        btnMotion(event.currentTarget);
    }; 

    // 호이스팅
    // 함수 선언(정의)
    function btnMotion(x) {
        // 햄버거 버튼이 x모양으로 바뀌는 기능
        x.classList.toggle("change");
        // nav 태그에 change 추가
        nav.classList.toggle("change");
    }

});