import React, { useState, useEffect } from 'react';
import BloodPressureLine from './BloodPressureLine.jsx';

function Trend ({ userDataChronological }) {

  const [bpData, setBPData] = useState();
  const [loaded, setLoaded] = useState(true);
  let pointColor = [];

  if (userDataChronological.length > 0 && loaded) {
    setBPData ({
      labels: userDataChronological.map((data) => data.created_at),
      datasets: [
        {
          label: 'Systolic BP',
          data: userDataChronological.map((data) => data.systolic),
          borderColor: 'black',
          borderWidth: 0.5,
          pointBackgroundColor: function(context) {
            var index = context.dataIndex;
            var value = context.dataset.data[index];
            return value > 130 ? 'red' :  // draw values over 120 in red
                value > 120 ? 'orange' :
                'black'    // else, draw values as black

          },
        },
        {
          label: 'Diastolic BP',
          data: userDataChronological.map((data) => data.diastolic),
          borderColor: 'blue',
          borderWidth: 0.5,
          pointBackgroundColor: function(context) {
            var index = context.dataIndex;
            var value = context.dataset.data[index];
            return value >80 ? 'red' :  // draw values over 80 in red
                'blue'    // else, draw values as black

          },
        }
      ]
    })

    setLoaded(false);
  }
  // if (bpData) {
  //   for (let i = 0; i < bpData.datasets[0].data.length; i++) {
  //     if(bpData.datasets[0].data[i] > 100) {
  //       pointColor.push('green')
  //     } else {
  //       pointColor.push('yellow')
  //     }
  //   }
  // }
  // if (bpData){
  //   console.log (bpData.datasets[0].data, 'bpdata')
  // }





  return (
    <div>
      Trends...
      {userDataChronological.length > 0 ? console.log(userDataChronological, 'trends'): console.log('nothing here')}
      {userDataChronological.length > 0 ?
        <BloodPressureLine chartData= {bpData} />
        : <h1>Please Input Data to be Grapahed</h1>}



    </div>
  )
}

export default Trend;