import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>  
      <Navbar />
      <ToastContainer />
      <Outlet />
    </>
  )
}

export default App