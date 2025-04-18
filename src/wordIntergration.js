import React, {useState} from "react";
import axios from "axios";
import Calculator from "./Calculator";

export default function WordIntergration(){
let [words, setWords] = useState(null);
let [display, setDisplay] = useState("");

    function displayWords(response) {
setWords(response.data);
console.log(response.data);
    }
    function displayChange (event) {
        setDisplay(event.target.value);
    } 

    function lookForWord(){
    let apiKey = "145ba0dc50b14bt75oafffd6a19b4a36";
    let api = `https://api.shecodes.io/dictionary/v1/define?word=${display}&key=${apiKey}`;
    axios.get(api).then(displayWords);
}

    return (
        <div>
            <form>
            <label>Enter a word to gain more of a understanding:</label>
                <input type="text" onChange={displayChange}></input>
               
                
            </form>
        <p><button onClick={lookForWord}>Look up Word</button></p>
        <div>
        {words && words.meanings && words.meanings.map((definition, index) => (
          <div key={index}>
            <strong>{definition.partOfSpeech}:</strong> {definition.definition} 
            <div> {definition.synonyms && definition.synonyms.length > 0 && ( 
                <div>
                 <strong>Synonyms: </strong>{definition.synonyms.join(", ")}
                 </div>
            )}
            </div>
          </div>
        ))}
      </div>
      <Calculator />
        </div>
    )

}
