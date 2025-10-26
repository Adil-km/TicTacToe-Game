import React, { useContext, useState } from 'react'
import { GameContext } from '../components/Board';

export default function BoardGrid({ children:cells}) {
const {restartGame, content} = useContext(GameContext);

  return (
    <div className="bg-orange-200 h-svh p-4 pt-10">
        <h1 className="font-bold font-mono text-center text-3xl text-shadow-md">Welcome to Tic Tac Toe</h1>
        <div className="flex flex-col justify-center items-center">
            <div className="h-full aspect-square bg-orange-400 shadow-[-5px_5px_15px_#00000066] m-4 sm:w-100 w-3/4 rounded-xl grid grid-cols-3 gap-4 p-4">
                {cells}
            </div>
            <p id='status' className='text-2xl font-bold p-4'>{content}</p>
            <button id='restartBtn' onClick={restartGame} className="bg-blue-400 py-2 px-6 font-mono font-extrabold text-white text-2xl rounded hover:bg-blue-500 focus:bg-blue-500 transition-all duration-100 ease-in shadow-md" tabIndex={10}>Restart</button>
        </div>
      </div>
  )
}
