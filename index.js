var express = require('express');
var parser = require('body-parser');
var app = express();


app.set('port', (process.env.PORT || 5000));

app.use(parser.json());

app.post('/callback', function(request, response) {
  if (request.body.group_id == process.env.GROUP_ID) {
    if (request.body.type == 'confirmation') {
      response.send(process.env.CONFIRMATION_REPLY);
    } else if (request.body.secret == process.env.SECRET_KEY) {
      switch(request.body.type) {
      case 'wall_post_new':
        console.log(request.body.object);
      break;
      }
      response.sendStatus(200);
    }
  }
});
 
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
