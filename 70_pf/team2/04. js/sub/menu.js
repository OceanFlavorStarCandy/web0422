var menuPageB01 = document.getElementById("menu_pageButton1");
var menuPageB02 = document.querySelector("#menu_pageButton2");
var menuPageB03 = document.querySelector("#menu_pageButton3");

const menupage1 = document.querySelector("#menu_page1");
const menupage2 = document.querySelector("#menu_page2");
const menupage3 = document.querySelector("#menu_page3");

if (menuPageB01.checked) {
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
}