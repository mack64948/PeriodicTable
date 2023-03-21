import "./index.css"
import ElementTableContext from "../../context";
import { useContext } from "react";

export const Sidebar = ({info}) => {
    const {mode,setCurrentMode} = useContext(ElementTableContext);
    

    return (<div className="sidebar-container">
        <div className="element-thumbnail">
            {info.symbol && <span className="symbol-text">{info.symbol}</span>}
            {info.name && <span className="name-text">{info.name}</span>}
            {info.atomicWeight && <span className="atomic-weight-text">{info.atomicWeight}</span>}

        </div>
        {info.series && <div className="info-container"><label>Series Name: </label>
                <span className="series-title">{info.series}</span></div>}
        {info.name && <div className="info-container"><label>Name: </label><span className="element-name">{info.name}</span></div> }
        {info.atomicWeight && <div className="info-container"><label>Atomic Weight: </label><span className="atomic-weight">{info.atomicWeight}</span></div>}
        {info.energyLevels && <div className="info-container"><label>Energy Levels: </label><span className="energy-levels">{info.energyLevels}</span></div>}
        {info.meltingPoint && <div className="info-container"><label>Melting Point: </label><span className="melting-point">{info.meltingPoint}</span></div>}
        {info.boilingPoint &&  <div className="info-container"><label>Boiling Point: </label><span className="boiling-point">{info.boilingPoint}</span></div>}
       
    </div>);
}