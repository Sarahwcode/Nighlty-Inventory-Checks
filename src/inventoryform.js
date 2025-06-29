import React, {useState} from "react";
import './inventoryForm.css';
import DisplayInput from "./displayinput";
import GenerateLoop from "./generateLoop";
import ToDoList from "./todolist";


export default function InventoryForms() {
const [form, setForms] = useState({
    grateful: "",
    reduce: "",
    impact: "",
    fear: "",
    creative: "",
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
          <h1>Welling Being App</h1>
         <GenerateLoop/>
          <ToDoList/>
        <h1>Nightly Inventory Checks</h1>
        <div className="sectionOne" >
        <form className='form' onSubmit={submitForm}>
          <div>
            <label >What am I grateful for today?</label>
            <div>
            <input type="text" id="grateful" value={form.grateful} onChange={submitChange} className="formBox" />
            </div>
          </div>
          <div>
            <label  
              >How can I cultivate more gratitude and reduce resentment?</label
            >
            <div>
            <input type="text" id="reduce" value={form.reduce} onChange={submitChange} className="formBox" />
            </div>
          </div>
          <div>
            <label 
              >How can I be more mindful of the impact of my actions on
              others?</label
            >
            <div>
            <input type="text" id="impact" value={form.impact} onChange={submitChange} className="formBox" />
            </div>
          </div>
          <div>
            <label 
              >Was I afraid today?</label
            >
            <div>
            <input type="text" id="fear" value={form.fear} onChange={submitChange} className="formBox" />
            </div>
          </div>
          <div>
            <label 
              >What can I do tomorrow to enhance my creativity and passion?</label
            >
            <div>
            <input type="text" id="creative" value={form.creative} onChange={submitChange} className="formBox" />
            </div>
          </div>
          
        </form>
        </div>
        <div>
       <DisplayInput display= {form}/>
          </div>
        </div>
    );
}



 