import { Analytics } from '@vercel/analytics/react';
import NavBar from "./components/NavBar"
import Board from './components/Board';
import Footer from './components/Footer';
import Menu from './components/Menu';
function App() {

  return (
    <>
      <NavBar/>
      <Board/>
      <Footer/>
      {/* <Menu/> */}
      
      <Analytics/>
    </>
  );
}

export default App;