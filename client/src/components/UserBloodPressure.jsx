import React from 'react';
import { useParams } from 'react-router-dom';
function UserBloodPressure () {

  let { id } = useParams();

  return (
    <div>
      This is Blood Pressure For {id}
    </div>
  )
}

export default UserBloodPressure;