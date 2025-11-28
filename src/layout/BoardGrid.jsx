import React, { useContext, useEffect } from 'react'
import { GameContext } from '../components/Board';
import Button from '../components/Button';
import restartIcon from '../assets/restart.png';
import backBtnIcon from '../assets/backBtn.png'
import { Link } from 'react-router-dom';

export default function BoardGrid({ children:cells}) {
const {restartGame, content} = useContext(GameContext);

  const handleKeyDown = (e) => {
    if (e.key.toLowerCase() === "r") {
      restartGame();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);


  return (
    <div className="bg-orange-200 p-4 pt-10 pb-30">
        <div className="flex flex-col justify-center items-center">
            <div className="h-full aspect-square bg-gradient-to-b from-orange-400 to-orange-500 shadow-[-5px_5px_15px_#00000066] m-4 sm:w-100 w-3/4 rounded-xl grid grid-cols-3 gap-4 p-4">
                {cells}
            </div>
            <p id='status' className='text-2xl font-bold p-4 font-mono text-center text-shadow-md'>{content}</p>
            <div className='flex justify-center items-center gap-7 sm:flex-row flex-col-reverse'>
              <Link to="/"  tabIndex={-1}>
                  <Button><img className='w-10 inline mr-4 mb-1' src={backBtnIcon}/>Go back</Button>
              </Link>
              <Button onClick={restartGame} onKeyDown={(e)=>{console.log(e.key);}}><img className='w-7 inline mr-4 mb-1' src={restartIcon}/>Restart Game</Button>
            </div>
        </div>
      </div>
  )
}
