import About from './Component/About/About'
import Contact from './Component/Contact/Contact'
import Header from './Component/Header/Header'
import Intro from './Component/Intro/Intro'
import Portfolio from './Component/Portfolio/Portfolio'

function App() {
  return (
    <>
      <Header></Header>
      <Intro></Intro>
      <About />
      <Portfolio />
      <Contact />
    </>
  )
}

export default App
