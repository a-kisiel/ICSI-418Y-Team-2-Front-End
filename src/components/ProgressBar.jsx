import React from "react";

export default function ProgressBar(props) {
  return (
    <div
      className="ProgressBar"
      style={{
        float: "left",
        width: "90%",
        marginLeft: "5%",
        marginRight: "5%",
        padding: 0,
        marginTop: 0,
        marginBottom: "10px",
      }}
    >
      <h4 style={{ marginTop: "10px", padding: 0 }}>{props.statName}</h4>
      <div
        className="containerProgressBar"
        style={{
          width: "100%",
          border: "1px solid white",
          borderRadius: "20px",
          padding: 0,
          marginBottom: 0,
        }}
      >
        <div
          className="Progress"
          style={{
            backgroundColor: props.color,
            width: `${(props.value / props.maxValue) * 100}%`,
            padding: 0,
            margin: 0,
            borderRadius: "20px",
          }}
        >
          {`${props.value}`}
        </div>
      </div>
    </div>
  );
}
