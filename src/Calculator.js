import React, {useState} from "react";
import "./Calculator.css";


export default function Calculator (){
    let [display, setDisplay] = useState("");
    let [firstNumber, setFirstNumber] = useState("");
    let [secondNumber, setSecondNumber] = useState("");
    let [operation, setOperation] = useState(null);
    let [waitingForSecondNumber, setWaitingForSecondNumber] = useState(false);


    function handleNumberClick(number) {
        if (waitingForSecondNumber) {

    setSecondNumber(prev => {
      const newSecondNumber = prev + number;
      setDisplay(newSecondNumber); // Update display to show only the second number
      return newSecondNumber;
  });
} else {
  setFirstNumber(prev => {
      // If the display is "0" (initial state or after clear), replace it
      // otherwise append the number.
      const newFirstNumber = prev === "" && number === "0" ? "0" : prev + number; // Handle leading zero
      setDisplay(newFirstNumber); // Update display to show the first number
      return newFirstNumber;
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
      setDisplay("");
      setFirstNumber("");
      setSecondNumber("");
      setOperation(null);
      setWaitingForSecondNumber(false);
    }
    


    

    return (
        <div>
           
            <div><button onClick={() => handleNumberClick("1")} className="calculatorButtons">1</button>
             <button onClick={() => handleNumberClick("2")} className="calculatorButtons">2</button>
              <button onClick={() => handleNumberClick("3")} className="calculatorButtons">3</button></div>
            <div><button onClick={() => handleNumberClick("4")} className="calculatorButtons">4</button> 
            <button  onClick={() => handleNumberClick("5")} className="calculatorButtons">5</button>
             <button  onClick={() => handleNumberClick("6")} className="calculatorButtons">6</button> </div>
            <div><button  onClick={() => handleNumberClick("7")} className="calculatorButtons">7</button> 
            <button onClick={() => handleNumberClick("8")} className="calculatorButtons">8</button>
             <button  onClick={() => handleNumberClick("9")} className="calculatorButtons">9</button> </div>
            <div><button  onClick={() => handleNumberClick("0")} className="calculatorButtons">0</button> 
            <button onClick={calculator} className="calculatorButtons">=</button>
             <button onClick={clear} className="calculatorButtons">c</button></div>
            <div><button onClick={() => handleOperationClick("+")} className="calculatorButtons">+</button>
             <button onClick={() => handleOperationClick("-")} className="calculatorButtons">-</button>
             <button onClick={() => handleOperationClick("*")} className="calculatorButtons">x</button>
             <button onClick={() => handleOperationClick("/")} className="calculatorButtons">/</button>
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