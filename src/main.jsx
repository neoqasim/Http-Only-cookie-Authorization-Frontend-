import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import store from './store.js';
import { Provider } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route path='/' index={true} element={<Home />} />
      <Route path='/signup' element={< Signup />} />
      <Route path='/login' element={<Login />} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  </Provider>
)
