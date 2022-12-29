import React from 'react';
import { Link, Outlet } from 'react-router-dom';


function BloodPressure () {

  return (
    <div>
      <nav>
        <Link to= 'addmeasurement'>Add Measurement</Link>
        <Link to= 'history'>History</Link>
        <Link to= 'trend'>Trend</Link>
      </nav>
      <Outlet />
    </div>

  )
}

export default BloodPressure;