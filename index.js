var express = require('express')
var app = express()

app.use(express.static('./public'))
app.set('port', (process.env.PORT || 7000));

app.get('/', function(request, response) {
    response.render('index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});