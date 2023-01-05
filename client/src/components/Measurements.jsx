import React from 'react';

function Measurements ({ currentPosts, loading }) {
  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <div>
      {currentPosts.map((measurement, index) => {
        return (
          <div key = {index} className= 'history-measurement-card'>
            <div className= 'date-time-container'>
              {new Date (measurement.created_at).toLocaleString()}
            </div>
            <div className= 'blood-pressure-container'>
              {measurement.systolic}/{measurement.diastolic}
            </div>
            {measurement.meds_taken.length ?
              <div className= 'medication-container'>
                {measurement.meds_taken.map((taken, index) =>{
                  return (
                    <div style={{marginRight: 10}} key= {index}>{taken}</div>
                  )
                })}
              </div> :
              <div className= 'medication-container'>
                No Medications Taken
              </div>
            }
          </div>

        )
      })}
    </div>
  )
}

export default Measurements;