import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import "../src/styles/App.css"
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'


function App() {

  return (
    <>
    <div>
     <Navbar />
     <Home/>
     <About/>
     <Skills/>
     <Projects/>
     <Contact/>
    </div>
     
    </>
  )
}

export default App
