const uri = "mongodb+srv://API-user:FcGCfDWKHuk4Gtep@vladimir-rest-qazlt.mongodb.net/test?retryWrites=true&w=majority";


var express = require('express');
const PORT = process.env.PORT || 3000
var db;

var app = express();

let data = {
  1: {
    id: '1',
    fullName: 'Vladimir Gjorgievski',
  },
  2: {
    id: '2',
    fullName: 'Aleksandra Zdravevska',
  },
};

app.get('/', function (req, res) {

  db.find().limit(10).toArray((err, result) => {
    if (err) return console.log(err)
      res.status(200).json(result);
  })

});

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = uri;

// Database Name
const dbName = 'sample_weatherdata';
const client = new MongoClient(url);

// Use connect method to connect to the server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  db = client.db(dbName).collection("data");

  app.listen(PORT, function () {
    console.log('listening on 3000')
  })
});