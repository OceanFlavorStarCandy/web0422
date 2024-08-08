window.addEventListener("DOMContentLoaded", function(){
    const menuPageB01 = document.getElementById("menu_pageButton1");
    const menuPageB02 = document.querySelector("#menu_pageButton2");
    const menuPageB03 = document.querySelector("#menu_pageButton3");

    const menupage1 = document.querySelector("#menu_page1");
    const menupage2 = document.querySelector("#menu_page2");
    const menupage3 = document.querySelector("#menu_page3");

    /* if (menuPageB01.checked) {
        console.log("page1");
        menupage1.style.display = "block";
        menupage2.style.display = "none";
        menupage3.style.display = "none";
    } else if (menuPageB02.checked) {
        console.log("page2");
        menupage1.style.display = "none";
        menupage2.style.display = "block";
        menupage3.style.display = "none";
    } else {
        console.log("page3");
        menupage1.style.display = "none";
        menupage2.style.display = "none";
        menupage3.style.display = "block";
    } */

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

    
    /* const menuC1 = document.querySelector("#Menu_C1");
    const menuC2 = document.querySelector("#Menu_C2");
    const menuC3 = document.querySelector("#Menu_C3");

    const ice = document.getElementsByClassName("ice");
    const iceCream = document.getElementsByClassName("iceCream");

    menuC1.onclick = function(){
        ice.style.display = "block";
        iceCream.style.display = "block";
    }

    menuC2.onclick = function(){
        ice.style.display = "block";
        iceCream.style.display = "none";
    } */
});