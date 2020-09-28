import React from "react";

export default function ProgressBar(props) {
  return (
    <div
      className="ProgressBar"
      style={{
        float: "left",
        width: "90%",
        paddingLeft: "5%",
        paddingRight: "5%",
        marginTop: 0,
        paddingBottom: "15px",
        marginBottom: 0,
        backgroundColor: props.backgroundColor,
      }}
    >
      <h4
        style={{
          marginTop: "10px",
          backgroundColor: props.backgroundColor,
        }}
      >
        {props.statName}
      </h4>
      <div
        className="containerProgressBar"
        style={{
          width: "100%",
          border: "1px solid white",
          borderRadius: "20px",
          margin: 0,
          backgroundColor: props.backgroundColor,
        }}
      >
        <div
          className="Progress"
          style={{
            backgroundColor: props.color,
            width: `${(props.value / props.maxValue) * 100}%`,
            padding: 0,
            marginBottom: 0,
            borderRadius: "20px",
          }}
        >
          {`${props.value}`}
        </div>
      </div>
    </div>
  );
}
