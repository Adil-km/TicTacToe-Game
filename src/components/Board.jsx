
import BoardGrid from '../layout/BoardGrid';
import checkWinner from '../utils/checkWinner';
import find_best_move from '../utils/minmax';
import { winConditions } from '../utils/state';
import Cells from './Cells';
import { createContext, useEffect, useState } from 'react';

export const GameContext = createContext()

export default function Board() {
  
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""])
  const [player, setPlayer] = useState("X")
  const [gameState, setGameState] = useState(true)
  const [content, setContent] = useState("Player X's turn")

  useEffect(() => {
    if (player === "O" && gameState) {
      const timer = setTimeout(() => {
        const bestMoveIndex = find_best_move(board, winConditions);
        if (bestMoveIndex !== -1) {
          const newBoard = [...board];
          newBoard[bestMoveIndex] = "O";
          setBoard(newBoard);
          setPlayer("X");
          setContent("Player X's turn");
          
          let [win, p] = checkWinner(newBoard,"O")
        
          if(win){
            setContent(`Player O won the game!`)
            setGameState(false)
          }
          
        }
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [player, board, gameState]);
  
  function changePlayer() {
    if (player === "X") {
      setPlayer("O");
      setContent("AI is thinking...");
    }
  }
  
  function restartGame(){
    setContent("Player X's turn")
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("X");
    setGameState(true)
    console.log("Game Restarted");
  }
  
  return (
    <>
        <GameContext.Provider value={{board,setBoard, player, changePlayer, gameState, setGameState, restartGame, content, setContent}}>
          <BoardGrid>
              <Cells/>
          </BoardGrid>
        </GameContext.Provider>
    </>
  )
}
