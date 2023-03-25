import "./index.css"
import { useRef, useEffect, useState } from "react";

export const TemperatureWidget = () => {
   
    let newPos = useRef(0), oldPos = useRef(0);
    let tempSelector = useRef();
    let tempBar = useRef();
    let canDrag = useRef(false);

    useEffect(() => {

    }, [])

    return (<div className="temp-slider-container">
        <label>Temperature: </label>
        <button onClick={
            (e) => {
                tempSelector.current.style.left = (tempSelector.current.offsetLeft - 1) + "px";

            }
        }  className="btn btn-neg">-</button>
        <div ref={tempBar} onMouseMove={ (e) => {
                  
                 
                  // calculate the new cursor position:
                  newPos.current = oldPos.current - e.clientX;
                  oldPos.current = e.clientX;
                  // set the element's new position:
                  let min = tempBar.current.offsetLeft

                  let canMove = newPos.current > tempSelector.current.offsetLeft && newPos.current < tempSelector.current.offsetRight 
                  if(tempSelector.current && canDrag.current){
                   tempSelector.current.style.left = (tempSelector.current.offsetLeft - newPos.current) + "px";
                  }
           }} className="temp-bar">
            <div onMouseDown={
                (e) => {
                    canDrag.current = true
                    e.preventDefault();
                    // get the mouse cursor position at startup:
                    console.log(`onMouseDown: ${e.clientX}`)
                    oldPos.current = e.clientX;
                }
            }  
            
            onMouseUp={
                () => {
                    canDrag.current = false
                }
            
            }
            className="temp-selector" ref={tempSelector}></div>
        </div>
        <button onClick={
            (e) => {
                tempSelector.current.style.left = (tempSelector.current.offsetLeft + 1) + "px";

            }
        } className="btn btn-pos">+</button>

    </div>);
}