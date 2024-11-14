import "./index.css"
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'
import Nav from './components/navbar.jsx'
import Frame1  from './components/frame1.jsx'
import Frame2  from './components/frame2.jsx'
import Frame3  from './components/frame3.jsx'
import Frame4 from './components/frame4.jsx'
import Frame5 from './components/frame5.jsx'
import Frame6 from './components/frame6.jsx'
function App() {

  return (
    <>
      <div>
        <Frame1/>
        <Frame2/>
        <Frame3/>
        <Frame4/>
        <Frame5/>
        <Frame6/>
      </div>
      <div>
        
      </div>
      
    </>
  )
}

export default App
