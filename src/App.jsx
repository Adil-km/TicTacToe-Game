import { Analytics } from "@vercel/analytics/next"

function App() {
  return (
    <>
      <nav className="flex flex-row justify-between w-full p-4 px-7 bg-orange-100 drop-shadow-md tracking-wider">
        <div className="font-bold text-2xl text-red-600"><a href="/">Tic Tac Toe</a></div>
        <div className="flex flex-row gap-5">
          <a className="hover:text-red-600 transition-all duration-200 ease-in hover:tracking-[3px]" href="#">About</a>
          <a className="hover:text-red-600 transition-all duration-200 ease-in hover:tracking-[3px]" href="https://www.linkedin.com/in/adil-km" target="_blank">Developer</a>
        </div>
      </nav>
      <div className="bg-orange-200 h-svh p-4 pt-20">
        <h1 className="font-bold font-mono text-center text-3xl text-shadow-md">Welcome to Tic Tac Toe</h1>
        <div className="flex flex-col justify-center items-center">
            <div className=" h-full aspect-square bg-orange-400 shadow-[-5px_5px_15px_#00000066] m-4 sm:w-100 w-3/4 rounded-xl grid grid-cols-3 gap-4 p-4">
              <div pos="0" tabIndex={1} className="cell"></div>
              <div pos="1" tabIndex={2} className="cell"></div>
              <div pos="2" tabIndex={3} className="cell"></div>
              <div pos="3" tabIndex={4} className="cell"></div>
              <div pos="4" tabIndex={5} className="cell"></div>
              <div pos="5" tabIndex={6} className="cell"></div>
              <div pos="6" tabIndex={7} className="cell">S</div>
              <div pos="7" tabIndex={8} className="cell"></div>
              <div pos="8" tabIndex={9} className="cell"></div>

            </div>
            <button className="bg-blue-400 py-2 px-6 font-mono font-extrabold text-white text-2xl rounded hover:bg-blue-500 focus:bg-blue-500 transition-all duration-100 ease-in shadow-md" tabIndex={10}>Restart</button>
        </div>
      </div>
      <footer className="text-center text-lg bg-orange-100 shadow-[-1px_0_10px_#00000022] p-2">
         Made with <span class="heart">&#10084;</span> by <a className="font-bold transition-all duration-200 ease-in" href="https://www.linkedin.com/in/adil-km" target="_blank" tabIndex={11}>Adil</a>
      </footer>
      <Analytics/>
    </>
  );
}

export default App;