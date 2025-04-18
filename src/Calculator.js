import React, {useState} from "react";


export default function Calculator (){
    let [sums, setSums] = useState("");

    function calculator () {
return 1 + 1;
    }
function pressPlus (event) {
setSums(event.target.value);
}
    return (
        <div>
            <button onClick={sums}>+</button>
<input type="text" onChange={pressPlus}></input>
        </div>
    )
}