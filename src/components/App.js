import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";
import MainHead from "./eeg/MainHead";
import DataTable from "./eeg/DataTable";
import BarChart from "./Charts/BarChart";
import FormVal from "./FormVal";
import TimeChart from "./Charts/TimeChart";

const App = () => {
  const [Data, setData] = useState([]);
  const [Row, setRow] = useState("s12");
  const [Class, setClass] = useState("");

  console.log(Class);
  const sendReq = async (data) => {
    const response = await axios.post(
      "https://eeg-alcohol-api.herokuapp.com/predict",
      { array: data }
    );

    setClass(response.data.message[0]);
  };

  const handleSubmit = (data) => {
    setData(data);
    sendReq(data);
    setRow("s7");
  };

  const renderTime = (data) => {
    if (data.length) {
      return <TimeChart sensVal={data} />;
    }
  };

  return (
    <div>
      <Header />
      <div>
        <div class="row" style={{ padding: "30px 15px" }}>
          <div class="row center-align">
            <FormVal onSubmit={handleSubmit} />
          </div>

          <div class="col s5">
            <DataTable sensVal={Data} />
          </div>
          <div class={`col ${Row}`}>
            <MainHead classIden={Class} />
            <div class="row">
              <div class="col s12 center-align">
                <BarChart />
                {renderTime(Data)}
              </div>
            </div>
          </div>
        </div>
        <div class="row"></div>
      </div>
    </div>
  );
};

export default App;
