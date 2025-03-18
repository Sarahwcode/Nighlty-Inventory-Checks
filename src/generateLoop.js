import React, {useState} from "react";

export default function GenerateLoop (){
    let [great, setGreat] = useState("");
    let [ShowResults, setShowResults] = useState(false);
    function loop() {
let results = [];
        for(let i = 0; i < 5; i++){
            results.push(great);
        }
        return results;
    }

    function wordChange (event){
        setGreat(event.target.value);
    }

    function enterWord(){
setShowResults(true);
    }
    return (
        <div>
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
                <p key={index} >{item}</p>
            ))}
            </div> 
            )}
    
        </div>
);
}