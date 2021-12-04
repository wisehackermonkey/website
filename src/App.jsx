import { Component, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Stack, Paper } from "@mui/material"
import { Link, Outlet } from "react-router-dom"

import Menu from "./components/Menu"
import Title from "./components/Title";
import Tilt from 'react-parallax-tilt';
import Particles from "react-tsparticles";

import PARTICLES from "./particles.json"
function App() {
  const [count, setCount] = useState(0)
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="App">
      <header className="App-header">
      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={PARTICLES}
    />
      <Stack>
        <Title />
        <Menu />
        </Stack>
      </header>
    </div>
  )
}

export default App
