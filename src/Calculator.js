import React, {useState} from "react";


export default function Calculator (){
    let [sums, setSums] = useState(0);

    function calculator (operation) {
 if (operation === "+")
    setSums();
 else if (operation === "-")
    setSums();
  else if (operation === "*")
    setSums();
    }

    return (
        <div>
            <div><button onClick={() => calculator("+")}>+</button>
            <button onClick={() => calculator("-")}>-</button>
        <button onClick={() => calculator("*")}>x</button></div>
            <button>1</button> <button>2</button> <button>3</button> 
            <div><button>4</button> <button>5</button><button>6</button></div>
            <div><button>6</button> <button>7</button><button>9</button></div>
            <div><button>0</button></div>

<input value={sums}/>
        </div>
    )
}