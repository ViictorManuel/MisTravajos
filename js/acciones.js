//JavaScript
	
$(document).ready(function(e){
	$('#principal1'). height($('#page1').height());//calcular el alto de la pantalla del dispositivo 	
	document.addEventListener("deviceready",function(){
		//precarga el sonido
		
		$('.animalin').bind('touchstart',function(){$(this).addClass('tocada');audio.play($(this).attr('id'));});
		
		$('.animalin').bind('touchend',function(){$(this).removeClass('tocada');});
		
   
	
	},false); //deviceready
});//ready