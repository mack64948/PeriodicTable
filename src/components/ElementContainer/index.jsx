import "./index.css"
import { useContext } from "react";
import ElementTableContext from "../../context";

export const ElementContainer = ({elementInfo}) => {
    const {mode,setMode} = useContext(ElementTableContext);
    
    console.log(mode)
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


    return (<div style={currentStyle} className="element-container">
        <span className="atomic-number-display">{elementInfo.atomicNumber}</span>
        <span className="symbol-display">{elementInfo.symbol}</span>
        <span className="name-display">{elementInfo.name}</span>
        <span className="element-weight-display">{elementInfo.atomicWeight}</span>
    </div>);
}