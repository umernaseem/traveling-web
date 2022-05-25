import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Places from './components/pages/Places';
import SignUp from './components/pages/SignUp';
import Contactus from './components/pages/Contactus';
import Signin from './components/pages/Signin';
function App() {
 
  return (
    <>
      <Router>
        <Navbar />
        <Routes>

          <Route path='/services' element={<Services/>} />
          <Route path='/places' element={<Places/>} />
          <Route path='/contactus'  element={<Contactus/>} />
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/' exact element={<Home/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
