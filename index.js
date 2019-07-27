var express = require('express');
var app = express();
const PORT = process.env.PORT || 3000

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
  res.status(500).json(data)
});

app.listen(PORT, function () {
  console.log('Example app listening on port 3000!')
});