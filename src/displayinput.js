import React, {useState, useEffect} from "react";

export default function DisplayInput(props) {
    const [dailyInventory, setDailyInventory] = useState([]);

useEffect (() => {
    let storedInventory = localStorage.getItem("dailyInventory");
    if(storedInventory) {
        setDailyInventory(JSON.parse(storedInventory));
    }
},[]);

useEffect (() => {
  localStorage.setItem("dailyInventory", JSON.stringify(dailyInventory));
},[dailyInventory]);

let handleSaveedInventory = () => {
    setDailyInventory([...dailyInventory,props.display]);
};


    return (
<div>
       
          <button onClick={handleSaveedInventory}>Save Inventory</button>
          <ul>
            {dailyInventory.map((inventory, index) => (
                <li key={index}>
 <p>
            {inventory.grateful}
          </p>
          <p>
          {inventory.reduce}
          </p>
          <p>
             {inventory.impact}
          </p>
          <p>
             {inventory.fear}
          </p>
                </li>
            ))}
          </ul>
          </div>
    )
}