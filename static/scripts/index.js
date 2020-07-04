// function firstplot() {
//     var canvas = document.getElementById('scatter');
//     var ctx = canvas.getContext('2d');
//     var count = 0;
//     var scatterChart = new Chart(ctx, {
//         type: 'scatter',
//         data: {
//             datasets: [{
//                     label: ['A'],
//                     backgroundColor: 'red',
//                     data: [
//                         { x: 1, y: 4 },
//                         { x: 5, y: 5 },
//                         { x: 8, y: 1 },
//                         { x: 2, y: 6 },
//                         { x: 9, y: 4 }
//                     ]
//                 },
//                 {
//                     label: ['B'],
//                     backgroundColor: 'green',
//                     data: [
//                         { x: 6, y: 9 },
//                         { x: 1, y: 2 },
//                         { x: 2, y: 7 },
//                         { x: 9, y: 3 },
//                         { x: 4, y: 7 }
//                     ]
//                 }
//             ],
//         },
//         options: {
//             events: ['click'],
//             scales: {
//                 xAxes: [{
//                     type: 'linear',
//                     position: 'bottom'
//                 }]
//             },

//             onClick(event) {
//                 second(event);
//                 console.log(scatterChart.getPointsAtEvent(event))
//                 var yTop = scatterChart.chartArea.top;
//                 var yBottom = scatterChart.chartArea.bottom;

//                 var yMin = scatterChart.scales['y-axis-1'].min;
//                 var yMax = scatterChart.scales['y-axis-1'].max;
//                 var newY = 0;

//                 if (event.offsetY <= yBottom && event.offsetY >= yTop) {
//                     newY = Math.abs((event.offsetY - yTop) / (yBottom - yTop));
//                     newY = (newY - 1) * -1;
//                     newY = newY * (Math.abs(yMax - yMin)) + yMin;
//                 };

//                 var xTop = scatterChart.chartArea.left;
//                 var xBottom = scatterChart.chartArea.right;
//                 var xMin = scatterChart.scales['x-axis-1'].min;
//                 var xMax = scatterChart.scales['x-axis-1'].max;
//                 var newX = 0;

//                 if (event.offsetX <= xBottom && event.offsetX >= xTop) {
//                     newX = Math.abs((event.offsetX - xTop) / (xBottom - xTop));
//                     newX = newX * (Math.abs(xMax - xMin)) + xMin;
//                 };

//                 console.log(Math.round(newX), Math.round(newY));
//                 // var activePoints = scatterChart.getElementsAtEvent(event);
//                 // var firstPoint = activePoints[0];
//                 // if (firstPoint !== undefined) {
//                 //     var label = scatterChart.data.labels[firstPoint._index];
//                 //     var value = scatterChart.data.datasets[firstPoint._datasetIndex].data[firstPoint._index];

//                 //     alert(label + ": " + value.x);
//                 //     alert(label + ": " + value.y);
//                 //     if (count == 0) {
//                 //         document.getElementById('interactivebar').removeClass('hide')
//                 //         count++;
//                 //     }
//                 // }
//             }
//         }
//     });
// }

// function second(event) {
//     var canvas = document.getElementById('interactivebar');
//     var ctx1 = canvas.getContext('2d');
//     var value = 4;
//     var value1 = 20;
//     //console.log(JSON.parse(labelsVar))
//     //console.log(JSON.parse(dataVar1))
//     console.log(dataVar1)
//     var myChart = new Chart(ctx1, {
//         type: 'bar',
//         data: {
//             labels: labelsVar,
//             datasets: [{
//                 label: "A",
//                 backgroundColor: "blue",
//                 data: dataVar1
//             }, {
//                 label: "B",
//                 backgroundColor: "orange",
//                 data: dataVar2
//             }]
//         },
//         options: {
//             responsive: true,
//             legend: {
//                 position: "top"
//             },
//             title: {
//                 display: true,
//                 text: "Index: " + value + " " + "THRESHOLD: " + value1
//             },
//             scales: {
//                 yAxes: [{
//                     ticks: {
//                         beginAtZero: true
//                     },
//                     label: "Frequency"
//                 }]
//             }
//         }
//     });
// }
// $(document).ready(function() {
//     $('#file-input').on('change', function() {
//         var fileName = $(this).val();
//         $(this).next('.custom-file-label').html(fileName);
//     })
// })