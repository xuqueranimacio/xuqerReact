import { RoutesComp } from './RoutesComp.jsx'
import { useEffect } from 'react'
import { Analytics } from "@vercel/analytics/react"
import Aos from "aos";
import './css/styles.css'
import './App.css'

function App() {

  useEffect(() =>{
    Aos.init();
}, [])

  return (
    <>
      <Analytics />
      <RoutesComp />
    </>
  )
}

export default App
