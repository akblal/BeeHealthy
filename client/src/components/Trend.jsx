import React, { useState, useEffect } from 'react';
import BloodPressureLine from './BloodPressureLine.jsx';
import { UserData } from './UserData.js'

function Trend ({ userData }) {

  const [bpData, setBPData] = useState();
  const [loaded, setLoaded] = useState(true);

  useEffect (() => {

  }, [])

  if (userData.length > 0 && loaded) {
    setBPData ({
      labels: userData.map((data) => data.created_at),
      datasets: [
        {
          label: 'Systolic BP',
          data: userData.map((data) => data.systolic),
        },
        {
          label: 'Diastolic BP',
          data: userData.map((data) => data.diastolic),
        }
      ]
    })
    setLoaded(false);
  }




  return (
    <div>
      Trends...
      {userData.length > 0 ? console.log(userData, 'trends'): console.log('nothing here')}
      {userData.length > 0 ?
        <BloodPressureLine chartData= {bpData} />
        : <h1>Please Input Data to be Grapahed</h1>}



    </div>
  )
}

export default Trend;