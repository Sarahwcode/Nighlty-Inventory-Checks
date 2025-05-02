import React, {useState} from "react";


export default function Calculator (){
    let [sums, setSums] = useState(0);
    let [firstNumber, setFirstNumber] = useState("");
    let [secondNumber, setSecondNumber] = useState("");
    let [operation, setOperation] = useState(null);


    function handleNumberClick(number) {
        if (!operation)
        setFirstNumber(prev => prev + number);
    else {
        setSecondNumber(prev => prev + number);
    }
    }

    function handleOperationClick(selectedOperation){
        setOperation(selectedOperation);
    }

    function calculator () {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    if (operation && !isNaN(num1) && !isNaN(num2)) {
      switch (operation) {
        case "+":
          setSums(num1 + num2);
          break;
        case "-":
          setSums(num1 - num2);
          break;
        case "*":
          setSums(num1 * num2);
          break;
        default:
          break;
      }
      // Reset for the next calculation
      setFirstNumber(sums.toString());
      setSecondNumber("");
      setOperation(null);
    }}

    function clear(){
        setSums(0);
        setFirstNumber("");
        setSecondNumber("");
        setOperation(null)
    }

    return (
        <div>
            <div><button onClick={() => handleOperationClick("+")}>+</button>
            <button onClick={() => handleOperationClick("-")}>-</button>
        <button onClick={() => handleOperationClick("*")}>x</button></div>
        <button onClick={calculator}>=</button>
        <button onClick={clear}>c</button>
            <button onClick={() => handleNumberClick("1")}>1</button> <button onClick={() => handleNumberClick("2")}>2</button> <button>3</button> 
            <div><button>4</button> <button>5</button><button>6</button></div>
            <div><button>6</button> <button>7</button><button>9</button></div>
            <div><button>0</button></div>

<input value={sums} readOnly /> {/* Use readOnly for display */}
      <div>
        First Number: {firstNumber}
        <br />
        Second Number: {secondNumber}
        <br />
        Operation: {operation}
      </div>
        </div>
    )
}
