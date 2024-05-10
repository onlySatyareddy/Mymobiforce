import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Mymobiforce from './Components/Mymobiforce';
import Service from './Components/Service';
import OurPlatform from './Components/OurPlatform';
import RequestDemo from './Components/RequestDemo';
import Login from './Components/Login';
import Personal from './Components/Personal';
import Register from './Components/Register';
import Otherdet from './Components/otherdet';
import Currentaddress from './Components/Currentaddress';

function App() {
  
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/mymobiforce" element={<Mymobiforce />} />
        <Route path="/ourplatform" element={<OurPlatform />} />
        <Route path="/requestdemo" element={<RequestDemo />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/service" element={<Service/>} />
        <Route path='/Personal' element={<Personal/>} />
        <Route path='/otherdet' element={<Otherdet/>}/>
        <Route path='/Currentaddress' element={<Currentaddress/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;






