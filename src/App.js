/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"  
import './App.css';
import { Routes, Route, HashRouter } from "react-router-dom"
import Home from "./pages/home"
import Nav from "./components/nav"
import Post from "./pages/post"
import Projects from './pages/projects';
import Blogs from './pages/blogs';

function App() {
  return (
    <HashRouter>
      {/* nav skip */}
      <a href="#main" css={css({position: 'absolute', top: '-1000px', left: '-1000px'})}>Skip to main content</a>
      <Nav css={css({position: 'fixed'})}></Nav>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/projects" element={<Projects/>}/>
        <Route path = "/post/:postNumber/" element = {<Post/>}/>
        <Route path = "/blogs" element = {<Blogs/>}/>
      </Routes>
      <p css = {css({margin: "auto", textAlign: "center", paddingBottom: '15px'})}> &copy; Jonah Ableman 2024</p>
    </HashRouter>
  );
}

export default App;
