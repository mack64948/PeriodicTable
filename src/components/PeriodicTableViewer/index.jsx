/** External CSS */
import "./index.css"

/** React Components */
import { Sidebar } from "../Sidebar";
import { PeriodicTable } from "../PeriodicTable";

/** React Context */
import ElementTableContext from "../../context";

/** React Hooks */
import { useContext } from "react";

/** Helper Functions */
import { getElementByAtomicNumber } from "../../data/data";

export const PeriodicTableViewer = () => { 
    const {setModalLink,setModalStatus, layout,
        selectedAtomicNumber, setAtomicNumber } = useContext(ElementTableContext);

    let sidebarElement = getElementByAtomicNumber(selectedAtomicNumber)
    sidebarElement = sidebarElement || {}

   return (
   <div className={"main-container " + (layout === 'sidebar-left' ? "flex-row" : "flex-col") } >
   <Sidebar setModalLink={(href) => {
      setModalStatus(true);
      setModalLink(href);
      let modalWindow = document.querySelector('.modal-window');
      

      if(modalWindow){
        modalWindow.style.zIndex = 10
      }
     
      

   }} info={sidebarElement}></Sidebar> 
    <PeriodicTable setSelected={(atomicNumber) => {
      setAtomicNumber(atomicNumber);
    }}></PeriodicTable> </div>);
    }