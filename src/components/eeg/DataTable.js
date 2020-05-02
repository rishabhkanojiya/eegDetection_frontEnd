import React from "react";
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
