import React from "react";
import GenerateLoop from "./generateLoop";

export default function DateStamp (){

    function date() {
        
        let newDate = new Date();
        let numberDay = newDate.getDate();
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let day = newDate.getDay();
        let months = ["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
        let month = newDate.getMonth();
        let year = newDate.getFullYear();
        let hour = newDate.getHours();
        let minute = newDate.getMinutes();
        if (numberDay === 22 || numberDay === 2) {
 return `The date and time is ${days[day]} ${numberDay}nd ${months[month]} ${year} ${hour}:${minute}`; 
        }
        else if ( numberDay === 1 || numberDay === 21 || numberDay === 31) {
            return `The date and time is ${days[day]} ${numberDay}st ${months[month]} ${year} ${hour}:${minute}`; 
        }
        else if ( numberDay === 3 || numberDay === 23) {
            return `The date and time is ${days[day]} ${numberDay}rd ${months[month]} ${year} ${hour}:${minute}`; 
        }
        else {

return `The date and time is ${days[day]} ${numberDay}th ${months[month]} ${year} ${hour}:${minute}`; }


    }

    return (
        <div>
        <div>
        {date()}
        </div>
        <div>
            <GenerateLoop/>
        </div>
        </div>
    );
}