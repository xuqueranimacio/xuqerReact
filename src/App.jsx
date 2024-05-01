import { RoutesComp } from './RoutesComp.jsx'
import { useEffect } from 'react'
import Aos from "aos";
import './css/styles.css'
import './App.css'

function App() {

  useEffect(() =>{
    Aos.init();
}, [])

  return (
    <>
      <RoutesComp />
    </>
  )
}

export default App
