// 팝업 컨텐츠
const popupContent = {
    img: [
        "./../../03.assets/sub/menu/menu_item01.png",
        "./../../03.assets/sub/menu/menu_item02.png",
        "./../../03.assets/sub/menu/menu_item03.png",
        "./../../03.assets/sub/menu/menu_item04.png",
        "./../../03.assets/sub/menu/menu_item05.png",
        "./../../03.assets/sub/menu/menu_item06.png",
        "./../../03.assets/sub/menu/menu_item07.png",
        "./../../03.assets/sub/menu/menu_item08.png",
        "./../../03.assets/sub/menu/menu_item09.png",
        "./../../03.assets/sub/menu/menu_item10.png"
    ],
    tit: [
        "애플망고치즈설빙",
        "3단 아이스크림 파르페",
        "딸기 아이스크림 파르페",
        "스트로베리 파르페",
        "인절미 팥빙수",
        "바닐라초코 파르페",
        "말차 빙수",
        "킹망고설빙",
        "용과 빙수",
        "아이스티"
    ],
    kacl: [
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        0
    ],
    sweet: [
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        0
    ],
    protain: [
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        0
    ],
    fat: [
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        0
    ],
    Nacl: [
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        0
    ],
    allergy: [
        "우유, 대두, 계란, 밀",
        "우유, 대두, 계란, 밀",
        "우유, 대두, 계란, 밀",
        "우유, 대두, 계란, 밀",
        "우유, 대두, 계란, 밀",
        "우유, 대두, 계란, 밀",
        "우유, 대두, 계란, 밀",
        "우유, 대두, 계란, 밀",
        "우유, 대두, 계란, 밀",
        "우유, 대두, 계란, 밀"
    ]
}

window.addEventListener("DOMContentLoaded", function () {
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

    /* 제품 목록 */
    // const menulist = document.querySelectorAll(".menuList .menuHover div");
    // 클릭한게 몇번째 div인지 알 수있는 방법?

    const menuIMG = document.querySelector(".menuPic img");
    const menuTitle = document.querySelector("#menu_popupContent h2");
    const kcal = document.querySelector(".kcal");
    const sweet = document.querySelector(".sweet");
    const protain = document.querySelector(".protain");
    const fat = document.querySelector(".fat");
    const Nacl = document.querySelector(".Nacl");
    const allergy = document.querySelector(".allergy span");

    /* this.window.onload = function(){
        const selectMenu = [
            document.querySelector("#menu_list01 .menuHover div"),
            document.querySelector("#menu_list02 .menuHover div"),
            document.querySelector("#menu_list03 .menuHover div"),
            document.querySelector("#menu_list04 .menuHover div"),
            document.querySelector("#menu_list05 .menuHover div"),
            document.querySelector("#menu_list06 .menuHover div"),
            document.querySelector("#menu_list07 .menuHover div"),
            document.querySelector("#menu_list08 .menuHover div"),
            document.querySelector("#menu_list09 .menuHover div"),
            document.querySelector("#menu_list10 .menuHover div")
        ]

        selectMenu.forEach((ele, idx)).onclick = (e) => {
            menuModel.style.display = "block";

            let content = e.currentTarget.value;
            let data = popupContent[content];

            // 제품 이미지
            menuIMG.forEach((ele, idx) =>
                ele.innerText = data["img"][idx] // 이거 어떻게 해야할지 모르겠음!!
            );

            // 메뉴 이름
            menuTitle.forEach((ele, idx) =>
                ele.innerText = data["tit"][idx]
            );

            // 칼로리
            kcal.forEach((ele, idx) =>
                ele.innerText = data["kcal"][idx]
            );

            // 칼로리
            kcal.forEach((ele, idx) =>
                ele.innerText = data["kcal"][idx]
            );

            // 당
            sweet.forEach((ele, idx) =>
                ele.innerText = data["sweet"][idx]
            );

            // 단백질
            protain.forEach((ele, idx) =>
                ele.innerText = data["protain"][idx]
            );

            // 지방
            fat.forEach((ele, idx) =>
                ele.innerText = data["fat"][idx]
            );

            // 나트륨
            Nacl.forEach((ele, idx) =>
                ele.innerText = data["Nacl"][idx]
            );

            // 알레르기
            allergy.forEach((ele, idx) =>
                ele.innerText = data["allergy"][idx]
            );
        }
    } */

    document.querySelector(".menuHover div img").onclick = (e) => {
        let content = e.currentTarget.value;
        let data = popupContent[content];

        // 제품 이미지
        menuIMG.forEach((ele, idx) =>
            ele.innerText = data["img"][idx] // 이거 어떻게 해야할지 모르겠음!!
        );

        // 메뉴 이름
        menuTitle.forEach((ele, idx) =>
            ele.innerText = data["tit"][idx]
        );

        // 칼로리
        kcal.forEach((ele, idx) =>
            ele.innerText = data["kcal"][idx]
        );

        // 칼로리
        kcal.forEach((ele, idx) =>
            ele.innerText = data["kcal"][idx]
        );

        // 당
        sweet.forEach((ele, idx) =>
            ele.innerText = data["sweet"][idx]
        );

        // 단백질
        protain.forEach((ele, idx) =>
            ele.innerText = data["protain"][idx]
        );

        // 지방
        fat.forEach((ele, idx) =>
            ele.innerText = data["fat"][idx]
        );

        // 나트륨
        Nacl.forEach((ele, idx) =>
            ele.innerText = data["Nacl"][idx]
        );

        // 알레르기
        allergy.forEach((ele, idx) =>
            ele.innerText = data["allergy"][idx]
        );
    };

    // menulist01.onclick = function(){
    //     menuModel.style.display = "block";
    //     menupopup01.style.display = "block";
    // };

    // 팝업 닫기
    menuClose.onclick = function(){
        menuModel.style.display = "none";
    };
});