import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';

function Calculator(){


    const [expr,setExpr] = useState('');


    const CardPos={
        maxWidth : '23rem',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:'50px'
    }
    const tblbtn={
        width: 80,
        height : 80 ,
        borderRadius : '50%',
        border : 0
    }

    console.log(expr);
    //console.log(eval(expr));
    const result=()=>{
        if(expr.length>0){
            setExpr(eval(expr).toString());
            console.log(eval(expr));
        }
            
    }
    const handleClear=()=>{
        if(expr.length===1){
            setExpr('');
        }
        else{
            setExpr(expr.slice(0, -1));
        }
    }
    const handleOperation=op=>()=>{
        const operators=['/','+','-','*','.'];
        let lst = expr[expr.length-1];
        let flag=0;
        for(let i=0;i<operators.length;i++){
            if (operators[i]===lst){
                flag=1;
                break;
            }
        }
        if(expr.length===0){
            flag=1;
        }
        if(flag===0){
            setExpr(expr+op);
        }
    }

    
    return(
        <div>
            <h1>Calculator</h1>
            <Card className="text-center" style={CardPos}>
            <Card.Header style={{textAlign:'left'}}>Calculator</Card.Header>
            <Card.Body>
            <div>
               <input value={expr} style={{width:'-webkit-fill-available',height:'60px'}} type="text" />
            </div>
            <div style={{paddingTop:'10px'}}>
                <table>
                    <tr>
                        <td><button style={tblbtn} onClick={()=>setExpr(expr+"1")}>1</button></td>
                        <td><button style={tblbtn} onClick={()=>setExpr(expr+"2")}>2</button></td>
                        <td><button style={tblbtn} onClick={()=>setExpr(expr+"3")}>3</button></td>
                        <td><button style={tblbtn} onClick={handleClear}>C</button></td>
                    </tr>
                    <tr>
                        <td><button style={tblbtn} onClick={()=>setExpr(expr+"4")}>4</button></td>
                        <td><button style={tblbtn} onClick={()=>setExpr(expr+"5")}>5</button></td>
                        <td><button style={tblbtn} onClick={()=>setExpr(expr+"6")}>6</button></td>
                        <td><button style={tblbtn} onClick={handleOperation("/")}>/</button></td>
                    </tr>
                    <tr>
                        <td><button style={tblbtn} onClick={()=>setExpr(expr+"7")}>7</button></td>
                        <td><button style={tblbtn} onClick={()=>setExpr(expr+"8")}>8</button></td>
                        <td><button style={tblbtn} onClick={()=>setExpr(expr+"9")}>9</button></td>
                        <td><button style={tblbtn} onClick={handleOperation("*")}>*</button></td>
                    </tr>
                    <tr>
                        <td><button style={tblbtn} onClick={()=>setExpr(expr+"0")}>0</button></td>
                        <td><button style={tblbtn} onClick={handleOperation(".")}>.</button></td>
                        <td><button style={tblbtn} onClick={handleOperation("-")}>-</button></td>
                        <td><button style={tblbtn} onClick={handleOperation("+")}>+</button></td>
                    </tr>
                    <tr>
                        <td colSpan="2"><Button variant="danger" onClick={()=>setExpr('')} style={{width:'160px'}}>Clear</Button></td>
                        <td colSpan="2"><Button variant="success" onClick={result} style={{width:'160px'}}>=</Button></td>
                    </tr>
                </table>
            </div>    
            
            </Card.Body>
            </Card>


        </div>
    )
}
export default Calculator
