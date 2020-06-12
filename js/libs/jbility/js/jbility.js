/**
*	jBility
*	jBility is a free set of accessibility functions that uses JQuery.
*	By: Uriel Cairê Balan Calvi
*	Available on: https://github.com/urielcaire/jBility
*/
jQuery(document).ready(function( $ ){
	/*===================================================================
	*	jBility uses JsCookie to manager cookies.
	*	JsCookie is available on: https://github.com/urielcaire/jscookie
	*====================================================================*/
	function createCookie(name, value, days){
		var expires = "";
		if(days){
			var time = new Date();
			time.setTime(time.getTime()+(days*24*60*60*1000));
		}
		document.cookie = name+"="+value+expires+"; path=/";
	}

	function getCookie(name){
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return "";
	}

	function deleteCookie(name) {
		createCookie(name,"",-1);
	}

	function checkCookie(name){
		var check = getCookie(name);
		if(check != "")
			return true;
		return false;
	}

	/*======================================
	*		jBility functions
	*======================================*/

  function constrast(){
    console.log('removeConstrast');
    $('*').toggleClass('pagina-acessivel');
    $('.acess-container').removeClass('f-transparent');
    $('#botao').toggleClass('f-transparent');
    $('#acess-icons').toggleClass('f-transparent');
    $('.acess-icon').toggleClass('f-transparent');
    $('img').toggleClass('f-transparent');
    $('#jbbutton').toggleClass('f-transparent');
  }

  $('#contrast').click(function(){
	  constrast();
  });

	var $cElements = $("body").find("*");
	var fonts = [];

	function getFontSize() {
		for (var i = 0; i < $cElements.length; i++) {
	 		fonts.push(parseFloat($cElements.eq(i).css('font-size')));
	  }
	}

	getFontSize();
	$("#increaseFont").on('click', function() {
		for (var i = 0; i < $cElements.length; i++) {
	   	++fonts[i];
	   	$cElements.eq(i).css('font-size', fonts[i]);
	  }
	});

	$("#decreaseFont").on('click', function() {
		for (var i = 0; i < $cElements.length; i++) {
			--fonts[i];
			$cElements.eq(i).css('font-size', fonts[i]);
		}
	});

	$('#jbbutton').click(function(){
    $('#acess-icons').toggle(150);
  });

});
