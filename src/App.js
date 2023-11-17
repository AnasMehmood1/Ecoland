import React from 'react'
import './App.css';
import About from './Component/About/About';
import Navbar from './Component/Home/Navbar';
import Services from './Component/Service/Services';
import Destination from './Component/Destination/Destination';
import Hotel from './Component/Hotel/Hotel';
function App() {
  return <>
<Navbar/>
<Services/>
<About/>
< Destination/>
<Hotel/>
  </>
}

export default App;
