import React, {useState} from "react";


export default function Calculator (){
    let [sums, setSums] = useState(0);

    function calculator (operation) {
 if (operation === "+")
    setSums();
    }

    return (
        <div>
            <button onClick={() => calculator("+")}>+</button>
<input value={sums}/>
        </div>
    )
}