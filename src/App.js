import React from 'react'
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Room from './Pages/Room';
import Resto from './Pages/Resto';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import { Route, Routes } from 'react-router-dom'
function App() {
  return <>
 
   <Routes>
         <Route  path='/' element={ <Home/>} />
         <Route  path='/about' element={<About/>} />
         <Route  path='/room' element={<Room/>} />
         <Route  path='/resto' element={<Resto/>} />
         <Route  path='/blog' element={<Blog/>} />
         <Route  path='/contact' element={<Contact/>} />
        
         </Routes>
 
  </>
}

export default App;
