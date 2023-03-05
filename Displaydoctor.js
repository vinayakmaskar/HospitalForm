
import React from "react";
import "./styles.css";
import HospitalDisplay from "./HospitalDisplay.js";
const Displaydoctor = (props) =>{

    const Deleteit = () => {
        
        props.del(props.id);
    }

    return (
      <div className="cont">
        <div className="docdiv">
          <span className="docdetail">Name:</span>{" "}
          <span className="docdetail">{props.name}</span>
        </div>

        <div className="docdiv">
          <span className="docdetail">Age:</span>{" "}
          <span className="docdetail">{props.age}</span>
        </div>
        <div className="docdiv">
          <span className="docdetail">Gender:</span>{" "}
          <span className="docdetail">{props.gender}</span>
        </div>
        <div className="docdiv">
          <span className="docdetail">Experience:</span>{" "}
          <span className="docdetail">{props.exp}</span>
        </div>
        <div className="docdiv">
          <span className="docdetail">Patients Cured:</span>{" "}
          <span className="docdetail">{props.patcured}</span>
        </div>

        <div className="delbutton">
          <button onClick={Deleteit} className="btn btn-outline-dark">
            Delete
          </button>
        </div>

        {/* <div>
          {props.hospital.map((val) => (
            <HospitalDisplay
              name={val.name}
              bed={val.beds}
              amb={val.ambulance}
              doctors={val.doctors}
            />
          ))}
        </div> */}
      </div>
    );

}

export default Displaydoctor;