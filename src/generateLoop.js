import React, {useState} from "react";

export default function GenerateLoop (){
    let [great, setGreat] = useState("hello");
    let [ShowResults, setShowResults] = useState(false);
    function loop() {
let results = [];
        for(let i = 0; i < 5; i++){
            results.push(great);
        }
        return results;
    }

    function enterWord(){
setShowResults(true);
    }
    return (
        <div>
            <div>
                <form>
                    <label>Enter Your Name?</label>
                    <input type="text" />
                </form>
            </div>
            <button onClick={enterWord}>Show Results</button>
      {ShowResults && (
            
            <div>
            {loop().map((item, index) => (
                <p key={index} >{item}</p>
            ))}
            </div> 
            )}
    
        </div>
);
}