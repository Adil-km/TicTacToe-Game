import React from 'react'
import Button from './Button'

export default function Menu() {
  return (
<div className="absolute inset-0 flex flex-col items-center justify-center gap-8 bg-gradient-to-b from-orange-100 to-orange-300">
  <h1 className="text-5xl font-extrabold text-orange-700 drop-shadow-md mb-8 tracking-wide">
    Game Menu
  </h1>
    <Button>Two Player</Button>
    <Button>Player vs Computer</Button>

</div>

  )
}
