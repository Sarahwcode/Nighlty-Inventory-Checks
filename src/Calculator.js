import React, {useState} from "react";


export default function Calculator (){
    let [display, setDisplay] = useState(0);
    let [firstNumber, setFirstNumber] = useState("");
    let [secondNumber, setSecondNumber] = useState("");
    let [operation, setOperation] = useState(null);
    let [waitingForSecondNumber, setWaitingForSecondNumber] = useState(false);


    function handleNumberClick(number) {
        if (waitingForSecondNumber)
        setSecondNumber(prev => prev + number);
    else {
        setFirstNumber(prev => prev + number);
        setDisplay (prev => {
          return prev === "0" ? number : prev + number;
        });
    }
    }

    function handleOperationClick(selectedOperation){
      if (firstNumber === "") return; // Don't allow operation if no first number
        
      // If an operation was already selected and we have a second number,
      // perform the calculation before setting the new operation.
      if (operation && secondNumber) {
          calculator(); // Perform the previous calculation
          // After calculation, the result will be set to firstNumber,
          // so we can immediately set the new operation.
          setOperation(selectedOperation);
          setDisplay(prev => `${parseFloat(prev)} ${selectedOperation}`); // Display result and new operator
          setWaitingForSecondNumber(true); // Still waiting for the next number
          setSecondNumber(""); // Clear second number for next input
      } else {
          setOperation(selectedOperation);
          setWaitingForSecondNumber(true);
          setDisplay(`${firstNumber} ${selectedOperation}`);
      }
  }
        
    

    function calculator () {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    if (operation && !isNaN(num1) && !isNaN(num2)) {
      let result;
      switch (operation) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
          case "/":
            if (num2 === 0) {
                alert("Cannot divide by zero!");
                clear();
                return;
            }
            result = num1 / num2;
            break;
        default:
            break;
    }
    // Update display with the result
    setDisplay(result.toString());
    // Set the result as the new firstNumber for chained operations
    setFirstNumber(result.toString());
    // Clear secondNumber and operation for the next input
    setSecondNumber("");
    setOperation(null);
    setWaitingForSecondNumber(false); // Not waiting for a second number anymore
} else if (firstNumber !== "" && !isNaN(num1) && !operation) {
    // If only a first number is entered and '=' is pressed, just display it
    setDisplay(firstNumber);
}
}
      
      // Reset for the next calculation
      function clear(){
      setDisplay("0");
      setFirstNumber("");
      setSecondNumber("");
      setOperation(null);
      setWaitingForSecondNumber(false);
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
<input type="text" value={display} readOnly /> 

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