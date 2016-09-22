$(document).ready(init);

function init(){
/*CHARTS*/
	function formatterPer(value){
		return value+"%";
	}
	var data1 = [
	    { label: 'In Use', value: 23.40 },
	    { label: 'Free', value: 76.60 },
		];
	var data2 = [
		{'label': 'In Use', "value": 1123.23},
		{'label': 'Free', "value": 123.31}
		];
	var data3 = [{label: 'In Use', value: 30.00},
				{label: 'Free', value:70.00}
		];
	var data4 = [{label: 'Used Memory', value: 60.86},
				{label: 'Shared Memory', value: 0.00},
				{label: 'Buffered Memory', value: 18.59},
				{label: 'Cached Memory', value: 23.58},
				{label: 'Free Memory', value: 11.91}
		];

	var chartOne = new Morris.Donut({
	  element: 'chartOne',
	  data: data1,
	  formatter: formatterPer
	});
	var chartTwo = new Morris.Donut({
		element: 'chartTwo',
		data: data2,
		colors: ['#0BA462',
		    	 '#39B580',
		    	 '#67C69D',
		    	 '#95D7BB'],
		formatter: function(value){return value+"Bytes";}
	});	
	var colors3 = ['#b4bccf','#4d515d','#5994f3'];
	var chartThree = new Morris.Donut({
		element:'chartThree',
		data: data3,
		colors: colors3,
		formatter: formatterPer
	});
	var chartFour = new Morris.Donut({
		element:'chartFour',
		data: data4,
		colors: ["#fe8b01","#ffdb0c","#63473c","#ff3161","#0cd1cc"],
		formatter: formatterPer
	});

	var numbers = ['One','Two','Three'];
	for(var i = 0; i < 3; i++)
		newLineExample('procTime'+numbers[i]);
	function newLineExample(id){
		var x = new Morris.Line({
		element: id,
		data: [
	    	{x: '2016-07-29', y: 20},
	    	{x: '2016-07-30', y: 24},
	    	{x: '2016-07-31', y: 23},
	    	{x: '2016-08-01', y: 31},
	    	{x: '2016-08-02', y: 14},
	    	{x: '2016-08-03', y: 19},
	    	{x: '2016-08-04', y: 20},
	    	{x: '2016-08-05', y: 19},
	    	{x: '2016-08-06', y: 25}
	  	],
	  	xkey: 'x',
	  	ykeys: ['y'],
	  	labels: ['Percent'],
	  	yLabelFormat: formatterPer,
	  	resize: true
		});
		return x;
	}
	


	/*SET ID MENU-SUBITEM AND DATA-WINDOW*/
	var menuLeftItems = $(".menu_left-item");
	for(var i = 0; i < menuLeftItems.length; i++){
		var  subItems= $(menuLeftItems[i]).find("li");
		for(var j = 0; j < subItems.length; j++){
			var subItemLi = $(subItems[j]);
			subItemLi.attr("id",createIdSubItem(i,j));
			try{
				var buttonsI = $(subItemLi).find("i");
				buttonsI.attr("data-window",createIdWindow(i,j));
			} catch(err){}
		}
	}
	function createIdSubItem(i,j){
		return "id","item" + i.toString() + "_" + j.toString();
	}
	function createIdWindow(i,j){
		return "window" + i.toString() + "_" + j.toString();
	}

	var miniWindows = $(".container-fluid .row .container-item");
	/*PAGE DASHBOARD ID: 0*/
	console.log(miniWindows.length)
	for(var i = 0; i < miniWindows.length; i++){
		var miniW = $(miniWindows[i]);
		miniW.attr("id",createIdWindow(0,i));
		try{
			var closeButton = miniW.find(".cih-close");
			console.log(closeButton);
			closeButton.attr({
				"data-wizndow":createIdWindow(0,i),
				"data-menu": createIdSubItem(0,i)
			});
		}catch(err){}
	}
}