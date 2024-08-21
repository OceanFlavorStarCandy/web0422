const mdata = {
    // 영어
    en: {
        logo: "MB Megabox",
        gnb: ["Movie", "Event", "CS Center", "Notice"],
        mtit: ["MG", "Megabox"],
        stit: ["Movie", "Event", "CS Center"],
        s2: "Pilot"
    },
    // 한국어
    ko: {
        logo: "MB 메가박스",
        gnb: ["영화", "이벤트", "고객센터", "공지사항"],
        mtit: ["MG", "메가박스"],
        stit: ["영화", "이벤트", "고객센터"],
        s2: "파일럿"
    }
}

// 기본 데이터 내보내기 - 1개만
export default mdata;

window.addEventListener("DOMContentLoaded", () => {
    const sel = document.querySelector("select");
    const logoB = document.querySelector(".logo b");
    const logoSpan = document.querySelector(".logo span");
    const gnb = document.querySelectorAll(".gnb a");
    const titB = document.querySelectorAll("#sec1 b");
    const titSpan = document.querySelectorAll("#sec1 span");

    const secTit = document.querySelector("#sec2 h3");

    //console.log(sel,logo,gnb,tit,flogo,fmenu,addr);

    /* 
        이벤트 종류
        onclick >> 요소를 클릭했을 때
        onmouseenter >> 마우스를 요소 위에 올렸을 때
        onmouseleave >> 마우스가 요소를 벗어났을 때
        onchange >> select 태그에서 다른 옵션을 선택하였을 때
    */

    // select 값이 바뀔때
    sel.onchange = (e) => {
        // value 속성은 select의 값을 가져온다.
        // event.currentTarget >> 현재 선택된 옵션을 뜻함
        let opt = e.currentTarget.value;
        let data = mdata[opt];

        //로고 변경
        logoB.innerText = data["logo"][0]
        logoSpan.innerText = data["logo"][1]

        // gnb 변경
        gnb.forEach((ele, idx) => ele.innerText = data["gnb"][idx]);

        // sec1 타이틀 변경
        titB.innerText = data["mtit"][0]
        titSpan.innerText = data["mtit"][1]

        // 섹션 제목 h2 변경
        secTit.forEach((ele, idx) => 
            if(idx === 0){return};
            ele.innerText = data["s2"][idx]);
    };
});