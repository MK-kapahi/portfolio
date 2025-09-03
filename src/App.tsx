import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Header from './shared/header'
import ScrollProgress from './shared/scroll-progress'
import CustomCursor from './shared/cursor'
import Home from './pages/home'
import About from './pages/about'
import Skills from './pages/skills'
import Projects from './pages/projects'
import Contact from './pages/contact'
import Footer from './shared/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CustomCursor />
    <ScrollProgress />
    <div className='container'>
     <Header/>
     <Home/>
     <About/>
     <Skills/>
     <Projects/>
     <Contact/>
     <Footer/>
    </div>
    </>
  )
}

export default App
