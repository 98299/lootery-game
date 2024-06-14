import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Game from "./lottery.jsx"
import { genTicket } from './helper.js'
function App() {
 return(
  <>
  <Game/>
  </>
 )
}

export default App
