import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import NumberFormat from 'react-number-format'



export const Ali = () => {
    const [preSate, setPreState]=useState('')
    const [curstat, setCurstat]=useState('')
   const [input, setInput] = useState("0")
    const [operator, setOperator] =useState(null)
    const [total, setTotal] = useState(false)


    const inputNum = (e)=>{
if(curstat.includes(".") && e.target.innerText === ".") return
if(total){
    setPreState("")
}
curstat ? setCurstat((pre) =>  pre + e.target.innerText) : setCurstat(e.target.innerText);
setTotal(false)

    }
    useEffect(()=>{
        setInput(curstat)
    }, [curstat])


    useEffect(()=>{
        setInput("0")
    }, [])



    const operatorType = (e)=>{
        setTotal(false)
        setOperator(e.target.innerText)
        if(curstat === "") return
           
        
        if(preSate !== ""){
            equals()

        } else{  setPreState(curstat)
            setCurstat("")}
      
    };
    const reset = ()=>{
        setPreState("")
        setCurstat("")
        setInput("0")
        
    }
    const equals = (e)=>{
        if(e.target.innerText = "="){
            setTotal(true)
        }
        let cal
        switch (operator) {
            case "/":
                cal = (parseFloat(preSate) / parseFloat(curstat)
    
                ).toFixed(2);
                
                break;
                case "+":
                    cal = (parseFloat(preSate) + parseFloat(curstat)
        
                    ).toFixed(2);
                    
                    break;
                    case "-":
                        cal = String(parseFloat(preSate) - parseFloat(curstat)
            
                        );
                        
                        break;
                        case "x":
                            cal = String(parseFloat(preSate) * parseFloat(curstat));
                            
                            break;
        
            default:
               return
        }

       
        setInput(" ")
        setPreState(cal);
        setCurstat("")
        
    

    }

    
    
    const pecent = () => {
        preSate
          ? setCurstat(String((parseFloat(curstat) / 100) * preSate))
          : setCurstat(String(parseFloat(curstat) / 100));
      };


      const minusplus = () => {
        if (curstat.charAt(0) === "-") {
          setCurstat(curstat.substring(1));
        } else {
          setCurstat("-" + curstat);
        }
      };
    
  return (
    <div className='container'>
    <div className="wrapper">
        <div className="screen">
            
            
            {
            input !== "" || input === "0" ? (<NumberFormat value={input} displayType={"text"} thousandSeparator={true} />) : (<NumberFormat  value={preSate} displayType={'text'} thousandSeparator={true}/>)
        }
           
        </div>
        <div className="btn light_gray zero" onClick={reset}>AC</div>
        {/* <div className="btn light_gray" onClick={pecent}>%</div> */}
        <div className="btn light_gray" onClick={minusplus}>+/-</div>
        <div className="btn orange" onClick={operatorType}> /</div>
        <div className="btn" onClick={inputNum}>7</div>
        <div className="btn" onClick={inputNum}>8</div>
        <div className="btn" onClick={inputNum}>9</div>
        <div className="btn orange" onClick={operatorType}>x</div>
        <div className="btn" onClick={inputNum}>4</div>
        <div className="btn" onClick={inputNum}>5</div>
        <div className="btn" onClick={inputNum}>6</div>
        <div className="btn orange" onClick={operatorType}>+</div>
        <div className="btn" onClick={inputNum}>1</div>
        <div className="btn" onClick={inputNum}>2</div>
        <div className="btn" onClick={inputNum}>3</div>
        <div className="btn orange" onClick={operatorType}>-</div>
        <div className="btn zero" onClick={inputNum}>0</div>
        <div className="btn" onClick={inputNum}>.</div>
        <div className="btn" onClick={equals}>=</div>
    </div>
</div>
  )
}

export default Ali 
