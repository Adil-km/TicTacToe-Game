
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
  const [isComputer, setIsComputer] = useState(false)

  useEffect(() => {
    if (player === "O" && gameState && isComputer) {
      const timer = setTimeout(() => {
        const bestMoveIndex = find_best_move(board, winConditions);
        if (bestMoveIndex !== -1) {
          const newBoard = [...board];
          newBoard[bestMoveIndex] = "O";
          setBoard(newBoard);
          setPlayer("X");
          setContent("Player X's turn");
          
          let [win, p] = checkWinner(newBoard,"O")
        
          if (win) {
            setContent(`Player ${player} won the game!`);
            setGameState(false);
          } else if (!newBoard.includes("")) {
            setContent("It's a draw!");
            setGameState(false);
          }
          
        }
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [player, board, gameState]);
  
function changePlayer() {
    setPlayer(currentPlayer => {
      const nextPlayer = currentPlayer === "X" ? "O" : "X";

      if (!isComputer) {
        setContent(`Player ${nextPlayer}'s turn`);
      } else {
        if (nextPlayer === "O") {
          setContent("AI is thinking...");
        } else {
          setContent(`Player ${nextPlayer}'s turn`);
        }
      }
      
      return nextPlayer;
    });
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
        <GameContext.Provider value={{board,setBoard, player, changePlayer, gameState, setGameState, restartGame, content, setContent, isComputer, setIsComputer}}>
          <BoardGrid>
              <Cells/>
          </BoardGrid>
        </GameContext.Provider>
    </>
  )
}
