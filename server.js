
//node modules required//
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

//set up express to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('app'));


// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

//start the server
app.listen(process.env.PORT || 3000);