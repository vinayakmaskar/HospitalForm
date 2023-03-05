import { useState } from "react";
import Form from "./Form.js";

const FormList = (props) => {

    


    const [old,news] = useState(true);

    const Added = (event) =>{
        event.preventDefault();
        news(false);
    }

    const FormValues = (val) =>{
        
        props.values(val);
        news(true);
    }

    const Cancel = () =>{
        news(true)
    }
    return (
      <div className="hospForm">
        {old && (
          <div>
            <button onClick={Added} className="btn btn-outline-dark">
              Add Doctor
            </button>
          </div>
        )}

        {!old && <Form values={FormValues} canc={Cancel} />}
      </div>
    );



}

export default FormList;