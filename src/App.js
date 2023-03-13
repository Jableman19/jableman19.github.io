/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"  
import './App.css';
import { Routes, Route, HashRouter } from "react-router-dom"
import Home from "./pages/home"
import Nav from "./components/nav"
import Projects from './pages/projects';
import Showcase from './pages/showcase';
function App() {
  return (
    <HashRouter>
      <Nav css={css({position: 'fixed'})}/>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/projects" element={<Projects/>}/>
        <Route path ="/showcase" element={<Showcase/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
