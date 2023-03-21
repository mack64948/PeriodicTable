import './App.css';
import { PeriodicTable } from './components/PeriodicTable';
import { SeriesSelectorTable } from './components/SeriesSelectorTable';
import { TemperatureWidget } from './components/TemperatureWidget';
import { Sidebar } from './components/Sidebar';
import { useState } from 'react';
import ElementTableContext from './context';
import { getElementInfo, getElementByAtomicNumber } from './data/data';
import { NumSelectorWidget } from './components/NumSelectorWidget';

function App() {
  const [selectedAtomicNumber, setAtomicNumber] = useState(null);
  const [mode,setCurrentMode] = useState('regular')

  let sidebarElement = getElementByAtomicNumber(selectedAtomicNumber)
  sidebarElement = sidebarElement || {}

  return (
    <ElementTableContext.Provider value={{mode,setCurrentMode}}>

   
    <div className="wrapper">


   <div className="main-container">
    <NumSelectorWidget initialNum={200} initialUnits={'C'} setPTableTemp={() => {}}></NumSelectorWidget>
   <Sidebar info={sidebarElement}></Sidebar>
    <PeriodicTable setSelected={(atomicNumber) => {
      setAtomicNumber(atomicNumber);
    }}></PeriodicTable>
   </div>
   </div>
   </ElementTableContext.Provider>
  );
}

export default App;
