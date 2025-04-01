import React, {useState} from "react";
import './generateLoops.css';

export default function GenerateLoop (){
    let [great, setGreat] = useState("");
    let [ShowResults, setShowResults] = useState(false);
    let affirmations = ["stay Humble", "be grateful for the small things", "be present", "look at how far you have come", "love yourself"];
   
    
    affirmations =  affirmations.map(affirmation  => {
       return affirmation.charAt(0).toUpperCase() + affirmation.slice(1);
    });
 
   
    
    function loop() {
let results = [];
        for(let i = 0; i < 5; i++){
            results.push(great);
        }
        return results;
    }

    function wordChange (event){
        let valueInput = event.target.value;
        if (valueInput.length > 0) {
        valueInput = valueInput.charAt(0).toUpperCase() + valueInput.slice(1);}
        setGreat(valueInput);
    }
  
    
    

    function enterWord(){
setShowResults(true);
    }
    return (
        <div className="genrateLoops">
            <div>
                <form>
                    <label>Enter Your Name?</label>
                    <input type="text" onChange={wordChange} />
                </form>
            </div>
            <button onClick={enterWord}>Show Results</button>
      {ShowResults && (
            
            <div>
            {loop().map((item, index) => (
                <p key={index} >{item} {affirmations[index % affirmations.length]} {" "}</p>
            ))}
            </div> 
        
            )}
    
        </div>
);
}