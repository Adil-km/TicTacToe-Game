import { useContext} from 'react'
import { GameContext } from './Board';
import checkWinner from "../utils/checkWinner"

export default function Cells() {
    const {board, setBoard, player, changePlayer, gameState, setGameState ,setContent} = useContext(GameContext);
    
    const cells = board.map((cellContent, index) => (
    <div onClick={(e)=>handleClick(e)} key={index} pos={index} className="cell">
      {cellContent}
      </div>
  ));

  function handleClick(e){
    
    if(!gameState)return;
    let cellIndex = e.target.getAttribute("pos")
    let cellContent = e.target.textContent
    
    if(cellContent!="" || board[cellIndex]!="") {
      console.log("Already marked!");
      return;
    }
    
    const newBoard = [...board];
    newBoard[cellIndex] = player;

    setBoard(newBoard);

    let [win, p] = checkWinner(newBoard,player)

    if (win) {
      if (p === "draw") {
        setContent("It's a draw!");
      } else {
        setContent(`Player ${p} won the game!`); 
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


