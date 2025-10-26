import { Analytics } from '@vercel/analytics/react';
import NavBar from "./components/NavBar"
import Board from './components/Board';
import Footer from './components/Footer';
function App() {

  return (
    <>
      <NavBar/>
      <Board/>
      <Footer/>
      
      <Analytics/>
    </>
  );
}

export default App;