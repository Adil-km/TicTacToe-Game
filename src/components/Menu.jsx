import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
<div className="bg-orange-200 h-svh p-4 pt-10 h-svh flex flex-col items-center justify-center gap-8 bg-gradient-to-b ">
  <h1 className="text-5xl font-extrabold text-orange-700 drop-shadow-md mb-8 tracking-wide">
    Game Menu
  </h1>
    <Link to="/play/player">
      <Button>Two Player</Button>
    </Link>

    <Link to="/play/computer">
      <Button>Player vs Computer</Button>
    </Link>

</div>

  )
}
