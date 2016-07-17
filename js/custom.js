var chart;
$(document).ready(function()
{
	chart = new Highcharts.Chart({
		chart: {
			renderTo: 'container',
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false
		},
		title: {
			text: 'Browser market shares at a specific website, 2010'
		},
		credits: {
			enabled: false
		},
		tooltip: {
			formatter: function() {
				return '<b>'+ this.point.name +'</b>: '+ this.percentage +' %';
			}
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: true,
					color: '#000000',
					connectorColor: '#000000',
					formatter: function() {
						return '<b>'+ this.point.name +'</b>: '+ this.percentage +' %';
					}
				}
			}
		},
		series: [{
			type: 'pie',
			name: 'Browser share',
			data: [
				['Firefox',   45.0],
				['IE',       26.8],
				{
					name: 'Chrome',
					y: 12.8,
					sliced: true,
					selected: true
				},
				['Safari',    8.5],
				['Opera',     6.2],
				['Others',   0.7]
			]
		}]
	});

	$("#button").on("click", function()
	{
		chart.series[0].setData([
			['number1',Math.random()*1000],
			['number2',Math.random()*1000],
			['number3',Math.random()*1000],
			['number4',Math.random()*1000],
			['number5',Math.random()*1000],
			['number6',Math.random()*1000],
			{
				name: 'number7',
				y: Math.random()*1000,
				sliced: true,
				selected: true
			},
		], true);
	});
});
