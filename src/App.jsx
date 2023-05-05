import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/Navbar'
import Error404 from './components/404/Error404';
import Landing from './layouts/Landing/Landing'
function App() {

  return (
     
    <BrowserRouter>
    <div className='app'>
       <NavBar/>
        <Routes>  
          <Route exact path="/" element={<Landing/>} />
          </Routes> 
        </div>
      </BrowserRouter>
  )
}

export default App
