import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import SocialLinks from './Components/SocialLinks'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <SocialLinks />
      <About />
      <Skills />
      <Projects />
      {/*<Contact />*/}
      <Footer />
    </>
  )
}

export default App
