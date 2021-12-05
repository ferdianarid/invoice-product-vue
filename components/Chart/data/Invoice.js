export const InvoiceData = {
    type: "doughnut",
    data: {
        labels: ["Invoiced", "Paid/Collected", "Overdue"],
        datasets: [{
            label: "Total Invoices",
            data: [357, 288, 467],
            backgroundColor: ["rgb(54,73,93)", "yellow ", "red"],
            borderColor: "transparent",
            borderWidth: 1,
            spacing: 10
        }]
    },
    options: {
        animations: {
            radius: {
                duration: 400,
                easing: 'linear',
                loop: (context) => context.active
            }
        },
        hoverRadius: 12,
        hoverBackgroundColor: 'yellow',
        interaction: {
            mode: 'nearest',
            intersect: false,
            axis: 'x'
        },
        title: {
            display: true,
            text: "Summary Invoices"
        },
        responsive: true,
        lineTension: 1,
        scales: {
            yAxes: [{
                gridLines: {
                    drawBorder: false
                },
                ticks: {
                    beginAtZero: true,
                    padding: 25
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false,
                },
            }],
        },
        plugins: {
            tooltip: {
                callbacks: {
                    labelColor: (context) => {
                        return {
                            borderColor: "rgb(0, 0, 255)",
                            backgroundColor: "yellow",
                            borderWidth: "1",
                            borderRadius: 4
                        }
                    },
                    labelTextColor: (context) => {
                        return "#545454"
                    }
                }
            },
            datalabels: {
                display: true,
                formatter: (value) => {
                    return value + "%"
                }
            }
        }
    }
}

export default InvoiceData;