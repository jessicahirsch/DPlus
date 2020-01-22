function renderChart(data, labels) {
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Keywords',
                data: data,
            }]
        },
    });
}

$("#renderBtn").click(
    function () {
        data = [];
        labels =  [x];
        renderChart(data, labels);
    }
);