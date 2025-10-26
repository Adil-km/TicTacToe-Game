
import BoardGrid from '../layout/BoardGrid';
import Cells from './Cells';
import { createContext, useState } from 'react';

export const GameContext = createContext()

export default function Board() {

  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""])
  const [player, setPlayer] = useState("X")
  const [gameState, setGameState] = useState(true)
  const [content, setContent] = useState("Player X's turn")

  function changeContent(text){
    setContent(p=>p = text);
  }

  function changePlayer(){
    setPlayer(currentPlayer => (currentPlayer === "X" ? "O" : "X"));
  }

  function isRunning(){
    setGameState(prevState => prevState = false)
  }

  function restartGame(){
    changeContent("Player X's turn")
    setBoard(board => board = ["", "", "", "", "", "", "", "", ""]);
    setPlayer(currentPlayer => currentPlayer ="X");
    setGameState(prevState => prevState = true)
    console.log("Game Restarted");
  }

  return (
    <>
        <GameContext.Provider value={{board,setBoard, player, changePlayer, gameState, isRunning, restartGame, content, changeContent}}>
          <BoardGrid>
              <Cells/>
          </BoardGrid>
        </GameContext.Provider>
    </>
  )
}
