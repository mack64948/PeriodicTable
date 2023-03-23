import './App.css';
import { Header } from './components/Header';
import { PeriodicTable } from './components/PeriodicTable';
import { SeriesSelectorTable } from './components/SeriesSelectorTable';
import { TemperatureWidget } from './components/TemperatureWidget';
import { Sidebar } from './components/Sidebar';
import { useEffect, useState } from 'react';
import ElementTableContext from './context';
import { getElementInfo, getElementByAtomicNumber } from './data/data';
import { NumSelectorWidget } from './components/NumSelectorWidget';
import { ModalWindow } from './components/ModalWindow';
import { ECDiagrams } from './components/ECDiagrams';

function App() {
  const [searchIsActive,setActiveSearch] = useState(false)
  const [searchResults,setSearchResults] = useState([])
  const [userTemp,setUserTemp] = useState(0)
  const [userTempUnits,setUserTempUnits] = useState('C')

  const [selectedAtomicNumber, setAtomicNumber] = useState(null);
  const [mode,setCurrentMode] = useState('regular')
  const [theme,setTheme] = useState('light')
  const [layout,setLayout] = useState('sidebar-left')

  const [isShowingModal,setModalStatus] = useState(false)
  const [modalLink,setModalLink] = useState('')

  let sidebarElement = getElementByAtomicNumber(selectedAtomicNumber)
  sidebarElement = sidebarElement || {}

  useEffect(() => {
    setAtomicNumber(1);
    setUserTemp(25)
    setUserTempUnits('C')
  }, [])

  return (
    <ElementTableContext.Provider value={{
        userTemp, setUserTemp,
        userTempUnits,setUserTempUnits,
        mode,setCurrentMode,
        theme, setTheme, 
        layout, setLayout, 
        searchIsActive,setActiveSearch,
        searchResults,setSearchResults}}>
      <Header></Header>
      {isShowingModal && <ModalWindow elementName={sidebarElement.name} setModalStatus={() => { setModalStatus(false) }} modalLink={modalLink}></ModalWindow>}
   
    <div className={"wrapper " + isShowingModal && "modal-overlay"}>

   <div className={"main-container " + (layout === 'sidebar-left' ? "flex-row" : "flex-col")}>
   {/* <Sidebar setModalLink={(href) => {
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
     
      

   }} info={sidebarElement}></Sidebar> */}
    {/* <PeriodicTable setSelected={(atomicNumber) => {
      setAtomicNumber(atomicNumber);
    }}></PeriodicTable> */}

    <ECDiagrams></ECDiagrams>
   </div>
   </div>
   </ElementTableContext.Provider>
  );
}

export default App;
