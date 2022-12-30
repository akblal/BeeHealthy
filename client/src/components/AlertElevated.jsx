import React from 'react';
import { Alert } from '@mui/material'

function AlertElevated () {

  return (
    <div className= 'alert-blood-pressure'>
        <Alert severity= 'warning'>Blood Pressure is Elevated! Monitor Symptoms. Please Contact Doctor if You Are Having Any Symptoms.</Alert>
    </div>
  )
}
export default AlertElevated