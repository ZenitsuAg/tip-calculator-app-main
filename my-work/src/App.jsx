import {Fragment, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WhiteSpace from './Components/WhiteSpace'
import Input from './Components/Input'

function App() {
  // Some code
  return (
    <div className="font-space-mono min-w-screen min-h-screen md:flex md:justify-center md:items-center md:flex-col">
      <div className="mb-8">
        <h1 className="tracking-[0.75rem] text-very-dark-cyan font-[700]">SPLI</h1>
        <h1 className="tracking-[0.75rem] text-very-dark-cyan font-[700]">TTER</h1>
      </div>
      <WhiteSpace />
    </div>
  )
}

export default App
