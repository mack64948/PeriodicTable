/** CSS imports */
import "./index.css"

/** Image imports */
import layoutSideIcon from "../../assets/layout-side.svg"
import layoutTopIcon from "../../assets/layout-top.svg"

/** Context */
import ElementTableContext from "../../context";

/** React Hooks */
import { useContext, useState } from "react";

/** Helper functions */
import { searchElements } from "../../utils/helper_functions";

/** React router imports */
import { Link } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom";

export const Header = () => {
   
    const { setLayout, theme, setTheme,  
            searchIsActive,setActiveSearch, 
            searchResults,setSearchResults } = useContext(ElementTableContext);
    const [isShowingSearchbar, setSearchbarStatus] = useState(false)
   
    return (<div className={"header-container " + (theme === "dark" ? "container-dark" : "container-light")}>


        <div className={"logo-container " + (theme === "dark" ? "logo-container-dark" : "logo-container-light")}>

                <i className={"fa-atom fa-regular"}></i>
                <Link to="/ptable" className={"navlink " + (theme === "dark" ? "navlink-dark" : "navlink-light")}>
                <span className={"logo-text " && (theme === "dark" ? "logo-text-dark" : "logo-text-light")}>Periodic <br />Table</span>
                </Link>
        </div>

        <div className="navlink-group">
            <Link to="/games" className={"navlink " + (theme === "dark" ? "navlink-dark" : "navlink-light")}>
                <i className="fa-regular fa-atom-simple"></i>
                <span>Games</span>
            </Link>

            <Link to="/quizzes" className={"navlink " + (theme === "dark" ? "navlink-dark" : "navlink-light")}>
                <i className="fa-regular fa-atom-simple"></i>
                <span>Quizzes</span>
            </Link>

            <Link to="/ecdiagrams" className={"navlink " + (theme === "dark" ? "navlink-dark" : "navlink-light")}>
                <i className="fa-regular fa-atom-simple"></i>
                <span>EC Diagrams</span>
            </Link>

            <Link to="model3D" className={"navlink " + (theme === "dark" ? "navlink-dark" : "navlink-light")}>
                <i className="fa-regular fa-atom-simple"></i>
                <span>3D Models</span>
            </Link>
        </div>

        <div className={"button-group " + (isShowingSearchbar && "display-none")}>
            <button onClick={() => {
                setLayout("sidebar-left");
            }} className="navbutton navbutton-layout"><img src={layoutSideIcon} /></button>
            <button onClick={() => {
                setLayout("sidebar-top");
            }} className="navbutton navbutton-layout"><img src={layoutTopIcon}/></button>
        </div>

     
        <div className={"button-group " + (isShowingSearchbar && "display-none")} >
            <button onClick={() => {
                setTheme("light");
            }} className="navbutton"><i className="fa-solid fa-sun"></i></button>
            <button onClick={() => {
                setTheme("dark");
            }} className="navbutton"><i className="fa-solid fa-moon"></i></button>
        </div>
        <div className="button-group">
            <button onClick={() => {
                setSearchbarStatus(!isShowingSearchbar);
                setActiveSearch(isShowingSearchbar ? false : true)
                if(!searchIsActive){
                    let searchInput = document.getElementById("search-input");
                    if(searchInput){
                        searchInput.value = "";
                    }
                }

            }} className={"navbutton " + (isShowingSearchbar && "search-active")}>
                
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            {isShowingSearchbar ? <input id="search-input" onChange={(e) => {
                if(searchIsActive){
                    let resultsArray = searchElements(e.target.value);
                    console.log(resultsArray);
                    setSearchResults(resultsArray);
                }

            }} type="text" class="animated" /> : <input type="text" hidden />}

        </div>
    </div>
   ); 
}