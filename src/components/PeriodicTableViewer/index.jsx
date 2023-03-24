import "./index.css"
import { Sidebar } from "../Sidebar";
import { PeriodicTable } from "../PeriodicTable";
import ElementTableContext from "../../context";
import { useContext } from "react";
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
      let modalOverlay = document.querySelector('.modal-overlay');

      if(modalOverlay){
        modalOverlay.style.zIndex = 9
       
        //modalOverlay.style.opacity = 0.5
      }

      if(modalWindow){
        modalWindow.style.zIndex = 10
      }
     
      

   }} info={sidebarElement}></Sidebar> 
    <PeriodicTable setSelected={(atomicNumber) => {
      setAtomicNumber(atomicNumber);
    }}></PeriodicTable> </div>);
    }