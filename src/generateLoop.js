import React, {useState} from "react";

export default function GenerateLoop (){
    let [great, useGreat] = useState("hello");

    function loop() {

        for(let i = 0; i < 5; i++){
            return useGreat ;
        }
    }
    return (
        <div>
        if (great) {
            return (
            <div>
            <p>{loop}</p>
            </div> )
        }
       
        </div>
)
}