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

    // 메뉴 목록
    const menulist01 = document.querySelector("#menu_list01 .menuHover div");
    const menulist02 = document.querySelector("#menu_list02 .menuHover div");
    const menulist03 = document.querySelector("#menu_list03 .menuHover div");
    const menulist04 = document.querySelector("#menu_list04 .menuHover div");
    const menulist05 = document.querySelector("#menu_list05 .menuHover div");
    const menulist06 = document.querySelector("#menu_list06 .menuHover div");
    const menulist07 = document.querySelector("#menu_list07 .menuHover div");
    const menulist08 = document.querySelector("#menu_list08 .menuHover div");
    const menulist09 = document.querySelector("#menu_list09 .menuHover div");
    const menulist10 = document.querySelector("#menu_list10 .menuHover div");
    const menulist11 = document.querySelector("#menu_list11 .menuHover div");
    const menulist12 = document.querySelector("#menu_list12 .menuHover div");
    const menulist13 = document.querySelector("#menu_list13 .menuHover div");
    const menulist14 = document.querySelector("#menu_list14 .menuHover div");
    const menulist15 = document.querySelector("#menu_list15 .menuHover div");
    const menulist16 = document.querySelector("#menu_list16 .menuHover div");
    const menulist17 = document.querySelector("#menu_list17 .menuHover div");
    const menulist18 = document.querySelector("#menu_list18 .menuHover div");
    const menulist19 = document.querySelector("#menu_list19 .menuHover div");
    const menulist20 = document.querySelector("#menu_list20 .menuHover div");
    const menulist21 = document.querySelector("#menu_list21 .menuHover div");
    const menulist22 = document.querySelector("#menu_list22 .menuHover div");
    const menulist23 = document.querySelector("#menu_list23 .menuHover div");
    const menulist24 = document.querySelector("#menu_list24 .menuHover div");
    const menulist25 = document.querySelector("#menu_list25 .menuHover div");
    const menulist26 = document.querySelector("#menu_list26 .menuHover div");
    const menulist27 = document.querySelector("#menu_list27 .menuHover div");
    const menulist28 = document.querySelector("#menu_list28 .menuHover div");
    const menulist29 = document.querySelector("#menu_list29 .menuHover div");
    const menulist30 = document.querySelector("#menu_list30 .menuHover div");

    // 팝업 내용
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
    const menupopup11 = document.querySelector("#menu_popup11");
    const menupopup12 = document.querySelector("#menu_popup12");
    const menupopup13 = document.querySelector("#menu_popup13");
    const menupopup14 = document.querySelector("#menu_popup14");
    const menupopup15 = document.querySelector("#menu_popup15");
    const menupopup16 = document.querySelector("#menu_popup16");
    const menupopup17 = document.querySelector("#menu_popup17");
    const menupopup18 = document.querySelector("#menu_popup18");
    const menupopup19 = document.querySelector("#menu_popup19");
    const menupopup20 = document.querySelector("#menu_popup20");
    const menupopup21 = document.querySelector("#menu_popup21");
    const menupopup22 = document.querySelector("#menu_popup22");
    const menupopup23 = document.querySelector("#menu_popup23");
    const menupopup24 = document.querySelector("#menu_popup24");
    const menupopup25 = document.querySelector("#menu_popup25");
    const menupopup26 = document.querySelector("#menu_popup26");
    const menupopup27 = document.querySelector("#menu_popup27");
    const menupopup28 = document.querySelector("#menu_popup28");
    const menupopup29 = document.querySelector("#menu_popup29");
    const menupopup30 = document.querySelector("#menu_popup30");

    /* 팝업 내용 */
    this.window.onload = function(){
        menuModel.style.display = "none";
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

    menulist11.onclick = function(){
        menuModel.style.display = "block";
        menupopup11.style.display = "block";
    };

    menulist12.onclick = function(){
        menuModel.style.display = "block";
        menupopup12.style.display = "block";
    };

    menulist13.onclick = function(){
        menuModel.style.display = "block";
        menupopup13.style.display = "block";
    };

    menulist14.onclick = function(){
        menuModel.style.display = "block";
        menupopup14.style.display = "block";
    };

    menulist15.onclick = function(){
        menuModel.style.display = "block";
        menupopup15.style.display = "block";
    };

    menulist16.onclick = function(){
        menuModel.style.display = "block";
        menupopup16.style.display = "block";
    };

    menulist17.onclick = function(){
        menuModel.style.display = "block";
        menupopup17.style.display = "block";
    };

    menulist18.onclick = function(){
        menuModel.style.display = "block";
        menupopup18.style.display = "block";
    };
    
    menulist19.onclick = function(){
        menuModel.style.display = "block";
        menupopup19.style.display = "block";
    };

    menulist20.onclick = function(){
        menuModel.style.display = "block";
        menupopup20.style.display = "block";
    };

    menulist21.onclick = function(){
        menuModel.style.display = "block";
        menupopup21.style.display = "block";
    };

    menulist22.onclick = function(){
        menuModel.style.display = "block";
        menupopup22.style.display = "block";
    };

    menulist23.onclick = function(){
        menuModel.style.display = "block";
        menupopup23.style.display = "block";
    };

    menulist24.onclick = function(){
        menuModel.style.display = "block";
        menupopup24.style.display = "block";
    };

    menulist25.onclick = function(){
        menuModel.style.display = "block";
        menupopup25.style.display = "block";
    };

    menulist26.onclick = function(){
        menuModel.style.display = "block";
        menupopup26.style.display = "block";
    };
    
    menulist27.onclick = function(){
        menuModel.style.display = "block";
        menupopup27.style.display = "block";
    };

    menulist28.onclick = function(){
        menuModel.style.display = "block";
        menupopup28.style.display = "block";
    };

    menulist29.onclick = function(){
        menuModel.style.display = "block";
        menupopup29.style.display = "block";
    };

    menulist30.onclick = function(){
        menuModel.style.display = "block";
        menupopup30.style.display = "block";
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
        menupopup11.style.display = "none";
        menupopup12.style.display = "none";
        menupopup13.style.display = "none";
        menupopup14.style.display = "none";
        menupopup15.style.display = "none";
        menupopup16.style.display = "none";
        menupopup17.style.display = "none";
        menupopup18.style.display = "none";
        menupopup19.style.display = "none";
        menupopup20.style.display = "none";
        menupopup21.style.display = "none";
        menupopup22.style.display = "none";
        menupopup23.style.display = "none";
        menupopup24.style.display = "none";
        menupopup25.style.display = "none";
        menupopup26.style.display = "none";
        menupopup27.style.display = "none";
        menupopup28.style.display = "none";
        menupopup29.style.display = "none";
        menupopup30.style.display = "none";
    };
});