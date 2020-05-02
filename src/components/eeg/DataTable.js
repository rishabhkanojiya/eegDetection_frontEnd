import React from "react";
// -2.065,-1.6780000000000002,-1.038,0.35600000000000004,0.905,-1.2,1.383,1.689,2.7260000000000004,-2.0140000000000002,0.732,-0.264,1.8719999999999999,1.048,0.285,1.923,-0.59,-4.333,-1.2819999999999998,-2.7060000000000004,0.40700000000000003,0.997,0.977,-2.411,-1.3219999999999998,2.441,2.533,2.309,2.34,4.242,0.040999999999999995,-4.059,-1.77,-7.395,1.902,-0.092,-2.533,-0.6,-0.6,-2.116,1.556,-3.7030000000000003,-1.058,-0.6,2.187,-2.126,0.46799999999999997,-0.387,-0.193,-3.713,1.882,-0.743,0.9159999999999999,-2.4619999999999997,4.73,4.445,1.841,0.895,1.099,-0.285,0.8140000000000001,-0.6,-0.529,0.376
export const sensPos = [
  "FP1",
  "FP2",
  "F7",
  "F8",
  "AF1",
  "AF2",
  "FZ",
  "F4",
  "F3",
  "FC6",
  "FC5",
  "FC2",
  "FC1",
  "T8",
  "T7",
  "CZ",
  "C3",
  "C4",
  "CP5",
  "CP6",
  "CP1",
  "CP2",
  "P3",
  "P4",
  "PZ",
  "P8",
  "P7",
  "PO2",
  "PO1",
  "O2",
  "O1",
  "X",
  "AF7",
  "AF8",
  "F5",
  "F6",
  "FT7",
  "FT8",
  "FPZ",
  "FC4",
  "FC3",
  "C6",
  "C5",
  "F2",
  "F1",
  "TP8",
  "TP7",
  "AFZ",
  "CP3",
  "CP4",
  "P5",
  "P6",
  "C1",
  "C2",
  "PO7",
  "PO8",
  "FCZ",
  "POZ",
  "OZ",
  "P2",
  "P1",
  "CPZ",
  "nd",
  "Y",
];

const renderList = (keys, values) => {
  const result = {};
  keys.forEach((key, i) => (result[key] = values[i]));

  return Object.keys(result).map((key, index) => {
    return (
      <tr key={key}>
        <td>{key}</td>
        <td>{result[key]}</td>
      </tr>
    );
  });
};

const DataTable = ({ sensVal }) => {
  if (!sensVal.length) {
    return <></>;
  }
  return (
    <div>
      <table className="centered striped">
        <thead>
          <tr>
            <th>Sensor Name</th>
            <th>Sensor Value</th>
          </tr>
        </thead>

        <tbody>{renderList(sensPos, sensVal)}</tbody>
      </table>
    </div>
  );
};

export default DataTable;
