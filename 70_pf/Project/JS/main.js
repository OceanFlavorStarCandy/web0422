const tab1 = document.querySelector(".section2 #tab1");
const tab2 = document.querySelector(".section2 #tab2");
const tab3 = document.querySelector(".section2 #tab3");
const tab4 = document.querySelector(".section2 #tab4");
const tab5 = document.querySelector(".section2 #tab5");
const tab6 = document.querySelector(".section2 #tab6");

const item1 = document.querySelector("#item1");
const item2 = document.querySelector("#item2");
const item3 = document.querySelector("#item3");
const item4 = document.querySelector("#item4");
const item5 = document.querySelector("#item5");
const item6 = document.querySelector("#item6");

tabReset = function(){
    item1.classList.remove("on");
    item2.classList.remove("on");
    item3.classList.remove("on");
    item4.classList.remove("on");
    item5.classList.remove("on");
    item6.classList.remove("on");
};

tab1.onclick = function(){
    tabReset();
    item1.classList.add("on");
};

tab2.onclick = function(){
    tabReset();
    item2.classList.add("on");
};

tab3.onclick = function(){
    tabReset();
    item3.classList.add("on");
};

tab4.onclick = function(){
    tabReset();
    item4.classList.add("on");
};

tab5.onclick = function(){
    tabReset();
    item5.classList.add("on");
};

tab6.onclick = function(){
    tabReset();
    item6.classList.add("on");
};