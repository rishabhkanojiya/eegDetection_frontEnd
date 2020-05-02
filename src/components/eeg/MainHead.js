import React from "react";
import eegImag from "../../static/670px-International-10-20-system-for-EEG-MCN-svg.png";
import alcoholic from "../../static/al.svg";
import control from "../../static/con.svg";

const renderImage = (classIden) => {
  if (classIden === "a") {
    return (
      <>
        <div>Alcoholic</div>
        <p></p>
        <img src={alcoholic} alt="eeg image" style={{ height: 250 }} />
      </>
    );
  } else if (classIden === "c") {
    return (
      <>
        <div>Control Group</div>
        <p></p>
        <img src={control} alt="eeg image" style={{ height: 250 }} />
      </>
    );
  }
  return (
    <>
      <div>Alcoholic</div>
      <p></p>
      <img src={eegImag} alt="eeg image" />
    </>
  );
};

const MainHead = ({ classIden }) => {
  return <div className="center-align">{renderImage(classIden)}</div>;
};

export default MainHead;
