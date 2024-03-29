const express = require('express');
const cors = require('cors');
require('dotenv').config();
const controller = require('./controller.js');

const path = require("path");
const app = express();

//middleware
app.use(cors());
app.use(express.static('client/dist'));
app.use(express.json());




app.get ('/getAllMeasurementsReversed', controller.getAllMeasurementsReversed);
app.get ('/getAllMeasurementsChronological', controller.getAllMeasurementsChronological);
app.get ('/getLastXMeasurements', controller.getLastXMeasurements);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})


app.post ('/insertData', controller.insertData);
app.post ('/alertDoctor', controller.alertDoctor)

app.listen(Number(process.env.PORT),()=>{
  console.log('listening on port 3000');
})
