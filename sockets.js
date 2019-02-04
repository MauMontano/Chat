module.exports = function(io){
	let users = [];
	io.on('connection', socket =>{
		console.log("new user conected");
	socket.on('send-nick',(data,cb)=>{
		console.log(data);
		if (users.indexOf(data)!=-1) {//verificar si ya esta conectado
			console.log(data);
			cb(false);
		}
		else{
			cb(true);
			socket.user = data;
			users.push(socket.user);//agregar usuarios conectados
			updateNicknames();
		}
	});
	socket.on("send-message", function(data){//recibe el evento send-message que viene de main
		console.log("Holi este es tu mensaje "+ data);
		io.sockets.emit('new message', {
				msg:data,
				username:socket.user
			});//enviara los datos a traves de el evento new message
		});
	socket.on("send-image1", function(data){//recibe el evento send-message que viene de main
		console.log("Holi esta es tu ruta "+data);
		io.sockets.emit('new image1', {
				img:data,
				username:socket.user
			});//enviara los datos a traves de el evento new message
		});

		socket.on("disconnect", data =>{
			if (!socket.user){
				return;
			}
			users.splice(users.indexOf(socket.user),1);
			updateNicknames();	
		});
		function updateNicknames(){
			io.sockets.emit('users', users);
		}
	});

}