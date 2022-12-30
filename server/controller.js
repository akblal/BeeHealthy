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
    getAllMeasurementsReversed(req, res) {
      model.getAllMeasurementsReversed()
        .then((results) => {
          res.send(results);
          res.status(200);
        })
        .catch((err) => {
          console.log(err);
          res.sendStatus(500)
        })
    },
    getAllMeasurementsChronological (req,res) {
      model.getAllMeasurementsChronological()
        .then((results) => {
          res.send(results);
          res.status(201);
        })
    },
    getLastXMeasurements(req,res) {
      let number = req.query.data;
      console.log(number, 'number in controller')
      model.getLastXMeasurements(number)
        .then((results) => {
          res.send(results);
          res.status(201);
        })
        .catch((err) => {
          console.log(err)
          res.status(500)
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