jQuery(document).ready(function($) {

    /* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '#header', offset: 400});
    
    /* ======= Fixed header when scrolled ======= */
    
    $(window).bind('scroll', function() {
         if ($(window).scrollTop() > 50) {
             $('#header').addClass('navbar-fixed-top');
         }
         else {
             $('#header').removeClass('navbar-fixed-top');
         }
    });
   
    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function(e){
        
        //store hash
        var target = this.hash;
                
        e.preventDefault();
        
		$('body').scrollTo(target, 800, {offset: -70, 'axis':'y', easing:'easeOutQuad'});
        //Collapse mobile menu after clicking
		if ($('.navbar-collapse').hasClass('in')){
			$('.navbar-collapse').removeClass('in').addClass('collapse');
		}
		
	});

    var classe = "";
    var $obj = $("#all-animation-icon");
    var intervalo;
    $(".btns button").click(function(){

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