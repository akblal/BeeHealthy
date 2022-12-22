import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';

import Home from './components/Home.jsx';
import BloodPressure from './components/BloodPressure.jsx';
import AddMeasurement from './components/AddMeasurement.jsx';
import History from './components/History.jsx';
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
      <nav className= 'primary-nav'>
        <FontAwesomeIcon className = 'bee-logo' icon= {faCow} />
        <div>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/bloodpressure'>Health</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </div>
      </nav>

      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/bloodpressure' element= {<BloodPressure />} >
          <Route index element= {<AddMeasurement />} />
          <Route path= 'addmeasurement' element= {<AddMeasurement />} />
          <Route path= 'history' element= {<History />} />
        </Route>
        <Route path='/bloodpressure/:id' element= {<UserBloodPressure />} />
        <Route path='/contact' element= {<Contact />} />
        <Route path='*' element = {<ErrorPage />} />
      </Routes>
    </Router>

  )
}

root.render(<App />)