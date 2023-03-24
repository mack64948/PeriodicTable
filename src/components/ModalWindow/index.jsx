/* External CSS */
import "./index.css"

/* React Components */
import { LoadingIcon } from "../LoadingIcon";

/* React Components */
import { useState, useEffect } from "react";

export const ModalWindow = ({modalLink,elementName,setModalStatus}) => {
    const [isLoading, setIsLoading] = useState(true)

    const element = <div className="modal-window">
      
    <button className="modal-exit-button" onClick={() => {
      setModalStatus(false);

      let modalWindow = document.querySelector('.modal-window');

      if(modalWindow){
        modalWindow.style.zIndex = -9
      }
    }}>X</button>

    {isLoading && <LoadingIcon></LoadingIcon>}
    
    <iframe onLoad={ () => {
      setIsLoading(false)
    }}  src={modalLink} title={`Wikipedia Page about ${elementName}`}></iframe>
  </div>;

    return (element);
}