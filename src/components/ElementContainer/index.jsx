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
import { convertTemp } from "../../utils/helper_functions";



export const ElementContainer = ({elementInfo,mouseOverHandler}) => {
    const { hasClickedElement,setHasClickedElement,
        setAtomicNumber,selectedAtomicNumber,
        mode,theme, searchIsActive, searchResults, 
        userTemp, userTempUnits} = useContext(ElementTableContext);
    
    const [isActive,setIsActive] = useState(false);

    const getCurrentStateOfMatter = () => {
        let adjustedBP = convertTemp(userTempUnits,elementInfo.bp,'C')
        let adjustedMP = convertTemp(userTempUnits,elementInfo.mp,'C')

        return userTemp > adjustedBP ? 'gas' : (userTemp > adjustedMP ? 'liquid' : 'solid');

    }

    let currentStyle = {
        backgroundColor: getElementColor(mode,theme,elementInfo,getCurrentStateOfMatter())
    }

    let inResults = searchResults.includes(elementInfo)

    
    currentStyle = {...currentStyle, 
        color: (theme === "dark") ? "white" : "black",
        borderColor: (theme === "dark") ? "white" : "black",
        opacity: (searchIsActive && !inResults ? "0.5" : "1"),
       
    }
    
    let elementContainerClass = "element-container";

    return (<div onClick={(e) => {
        
        let element = e.target;
        let isElementContainer = element.classList.contains('element-container') 

        if(isElementContainer && hasClickedElement && selectedAtomicNumber === elementInfo.atomicNumber){
            setHasClickedElement(false)
            element.style.border = "2px solid black"
         
        } else if(isElementContainer && !hasClickedElement) {
          
            setHasClickedElement(true)
            element.style.border = "2px solid magenta"
            setAtomicNumber(elementInfo.atomicNumber)
        }
       

       


    }} 
    
    onMouseEnter={ (e) => {
        let div = e.target;
        if(div.classList.contains("element-container") && !hasClickedElement){
            div.style.border = "2px solid magenta";
            setAtomicNumber(elementInfo.atomicNumber)
        }
      
    }}

    onMouseLeave={(e) => {
        let div = e.target;
        if(div.classList.contains("element-container") && !hasClickedElement){
            div.style.border = "2px solid black";
        }
        
    }}

    onMouseOver={() => {
       
      
    }}  style={currentStyle} className={elementContainerClass}>
        <span className="atomic-number-display">{elementInfo.atomicNumber}</span>
        <span className="symbol-display">{elementInfo.symbol}</span>
        <span className="name-display">{elementInfo.name}</span>
        <span className="element-weight-display">{elementInfo.atomicWeight}</span>
    </div>);
};