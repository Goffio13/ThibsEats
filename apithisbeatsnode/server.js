// Imports
var express = require('express');
var bodyParser = require('body-parser');
var apiRouter = require('./apiRouter').router;
var cors = require ('cors');

//Instantiate server
var server = express();

// Body Parser configuration
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

// Corps 
server.use(cors({
    origin: 'http://localhost:8081',
    optionsSuccessStatus: 200
}));



//Configure routes
server.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('<h1> test </h1>')
});

server.use('/api/', apiRouter);

// Launch server
server.listen(8080, function() {
    console.log('stp t la');
});