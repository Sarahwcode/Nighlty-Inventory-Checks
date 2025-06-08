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
        case "/":
          setSums(num1 / num2);
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
        setOperation(null);
    }

    function displayValue () {
      if (!sums === 0 && !operation && !secondNumber) {
        return sums;
      }
      else if (secondNumber) {
        return `${firstNumber} ${operation} ${secondNumber}`;
      }
      else if (operation) {
        return `${firstNumber} ${operation}`;
      }
      else if (firstNumber) {
        return firstNumber;
      }
      else {
        return sums;
      }

    }

    return (
        <div>
           
            <div><button onClick={() => handleNumberClick("1")} value={firstNumber}>1</button> <button onClick={() => handleNumberClick("2")}>2</button> <button>3</button></div>
            <div><button onClick={() => handleNumberClick("4")}>4</button> <button  onClick={() => handleNumberClick("5")}>5</button> <button  onClick={() => handleNumberClick("6")}>6</button> </div>
            <div><button  onClick={() => handleNumberClick("7")}>7</button> <button onClick={() => handleNumberClick("8")}>8</button> <button  onClick={() => handleNumberClick("9")}>9</button> </div>
            <div><button  onClick={() => handleNumberClick("0")}>0</button> <button onClick={calculator}>=</button> <button onClick={clear}>c</button></div>
            <div><button onClick={() => handleOperationClick("+")}>+</button>
             <button onClick={() => handleOperationClick("-")}>-</button>
             <button onClick={() => handleOperationClick("*")}>x</button>
             <button onClick={() => handleOperationClick("/")}>/</button>
       </div>
<input type="text" value={displayValue()} readOnly /> 

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
