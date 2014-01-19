$(document).ready(function(){
	var classe = "";
	var $obj = $("#animacao");
	var intervalo;
	$("button").click(function(){

			clearInterval(intervalo);

			efeito = $(this).data("efect");

			if($obj.hasClass(efeito)){
				$obj.removeClass(efeito);
			}

			$obj.removeClass(classe).addClass($(this).data("efect"));
			classe = efeito;

			intervalo = setTimeout(function(){
				$obj.removeClass(classe);
			},$(this).data("clear"));

		return false;
	});
});