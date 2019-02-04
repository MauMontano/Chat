$(function(){
	const socket = io(); //esto sen tendra que agregar 
	//we have to get the elements of the dom from the interface 
	const message = $('#mensamensa');
	const chatusers = $('#usercon');
	const messageform = $('#message-form');
	//DOM user's name
	const nickenv = $('#nickenv');//submit
	const nickform = $('#nick-Form');

	$('#nickenv').on('click', e =>{
		const name = $('#envianick').val();
		socket.emit('send-nick',name, function(data){
			if (data){
				$('#contenedor1').hide();
				$('#contenedor').show();
			}
			else{
				alert("Ese usuario ya existe");
				$('#envianick').val('');
			}
		});
	});
	
	$('#mesaenv').on('click', function(e){
		let sentmessage = $('#enviamensaje').val();
		socket.emit('send-message', sentmessage);//envia los mensajes por medio del evento send-message
		$('#enviamensaje').val('');
	});

	$('#emo1').on('click', function(e){
		var ruta = this.src
		socket.emit('send-image1', ruta);
	});
	$('#emo2').on('click', function(e){
		var ruta = this.src
		socket.emit('send-image1', ruta);
	});
	$('#emo3').on('click', function(e){
		var ruta = this.src
		socket.emit('send-image1', ruta);
	});
	$('#emo4').on('click', function(e){
		var ruta = this.src
		socket.emit('send-image1', ruta);
	});
	$('#emo5').on('click', function(e){
		var ruta = this.src
		socket.emit('send-image1', ruta);
	});
	$('#emo6').on('click', function(e){
		var ruta = this.src
		socket.emit('send-image1', ruta);
	});
	$('#emo7').on('click', function(e){
		
	
		var ruta = this.src
		socket.emit('send-image1', ruta);
	});
	$('#emo8').on('click', function(e){
		var ruta = this.src
		socket.emit('send-image1', ruta);
	});
	$('#emo9').on('click', function(e){
		var ruta = this.src
		socket.emit('send-image1', ruta);
	});
	$('#emo10').on('click', function(e){
		var ruta = this.src
		socket.emit('send-image1', ruta);
	});

	$('#emo11').on('click', function(e){
		var ruta = this.src
		socket.emit('send-image1', ruta);
	});
	$('#emo12').on('click', function(e){
		
	
		var ruta = this.src
		socket.emit('send-image1', ruta);
	});
	$('#emo13').on('click', function(e){
		var ruta = this.src
		socket.emit('send-image1', ruta);
	});
	$('#emo14').on('click', function(e){
		var ruta = this.src
		socket.emit('send-image1', ruta);
	});
	$('#emo15').on('click', function(e){
		var ruta = this.src
		socket.emit('send-image1', ruta);
	});
	$('#emo16').on('click', function(e){
		var ruta = this.src
		socket.emit('send-image1', ruta);
	});
	$('#emo17').on('click', function(e){
		var ruta = this.src
		socket.emit('send-image1', ruta);
	});
	$('#emo18').on('click', function(e){
		var ruta = this.src
		socket.emit('send-image1', ruta);
	});
	$('#emo19').on('click', function(e){
		var ruta = this.src
		socket.emit('send-image1', ruta);
	});
	$('#emo20').on('click', function(e){
		var ruta = this.src
		socket.emit('send-image1', ruta);
	});

	$('#emo21').on('click', function(e){
		var ruta = this.src
		socket.emit('send-image1', ruta);
	});
	$('#emo22').on('click', function(e){
		var ruta = this.src
		socket.emit('send-image1', ruta);
	});
	$('#emo23').on('click', function(e){
		var ruta = this.src
		socket.emit('send-image1', ruta);
	});
	$('#emo24').on('click', function(e){
		var ruta = this.src
		socket.emit('send-image1', ruta);
	});
	$('#emo25').on('click', function(e){
		var ruta = this.src
		socket.emit('send-image1', ruta);
	});
	$('#emo26').on('click', function(e){
		var ruta = this.src
		socket.emit('send-image1', ruta);
	});
	$('#emo27').on('click', function(e){
		var ruta = this.src
		socket.emit('send-image1', ruta);
	});
	$('emo28').on('click', function(e){
		var ruta = this.src
		socket.emit('send-image1', ruta);
	});
	$('#emo29').on('click', function(e){
		var ruta = this.src
		socket.emit('send-image1', ruta);
	});
	$('#emo30').on('click', function(e){
		
	
		var ruta = this.src
		socket.emit('send-image1', ruta);
	});
	//Escuchar evento del servidor
	socket.on('new message', function(data){
		message.append(	'<div class="mensajito">'+'<b>'+data.username+': '+'</b>'+'<p class="mensajeparrafo">'+data.msg+'</p>'+'</div>');
	});
	socket.on('new image1', function(data){//recibe data de new image del main
		console.log(data.img);
		message.append(	'<div class="mensajito">'+'<b>'+data.username+': '+'</b>'+'<img src = "'+data.img+'" class="imagensend">'+'</div>');
	});

	socket.on('users', data=>{
		let html = '';
		for(let i=0; i<data.length; i++){
			 html += `<li class='contacts'><i class='material-icons'>face</i><h6>${data[i]}</h6></li>`//generar un li en lugar de p
		}
		chatusers.html(html);	
	});
	
});