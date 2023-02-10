/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"  
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Nav from "./components/nav"
import Projects from './pages/projects';
function App() {
  return (
    <Router >
      <Nav css={css({position: 'fixed'})}/>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/projects" element={<Projects/>}/>
      </Routes>
    </Router>
  );
}

export default App;
