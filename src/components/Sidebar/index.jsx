/** External CSS */
import "./index.css"

/** React Components */
import { IonizationEnergyWidget } from "../IonizationEnergyWidget";
import { NumSelectorWidget } from "../NumSelectorWidget";

/** React Context */
import ElementTableContext from "../../context";

/** React Hooks */
import { useContext, useState, useEffect, useRef } from "react";

/** Helper Functions */
import { getSeriesColor, getElementColor } from "../../utils/helper_functions";
import { convertTemp } from "../../utils/helper_functions";
import { getElementByAtomicNumber } from "../../data/data";

function UnitSelector({unitChangeHandler}){
    return (<div>
            <select onChange={(e) => {
                unitChangeHandler(e.target.value)
            }}>
                <option value="C">&deg;C</option>
                <option value="K">&deg;K</option>
                <option value="F">&deg;F</option>
            </select>
        </div>);
}

export const Sidebar = ({info,setModalLink}) => {
    const {setCurrentMode,layout,theme,mode,selectedAtomicNumber,
        userTemp,userTempUnits, setUserTempUnits} = useContext(ElementTableContext);
    
    let elementInfo = getElementByAtomicNumber(selectedAtomicNumber)
    const [meltingPoint,setMeltingPoint] = useState(elementInfo.mp)
    const [boilingPoint,setBoilingPoint] = useState(elementInfo.bp)
    const prevTempUnits = useRef(userTempUnits);


    useEffect(() => {

        console.log(prevTempUnits.current)

        let updatedMeltingPoint = convertTemp(prevTempUnits.current,elementInfo.mp,userTempUnits)
        let updatedBoilingPoint = convertTemp(prevTempUnits.current,elementInfo.bp ,userTempUnits)
        
        setMeltingPoint(updatedMeltingPoint)
        setBoilingPoint(updatedBoilingPoint)

        console.log("Updated melting point: " + meltingPoint)
        console.log("Updated boiling point: " + boilingPoint)

        prevTempUnits.current = userTempUnits
    }, [userTempUnits,selectedAtomicNumber])

    let themeColor = getElementColor(mode,theme,info)
    let textColor = theme === "dark" ? "white" : "black";

    const bgStyle = { 
        backgroundColor: themeColor,
        borderColor: themeColor,
        color: textColor  
    }
    const textStyle =  {
        color: textColor
    }

    return (<div className={"sidebar-container " + (layout === "sidebar-top" ? "flex-row" : "flex-col")}>
        <div style={bgStyle} className="element-thumbnail">
            <div className="element-thumbnail-left">
                {info.symbol && <span className="symbol-text">{info.symbol}</span>}
                {info.name && <span className="name-text"><a style={textStyle} href="" onClick={(e) => {
                e.preventDefault()
                setModalLink(`https://en.wikipedia.org/wiki/${info.name}`)
            
            }}>{info.name}</a></span>}
                {info.atomicWeight && <span className="atomic-weight-text">{info.atomicWeight}</span>}

            </div>
            <div className="element-thumbnail-right">
               {
                 info.energyLevels && info.energyLevels.map((energyLevel) => {
                    return <span>{energyLevel}</span>;
                 })
               }
            </div>
        </div>

        <div className="sidebar-section">
            {info.series && <div className="info-container"><label>Series Name: </label>
                    <a onClick={() => {
                        setCurrentMode('regular')
                    }} className="series-title">{info.series}</a></div>}
            {info.name && <a href="" onClick={(e) => {
                e.preventDefault()
                setCurrentMode('regular')
                setModalLink(`https://en.wikipedia.org/wiki/${info.name}`)
                
            }}><div className="info-container"><label>Name: </label><span className="element-name">{info.name}</span></div></a> }

            {info.atomicWeight && <a  onClick={
                (e) =>{
                    e.preventDefault()
                    setCurrentMode('atomic-weight')
                    console.log("mode (from sidebar): " + mode)
                }
            }><div className="info-container"><label>Atomic Weight: </label><span className="atomic-weight">{info.atomicWeight}</span></div></a>}
            {info.energyLevels && <div className="info-container"><label>Energy Levels: </label><span className="energy-levels">{info.energyLevels.join(",")}</span></div>}
            {meltingPoint &&  <div className="info-container"><label>Melting Point: </label><span className="melting-point">{meltingPoint.toFixed(2)} &deg;{userTempUnits}</span></div>}
            {boilingPoint &&  <div className="info-container"><label>Boiling Point: </label><span className="boiling-point">{boilingPoint.toFixed(2)} &deg;{userTempUnits}</span></div>}
            {info.electronegativity &&  <div className="info-container"><label>Electronegativity: </label><span className="boiling-point">{info.electronegativity}</span></div>}

        </div>

        <div className="sidebar-section">

            <div className="info-container temp-info-container">
                <label>State at: </label>
                <NumSelectorWidget></NumSelectorWidget>
                <select value={ userTemp > boilingPoint ? "gas" : (userTemp > meltingPoint ? "liquid" : "solid")
                 }   class="state-selector" disabled>
                    <option value="solid">Solid</option>
                    <option value="liquid">Liquid</option>
                    <option value="gas">Gas</option>
                </select>
            </div>
            {info.ionizationEnergies && <IonizationEnergyWidget 
                ionizationEnergyArray={info.ioniziationEnergies}
              ></IonizationEnergyWidget>}
            {info.radius &&  <div className="info-container"><label>Electronegativity: </label>
                <span className="radius-text">{info.radius}</span>
            </div>}

            {info.hardness &&  <div className="info-container"><label>Electronegativity: </label>
                <span className="hardness-text">{info.hardness}</span>
            </div>}


            {info.density &&  <div className="info-container"><label>Electronegativity: </label>
                <span className="density-text">{info.density}</span>
            </div>}

        </div>
    </div>);
}