import React from 'react';
import { useParams } from 'react-router-dom';


function BloodPressure () {

let { username } = useParams();

  return (
    <div>
      This is Blood Pressure Page {username}
    </div>
  )
}

export default BloodPressure;