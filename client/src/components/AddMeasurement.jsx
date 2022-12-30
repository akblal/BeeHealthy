import React, { useState } from 'react';
import { TextField, Button, Stack, ButtonGroup } from '@mui/material';

import { fullMedList } from './FullMedList.jsx'
import AlertNormalBP from './AlertNormalBP.jsx'
import AlertHypertension from './AlertHypertension.jsx'
import AlertElevated from './AlertElevated.jsx'

import axios from 'axios';

function AddMeasurement ({ getDataReversed, getDataChronological })  {

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
    setSubmit(false);
  }

  const handleSystolic = (e) => {
    let temp = e.target.value;
    setSystolic(temp);
    setSubmit(false);
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

    if (+systolic === Number(systolic) && systolic.length > 0 && +diastolic === Number(diastolic) && diastolic.length > 0 ) {
      let tempMedsList = [];
      let tempTakenList = [];

      fullMedList.forEach((med) => {
        let medName = med.name + ' ' + med.dosage;
        tempMedsList.push(medName)
      })

      takenMedList.forEach((med) => {
        let medName = med.name + ' ' + med.dosage;
        tempTakenList.push(medName)
        tempTakenList = tempTakenList;
      })

      axios.post ('/insertData', {
        diastolic: diastolic,
        systolic: systolic,
        medsList: tempMedsList,
        medsTaken: tempTakenList
      })
      .then((results)=> {
        getDataReversed();
        getDataChronological();
        setTakenMedList([].slice());
        setRecMedList(fullMedList.slice());
        setSubmit(true);
      })
      .catch ((err) => {
        console.log (err)
      })



    }
  }

  const addMed = (e) => {
    setSubmit(false);

    let index = e.currentTarget.value;

    let temp = [...recMedList];
    temp.splice(index, 1);
    setRecMedList(temp);

    let medicine = recMedList[index];
    let newMedList = [...takenMedList];
    newMedList.push(medicine);
    newMedList.sort(function (a,b) {
      return a.id - b.id;
    });
    setTakenMedList(newMedList);
  }

  const removeMed = (e) => {
    setSubmit(false);

    let index = e.currentTarget.value;

    let temp = [...takenMedList];
    temp.splice(index, 1);
    setTakenMedList(temp);

    let medicine = takenMedList[index];
    let newMedList = [...recMedList];
    newMedList.push(medicine);
    newMedList.sort(function (a,b) {
      return a.id - b.id;
    });
    setRecMedList(newMedList);
  }

  return (
    <div className= 'container-add-measurement'>
      <Stack spacing= {5} direction= 'row'>
        <TextField
          required
          id="outlined-basic"
          label="Systolic"
          onChange= {handleSystolic}
          inputProps= {{maxLength:3,}}
        />
        <TextField
          required
          id="outlined-number"
          label="Diastolic"
          onChange= {handleDiastolic}
          inputProps= {{maxLength:3,}}
        />
        <Button
          variant="outlined"
          onClick= {handleSubmit}
          >Submit
        </Button>
      </Stack>

      <div>Medications taken</div>

      <Stack direction= 'row' spacing= {2}>
        {takenMedList.map((item, index) => {
          return <Button variant= 'outlined'
                  orientation= 'vertical'
                  size= 'small'
                  aria-label= 'alignment-button-group'
                  sx={{width:100, height:100, marginBottom:2}}
                  space={2}
                  key= {index}
                  value= {index}
                  onClick= {removeMed}>
                  {item.name} {item.dosage}
                </Button>
        })}
      </Stack>

      <div>-------------------------------------</div>
      <div>Medications Prescribed</div>

      <Stack direction= 'row' spacing= {2}>
        {recMedList.map((item, index) => {
          return <Button variant= 'outlined'
                  orientation= 'vertical'
                  size= 'small'
                  aria-label= 'alignment-button-group'
                  sx={{width:100, height:100, marginBottom:2}}
                  space={2}
                  key= {index}
                  value= {index}
                  onClick= {addMed}>
                  {item.name} {item.dosage}
                </Button>
        })}
      </Stack>
      {console.log(submit)}
      {!errDiastolic && !errSystolic && (systolic >= 130 || diastolic >= 80) && submit?
        <AlertHypertension /> : null}
      {!errDiastolic && !errSystolic && (systolic >= 120 && systolic < 130 && diastolic < 80) && submit?
        <AlertElevated /> : null}
      {!errDiastolic && !errSystolic && (systolic < 120 && diastolic < 80) && submit?
        <AlertNormalBP /> :
        null
      }

    </div>
  )
}

export default AddMeasurement