'use strict';

var os = require('os');
var nodeStatic = require('node-static');
var socketIO = require('socket.io');
var https = require('https');
var fs = require('fs');

var options = {
  key: fs.readFileSync('/Users/emiliano/ssl/myssl.key'),
  cert: fs.readFileSync('/Users/emiliano/ssl/myssl.crt')
};

var fileServer = new(nodeStatic.Server)();
var app = https.createServer(options, function(req, res) {
  fileServer.serve(req, res);
}).listen(8081);
