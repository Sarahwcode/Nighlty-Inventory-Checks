import React, {useState} from "react";
import axios from "axios";

export default function WordIntergration(){
let [words, setWords] = useState("");

    function displayWords(response) {
setWords(response.data);
    }

    function lookForWord(){
    let apiKey = "145ba0dc50b14bt75oafffd6a19b4a36";
    let api = `https://api.shecodes.io/dictionary/v1/define?${words}=book&key=${apiKey}`;
    axios.get(api).then(displayWords);
}

    return (
        <div>
            <form>
            <label>Enter a word to gain to gain more understanding</label>
                <input type="text" onChange={displayWords}></input>
               
                
            </form>
        <p><button onClick={lookForWord}>Look for word</button></p>
        </div>
    )

}