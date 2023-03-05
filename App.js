

import "./App.css";
import Select from "react-select";

import Displaydoctor from "./Displaydoctor.js";
import "./styles.css";


import FormList from "./FormList.js";
import { useState } from "react";
import HospitalDisplay from "./HospitalDisplay.js";
import HospitalForm from "./HospitalForm";
function App() {

  const [oldname, newname] = useState("");
  const [oldbed, newbed] = useState("");
  const [oldamb, newamb] = useState("");
  const [oldrating,newrating] = useState("1");
  const [oldaddress,newaddress] = useState("");
  const [oldcity,newcity] = useState("");
  const [oldhealthdept,newhealthdept] = useState("");

  const [oldfacility, newfacility] = useState("");

  const [oldtype,newtype] = useState("");

  const myData = [
    { value: "WifiService", label: "WifiService" },
    { value: "Online Appointment", label: "Online Appointment" },
    { value: "Parking Area", label: "Parking Area" },
    { value: "Waiting Lounge", label: "Waiting Lounge" },
  ];

  const [oldphone,newphone] = useState("");
  //  const [submitcall,newsubmitcall] = useState();

  const NameChange = (event) => {
    newname(event.target.value);
  };

  const PhoneChange = (event) =>{
    newphone(event.target.value);
  }

  const TypeChange = (event) =>{
    newtype(event.target.value);
  }

  const BedChange = (event) => {
    newbed(event.target.value);
  };

  const AmbChange = (event) => {
    newamb(event.target.value);
  };

  const RatingChange =(event) =>{
    newrating(event.target.value);
  }

  const AddressChange = (event) =>{
    newaddress(event.target.value);
  }

  const CityChange =(event) =>{
    newcity(event.target.value);
  }

  const FacilityChange = (event) =>{
    newfacility(event.target.value);
    console.log(newfacility);
  }

  const HealthDepartmentChange = (event) =>{
    newhealthdept(event.target.value);
  }

  const AddedHospital = (event) => {
    event.preventDefault();
  
    const Hospital = {
      name: oldname,
      beds: oldbed,
      ambulance: oldamb,
      rating: oldrating,
      address: oldaddress,
      city: oldcity,
      phone: oldphone,
      healthdepartments: oldhealthdept,
      
    };
    HospitalValues(Hospital);


    newname("");
    newamb("");
    newbed("");
  };
  const [oldv, newv] = useState([]);

  const [olddoc, newdoc] = useState([]);

  const FinalValues = (val) => {
    newdoc([...olddoc, val]);
    // newv(oldv.map(x => x.doctors[olddoc]));
  };

  const Delete = (val) => {
    console.log(olddoc,val)
    newdoc(olddoc.filter((vals) => vals.id !== val));
     console.log(olddoc);
  };

  const HospitalValues = (val) => {
    val = { ...val, doctors: olddoc };
    newv([val, ...oldv]);
    newdoc([]);
    console.log(val);
    alert("Hospital added successfully!")
  };      

  return (
    <div className="whole">
      <div className="headings">
        <h1>Hospital Form</h1>
      </div>

      <div className="hospForm">
        <div className="innerdiv">
          <label>Name</label>

          <input
            type="text"
            onChange={NameChange}
            value={oldname}
            className="inputbox"
          />
        </div>

        <div className="innerdiv">
          <label>Phone number</label>
          <input
            type="number"
            onChange={PhoneChange}
            value={oldphone}
            className="inputbox"
          />
        </div>

        <div className="innerdiv">
          <label>Beds</label>
          <input
            type="number"
            min="1"
            onChange={BedChange}
            value={oldbed}
            className="inputbox"
          />
        </div>

        <div className="innerdiv">
          <label>Health Departments</label>
          <input
            type="number"
            min="1"
            onChange={HealthDepartmentChange}
            value={oldhealthdept}
            className="inputbox"
          />
        </div>

        <div className="innerdiv">
          <label>Ambulance</label>
          <input
            type="number"
            min="1"
            onChange={AmbChange}
            value={oldamb}
            className="inputbox"
          />
        </div>

        <div className="innerdiv">
          <label>Rating</label>

          <select
            value={oldrating}
            onChange={RatingChange}
            className="inputbox"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div className="innerdiv">
          <label>Type</label>

          <select value={oldtype} onChange={TypeChange} className="inputbox">
            <option value="Private">Private</option>
            <option value="Government">Government</option>
          </select>
        </div>

        <div className="innerdiv">
          <label>Facilities</label>
          <Select isMulti options={myData} id="facility" className="inputbox" />
        </div>

        <div className="innerdiv">
          <label>Address</label>
          <input
            type="text"
            onChange={AddressChange}
            value={oldaddress}
            className="inputbox"
          />
        </div>

        <div className="innerdiv">
          <label>City</label>
          <input
            type="text"
            onChange={CityChange}
            value={oldcity}
            className="inputbox"
          />
        </div>
        {/* 
        <button onClick={AddedHospital}>Add Hospital</button> */}

        {/* {props.submitcall(AddedHospital)} */}
      </div>

      <div className="headings">
        <h1>Add Doctors</h1>
      </div>

      <FormList values={FinalValues} />

      {olddoc.map((val, idx) => (
        <Displaydoctor
          name={val.name}
          key={idx}
          age={val.age}
          gender={val.gender}
          patcured={val.patientscured}
          exp={val.experience}
          del={Delete}
          id={val.id}
        />
      ))}

      <div className="lastbutton">
        <button onClick={AddedHospital} className="btn btn-dark">
          Add Hospital
        </button>
      </div>
    </div>
  );
}

export default App;
