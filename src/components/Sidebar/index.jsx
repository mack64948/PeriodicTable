import "./index.css"
import ElementTableContext from "../../context";
import { useContext } from "react";
import { getBackgroundColor } from "../../utils/helper_functions";

export const Sidebar = ({info,setModalLink}) => {
    const {setCurrentMode,layout,theme,mode} = useContext(ElementTableContext);
    
    let themeColor = getBackgroundColor(theme,info.series)
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
        {info.meltingPoint && <div className="info-container"><label>Melting Point: </label><span className="melting-point">{info.meltingPoint}</span></div>}
        {info.boilingPoint &&  <div className="info-container"><label>Boiling Point: </label><span className="boiling-point">{info.boilingPoint}</span></div>}
        </div>
    </div>);
}