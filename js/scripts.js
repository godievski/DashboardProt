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
	var $contentMain = $(".content-main");
	var $menuLeft = $(".menu_left");
	$menuLeft_button.on("click", displayMenu);

	function displayMenu(){
		if($menuLeft.css("left") != "0px"){
			$menuLeft.css("left","0px");
			$contentMain.css("padding-left","250px");
		} else{
			$menuLeft.css("left","-250px");
			$contentMain.css("padding-left","0px");
		}
	}
}