
var graph = new Rickshaw.Graph( {
	element: document.getElementById("chart"),
	renderer: 'line',
	height: 300,
	width: 800,
	series: [
		{
			data: [ { x: 0, y: 120 }, { x: 1, y: 890 }, { x: 2, y: 38 }, { x: 3, y: 70 }, { x: 4, y: 32 } ],
			color: "#c05020"
		}, {
			data: [ { x: 0, y: 80 }, { x: 1, y: 200 }, { x: 2, y: 100 }, { x: 3, y: 520 }, { x: 4, y: 133 } ],
			color: "#30c020"
		}, {
			data: [ { x: 0, y: 200 }, { x: 1, y: 390 }, { x: 2, y: 1000 }, { x: 3, y: 200 }, { x: 4, y: 230 } ],
			color: "#6060c0"
		}
	]
} );

var y_ticks = new Rickshaw.Graph.Axis.Y( {
	graph: graph,
	orientation: 'left',
	tickFormat: Rickshaw.Fixtures.Number.formatKMBT,
	element: document.getElementById('y_axis')
} );



// var tv = 50;
// function render_graph(){
//
// var throughput = new Rickshaw.Graph({
//   element: document.querySelector("#throughput_chart"),
//   width: "300",
//   height: "200",
//   renderer: "line",
//   series: new Rickshaw.Series.FixedDuration([{
// name: 'one', color: 'gold'
// }], undefined, {
// timeInterval: tv,
// maxDataPoints: 100,
// timeBase: new Date().getTime() / 1000
// })
// });
// var alerts = new Rickshaw.Graph({
// element: document.querySelector("#alerts_chart"),
// width: "300",
// height: "200",
// renderer: "line",
// series: new Rickshaw.Series.FixedDuration([{
// name: 'one', color: 'red'
// }], undefined, {
// timeInterval: tv,
// maxDataPoints: 100,
// timeBase: new Date().getTime() / 1000
// })
// });
// for(var i = 0; i < 100; i++){
// addRandomData(throughput);
// addRandomData(alerts);
// }
// throughput.render();
// alerts.render();
//
//
// }
//
// function poll(){
// d3.json("http://localhost:9393/metrics/rich-gauges/mytap", function (json) {
// console.log(json.average)
//
// //chart.series.addData(data);
// //code here
// })
// // }
// // setInterval(poll,tv)
// // setInterval(function () {
// // addRandomData(throughput);
// // addRandomData(alerts);
// // throughput.render();
// // alerts.render();
// // }, tv);
// function addRandomData(chart) {
//   d3.json("http://localhost:9393/metrics/rich-gauges/mytap", function (json) {
//   console.log(json.value)
//   var data = {
//   one: json.value
//   };
//   //console.log("adding this data" +  Math.floor(Math.random() * 40) + 120)
//   chart.series.addData(data);
//   //chart.series.addData(data);
//   //code here
//   })
//
// }
