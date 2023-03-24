/** External CSS */
import "./index.css"

/** React and React Hooks */
import React from "react";
import { useContext, useEffect, useRef, useState } from "react";

/** React Context */
import ElementTableContext from "../../context";

/* Helper Functions */
import { getLinearNormalizedAtomicWeight } from "../../data/data";
import { getElementColor, getSeriesColor } from "../../utils/helper_functions";
import { getAtomicWeightBGColor } from "../../utils/helper_functions";

export const ElementContainer = ({elementInfo,mouseOverHandler}) => {
    const {mode,theme, searchIsActive, searchResults} = useContext(ElementTableContext);
    const [isActive,setIsActive] = useState(false);


    let currentStyle = {
        backgroundColor: getElementColor(mode,theme,elementInfo)
    }

    let inResults = searchResults.includes(elementInfo)

    
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