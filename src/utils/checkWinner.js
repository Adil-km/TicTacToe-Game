import { winConditions } from "./state.js";

export default function checkWinner(options,currentPlayer) {
    let roundWon = false;
    let op = null
    for (let i = 0; i < winConditions.length; i++) {
        const [a, b, c] = winConditions[i];
        const cellA = options[a];
        const cellB = options[b];
        const cellC = options[c];

        if (cellA === "" || cellB === "" || cellC === "") continue;

        if (cellA === cellB && cellB === cellC) {
            roundWon = true;
            op = [a,b,c]
            console.log(op);
            
            break;
        }
    }

    if (roundWon) {
        console.log(`${currentPlayer} won the game!`);
        return [true,currentPlayer,op];
    } else if (!options.includes("")) {
        console.log("It's a draw!");
        return [true,"draw"];
    } 
    return [false,currentPlayer];
}