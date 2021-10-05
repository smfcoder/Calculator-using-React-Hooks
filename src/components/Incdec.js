import React,{useState} from "react";
import './main.css'

function Incdec(){

    const[count,setCount]=useState(0);

    const incNum=()=>{
        setCount(count+1)
    }
    // const decNum=()=>{
    //     setCount(count-1)
    // }
    

    const handleEvent=(event)=>{
        const val = event.target.value;
        if(val === ''){
            setCount('');
        }
        else{
            setCount(parseInt(val));
        }
    }

    return(
        <div>
            <h1>Increment and Decrement using Hooks in react</h1>
            <h2>Counter Value : {count}</h2>
            <input value={count} onChange={handleEvent} />
            <div style={{marginTop:'10px'}}>
                <button className="buttonInc" style={{margin:'10px'}} onClick={incNum}>Increment</button>
                <button className="buttonDec" style={{margin:'10px'}} onClick={()=>setCount(count-1)}>Decrement</button>
            </div>
        </div>
    )

};
export default Incdec;