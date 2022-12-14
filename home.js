// FOR CHART 1
const data1 = {
    // labels: ["Red", "Blue", "Yellow"],
    datasets: [
        {
            label: "My First Dataset",
            data: [150, 50, 100],
            backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
        },
    ],
};
const config1 = {
    type: "doughnut",
    data: data1,
};

const myChart1 = new Chart(
    document.getElementById("myChart1"),
    config1
);


// FOR CHART 2
const data2 = {
    // labels: ["Red", "Blue", "Yellow"],
    datasets: [
        {
            label: "My First Dataset",
            data: [150, 50, 100],
            backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
        },
    ],
};
const config2 = {
    type: "doughnut",
    data: data2,
};


const myChart2 = new Chart(
    document.getElementById("myChart2"),
    config2
);

