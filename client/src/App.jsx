import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './components/Home.jsx';
import BloodPressure from './components/BloodPressure.jsx';
import UserBloodPressure from './components/UserBloodPressure.jsx';
import Contact from './components/Contact.jsx';
import ErrorPage from './components/ErrorPage.jsx';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCow } from '@fortawesome/free-solid-svg-icons';

const container = document.getElementById('root');
const root = createRoot(container);

function App () {

  return (

    <Router>
      <nav>
        <FontAwesomeIcon icon= {faCow} />
        <div className= 'navbar-links'>
          <div className= 'link'>
            <Link className= 'link-text' to='/'>Home</Link>
          </div>
          <div className= 'link'>
            <Link className= 'link-text'to='/bloodpressure'>BP</Link>
          </div>
          <div className= 'link'>
            <Link className= 'link-text' to='/contact'>Contact</Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/bloodpressure' element= {<BloodPressure />} />
        <Route path='/bloodpressure/:id' element= {<UserBloodPressure />} />
        <Route path='/contact' element= {<Contact />} />
        <Route path='*' element = {<ErrorPage />} />
      </Routes>
    </Router>

  )
}

root.render(<App />)