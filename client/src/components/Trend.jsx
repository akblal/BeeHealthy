import React, { useState, useEffect } from 'react';
import { FormControl, Select, MenuItem } from '@mui/material';
import BloodPressureLine from './BloodPressureLine.jsx';

import axios from 'axios';

function Trend () {

  const [bpData, setBPData] = useState();
  const [number, setNumber] = useState(20);

  let pointColor = [];
  const numberMeasurements = [10, 20, 50, 100, 150];

  useEffect(() => {
    setNumberPoints();
  }, [])

  const setNumberPoints = (last) => {
    axios.get('/getLastXMeasurements', {params: {
      data: last || number,
    }})
    .then((results) => {
      let data = results.data;
      setBPData ({
        labels: data.map((data) => data.created_at),
        datasets: [
          {
            label: 'Systolic BP',
            data: data.map((data) => data.systolic),
            borderColor: 'black',
            borderWidth: 1,
            pointBackgroundColor: function(context) {
              var index = context.dataIndex;
              var value = context.dataset.data[index];
              return value >= 130 ? 'red' :  // draw values over 120 in red
                  value >= 120 ? 'orange' :
                  'green'    // else, draw values as black
            },
            pointBorderColor:  function(context) {
              var index = context.dataIndex;
              var value = context.dataset.data[index];
              return value > 130 ? 'red' :  // draw values over 120 in red
                  value >= 120 ? 'orange' :
                  'green'    // else, draw values as black
            },
          },
          {
            label: 'Diastolic BP',
            data: data.map((data) => data.diastolic),
            borderColor: 'purple',
            borderWidth: 1,
            pointBackgroundColor: function(context) {
              var index = context.dataIndex;
              var value = context.dataset.data[index];
              return value >=80 ? 'red' :  // draw values over 80 in red
                  'green'    // else, draw values as black
            },
            pointBorderColor: function(context) {
              var index = context.dataIndex;
              var value = context.dataset.data[index];
              return value >=80 ? 'red' :  // draw values over 80 in red
                  'green'    // else, draw values as black
            },
          }
        ]
      })
    })
  }

  const handleNumber = (e) => {
    let temp = e.target.value;
    setNumber(temp)
    setNumberPoints(temp);
  }

  return (
    <div className= 'center-body-container'>
      <div className= 'body-container'>
        <FormControl >
          <Select
            default= {number}
            value= {number}
            onChange={handleNumber}
          >
          {numberMeasurements.map((data, index) => {
            return <MenuItem key= {index} value= {data}>{data}</MenuItem>
          })}
          </Select>
        </FormControl>
        <div className= 'chart-legend'>
          <div className= 'chart'>
            {bpData ?
              <BloodPressureLine chartData= {bpData} />
              : <h1>Please Input Data to be Graphed</h1>}
          </div>

          <div className= 'legend'>
              <div className= 'dots'>
                <div className= 'red circle'>
                </div>
                <div className= 'legend-text'>
                  Hypertensive
                </div>
              </div>
              <div className= 'dots'>
                <div className= 'orange circle'>
                </div>
                <div className= 'legend-text'>
                  Elevated
                </div>
              </div>
              <div className= 'dots'>
                <div className= 'green circle'>
                </div>
                <div className= 'legend-text'>
                  Normal
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trend;