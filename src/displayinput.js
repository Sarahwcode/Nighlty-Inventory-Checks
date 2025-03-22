import React, {useState} from "react";
import jsPDF from "jspdf";
import DateStamp from "./DateStamp";
import WordIntergration from "./wordIntergration";


export default function DisplayInput(props) {
    const [dailyInventory, setDailyInventory] = useState([]);



const handleSaveedInventory = () => {
    if (props.display) { // Check if props.display exists
        setDailyInventory(prevInventory => [...prevInventory, props.display]);
    } else {
        console.warn("No inventory data to save."); 
    }
};

const generatePDF = () => {
    const doc = new jsPDF();

    // Add title or header (optional)
    doc.text("Daily Inventory", 10, 10);

    let yPos = 20; // Starting Y position for the content

    dailyInventory.forEach(inventory => {
        doc.text(`Grateful: ${inventory.grateful}`, 10, yPos);
        yPos += 10; // Increment Y position for the next line

        doc.text(`Reduce: ${inventory.reduce}`, 10, yPos);
        yPos += 10;

        doc.text(`Impact: ${inventory.impact}`, 10, yPos);
        yPos += 10;

        doc.text(`Fear: ${inventory.fear}`, 10, yPos);
        yPos += 10;
        doc.text(`Fear: ${inventory.creative}`, 10, yPos);
        yPos += 10;

        yPos += 5; // Add some extra spacing between entries
    });


    doc.save("daily_inventory.pdf");
};


    return (
<div className="sectionTwo">
    
       
          <button onClick={handleSaveedInventory}>Save Inventory</button>
          <button onClick={generatePDF}>Download PDF</button> 
          <DateStamp/>
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
          <p>
             {inventory.creative}
          </p>
                </li>
            ))}
          </ul>
          <WordIntergration/>
          </div>
    )
}






 

   