


import React from "react";
import "./styles.css";
const HospitalDisplay = (props) => {
  
  return (
    <div className="cont">
      <div>Name: {props.name}</div>
      <div>Beds: {props.bed}</div>
      <div>Ambulance: {props.amb}</div>
      <div>Doctors: {props.doctors}</div>
    </div>
  );
};

export default HospitalDisplay;