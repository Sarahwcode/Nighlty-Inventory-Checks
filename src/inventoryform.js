import React, {useState} from "react";
import './inventoryForm.css';
import DisplayInput from "./displayinput";


export default function InventoryForms() {
const [form, setForms] = useState({
    grateful: "",
    reduce: "",
    impact: "",
});

function submitChange (event) {
    setForms ({
        ...form, [event.target.id]: event.target.value,
    });
}

    function submitForm(event) {
        event.preventDefault();
        console.log(form);
    
      }
    return (
        <div className="forms">
        <h1>Nightly Inventory Checks</h1>
        <form className='form' onSubmit={submitForm}>
          <div>
            <label for="">What am I grateful for today?</label>
            <input type="text" id="grateful" value={form.grateful} onChange={submitChange} />
          </div>
          <div>
            <label for=""
              >How can I cultivate more gratitude and reduce resentment?</label
            >
            <input type="text" id="reduce" value={form.reduce} onChange={submitChange} />
          </div>
          <div>
            <label for=""
              >How can I be more mindful of the impact of my actions on
              others?</label
            >
            <input type="text" id="impact" value={form.impact} onChange={submitChange} />
          </div>
          <input type="submit" id="submit" />
        </form>
        <div>
       <DisplayInput display= {form}/>
          </div>
        </div>
    );
}