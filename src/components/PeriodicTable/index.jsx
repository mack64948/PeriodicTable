import "./index.css"
import { ElementContainer } from "../ElementContainer";
import { useState, useRef } from "react";
import { getElementByAtomicNumber, getElementInfo } from "../../data/data";
import ElementTableContext from "../../context";
import { useContext } from "react";
import { TemperatureWidget } from "../TemperatureWidget";

const tableData = [
    //column labels
    ["column-label","column-label","column-label","column-label","column-label","column-label","column-label","column-label","column-label","column-label","column-label","column-label","column-label","column-label","column-label","column-label","column-label","column-label","column-label"],

    //periods
    ["row-label","g1 atnum-1","filler", "filler", "filler", "filler", "filler", "filler", "filler", "filler","filler", "filler", "filler", "filler","filler", "filler", "filler", "filler","g8 atnum-2" ], //period 1
    ["row-label","g1 alkali-metal atnum-3", "g2 alkaline-earth-metal atnum-4", "filler", "filler", "filler", "filler", "filler", "filler", "filler", "filler","filler", "filler", "g3 atnum-5","g4 atnum-6", "g5 atnum-7","g6 atnum-8", "g7 halogens atnum-9", "g8 noble-gases atnum-10" ], //period 2
    ["row-label","g1 alkali-metal atnum-11", 
    "g2 alkaline-earth-metal atnum-12", 
    "filler", "filler", "filler", "filler",
     "filler", "filler", "filler", "filler",
     "filler", "filler", 
     "g3 atnum-13","g4 atnum-14", 
     "g5 atnum-15","g6 atnum-16", 
     "g7 halogens atnum-17", "g8 noble-gases atnum-18" ], //period 3
    
     ["row-label","g1 alkali-metal atnum-19", "g2 alkaline-earth-metal atnum-20", 
        "tr-metal atnum-21", "tr-metal atnum-22", 
        "tr-metal atnum-23", "tr-metal atnum-24", 
        "tr-metal atnum-25", "tr-metal atnum-26", 
        "tr-metal atnum-27", "tr-metal atnum-28",
        "tr-metal atnum-29", "tr-metal atnum-30", 
        "g3 atnum-31","g4 atnum-32", "g5 atnum-33",
        "g6 atnum-34", "g7 halogens atnum-35", 
        "g8 noble-gases atnum-36" ], //period 4

    ["row-label","g1 alkali-metal atnum-37", 
    "g2 alkaline-earth-metal atnum-38", 
        "tr-metal atnum-39", "tr-metal atnum-40", 
        "tr-metal atnum-41", "tr-metal atnum-42", 
        "tr-metal atnum-43", "tr-metal atnum-44", 
        "tr-metal atnum-45", "tr-metal atnum-46",
        "tr-metal atnum-47", "tr-metal atnum-48", 
        "g3 atnum-49","g4 atnum-50", "g5 atnum-51",
        "g6 atnum-52", "g7 halogens atnum-53", 
        "g8 noble-gases atnum-54" ], //period 5

  

    ["row-label","g1 alkali-metal atnum-55", 
    "g2 alkaline-earth-metal atnum-56", 
    "filler",
    "tr-metal atnum-72", 
    "tr-metal atnum-73", 
    "tr-metal atnum-74", 
    "tr-metal atnum-75", 
    "tr-metal atnum-76", 
    "tr-metal atnum-77", 
    "tr-metal atnum-78", 
    "tr-metal atnum-79",
    "tr-metal atnum-80", 
    "g3 atnum-81", "g4 atnum-82",
    "g5 atnum-83", "g6 atnum-84","g7 atnum-85", 
    "g8 halogens atnum-86",  ], //period 6

   

    ["row-label","g1 alkali-metal atnum-87", 
    "g2 alkaline-earth-metal atnum-88", 
    "filler",
    "tr-metal atnum-104", 
    "tr-metal atnum-105", 
    "tr-metal atnum-106", 
    "tr-metal atnum-107", 
    "tr-metal atnum-108", 
    "tr-metal atnum-109", 
    "tr-metal atnum-110", 
    "tr-metal atnum-111",
    "tr-metal atnum-112", 
    "g3 atnum-113", "g4 atnum-114",
    "g5 atnum-115", "g6 atnum-116","g7 atnum-117", 
    "g8 halogens atnum-118",  ], //period 7

    ["filler","filler","filler","filler","filler","filler","filler","filler","filler",
    "filler","filler","filler","filler","filler","filler",
    "filler","filler","filler", "filler"
    ],

  

    ["filler","filler","filler","filler",
        "atnum-57","atnum-58","atnum-59","atnum-60",
        "atnum-61","atnum-62","atnum-63","atnum-64",
        "atnum-65","atnum-66","atnum-67","atnum-68",
        "atnum-69","atnum-70","atnum-71"],

    ["filler","filler","filler","filler",
        "atnum-89","atnum-90","atnum-91","atnum-92",
        "atnum-93","atnum-94","atnum-95","atnum-96",
        "atnum-97","atnum-98","atnum-99","atnum-100",
        "atnum-101","atnum-102","atnum-103"],
]



function getAtomicNumberFromTableDataString(dataString){
    let startIndex = dataString.indexOf("atnum-") + 6;
    let numStr = dataString.slice(startIndex)
   
    let result =  parseInt(numStr);

    return result
}

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
                            <ElementContainer  mouseOverHandler={
                                () => {
                                 
                                    let atomicNumber = getAtomicNumberFromTableDataString(data);
                                    setSelected(atomicNumber);
                                }
                            }  className={`pt-element-container period-${rowIndex} ${data}`} 
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