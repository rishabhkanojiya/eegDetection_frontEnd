import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";

const data = {
  labels: ["LR", "DCT", "KNN", "GNB", "SVM", "DNN", "RNN_LSTM"],
  data: [0.64, 0.81, 0.91, 0.59, 0.93, 0.99, 0.95],
};

const chartData = {
  labels: data.labels,
  datasets: [
    {
      label: "Accuracy",
      data: data.data,
      backgroundColor: [
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(255, 99, 132, 0.2)",
        "rgba(102, 187, 106,0.2)",
        "rgba(65, 162, 235, 0.2)",
        "rgba(25, 206, 86, 0.2)",
        "rgba(35, 99, 132, 0.2)",
        "rgba(132, 187, 106,0.2)",
      ],
      borderColor: [
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(255, 99, 132, 1)",
        "rgba(102, 187, 106, 1)",
        "rgba(65, 162, 235, 1)",
        "rgba(25, 206, 86, 1)",
        "rgba(35, 99, 132, 1)",
        "rgba(132, 187, 106, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const BarChart = () => {
  return (
    <div>
      <div>
        <div className="row">
          <div className="col s12 m12">
            <Bar
              data={chartData}
              height={100}
              options={{
                maintainAspectRatio: true,
                title: {
                  display: true,
                  fontSize: 15,
                  text: "Algorithm Comparison",
                },
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m12">
            <Doughnut
              data={chartData}
              height={100}
              options={{
                maintainAspectRatio: true,
                title: {
                  display: true,
                  fontSize: 15,
                  text: "Algorithm Comparison",
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
