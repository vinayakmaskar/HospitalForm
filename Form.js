import { useState } from "react";
import "./styles.css";

const Form = (props) => {

  const [oldgender, newgender] = useState("");
  const [oldage, newage] = useState("");
  const [oldname, newname] = useState("");
  const [oldexp, newexp] = useState("");
  const [oldp, newp] = useState("");
  const [oldphone,newphone] = useState("");

  const NameChange = (event) => {
    newname(event.target.value);
  };

  const PhoneChange = (event) => {
    newphone(event.target.value);
  };

  const AgeChange = (event) => {
    newage(event.target.value);
  };

  const GenderChange = (event) => {
    newgender(event.target.value);
  };

  const ExpChange = (event) =>{
    newexp(event.target.value);
  };

  const PatiensChange = (event) => {
    newp(event.target.value);
  };

  const Clicked = (event) => {
    event.preventDefault();

    const val = {
      name: oldname,
      age: oldage,
      gender: oldgender,
      experience: oldexp,
      patientscured: oldp,
      phonenumber: oldphone,
      id: Math.random()
    };

    props.values(val);



    newgender("");
    newage("");
    newname("");
  };

  return (
    <div>
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
        <label>Age</label>
        <input
          type="number"
          min="1"
          onChange={AgeChange}
          value={oldage}
          className="inputbox"
        />
      </div>

      <div className="innerdiv">
        <label>Gender</label>
        <select value={oldgender} onChange={GenderChange} className="inputbox">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div className="innerdiv">
        <label>Experience</label>
        <input
          type="number"
          min="1"
          onChange={ExpChange}
          value={oldexp}
          className="inputbox"
        />
      </div>

      <div className="innerdiv">
        <label>Patients Cured</label>
        <input
          type="number"
          min="1"
          onChange={PatiensChange}
          value={oldp}
          className="inputbox"
        />
      </div>

      <div className="innerdiv">
        <label>Phone Number</label>
        <input
          type="text"
          onChange={PhoneChange}
          value={oldphone}
          maxlength="10"
          minlength="10"
          className="inputbox"
        />
      </div>

      <div className="buttons">
        <button onClick={Clicked} className="btn btn-outline-dark">
          Add Doctor
        </button>
        <button onClick={props.canc} className="btn btn-outline-dark">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Form;
