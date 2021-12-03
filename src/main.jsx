import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Project from "./routers/projects"
import Menu from "./components/Menu"

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} >
        <Route path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Sorry there's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
