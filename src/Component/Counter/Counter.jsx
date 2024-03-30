import React, {useState} from "react";
import "./Counter.css";



function Counter(){
    const  [count, setCount] = useState(0)

    const minusOne = () => {
        setCount(count - 1)
        if (count <= 0){
            setCount (0)
        }
    };
    const plusOne = () => {
        setCount(count + 1)
    };
    return(
        <div className={"counter"}>
            <button className={"btn"} onClick={minusOne}>-</button>
            <div className={"quantity"}>{count}</div>
            <button className={"btn"} onClick={plusOne}>+</button>
        </div>
    );
}
export default Counter