import "./index.css"
import { useContext, useEffect, useRef, useState } from "react";
import ElementTableContext from "../../context";
import React from "react";
import { getLinearNormalizedAtomicWeight } from "../../data/data";
import { getBackgroundColor } from "../../utils/helper_functions";

export const ElementContainer = ({elementInfo,mouseOverHandler}) => {
    const {mode,theme, searchIsActive, searchResults} = useContext(ElementTableContext);
    const [isActive,setIsActive] = useState(false);


    let bgColor = getBackgroundColor(theme,elementInfo.series)
    const regularStyle = {
        backgroundColor: bgColor
    }

    const slgStyle = {
        backgroundColor: "orange"
    }
    
    let normalizedAW = getLinearNormalizedAtomicWeight(elementInfo.atomicWeight)
    console.log("normalizedAW: " + normalizedAW)
    let greenVal = 255*(1-normalizedAW);
    let blueVal = 255*(1-normalizedAW);

    const atomicWeightStyle = {
        backgroundColor: `rgb(255,${greenVal},${blueVal})`,
    }

    let currentStyle;

 

    switch(mode){
        case "regular":
            currentStyle = {...regularStyle,
                backgroundColor: bgColor    
            };
            break;
        case "slg":
            currentStyle = slgStyle;
            break;
        case 'atomic-weight':
            currentStyle = atomicWeightStyle;
            break;
        default:
            currentStyle = regularStyle;
    }

    let inResults = searchResults.includes(elementInfo)

    console.log(currentStyle)
    currentStyle = {...currentStyle, 
        borderColor: (theme === "dark") ? "white" : "black",
        opacity: (searchIsActive && !inResults ? "0.5" : "1"),
       
    }
    
  

    let elementContainerClass = "element-container";

    return (<div onMouseDown={(e) => {
        let ptcontainer = document.querySelector(".pt-container")
        let elementContainers = ptcontainer.children;
        
    
        for(let i = 0; i < elementContainers.length; i++){
            let elementContainer = elementContainers[i]
            elementContainer.classList.remove("is-active")
        }

        setIsActive(true);
        
        e.target.classList.add("is-active")

    }} onMouseOver={() => {
        let ptcontainer = document.querySelector(".pt-container")
        let elementContainers = ptcontainer.children;
        
        let hasActive = false
        for(let i = 0; i < elementContainers.length; i++){
            let elementContainer = elementContainers[i]
            if(elementContainer.classList.contains('is-active')){
                hasActive = true
            }
        }

        if(!hasActive){
            mouseOverHandler()
        }
       
      
    }}  style={currentStyle} className={elementContainerClass}>
        <span className="atomic-number-display">{elementInfo.atomicNumber}</span>
        <span className="symbol-display">{elementInfo.symbol}</span>
        <span className="name-display">{elementInfo.name}</span>
        <span className="element-weight-display">{elementInfo.atomicWeight}</span>
    </div>);
};