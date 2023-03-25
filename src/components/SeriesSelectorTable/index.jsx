import "./index.css"
import ElementTableContext from "../../context";
import { useContext } from "react";
import { getSeriesColor } from "../../utils/helper_functions";

export const SeriesSelectorTable = () => {
   const {theme} = useContext(ElementTableContext)
    const textStyle =  {
        color: theme === "dark" ? "white" : "black"
    }
    return (<div className="table-container">
        <div className="metals-label grid-item">Metals</div>
        <div  style={{
            backgroundColor: getSeriesColor(theme,"Metalloids")
        }}  className="metalloids-selector grid-item"><span style={textStyle} class="column-text">Metalloids</span></div>
        <div className="nonmetals-label grid-item">Nonmetals</div>
        <div style={{
            backgroundColor: getSeriesColor(theme,"Alkali metals")
        }} className="alkali-metals-selector grid-item"><span style={textStyle} class="column-text">Alkali metals</span> </div>
        
        <div style={{
            backgroundColor: getSeriesColor(theme,"Alkaline earth metals")
        }} className="alkaline-earth-metals-selector grid-item"><span style={textStyle} class="column-text">Alkaline earth metals</span></div>
        
        <div style={{
            backgroundColor: getSeriesColor(theme,"Lanthanoids"),
            color: theme === "dark" ? "white" : "black"
        }} className="lanthanoids-selector grid-item">Lanthanoids</div>
        
        <div style={{
            backgroundColor: getSeriesColor(theme,"Transition metals")
        }}  className="transition-metals-selector grid-item"><span style={textStyle} class="column-text">Transition metals</span></div>
        
        <div style={{
            backgroundColor: getSeriesColor(theme,"Post-transition metals")
        }}  className="post-transition-metals-selector grid-item"><span style={textStyle} class="column-text">Post-transition metals</span></div>
        <div  style={{
            backgroundColor: getSeriesColor(theme,"Reactive nonmetals")
        }}   className="reactive-nonmetals-selector grid-item"><span style={textStyle} class="column-text">Reactive nonmetals</span></div>
        <div  style={{
            backgroundColor: getSeriesColor(theme,"Noble gases"),
        }}  className="noble-gases-selector grid-item"><span style={textStyle} class="column-text">Noble gases</span></div>
        <div  style={{
            backgroundColor: getSeriesColor(theme,"Actinoids"),
            color: theme === "dark" ? "white" : "black"
        }}  className="actinoids-selector grid-item">Actinoids</div>

    </div>);
}