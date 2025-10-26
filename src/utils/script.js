import find_best_move from './minmax.js';
import { winConditions } from "./state.js";

const cells = document.querySelectorAll(".cell");
const restartBtn = document.querySelector("#restartBtn");
const status = document.querySelector("#status");


let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let isRunning = false;

initializeGame();

function initializeGame() {
    // cells.forEach(cell => cell.addEventListener("click", cellClicked));
    // restartBtn.addEventListener("click", restartGame);
    // status.textContent = "Player X's turn";
    isRunning = true;
}

function cellClicked() {
    const cellIndex = this.getAttribute("pos");
    if (options[cellIndex] !== "" || !isRunning || currentPlayer !== "X") return; 
    makeMove(this, cellIndex, "X"); 
}

function makeMove(cellElement, cellIndex, player) {
    // 1. Update the state for the current player
    options[cellIndex] = player;
    cellElement.textContent = player;
    
    // 2. Check for winner/draw after the move
    const gameEnded = checkWinner();

    if (!gameEnded) {
        // 3. Change player and initiate AI move if it's 'O's turn
        changePlayer();
        if (currentPlayer === "O" && isRunning) {
            // Delay the AI move slightly for visual feedback
            setTimeout(aiMove, 500); 
        }
    }
}

function aiMove() {
    const bestMoveIndex = find_best_move(options, winConditions);
    
    if (bestMoveIndex !== -1) {
        const aiCellElement = cells[bestMoveIndex];
        makeMove(aiCellElement, bestMoveIndex, "O");
    }
}

export function checkWinner(options) {
    let roundWon = false;

    for (let i = 0; i < winConditions.length; i++) {
        const [a, b, c] = winConditions[i];
        const cellA = options[a];
        const cellB = options[b];
        const cellC = options[c];

        if (cellA === "" || cellB === "" || cellC === "") continue;

        if (cellA === cellB && cellB === cellC) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        console.log(`${currentPlayer} won the game!`);
        isRunning = false;
        return true;
    } else if (!options.includes("")) {
        console.log("It's a draw!");
        isRunning = false;
        return true;
    } 
    return false;
}

function changePlayer() {
    currentPlayer = (currentPlayer === "X") ? "O" : "X";
    status.textContent = `Player ${currentPlayer}'s turn`;
}

function restartGame() {
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    cells.forEach(cell => cell.textContent = "");
    status.textContent = "Player X's turn";
    isRunning = true;
}

