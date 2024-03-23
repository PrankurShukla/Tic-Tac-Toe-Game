let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");



let turnO = true;
let count =0;

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const draw = () => {
    msg.innerText = "Draw, Play New Game again";
    msgContainer.classList.remove("hide");
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    count =0;
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turnO == true){
            box.innerText = "O";
            box.style.color = "grey";
            turnO = false;
            count++;
        } else{
            box.innerText = "X";
            box.style.color = "black";
            turnO = true;
            count++;
        }
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner",pos1Val);
                showWinner(pos1Val);
            }else{
                if(count === 9){
                    draw();
                }
            }
        }
    
    }

};
newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

