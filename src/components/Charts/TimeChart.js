import React from "react";
import { Line } from "react-chartjs-2";
import { sensPos } from "../eeg/DataTable";

const TimeChart = ({ sensVal }) => {
  const chartData = {
    labels: sensPos,
    datasets: [
      {
        label: "Sensor Position vs Value",
        data: sensVal,
        backgroundColor: ["rgba(75, 192, 192, 0.2)"],
        pointRadius: 0,
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  return (
    <div>
      <div>
        <div className="row">
          <div className="col s12 m12 ">
            <Line
              data={chartData}
              height={150}
              options={{
                // pan: {
                //   enabled: true,
                //   mode: "xy",
                // },
                // zoom: {
                //   enabled: true,
                //   mode: "xy",
                // },
                maintainAspectRatio: true,
                title: {
                  display: true,
                  fontSize: 15,
                  text: "Sensor Position vs Value",
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeChart;
