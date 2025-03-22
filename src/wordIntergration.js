import React, {useState} from "react";
import axios from "axios";

export default function WordIntergration(){
let [words, setWords] = useState("");

    function displayWords(response) {
console.log(response.data);
    }

    function lookForWord(){
    let apiKey = "145ba0dc50b14bt75oafffd6a19b4a36";
    let api = `https://api.shecodes.io/dictionary/v1/define?word=book&key=${apiKey}`;
    axios.get(api).then(displayWords);
}

    return (
        <div>
        <p><button onClick={lookForWord}>Look for word</button></p>
        </div>
    )

}