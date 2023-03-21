import "./index.css"
import { useState, useEffect, useRef } from "react";

export const NumSelectorWidget = ({initialNum,initialUnits,setPTableTemp}) => {
    const [num,setNum] = useState(initialNum)
    const [units,setUnits] = useState(initialUnits)
    const prevUnit = useRef(initialUnits)

    useEffect(() => {

        switch(units){
            case 'C':
                if(prevUnit.current === 'F'){

                } else if(prevUnit.current === 'K') {

                }
                break;
            case 'K':
                if(prevUnit.current === 'F'){

                } else if(prevUnit.current === 'C') {

                }
                break;
            case 'F':
                if(prevUnit.current === 'C'){

                } else if(prevUnit.current === 'K') {

                }
                break;
            default:
                break;
        }

        prevUnit.current = units;
    }, [units])
    return (<div className="container">
        <input onChange={
            (e) => {
                setNum(e.target.value);
                setPTableTemp(num);
            }
        } value={num} type="text">
            
        </input>

        <div className="button-group">
            <a onClick={() => {
                setNum(num+1);
                setPTableTemp(num);
            }}>+</a>
            <a onClick={() => {
                setNum(num-1);
                setPTableTemp(num);
            }}>-</a>
        </div>
       
        <label>&deg;{units}</label>
    </div>);
}