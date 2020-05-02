import React, { useState } from "react";
import axios from "axios";

const copyToClipboard = (e) => {
  this.textArea.select();
  document.execCommand("copy");

  e.target.focus();
  this.setState({ copySuccess: "Copied!" });
};

const FormVal = (props) => {
  const [DataT, setDataT] = useState([]);
  return (
    <div>
      <div class="row">
        <h5>Enter Value</h5>
        <div class="col s3"></div>

        <div class="col s6">
          <input
            placeholder="value"
            value={DataT}
            type="text"
            class="validate"
            onChange={(e) => {
              setDataT(e.target.value);
            }}
          />

          <a
            style={{ margin: "0 10px" }}
            class="waves-effect waves-light btn"
            onClick={(e) => {
              if (DataT.length) {
                e.preventDefault();
                props.onSubmit(
                  DataT.split(",").map((item) => parseFloat(item))
                );
              }
            }}
          >
            Submit
          </a>

          <a
            class="waves-effect red lighten-2 waves-light btn"
            onClick={() => setDataT([])}
          >
            Clear
          </a>
        </div>
        <div class="col s3"></div>
      </div>
    </div>
  );
};

export default FormVal;
