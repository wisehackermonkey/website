import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Stack, Paper } from "@mui/material"
import { Link, Outlet } from "react-router-dom"

import Menu from "./components/Menu"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Orans website🦾</h1>

        <Menu />

      </header>
    </div>
  )
}

export default App
