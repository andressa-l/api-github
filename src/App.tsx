import { Outlet } from "react-router-dom"

import "../src/assets/logo-github.png"

import classes from './App.module.css'
import { FaGithub } from "react-icons/fa";
function App() {

  return (
    <>
      <div className={classes.app}>
        
        <h1>GitHub Search <FaGithub /></h1>
        <Outlet />
      </div>
    
    </>
  )
}

export default App
