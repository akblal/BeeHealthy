const pool = require ('./pool.js');

module.exports = {
  // insertEmail (email, firstName, lastName) {
  //   return new Promise ((resolve, reject) => {
  //     const queryStatement = 'INSERT INTO emailAddress (email, firstname, lastname) VALUES ($1, $2, $3);';
  //     const queryArgument = [email, firstName, lastName];
  //     pool.query(queryStatement, queryArgument, (err, results) => {
  //       if (err) {
  //         return reject(err);
  //       }
  //       resolve(results);
  //     })
  //   })
  // },
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
    }
  // getEmail (email) {
  //   return new Promise ((resolve, reject) => {
  //     console.log (email, 'model')
  //     const queryStatement = 'SELECT * FROM emailAddress WHERE email = ($1);';
  //     const queryArgument = [email];
  //     pool.query(queryStatement, queryArgument, (err, results) => {
  //       if (err) {
  //         reject(err);
  //       }
  //       resolve(results);
  //       })
  //     })
  //   },

  // getUser (email) {
  //   return new Promise ((resolve, reject) => {
  //     const queryStatement = `SELECT firstname, lastname FROM emailAddress where email = ($1);`;
  //     const queryArgument = [email];
  //     pool.query (queryStatement, queryArgument, (err, results) => {
  //       if (err) {
  //         reject(err);
  //       }
  //       resolve (results.rows[0]);
  //     })
  //   })
  // },
}