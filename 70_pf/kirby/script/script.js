window.addEventListener("DOMContentLoaded", function(){
    // 작품 목록
    const list01 = document.querySelectorAll("#list li")[0];
    const list02 = document.querySelectorAll("#list li")[1];
    const list03 = document.querySelectorAll("#list li")[2];
    const list04 = document.querySelectorAll("#list li")[3];
    const list05 = document.querySelectorAll("#list li")[4];
    const list06 = document.querySelectorAll("#list li")[5];
    const list07 = document.querySelectorAll("#list li")[6];
    const list08 = document.querySelectorAll("#list li")[7];
    const list09 = document.querySelectorAll("#list li")[8];
    const list10 = document.querySelectorAll("#list li")[9];
    const list11 = document.querySelectorAll("#list li")[10];
    const list12 = document.querySelectorAll("#list li")[11];
    
    // 팝업창
    const model = document.querySelector("#model");
    const close = document.querySelector(".close");
    
    // 팝업 내용
    const popup01 = document.querySelectorAll("#model .popup li")[0];
    const popup02 = document.querySelectorAll("#model .popup li")[1];
    const popup03 = document.querySelectorAll("#model .popup li")[2];
    const popup04 = document.querySelectorAll("#model .popup li")[3];
    const popup05 = document.querySelectorAll("#model .popup li")[4];
    const popup06 = document.querySelectorAll("#model .popup li")[5];
    const popup07 = document.querySelectorAll("#model .popup li")[6];
    const popup08 = document.querySelectorAll("#model .popup li")[7];
    const popup09 = document.querySelectorAll("#model .popup li")[8];
    const popup10 = document.querySelectorAll("#model .popup li")[9];
    const popup11 = document.querySelectorAll("#model .popup li")[10];
    const popup12 = document.querySelectorAll("#model .popup li")[11];

    // 웹페이지 맨 처음 열었을 때 안보이게
    this.window.onload = function(){
        model.style.display = "none";
        popup01.style.display = "none";
        popup02.style.display = "none";
        popup03.style.display = "none";
        popup04.style.display = "none";
        popup05.style.display = "none";
        popup06.style.display = "none";
        popup07.style.display = "none";
        popup08.style.display = "none";
        popup09.style.display = "none";
        popup10.style.display = "none";
        popup11.style.display = "none";
        popup12.style.display = "none";
    }

    // 작품 목록 사진 누르면 팝업 내용 뜨게
    list01.onclick = function(){
        model.style.display = "block";
        popup01.style.display = "block";
    };

    list02.onclick = function(){
        model.style.display = "block";
        popup02.style.display = "block";
    };

    list03.onclick = function(){
        model.style.display = "block";
        popup03.style.display = "block";
    };

    list04.onclick = function(){
        model.style.display = "block";
        popup04.style.display = "block";
    };

    list05.onclick = function(){
        model.style.display = "block";
        popup05.style.display = "block";
    };

    list06.onclick = function(){
        model.style.display = "block";
        popup06.style.display = "block";
    };

    list07.onclick = function(){
        model.style.display = "block";
        popup07.style.display = "block";
    };

    list08.onclick = function(){
        model.style.display = "block";
        popup08.style.display = "block";
    };

    list09.onclick = function(){
        model.style.display = "block";
        popup09.style.display = "block";
    };

    list10.onclick = function(){
        model.style.display = "block";
        popup10.style.display = "block";
    };

    list11.onclick = function(){
        model.style.display = "block";
        popup11.style.display = "block";
    };

    list12.onclick = function(){
        model.style.display = "block";
        popup12.style.display = "block";
    };

    // 팝업 닫기
    close.onclick = function(){
        model.style.display = "none";
        popup01.style.display = "none";
        popup02.style.display = "none";
        popup03.style.display = "none";
        popup04.style.display = "none";
        popup05.style.display = "none";
        popup06.style.display = "none";
        popup07.style.display = "none";
        popup08.style.display = "none";
        popup09.style.display = "none";
        popup10.style.display = "none";
        popup11.style.display = "none";
        popup12.style.display = "none";
    };
});