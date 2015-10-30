var express = require('express');

var app = express();
var server= app.listen(8000, function(){
	console.log('Connected to port 8000');
})
io = require('socket.io').listen(server);

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var session = require('express-session');
app.use(session({secret: 'airdnd' }));

app.use(express.static((__dirname + '/public')));

require('./server/config/mongoose.js');

require('./server/config/routes.js')(app);

require('./server/config/socketRoutes.js')(io);
