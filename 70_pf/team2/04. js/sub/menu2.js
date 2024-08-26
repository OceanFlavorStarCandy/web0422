window.addEventListener("DOMContentLoaded", function(){
    // 제품 페이지
    const menuPageB01 = document.getElementById("menu_pageButton1");
    const menuPageB02 = document.querySelector("#menu_pageButton2");
    const menuPageB03 = document.querySelector("#menu_pageButton3");

    const menupage1 = document.querySelector("#menu_page1");
    const menupage2 = document.querySelector("#menu_page2");
    const menupage3 = document.querySelector("#menu_page3");

    menuPageB01.onclick = function () {
        console.log("page1");
        menupage1.style.display = "block";
        menupage2.style.display = "none";
        menupage3.style.display = "none";
    };

    menuPageB02.onclick = function () {
        console.log("page2");
        menupage1.style.display = "none";
        menupage2.style.display = "block";
        menupage3.style.display = "none";
    };

    menuPageB03.onclick = function () {
        console.log("page3");
        menupage1.style.display = "none";
        menupage2.style.display = "none";
        menupage3.style.display = "block";
    };

    // 모달 팝업
    const menuModel = document.querySelector(".menu_popup");
    const menuClose = document.querySelector(".menuModalClose");

    const menupopup01 = document.querySelector("#menu_popup01");
    const menupopup02 = document.querySelector("#menu_popup02");
    const menupopup03 = document.querySelector("#menu_popup03");
    const menupopup04 = document.querySelector("#menu_popup04");
    const menupopup05 = document.querySelector("#menu_popup05");
    const menupopup06 = document.querySelector("#menu_popup06");
    const menupopup07 = document.querySelector("#menu_popup07");
    const menupopup08 = document.querySelector("#menu_popup08");
    const menupopup09 = document.querySelector("#menu_popup09");
    const menupopup10 = document.querySelector("#menu_popup10");

    /* 팝업 내용 */
    this.window.onload = function(){
        menuModel.style.display = "none";
        menupopup01.style.display = "none";
        menupopup02.style.display = "none";
        menupopup03.style.display = "none";
        menupopup04.style.display = "none";
        menupopup05.style.display = "none";
        menupopup06.style.display = "none";
        menupopup07.style.display = "none";
        menupopup08.style.display = "none";
        menupopup09.style.display = "none";
        menupopup10.style.display = "none";
    }

    menulist01.onclick = function(){
        menuModel.style.display = "block";
        menupopup01.style.display = "block";
    };

    menulist02.onclick = function(){
        menuModel.style.display = "block";
        menupopup02.style.display = "block";
    };

    menulist03.onclick = function(){
        menuModel.style.display = "block";
        menupopup03.style.display = "block";
    };

    menulist04.onclick = function(){
        menuModel.style.display = "block";
        menupopup04.style.display = "block";
    };

    menulist05.onclick = function(){
        menuModel.style.display = "block";
        menupopup05.style.display = "block";
    };

    menulist06.onclick = function(){
        menuModel.style.display = "block";
        menupopup06.style.display = "block";
    };

    menulist07.onclick = function(){
        menuModel.style.display = "block";
        menupopup07.style.display = "block";
    };

    menulist08.onclick = function(){
        menuModel.style.display = "block";
        menupopup08.style.display = "block";
    };

    menulist09.onclick = function(){
        menuModel.style.display = "block";
        menupopup09.style.display = "block";
    };

    menulist10.onclick = function(){
        menuModel.style.display = "block";
        menupopup10.style.display = "block";
    };

    // 팝업 닫기
    menuClose.onclick = function(){
        menuModel.style.display = "none";
        menupopup01.style.display = "none";
        menupopup02.style.display = "none";
        menupopup03.style.display = "none";
        menupopup04.style.display = "none";
        menupopup05.style.display = "none";
        menupopup06.style.display = "none";
        menupopup07.style.display = "none";
        menupopup08.style.display = "none";
        menupopup09.style.display = "none";
        menupopup10.style.display = "none";
    };
});