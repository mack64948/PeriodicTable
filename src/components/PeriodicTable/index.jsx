import "./index.css"
import { ElementContainer } from "../ElementContainer";
import { useState, useRef } from "react";
import { getElementByAtomicNumber, getElementInfo } from "../../data/data";

const tableData = [
    //column labels
    ["column-label","column-label","column-label","column-label","column-label","column-label","column-label","column-label","column-label","column-label","column-label","column-label","column-label","column-label","column-label","column-label","column-label","column-label","column-label"],

    //periods
    ["row-label","g1 atnum-1","filler", "filler", "filler", "filler", "filler", "filler", "filler", "filler","filler", "filler", "filler", "filler","filler", "filler", "filler", "filler","g8 atnum-2" ], //period 1
    ["row-label","g1 alkali-metal atnum-3", "g2 alkaline-earth-metal atnum-4", "filler", "filler", "filler", "filler", "filler", "filler", "filler", "filler","filler", "filler", "g3 atnum-5","g4 atnum-6", "g5 atnum-7","g6 atnum-8", "g7 halogens atnum-9", "g8 noble-gases atnum-10" ], //period 2
    ["row-label","g1 alkali-metal atnum-11", "g2 alkaline-earth-metal atnum-12", "filler", "filler", "filler", "filler", "filler", "filler", "filler", "filler","filler", "filler", "g3 atnum-13","g4 atnum-14", "g5 atnum-15","g6 atnum-16", "g7 halogens atnum-17", "g8 noble-gases atnum-18" ], //period 3
    ["row-label","g1 alkali-metal atnum-19", "g2 alkaline-earth-metal atnum-20", 
        "tr-metal atnum-21", "tr-metal atnum-22", "tr-metal atnum-23", "tr-metal atnum-24", "tr-metal atnum-25", "tr-metal atnum-26", "tr-metal atnum-27", "tr-metal atnum-28","tr-metal atnum-29", "tr-metal atnum-30", "g3 atnum-13","g4 atnum-14", "g5 atnum-15","g6 atnum-16", "g7 halogens atnum-17", "g8 noble-gases atnum-18" ], //period 4

    ["row-label","g1 alkali-metal atnum-37", "g2 alkaline-earth-metal atnum-38", 
        "tr-metal atnum-39", "tr-metal atnum-40", "tr-metal atnum-41", "tr-metal atnum-42", "tr-metal atnum-43", "tr-metal atnum-44", "tr-metal atnum-45", "tr-metal atnum-46","tr-metal atnum-47", "tr-metal atnum-48", "g3 atnum-49","g4 atnum-50", "g5 atnum-51","g6 atnum-52", "g7 halogens atnum-53", "g8 noble-gases atnum-54" ], //period 5

]

function getAtomicNumberFromTableDataString(dataString){
    let startIndex = dataString.indexOf("atnum-") + 6;
    let numStr = dataString.slice(startIndex)
    console.log(numStr);
    return parseInt(numStr);
}

export const PeriodicTable = ({setSelected}) => {
    
  

    return (<div className="pt-container">



        {
            tableData.map((stringArr,rowIndex) => {
                if(rowIndex === 0){
                    return stringArr.map((data,index) => {
                        return index > 0 ? <div className="pt-element-container column-label">{index}</div> : <div className="pt-element-container column-label"></div>;
                    })
                } else {

                    return stringArr.map((data,index) => {
                        return index === 0 ? <div className="pt-element-container row-label">{rowIndex}</div> :
                            data.indexOf('filler') === -1 ?   
                            <ElementContainer mouseOverHandler={
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