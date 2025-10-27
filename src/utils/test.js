
export function RestartGame(){

    // const [board, setBoard] = useState(initialBoard);

    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.textContent = "");
    console.log("Game Restarted!....");
    
}