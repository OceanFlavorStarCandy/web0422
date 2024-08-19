window.addEventListener("DOMContentLoaded", function(){
    const faqPageB01 = document.querySelector("#faq_pageButton1");
    const faqPageB02 = document.querySelector("#faq_pageButton2");

    const menupage1 = document.querySelector("#faq_page1");
    const menupage2 = document.querySelector("#faq_page2");

    menupage1.style.display = "block";
    menupage2.style.display = "none";

    faqPageB01.onclick = function(){
        console.log("page1");
        menupage1.style.display = "block";
        menupage2.style.display = "none";
    };

    faqPageB02.onclick = function(){
        console.log("page2");
        menupage1.style.display = "none";
        menupage2.style.display = "block";
    };
});