import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function AddMeasurement  ()  {

  const [diastolic, setDiastolic] = useState();
  const [systolic, setSystolic] = useState();
  const [errDiastolic, setErrDiastolic] = useState(false);
  const [errSystolic, setErrSystolic] = useState(false);
  const [submit, setSubmit] = useState(false);

  const handleDiastolic = (e) => {
    let temp = e.target.value;
    setDiastolic(temp);
  }

  const handleSystolic = (e) => {
    let temp = e.target.value;
    setSystolic(temp);
  }

  const handleSubmit = (e) => {
    if (+diastolic != Number(diastolic) || diastolic.length === 0) {
      setErrDiastolic(true);
    } else {
      setErrDiastolic(false);
    }
    if (+systolic != Number(systolic) || systolic.length === 0) {
      setErrSystolic(true);
    } else {
      setErrSystolic(false);
    }
  }

  return (
    <Stack spacing= {5} direction= 'row'>

      <TextField
        required
        id="outlined-basic"
        label="Diastolic"
        className= 'bloodpressure-field'

        onChange= {handleDiastolic}

      />
      <TextField
        required
        id="outlined-number"
        label="Systolic"

        onChange= {handleSystolic}
      />
      <Button
        variant="outlined"
        onClick= {handleSubmit}
        >Submit
      </Button>

      {errDiastolic ? <div>Error distolic</div> : <div>{diastolic}</div> }
      {errSystolic ? <div>Error systolic</div> : <div>{systolic}</div>123 }
    </Stack>


  )
}

export default AddMeasurement