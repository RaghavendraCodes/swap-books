import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './styles/main.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import OpenPage from './components/OpenPage.jsx'
import Login from './components/Login.jsx'
import Signin from './components/Signin.jsx'
import Home from './components/Home.jsx'
import Layout from './Layout.jsx'

const router = createBrowserRouter( 
  createRoutesFromElements(
    <Route>
    <Route path='' element={<OpenPage/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='signin' element={<Signin/>}/>
    <Route path='home' element={<Home/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
