import "./index.css"
import { useContext, useEffect, useRef } from "react";
import ElementTableContext from "../../context";
import React from "react";

export const ElementContainer = ({elementInfo,mouseOverHandler}) => {
    const {mode,setMode} = useContext(ElementTableContext);
    console.log(elementInfo);
    const regularStyle = {
        backgroundColor: "lightgreen"
    }

    const slgStyle = {
        backgroundColor: "orange"
    }

    let currentStyle;

 

    switch(mode){
        case "regular":
            currentStyle = regularStyle;
            break;
        case "slg":
            currentStyle = slgStyle;
            break;
        default:
            currentStyle = regularStyle;
    }


    return (<div onMouseOver={() => {
        console.log("Mouse has passed over the container")
        mouseOverHandler()
    }}  style={currentStyle} className="element-container">
        <span className="atomic-number-display">{elementInfo.atomicNumber}</span>
        <span className="symbol-display">{elementInfo.symbol}</span>
        <span className="name-display">{elementInfo.name}</span>
        <span className="element-weight-display">{elementInfo.atomicWeight}</span>
    </div>);
};