import { useContext, useEffect} from 'react'
import { GameContext } from './Board';
import checkWinner from "../utils/checkWinner"

export default function Cells() {
    const {board, setBoard, player, changePlayer, gameState, setGameState ,setContent, isComputer, winnerCell,setWinnerCell} = useContext(GameContext);
    
    const cells = board.map((cellContent, index) => (
    <div onClick={(e)=>handleClick(e)} key={index} pos={index} className={winnerCell.includes(index) ? 'winner' : 'cell'}>
      {cellContent}
      </div>
  ));



  function handleClick(e){
    
    if(!gameState || (isComputer&& player ==="O"))return;
    let cellIndex = e.target.getAttribute("pos")
    let cellContent = e.target.textContent
    
    if(cellContent!="" || board[cellIndex]!="") {
      console.log("Already marked!");
      return;
    }
    
    const newBoard = [...board];
    newBoard[cellIndex] = player;

    setBoard(newBoard);

    let [win, p, op] = checkWinner(newBoard,player)

    if (win) {
      if (p === "draw") {
        setContent("It's a draw!");
      } else {
        setContent(`Player ${p} won the game!`); 
        setWinnerCell(op)
      }
      setGameState(false);
    }
    
    console.log(newBoard);
    if(!win){
       changePlayer()
      }
  }

  return (
  <>
    {cells}
  </>
  )
}


