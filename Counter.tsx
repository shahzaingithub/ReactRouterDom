import React from "react";
import { useState } from "react";

function Counter(){
    const [counter,setcounter]=useState(0);

    const Add=()=>{
        setcounter(counter+1);
    }
    const remove=()=>{
        setcounter(counter-1);
    }


    return(
        <>

        {counter}
        <br />
        <br />
        <button onClick={Add}>Addition</button>
        <button onClick={remove}>Subtraction</button>
        </>
    )
}
export default Counter;