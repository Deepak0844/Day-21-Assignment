setTimeout(() =>{
    document.querySelector(".display").innerText= 10
    setTimeout(()=>{
        document.querySelector(".display").innerText= 9;
    },1000);
    setTimeout(()=>{
        document.querySelector(".display").innerText= 8;
    },1000*2);
    setTimeout(()=>{
        document.querySelector(".display").innerText= 7;
    },1000*3);
    setTimeout(()=>{
        document.querySelector(".display").innerText= 6;
    },1000*4);
    setTimeout(()=>{
        document.querySelector(".display").innerText= 5;
    },1000*5);
    setTimeout(()=>{
        document.querySelector(".display").innerText= 4;
    },1000*6);
    setTimeout(()=>{
        document.querySelector(".display").innerText= 3;
    },1000*7);
    setTimeout(()=>{
        document.querySelector(".display").innerText= 2;
    },1000*8);
    setTimeout(()=>{
        document.querySelector(".display").innerText= 1;
    },1000*9);
    setTimeout(()=>{
        document.querySelector(".display").innerText= "Happy Independence Day";
    },1000*10);
},1000);
