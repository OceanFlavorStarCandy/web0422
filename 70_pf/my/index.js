// ready 이벤트
$(() => {
    const ye = $("span").eq(0);
    const mo = $("span").eq(1);
    const da = $("span").eq(2);
    const we = $("span").eq(3);
    const ho = $("span").eq(4);
    const mi = $("span").eq(5);
    const se = $("span").eq(6);

    // 1초마다 clock 호출
    setInterval(clock, 1000);

    function clock() {
        // d라는 날짜 인스턴스 생성
        const d = new Date();

        // 날짜/시간 값 가져오기
        let yea = d.getFullYear();
        let mon = d.getMonth() + 1; //0~11
        let dat = d.getDate(); //0~11
        let wee = d.getDay(); // 0(일)~6(토)
        let hou = d.getHours();
        let min = d.getMinutes();
        let sec = d.getSeconds();

        const weeks = ["일", "월", "화", "수", "목", "금", "토"];

        // 출력
        ye.text(yea + "년");
        mo.text(zeroAdd(mon) + "월");
        da.text(zeroAdd(dat) + "일");
        we.text("(" + weeks[wee] + ")");
        ho.text(zeroAdd(hou));
        mi.text(zeroAdd(min));
        se.text(zeroAdd(sec));

        // 한 자리 번호를 2자로 표시
        // 예) 0~9는 00~09로 표기
        function zeroAdd(num) {
            // 삼항 연산자
            // 조건 ? 참 : 거짓
            return num < 10 ? (num = "0" + num) : (num = num);
        }
    } // clock_fn

    // progress bar & counter
    // 요소 찾기
    const cntNumEle = $(".counter b");
    const barNumEle = $(".progress-bar b");
    const barEle = $(".progress-bar");
    const profile1 = $(".profile1");
    const profile2 = $(".profile2");
    const photo = $(".photo");

    // 카운터의 시작 값과 목표 값
    const counterStartNums = [0, 0, 0, 0];
    const counterNums = [2, 5, 7, 5];

    // 진행율바의 시작 값과 목표 값
    const progressBarStartNums = [0, 0, 0, 0];
    const progressBarNums = [90, 95, 90, 80];

    $(window).scroll(() => {
        let st = $(this).scrollTop();
        console.log(st);

        if (st >= 350) {
            profile1.css({ transform: "translateY(0)" });
        } else {
            profile1.css({ transform: "translateY(300px)" });
        }

        if (st >= 500) {
            profile2.css({ transform: "translateY(0)" });
            photo.css({ transform: "translateY(0)" });
        } else {
            profile2.css({ transform: "translateY(300px)" });
            photo.css({ transform: "translateY(300px)" });
        }

        // 한계점: 1200, 1400
        // progress bar: 1200
        if (st >= 1200) {
            barNumEle.each((idx) => progress(idx));
        } else {
            // 처음 값으로 되돌리기
            for (let i = 0; i < progressBarStartNums.length; i++) {
                progressBarStartNums[i] = 0;
                cntNumEle.eq(i).text(progressBarStartNums[i]);
                barNumEle.eq(i).text(progressBarStartNums[i]);
                barEle.eq(i).css({ width: progressBarStartNums[i] + "%" });
            }
        }

        // counter: 1400
        if (st >= 1400) {
            // 객체.each((색인번호, 요소)=>{실행코드});
            cntNumEle.each((idx) => counter(idx));
        } else {
            // 처음 값으로 되돌리기
            for (let i = 0; i < counterStartNums.length; i++) {
                counterStartNums[i] = 0;
                cntNumEle.eq(i).text(counterStartNums[i]);
            }
        }
    });

    // progress bar function
    function progress(i) {
        progressBarStartNums[i]++;
        if (progressBarStartNums[i] <= progressBarNums[i]) {
            // setTimeout(함수, 시간) -> 시간은 밀리초
            // 숫자가 작을 수록 바와 숫자가 빠르게 움직임
            setTimeout(() => progress(i), 100);
        } else {
            return;
        }
        barNumEle.eq(i).text(progressBarStartNums[i]);
        barEle.eq(i).css({ width: progressBarStartNums[i] + "%" });
    }

    // counter function
    function counter(i) {
        counterStartNums[i]++;
        if (counterStartNums[i] <= counterNums[i]) {
            setTimeout(() => counter(i), 300);
        } else {
            return;
        }
        cntNumEle.eq(i).text(counterStartNums[i]);
    }

    // lightbox2 link
    const lb_caption = $(".lb-caption");
    lb_caption.css({ cursor: "pointer" });
    lb_caption.click(() => {
        const lb_link = $(event.currentTarget).text();
        $(location).attr({ href: lb_link, target: "_blank" });
    });

}); // ready
