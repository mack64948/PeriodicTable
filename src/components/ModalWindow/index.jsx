import "./index.css"

export const ModalWindow = ({modalLink,elementName,setModalStatus}) => {
    return (<div className="modal-window">
    <button className="modal-exit-button" onClick={() => {
      setModalStatus(false);

      let modalWindow = document.querySelector('.modal-window');
      let modalOverlay = document.querySelector('.modal-overlay');

      if(modalOverlay){
        modalOverlay.style.zIndex = -10
        //modalOverlay.style.opacity = 1
     
      }

      if(modalWindow){
        modalWindow.style.zIndex = -9
      }
    }}>X</button>
    <iframe  src={modalLink} title={`Wikipedia Page about ${elementName}`}></iframe>
  </div>);
}