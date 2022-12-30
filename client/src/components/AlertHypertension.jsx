import React from 'react';
import { Alert } from '@mui/material'

function AlertHypertension () {

  return (
    <div className= 'alert-blood-pressure'>
        <Alert severity= 'error'>Blood Pressure is Too High! Doctor Has Been Alerted. If this is an emergency, please dial 911.</Alert>
    </div>
  )
}
export default AlertHypertension