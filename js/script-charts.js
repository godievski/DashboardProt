$(document).ready(init);

function init(){
/*CHARTS*/
	function formatterPer(value){
		return value+"%";
	}
	var chartOne = new Morris.Donut({
	  element: 'chartOne',
	  data: [
	    { label: 'In Use', value: 23.40 },
	    { label: 'Free', value: 76.60 },
	  ],
	  formatter: formatterPer
	});
	var dataTwo = [
		{'label': 'In Use', "value": 1123.23},
		{'label': 'Free', "value": 123.31}
	];
	var chartTwo = new Morris.Donut({
		element: 'chartTwo',
		data: dataTwo,
		colors: ['#0BA462',
		    	 '#39B580',
		    	 '#67C69D',
		    	 '#95D7BB'],
		formatter: function(value){return value+"Bytes";}
	});	

	var colorsThree = ['#b4bccf','#4d515d','#5994f3'];
	var chartThree = new Morris.Donut({
		element:'chartThree',
		data: [{label: 'In Use', value: 30.00},
				{label: 'Free', value:70.00}
		],
		colors: colorsThree,
		formatter: formatterPer
	});

	var chartFour = new Morris.Donut({
		element:'chartFour',
		data: [{label: 'Used Memory', value: 60.86},
				{label: 'Shared Memory', value: 0.00},
				{label: 'Buffered Memory', value: 18.59},
				{label: 'Cached Memory', value: 23.58},
				{label: 'Free Memory', value: 11.91}
		],
		colors: ["#fe8b01","#ffdb0c","#63473c","#ff3161","#0cd1cc"],
		formatter: formatterPer
	});
}