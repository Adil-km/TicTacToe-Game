import { useContext} from 'react'
import { GameContext } from './Board';
import checkWinner from "../utils/checkWinner"

export default function Cells() {
    const {board, setBoard, player, changePlayer, gameState, isRunning,changeContent} = useContext(GameContext);
    

    const cells = board.map((cellContent, index) => (
    <div onClick={(e)=>handleClick(e)} key={index} pos={index} tabIndex={index} className="cell">
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

    changeContent(`Player ${(player==="X"?"O":"X")}'s turn`)
    let [win, p] = checkWinner(newBoard,player)

    if(win){
      changeContent(`Player ${p} won the game!`)
      isRunning()
    }
    
    changePlayer()
    
    console.log(newBoard);
  }

  return (
  <>
    {cells}
  </>
  )
}


