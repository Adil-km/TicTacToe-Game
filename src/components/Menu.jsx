import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import pvpIcon from '../assets/pvp.png'
import computerIcon from '../assets/computer.png'

export default function Menu() {
  return (
<div className="bg-orange-200 h-svh p-4 pt-10 flex flex-col items-center justify-center gap-8 bg-gradient-to-b ">

      <div className="text-center mb-8">
        <h2 className="text-7xl font-extrabold text-rose-800 mb-3 animate-pulse tracking-wide">
          Welcome to
        </h2>

        <h1 className="font-extrabold text-orange-700 text-5xl sm:text-6xl">
          <span className="inline-block transition-all duration-300 hover:scale-125 hover:rotate-3 hover:text-orange-800">Tic</span>
          <span className="inline-block mx-3 text-purple-700 transition-all duration-300 hover:scale-125 hover:-rotate-3 hover:text-fuchsia-700">Tac</span>
          <span className="inline-block transition-all duration-300 hover:scale-125 hover:rotate-6 hover:text-rose-600">Toe</span>
        </h1>
      </div>

    <Link to="/play/player" tabIndex={-1}>
      <Button><img className='w-15 max-w-15 inline pr-4 mb-2' src={pvpIcon}/>Two Player</Button>
    </Link>

    <Link to="/play/computer" tabIndex={-1}>
      <Button ><img className='w-15 max-w-15 inline pr-4 mb-2' src={computerIcon}/>Computer vs Player</Button>
    </Link>

</div>

  )
}
