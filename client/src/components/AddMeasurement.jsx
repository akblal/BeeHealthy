import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ButtonGroup from '@mui/material/ButtonGroup';

function AddMeasurement  ()  {

  const fullMedList = [
    {
      name: 'Motrin',
      dosage: '5 mg'
    },
    {
      name: 'Advil',
      dosage: '10 mg'
    },
    {
      name: 'Tylenol',
      dosage: '15 mg'
    },
  ]

  const [diastolic, setDiastolic] = useState();
  const [systolic, setSystolic] = useState();
  const [errDiastolic, setErrDiastolic] = useState(false);
  const [errSystolic, setErrSystolic] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [takenMedList, setTakenMedList] = useState([]);
  const [recMedList, setRecMedList] = useState (fullMedList);

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

  const handleMed = (e) => {
    console.log(e.currentTarget.value);
    console.log (recMedList[e.currentTarget.value])

    let temp = [...recMedList];
    temp.splice(e.currentTarget.value, 1);
    setRecMedList(temp);


    let medicine = recMedList[e.currentTarget.value];
    let newMedList = [...takenMedList];
    newMedList.push(medicine);

    setTakenMedList(newMedList)
    // console.log (recMedList, takenMedList)

  }

  return (
    <div>
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
        {errSystolic ? <div>Error systolic</div> : <div>{systolic}</div> }
      </Stack>
      <Stack>
        {recMedList.map((item, index) => {
          return <Button variant= 'outlined'
                  orientation= 'vertical'
                  size= 'small'
                  aria-label= 'alignment-button-group'
                  sx={{width:100, marginBottom: 2}}
                  space={2}
                  key= {index}
                  value= {index}
                  onClick= {handleMed}>
                  {item.name} {item.dosage}
                </Button>
        })}

      </Stack>
      <div>-------------------------------------</div>
      <Stack>
        {takenMedList.map((item, index) => {
          return <Button variant= 'outlined'
                  orientation= 'vertical'
                  size= 'small'
                  aria-label= 'alignment-button-group'
                  sx={{width:100, marginBottom: 2}}
                  space={2}
                  key= {index}
                  value= {index}
                  onClick= {handleMed}>
                  {item.name} {item.dosage}
                </Button>
        })}
      </Stack>

    </div>




  )
}

export default AddMeasurement

// <div>
// {recMedList.map((item, index) => {
//   return <button
//           key= {index}
//           value= {index}
//           onClick= {handleMed}>
//           {item.name} {item.dosage}
//         </button>
// })}

// </div>

// <div>
// {takenMedList.map((item, index) => {
//   return <button
//           key= {index}
//           value= {index}>
//           {item.name} {item.dosage}
//         </button>
// })}
// </div>