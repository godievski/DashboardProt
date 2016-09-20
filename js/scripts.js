$(document).ready(init);

function init(){
	var $menuLeft_title = $(".menu_left-title");
	var $menuLeft_option = $(".menu_left-option");
	var $menuLeft = $(".menu_left");

	$menuLeft_option.hide();

	$menuLeft_title.on("click", showOptions);

	function showOptions(){
		var options = $(this).next();
		if(options.css("display") == "none"){
			$menuLeft_option.slideUp('slow');
			options.slideDown('slow');
		} else {
			options.slideUp('slow');
		}
	}

	var $menuLeft_button = $(".menu_left-button");
	var $wrapper = $(".wrapper");
	var $menuLeft = $(".menu_left");
	$menuLeft_button.on("click", displayMenu);

	function displayMenu(){
		if($menuLeft.css("left") != "0px"){
			$menuLeft.css("left","0px");
			$wrapper.css("margin-left","250px");
		} else{
			$menuLeft.css("left","-250px");
			$wrapper.css("margin-left","0px");
		}
	}
	
	/*OPEN & CLOSE MINI-WINDOWS*/
	var $closeButtons = $(".menu-close");
	$closeButtons.show();
	$closeButtons.on("click",menuCloseWindow);
	var $openButtons = $(".menu-open");
	$openButtons.hide();
	$openButtons.on("click",menuOpenWindow);

	function menuCloseWindow(){
		var idWindow = $(this).data("window");
		var openButton = $(this).next();
		var $window = $("#"+idWindow);
		$window.css("transform","scale(0)");
		setTimeout(function(){
    	$("#"+idWindow).hide();
		}, 600);
		$(this).hide();
		openButton.show();
	}
	function menuOpenWindow(){
		var closeButton =$(this).prev();
		var idWindow = closeButton.data("window");
		var $window = $("#"+idWindow);
		$window.show();
		$window.css("transform","scale(1)");
		$(this).hide();
		closeButton.show();
	}

	var $closeButtonWindow = $(".cih-close");
	$closeButtonWindow.on("click",selfClose);
	function selfClose(){
		var idItem = $(this).data("li");
		var idWindow = $(this).data("window");
		var $window = $("#"+idWindow);
		$window.css("transform","scale(0)");
		setTimeout(function(){
    	$("#"+idWindow).hide();
		}, 600);
		var item = $("#"+idItem);
		$(item.children()[1]).hide();
		$(item.children()[2]).show();
	}
	/*END*/
}