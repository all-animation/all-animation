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

			if(efeito == "rotate-row"){
				$obj.addClass("girar");
			}else if($obj.hasClass("girar")){
				$obj.removeClass("girar");
			}

			$obj.removeClass(classe).addClass($(this).data("efect"));
			classe = efeito;

			if($(this).data("clear")){
				intervalo = setTimeout(function(){
					$obj.removeClass(classe);
				},$(this).data("clear"));
			}

		return false;
	});
});
