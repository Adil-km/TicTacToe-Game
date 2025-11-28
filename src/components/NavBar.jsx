import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="flex flex-row justify-between w-full p-4 px-7 bg-orange-100 drop-shadow-md tracking-wider">
        <div className="font-bold text-2xl text-red-600"><a href="/">Tic Tac Toe</a></div>
        <div className="flex flex-row gap-5">
      <Link
        className="hover:text-red-600 transition-all duration-200 ease-in hover:tracking-[3px]"
        to="/about"
      >
        About
      </Link>
          <a className="hover:text-red-600 transition-all duration-200 ease-in hover:tracking-[3px]" href="https://www.linkedin.com/in/adil-km" target="_blank" >Developer</a>
        </div>
      </nav>
  )
}

export default NavBar