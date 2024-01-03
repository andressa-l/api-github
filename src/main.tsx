import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./assets/background.jpg"
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

//pages

import Home from "./routes/Home";
import Repos from './routes/Repos.tsx';

const router = createBrowserRouter([
  { 
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/repos/:username",
        element: <Repos/>,
      }
    ],  
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
