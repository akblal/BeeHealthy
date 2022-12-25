import React from 'react';

function Measurements ({ currentPosts, loading }) {
  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <div>
      {currentPosts.map((measurement, index) => {
        return (
          <div key = {index}>
            <span> {new Date (measurement.created_at).toLocaleString()} {measurement.diastolic}/{measurement.systolic} </span>
            {measurement.meds_taken.map((taken, index) =>{
              return (
                <span style={{marginRight: 10}} key= {index}>{taken}</span>
              )
            })}
            <div>---------------------------</div>
          </div>
        )
      })}
    </div>
  )
}

export default Measurements;