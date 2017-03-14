var app = express();
app.get('/user/:id', function (req, res, next) {
  res.send('USER')
})
