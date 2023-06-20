import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import { Scene } from './components/Scene'
import { Scene2 } from './components/Scene2'
import  Scene4  from './components/Scene4'
import { Canvas } from '@react-three/fiber'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />
      <Canvas id='inicio' className='canvas' shadows camera={{ position: [4, 4, -12], fov: 15}}>
        <Scene />
      </Canvas>
      <About />
      {/* <Canvas id='skills' className='canvas' shadows camera={{ position: [5, 0, 0], fov: 25}}>
        <Scene2 />
      </Canvas> */}
      {/* <Canvas id='skills' className='canvas' shadows camera={{ position: [5, 0, 0], fov: 25}}> */}
      <Scene4 />
      {/* </Canvas> */}
      <Portfolio />
      <Contact />
    </>
  )
}

export default App
