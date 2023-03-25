import "./index.css"
import { useState, useEffect, useRef, useContext } from "react";
import ElementTableContext from "../../context";
import { convertTemp } from "../../utils/helper_functions";


export const NumSelectorWidget = () => {
    const {userTemp,setUserTemp,userTempUnits,setUserTempUnits} = useContext(ElementTableContext);
    const prevUnit = useRef(userTempUnits)

    useEffect(() => {
        
        let newTemp = convertTemp(prevUnit.current,userTemp,userTempUnits)
    
        setUserTemp(newTemp)

        prevUnit.current = userTempUnits;
    }, [userTempUnits])

    return (<div className="container">
        <input class="temp-input" onChange={
            (e) => {
                
                setUserTemp(parseFloat(e.target.value));
            }
        } value={userTemp} type="text">
            
        </input>

        <div className="button-group">
            <a onClick={() => {
                setUserTemp(userTemp+1);
            }}>+</a>
            <a onClick={() => {
                setUserTemp(userTemp-1);
            }}>-</a>
        </div>
       
        <label>
            <select class="unit-selector" onChange={
                (e) => {
                    let newUnits = e.target.value;
                    setUserTempUnits(newUnits)
                }
            }>
                <option value='K'>&deg;K</option>
                <option value='C'>&deg;C</option>
                <option value='F'>&deg;F</option>
            </select>
        </label>
    </div>);
}