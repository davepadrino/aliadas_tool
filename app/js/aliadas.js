//$(document).ready(main);
			/* Principal*/
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

$(document).ready(function(){
		$('#newPass2').keyup(function(){
			if($('#newPass2').val() == $('#newPass1').val() || $('#newPass2').val() == ""){
				$('#confirmMessage').text("");
			}else{
				$('#confirmMessage').text("Las contraseñas no coinciden");
				$('#confirmMessage').css("font-weight","Bold");
			}
			
		});
}); 