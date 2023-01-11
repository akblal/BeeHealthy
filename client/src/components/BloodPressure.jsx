import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';


function BloodPressure () {

  return (
    <div>
      <nav className= 'navbar-bloodpressure'>
        <NavLink className= 'bloodpressure-nav-link' to= 'addmeasurement'>Add Reading</NavLink>
        <NavLink className= 'bloodpressure-nav-link' to= 'history'>History</NavLink>
        <NavLink className= 'bloodpressure-nav-link' to= 'trend'>Trend</NavLink>
      </nav>
      <Outlet className= 'oulet-container'/>
    </div>

  )
}

export default BloodPressure;