//$(document).ready(main);
$(document).ready(function(){

	var contador=1;

	//function main(){
		// Mostrar y ocultar menú
		$('.menu-bar').click(function(){
			if(contador == 1){
				$('nav').animate({
					left:'0'
				});
				contador = 0;
			}else{
				$('nav').animate({
					left:'-100%'
				});
				contador = 1;
			}

		});

		//Mostrar y ocultar sub-menu
		$('.submenu').click(function(){
			//$(this).children('.children').slideToggle();
			$('.children').slideToggle();
		});




});
	