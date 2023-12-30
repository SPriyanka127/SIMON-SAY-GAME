let status=document.querySelector("h2");
let start=document.querySelector(".star");
let gameseq=[];
let userseq=[];
let btns=["red","blue","green","yellow"];
let s=document.querySelector(".s");
let scores=1;
let finalscore=0;
let maxscores=0;
let allBtns=document.querySelectorAll(".btn");
let hs=document.querySelector(".hs");
for(let btn of allBtns){
    btn.disabled=true;
}

start.addEventListener("click",function(){
    start.disabled=true;
    status.innerText=`GAME STATUS`;
    status.style.fontSize="1.5rem";
    s.innerText="0";
    for(let btn of allBtns){
        btn.disabled=false;
    }
    setTimeout(levelUp,500);
});


function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}

function levelUp(){
    userseq=[];
    let randno=Math.floor(Math.random()*4);
    console.log(randno);
    let randcolor=btns[randno];
    console.log(randcolor);
    let randbtn=document.querySelector(`.${randcolor}`);
    console.log(randbtn);
    btnFlash(randbtn);
    gameseq.push(randcolor);
    console.log(gameseq);
}

function btnPress(){
    let userbtn=this;
    btnFlash(userbtn);

    userColor=userbtn.getAttribute("id");
    userseq.push(userColor);
    console.log(userseq);
    checkAns(userseq.length-1);
}
function checkAns(idx){
    console.log("checking ansewers");
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelUp,1000);
            let marks=scores++;
            console.log(`marks:${marks}`);
            s.innerText=marks;
            finalscore=marks;
            
        }
    }
    else{
        console.log("not matched");
        status.innerText=`GAME OVER START AGAIN!!!.`;
        status.style.fontSize="3rem";
        maxscore();
        reset();
    }
}

for(let btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function maxscore(){
    console.log(`finalscore:${finalscore}`)
    console.log(`maxscore:${maxscores}`)
    if(finalscore>maxscores){
        maxscores=finalscore;
    }
    console.log(`maxscore  after updation:${maxscores}`)
    hs.innerText=`${maxscores}`;
}
function reset(){
    start.disabled=false;
    start.innerText="START";
    for(let btn of allBtns){
        btn.disabled=true;
    }
    scores=1;
    gameseq=[];
    userseq=[];
}