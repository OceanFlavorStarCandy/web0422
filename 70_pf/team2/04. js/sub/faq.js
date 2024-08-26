window.addEventListener("DOMContentLoaded", function(){
    // 페이지
    const faqPageB01 = document.querySelector("#faq_pageButton1");
    const faqPageB02 = document.querySelector("#faq_pageButton2");

    const menupage1 = document.querySelector("#faq_page1");
    const menupage2 = document.querySelector("#faq_page2");

    menupage1.style.display = "block";
    menupage2.style.display = "none";

    faqPageB01.onclick = function(){
        menupage1.style.display = "block";
        menupage2.style.display = "none";
    };

    faqPageB02.onclick = function(){
        menupage1.style.display = "none";
        menupage2.style.display = "block";
    };

    // 박스 열기
    /* for(i=0; i<=16; i++) {
        let checkbox = document.querySelector('.FAQlist input[type="checkbox"]')[i];
        let lock = document.querySelector('.FAQlist label img')[i];

        checkbox.onclick = function(){
            lock.style.transform = "rotateX('180deg')";
        };
    }; */
});