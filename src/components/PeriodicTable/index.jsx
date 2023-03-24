/** External CSS */
import "./index.css"

/** React Components */
import { ElementContainer } from "../ElementContainer";
import { TemperatureWidget } from "../TemperatureWidget";

/** React Hooks */
import { useState, useRef, useContext } from "react";

/** React Context */
import ElementTableContext from "../../context";

/** Helper Functions */
import { getElementByAtomicNumber, getElementInfo } from "../../data/data";
import { getAtomicNumberFromTableDataString } from "../../utils/helper_functions";

/** External Data */
import { tableData } from "../../data/tableData";


export const PeriodicTable = ({setSelected}) => {
    const { theme, searchIsActive } = useContext(ElementTableContext);
  

    return (

    <div className={"pt-container " + (theme === "dark" ? "dark-bg" : "light-bg") + (searchIsActive ? " active-search" : "")}>

    
        {
            tableData.map((stringArr,rowIndex) => {
                if(rowIndex === 0){
                    return stringArr.map((data,index) => {
                        return index > 0 ? <div className={"pt-element-container column-label " + (theme === "dark" ? "light-text" : "dark-text")}>{index}</div> : <div className="pt-element-container column-label"></div>;
                    })
                } else {

                    return stringArr.map((data,index) => {
                        return index === 0 ? <div className={"pt-element-container row-label " + (theme === "dark" ? "light-text" : "dark-text")}>{rowIndex < 8 ? rowIndex : (rowIndex === 8 ? "Periods 6 & 7 (cont)" : "") }</div> :
                            data.indexOf('filler') === -1 ?   
                            <ElementContainer 
                               className={`pt-element-container period-${rowIndex} ${data}`} 
                                elementInfo={ getElementInfo(getAtomicNumberFromTableDataString(data)-1)
                                   
                                 
                            }></ElementContainer>
                              : 
                            <div className="pt-element-container period-1 filler"></div>;
        
                            

                });
            }
        })


           
        }
        
      

        

    </div>);
}