console.log("Welcome to Tic Tak Toe")
let music= new Audio("music.mp3");
let next_turn=new Audio("ting.mp3");
let gameOver=new Audio("gameover.mp3");
let isgameover=false;
let turn="X";

//Function to Change turn
const changeTurn=()=>{
    return turn ==="X"?"0":"X";
}

//Function to check for win
const checkWin=()=>{
    boxtext=document.getElementsByClassName('boxtext');
    let wins = [
    [0, 1, 2, 10, 0, 0],    // Horizontal top
    [3, 4, 5, 10, 10, 0],   // Horizontal middle
    [6, 7, 8, 10, 20, 0],   // Horizontal bottom
    [0, 3, 6, 0, 10, 90],   // Vertical left
    [1, 4, 7, 10, 10, 90],  // Vertical middle
    [2, 5, 8, 20, 10, 90],  // Vertical right
    [0, 4, 8, 10, 10, 45],  // Diagonal top-left to bottom-right
    [2, 4, 6, 10, 10, -45], // Diagonal top-right to bottom-left
];
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText= boxtext[e[0]].innerText + "won";
            isgameover=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px";

            const winning_line=document.querySelector('.winning-line');
            winning_line.style.display='block';
            winning_line.style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
    }  
  });
};

//game logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText ===''){
             boxtext.innerText=turn; 
            turn=changeTurn();
        next_turn.play();   
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText="Turn for" + turn; 
            }
    }
    })
})

//reset button
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText="";
    });
    turn ="X";
    isgameover=false;
     document.getElementsByClassName("info")[0].innerText="Turn for" + turn; 
     document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0";

})