const pool = require ('./pool.js');

module.exports = {

    insertData (diastolic, systolic, medsList, medsTaken) {
      return new Promise ((resolve, reject) => {
        const queryStatement = 'INSERT INTO healthData (diastolic, systolic, meds_list, meds_taken) VALUES ($1, $2, $3, $4);';
        const queryArgument = [diastolic, systolic, medsList, medsTaken];
        pool.query(queryStatement, queryArgument, (err, results) => {
          if (err) {
            return reject(err);
          }
          resolve(results);
        })
      })
    },

    alertDoctor(diastolic, systolic, medsList, medsTaken, doctorName, patientName) {
      console.log(diastolic, systolic, medsList, medsTaken, doctorName, patientName)
      return new Promise ((resolve, reject) => {
        const queryStatement = 'INSERT INTO alert (patient_name, doctor_name, diastolic, systolic, meds_list, meds_taken) VALUES ($1, $2, $3, $4, $5, $6);';
        const queryArgument = [patientName, doctorName ,diastolic, systolic, medsList, medsTaken]
        pool.query(queryStatement, queryArgument, (err, results) => {
          if (err) {
            console.log(err)
            return reject(err);
          }
          resolve(results);
        })
      })
    },

    getAllMeasurementsReversed() {
      return new Promise ((resolve, reject) => {
        const queryStatement= 'SELECT * FROM healthData ORDER BY id DESC;';
        pool.query(queryStatement, (err, results) => {
          if (err) {
            return reject(err);
          }
          resolve(results.rows);
        })
      })
    },

    getAllMeasurementsChronological() {
      return new Promise ((resolve, reject) => {
        const queryStatement= 'SELECT * FROM healthData;';
        pool.query(queryStatement, (err, results) => {
          if (err) {
            return reject(err);
          }
          resolve(results.rows)
        })
      })
    },

    getLastXMeasurements(number) {
      return new Promise ((resolve, reject) => {
        queryStatement = `WITH t AS (SELECT * FROM healthData ORDER BY id DESC LIMIT ($1)) SELECT * FROM t ORDER BY id ASC;`
        queryArgument = [number]
        pool.query(queryStatement, queryArgument, (err, results) => {
          if (err) {
            return reject(err);
          }
          resolve(results.rows)
        })
      })
    }
}