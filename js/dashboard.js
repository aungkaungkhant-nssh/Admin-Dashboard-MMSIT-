$('.counter-up').counterUp({
    delay:10,
    time:1000
})
const dateArray =["May 1","May 2","May 3","May 4","May 5","May 6","May 7"];
const orderCounter = [7,5,3,5,3,5,6,7,8,1];
const viewerCounter = [10,12,15,14,16,19,22,17,19,10]
const ov = document.getElementById('ov').getContext('2d');
const myChart = new Chart(ov, {
    type: 'line',
    data: {
        labels: dateArray,
        datasets: [
            {
                label: 'Order Count',
                data: orderCounter,
                backgroundColor: [
                    '#007bff30',
                
                ],
                borderColor: [
                    '#007bff',
                ],
                borderWidth: 1,
                tension:0
            },
            {
                label: 'Viewer Count',
                data:viewerCounter,
                backgroundColor: [
                    '#28a74530',
                
                ],
                borderColor: [
                    '#28a745',
                ],
                borderWidth: 1,
                tension:0
            }
    ],
        
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            },
           xAxes:[
               {
                   display:true,
                   gridLines:[
                       {
                           display:false
                       }
                   ]
               }
           ],

        },
        legend:{
        position: 'top',
            labels:{
              fontColor: "#333",
              usePointStyle:"circle"
            }
          }
    }
});

let  orderFromPlace = [44,14,16,17,86,44,12]
let places = ["YGN","MDY","POL","LS","NPT"];
const pv = document.getElementById('pv').getContext('2d');


  const pvChart = new Chart(pv, {
    type: 'doughnut',
    data: {
        labels: dateArray,
        datasets: [
            {
                label: 'OrderFromPlace',
                data: orderFromPlace,
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                
                ],
                borderColor: [
                    '#007bff',
                ],
                borderWidth: 1,
                tension:0
            },
            {
                label: 'Places',
                data:places,
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                
                ],
                borderColor: [
                    '#28a745',
                ],
                borderWidth: 1,
                tension:0
            }
    ],
        
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            },
           xAxes:[
               {
                   display:false,
                   gridLines:[
                       {
                           display:false
                       }
                   ]
               }
           ],

        },
        legend:{
        position: 'top',
            labels:{
              fontColor: "#333",
              usePointStyle:"circle"
            }
          }
    }
});