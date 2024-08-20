window.addEventListener("DOMContentLoaded",function(){
    // section2 tab
    const btn1 = document.querySelector("#btn1");
    const btn2 = document.querySelector("#btn2");
    const btn3 = document.querySelector("#btn3");

    const tab1 = document.querySelector("#T1");
    const tab2 = document.querySelector("#T2");
    const tab3 = document.querySelector("#T3");

    btn1.onclick = function(){
        tab1.classList.add('on');
        tab2.classList.remove('on');
        tab3.classList.remove('on');
    }
    btn2.onclick = function(){
        tab1.classList.remove('on');
        tab2.classList.add('on');
        tab3.classList.remove('on');
    }
    btn3.onclick = function(){
        tab1.classList.remove('on');
        tab2.classList.remove('on');
        tab3.classList.add('on');
    }

    // scroll event
    const t = document.querySelector("#s2Text");
    const s2scroll = this.document.querySelector("#s2");

    window.addEventListener("scroll", function(){
        t.innerHTML = Math.floor(pageYOffset);
        if(t.innerHTML >= 920) {
            s2scroll.classList.add('active');
        } else {
            s2scroll.classList.remove('active');
        }
    });
});

/* fullpage */
$(function(){
    $('#wrap').fullpage({
        navigation: true,
        navigationTooltips: ['Main', 'Company', 'Services', 'Gallery', 'Question'],
    });
});