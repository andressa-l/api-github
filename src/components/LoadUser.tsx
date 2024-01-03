// import React from 'react'
import { FaSpinner } from "react-icons/fa"

import classes from "./LoadUser.module.css"

const LoadUser = () => {
  return (
    <>
    <FaSpinner className={classes.loader} />
    </>
  )
}

export default LoadUser