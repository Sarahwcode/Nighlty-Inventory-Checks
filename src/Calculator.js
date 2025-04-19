import React, {useState} from "react";


export default function Calculator (){
    let [sums, setSums] = useState(0);
    let [firstNumber, setFirstNumber] = useState(null);
    let [secondNumber, setSecondNumber] = useState(null);

    function calculator (operation) {
 if (operation === "+")
    setSums(setFirstNumber + setSecondNumber);
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
            <button onClick={firstNumber}>1</button> <button onClick={secondNumber}>2</button> <button>3</button> 
            <div><button>4</button> <button>5</button><button>6</button></div>
            <div><button>6</button> <button>7</button><button>9</button></div>
            <div><button>0</button></div>

<input value={sums}/>
        </div>
    )
}