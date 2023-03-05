import { useState } from "react";


const HospitalForm = (props) =>{


 const [oldname, newname] = useState("");
 const [oldbed,newbed] = useState("");
 const [oldamb,newamb] = useState("");


 const NameChange =(event) =>{

    newname(event.target.value);
 }

 const BedChange = (event) =>{

    newbed(event.target.value);
 }

 const AmbChange = (event) =>{

    newamb(event.target.value);
    props.submitcall(AddedHospital);
 }

 const AddedHospital = (event) =>{

    event.preventDefault();

    const Hospital = {
        name: oldname,
        beds: oldbed,
        ambulance: oldamb,
        
    }

    props.hospvalues(Hospital);

    newname("");
    newamb("");
    newbed("");
 }


    return (
      <div>
        <div>
          <label>Name</label>
          <input type="text" onChange={NameChange} value={oldname} />
        </div>

        <div>
          <label>Beds</label>
          <input type="text" onChange={BedChange} value={oldbed} />
        </div>

        <div>
          <label>Ambulance</label>
          <input type="text" onChange={AmbChange} value={oldamb} />
        </div>
{/* 
        <button onClick={AddedHospital}>Add Hospital</button> */}

        {/* {props.submitcall(AddedHospital)} */}
      </div>
    );
}

export default HospitalForm;