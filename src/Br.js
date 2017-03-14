const express = require('express')
const app = express()
var port = 3000
app.get('/', function (req, res) {
  res.send('This is our home page!')
})

app.listen(port, function () {
  console.log('We are listening on port ' + port)
})
