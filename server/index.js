const express = require('express');
const cors = require('cors');

const path = require("path");
const app = express();

//middleware
app.use(cors());
app.use(express.static('client/dist'));
app.use(express.json());



app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})


app.listen(3000,()=>{
  console.log('listening on port 3000');
})
