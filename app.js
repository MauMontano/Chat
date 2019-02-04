const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const app = express();
const server = http.createServer(app); 
const io = socketio.listen(server);

require('./sockets')(io);
app.set('view engine','pug');
app.use(express.static('public'));
app.set('port',process.env.PORT || 5000);
app.get('/', function(req,res){

	res.sendFile(__dirname+'/public/index.html');
});

app.get('/chat', (req,res, next) => {//injects solo es el nombre de la ruta que yo le asigno no tiene nada que ver con inject
	res.render('chat', {prompt: "Hello boy", hint:"Think about me"});//estamos creando un objeto
});


server.listen(app.get('port'), ()=>{
	console.log('Im running in port number ', app.get('port'));
});
