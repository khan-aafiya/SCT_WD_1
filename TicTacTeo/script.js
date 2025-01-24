let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let resetBtn2 = document.querySelector(".reset-btn2");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let drawContainer = document.querySelector(".draw-container");
let msg = document.querySelector("#msg");
let msgDraw = document.querySelector("#msg-draw");
let count = 1;
let win = 0;
console.log("hello");

let turnO = true; // playerX, plyerO

// array of array
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
    msgContainer.classList.add("hide");
    drawContainer.classList.add("hide");
    count = 1;
}
const resetGame2 = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    drawContainer.classList.add("hide");
    count = 1;
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turnO) { // turnO === true
            // playerO
            box.innerText = "O";
            box.style.color = "#b0413e";
            turnO = false;
        }
        else {
            // playerX
            box.innerText = "X";
            box.style.color = "blue";
            turnO = true;
        }

        box.disabled = true;

        console.log("count =", count);
        checkWinner();
        ++count;
    })
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
    win = 0;
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    // show msg
    // msg.innerText = `Congratulations, Winner is ${ winner }`;
    if (winner === 'O') {
        msg.innerText = `Congratulations, Winner is player-1`;
    } else {
        msg.innerText = `Congratulations, Winner is player-2`;
    }

    // to disable hide functionality
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for (let pattern of winPatterns) {

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            // winning conditon
            if (pos1Val == pos2Val && pos2Val == pos3Val) {
                win = 1;
                showWinner(pos1Val);
            }
        }
    }
    if (count == 9 && win == 0) {
        draw();
    }

};
const draw = () => {
    drawContainer.classList.remove("hide");
    msgDraw.innerText = "Game was a Draw"
    
}

// if newGameBtn click resetGame function call
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
resetBtn2.addEventListener("click", resetGame2);