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

	/*CHARTS*/
	var chartOne = new Morris.Donut({
	  element: 'chartOne',
	  data: [
	    { label: 'In Use', value: 23.40 },
	    { label: 'Free', value: 76.60 },
	  ],
	  formatter: function(x){return x+"%"}
	});
}