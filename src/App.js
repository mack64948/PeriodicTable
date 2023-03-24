/** CSS imports */
import './App.css';

/** React Router Imports */
import {BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router';

/** Component Imports */
import { Header } from './components/Header';
import { PeriodicTable } from './components/PeriodicTable';
import { SeriesSelectorTable } from './components/SeriesSelectorTable';
import { TemperatureWidget } from './components/TemperatureWidget';
import { Sidebar } from './components/Sidebar';
import { ModalWindow } from './components/ModalWindow';
import { ECDiagrams } from './components/ECDiagrams';
import { PeriodicTableViewer } from './components/PeriodicTableViewer';
import { Model3DPage } from './components/Model3DPage';
import { IsotopesPage } from './components/IsotopesPage';

/** React Hooks */
import { useEffect, useState } from 'react';

/** Context */
import ElementTableContext from './context';

/** Helper functions */
import { getElementInfo, getElementByAtomicNumber } from './data/data';
import { NumSelectorWidget } from './components/NumSelectorWidget';

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
    <Router>
    <ElementTableContext.Provider value={{
        selectedAtomicNumber, setAtomicNumber,
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
   
      <Routes>
          <Route path="/" element={<PeriodicTableViewer></PeriodicTableViewer>}></Route>  
           <Route path="/ptable" element={<PeriodicTableViewer></PeriodicTableViewer>}></Route>  
           <Route path="/ecdiagrams" element={ <ECDiagrams></ECDiagrams>}></Route>
           <Route path="/isotopes" element={ <IsotopesPage></IsotopesPage>}></Route>
           <Route path="/model3D" element={ <Model3DPage></Model3DPage>}></Route>

        
  
      </Routes>
    
   </div>
    
   </ElementTableContext.Provider>
   </Router> 
  );
}

export default App;
