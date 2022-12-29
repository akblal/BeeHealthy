const model = require ('./model.js');

module.exports = {

    insertData (req, res) {
      const diastolic = req.body.diastolic;
      const systolic = req.body.systolic;
      const medsList = req.body.medsList;
      const medsTaken = req.body.medsTaken;
      model.insertData(diastolic, systolic, medsList, medsTaken)
        .then ((result) => {
          res.sendStatus(201);
        })
        .catch((err) => {
          res.sendStatus(500);
        })
    },
    getAllMeasurements(req, res) {
      model.getAllMeasurements()
        .then((results) => {
          res.send(results);
          res.status(200);
        })
        .catch((err) => {
          console.log(err);
          res.sendStatus(500)
        })
    }

  // getEmail (req, res) {
  //   let email = req.query.email;
  //   model.getEmail(email)
  //     .then((results) => {
  //       if (results.rows.length > 0) {
  //         res.status(200);
  //         res.send('email found');
  //       } else {
  //         res.status(200);
  //         res.send('no email found');
  //       }
  //     })
  //     .catch((err) => {
  //       res.send (err);
  //       res.status(500);
  //     })
  // },

  // getUser (req, res) {
  //   let email = req.query.email;
  //   model.getUser(email)
  //     .then((results) => {
  //       res.send(results);
  //       res.status (200);
  //     })
  //     .catch((err) => {
  //       console.log (err);
  //       res.status(500);
  //     })
  // }
}