window.addEventListener("DOMContentLoaded", function(){
    // 제품 페이지
    const menuPageB01 = document.getElementById("menu_pageButton1");
    const menuPageB02 = document.querySelector("#menu_pageButton2");
    const menuPageB03 = document.querySelector("#menu_pageButton3");

    const menupage1 = document.querySelector("#menu_page1");
    const menupage2 = document.querySelector("#menu_page2");
    const menupage3 = document.querySelector("#menu_page3");

    menuPageB01.onclick = function(){
        console.log("page1");
        menupage1.style.display = "block";
        menupage2.style.display = "none";
        menupage3.style.display = "none";
    };

    menuPageB02.onclick = function(){
        console.log("page2");
        menupage1.style.display = "none";
        menupage2.style.display = "block";
        menupage3.style.display = "none";
    };

    menuPageB03.onclick = function(){
        console.log("page3");
        menupage1.style.display = "none";
        menupage2.style.display = "none";
        menupage3.style.display = "block";
    };

    // 모달 팝업
    const menuModel = document.querySelector(".menu_popup");
    const menuClose = document.querySelector(".menuModalClose");

    /* 제품 목록 */
    const menulist01 = document.querySelector("#menu_list01 .menuHover div");
    const menulist02 = document.querySelector("#menu_list02 .menuHover div");
    const menulist03 = document.querySelector("#menu_list03 .menuHover div");

    /* 팝업 내용 */
    const menupopup01 = document.querySelector("#menu_popup01");
    const menupopup02 = document.querySelector("#menu_popup02");
    const menupopup03 = document.querySelector("#menu_popup03");

    this.window.onload = function(){
        menuModel.style.display = "none";
        menupopup01.style.display = "none";
        menupopup02.style.display = "none";
        menupopup03.style.display = "none";
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

    // 팝업 닫기
    menuClose.onclick = function(){
        menuModel.style.display = "none";
        menupopup01.style.display = "none";
        menupopup02.style.display = "none";
        menupopup03.style.display = "none";
    };
});