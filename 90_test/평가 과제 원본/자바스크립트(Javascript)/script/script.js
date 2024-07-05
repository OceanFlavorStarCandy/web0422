const t1 = document.querySelector("#btn1");
const t2 = document.querySelector("#btn2");
const t3 = document.querySelector("#btn3");
const t4 = document.querySelector("#btn4");
const t5 = document.querySelector("#btn5");
const t6 = document.querySelector("#btn6");
const t7 = document.querySelector("#btn7");
const t8 = document.querySelector("#btn8");
const t9 = document.querySelector("#btn9");

const category1 = document.querySelector("#tab1");
const category2 = document.querySelector("#tab2");
const category3 = document.querySelector("#tab3");
const category4 = document.querySelector("#tab4");
const category5 = document.querySelector("#tab5");
const category6 = document.querySelector("#tab6");
const category7 = document.querySelector("#tab7");
const category8 = document.querySelector("#tab8");
const category9 = document.querySelector("#tab9");

t1.onclick = function(){
    tabReset();
    category1.classList.add('on');
};

t2.onclick = function(){
    tabReset();
    category2.classList.add('on');
};

t3.onclick = function(){
    tabReset();
    category3.classList.add('on');
};

t4.onclick = function(){
    tabReset();
    category4.classList.add('on');
};

t5.onclick = function(){
    tabReset();
    category5.classList.add('on');
};

t6.onclick = function(){
    tabReset();
    category6.classList.add('on');
};

t7.onclick = function(){
    tabReset();
    category7.classList.add('on');
};

t8.onclick = function(){
    tabReset();
    category8.classList.add('on');
};

t9.onclick = function(){
    tabReset();
    category9.classList.add('on');
};

tabReset = function(){
    category1.classList.remove('on');
    category2.classList.remove('on');
    category3.classList.remove('on');
    category4.classList.remove('on');
    category5.classList.remove('on');
    category6.classList.remove('on');
    category7.classList.remove('on');
    category8.classList.remove('on');
    category9.classList.remove('on');
};