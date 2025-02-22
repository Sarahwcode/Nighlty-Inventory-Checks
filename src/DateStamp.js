import React from "react";

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

let time = `The date and time is ${days[day]} ${numberDay} ${months[month]} ${year} ${hour}:${minute}`;

return time;
    }

    return (
        <div>
        {date()}
        </div>
    );
}