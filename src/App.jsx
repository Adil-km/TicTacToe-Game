import { Analytics } from '@vercel/analytics/react';
import NavBar from "./components/NavBar"
import Board from './components/Board';
import Footer from './components/Footer';
import Menu from './components/Menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Menu/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/play/:mode" element={<Board/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
      
      <Analytics/>
    </>
  );
}

export default App;