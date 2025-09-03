import './App.css'
import Header from './shared/header'
import Home from './pages/home'
import About from './pages/about'
import Skills from './pages/skills'
import Projects from './pages/projects'
import Contact from './pages/contact'
import Footer from './shared/footer'

function App() {

  return (
    <>
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
