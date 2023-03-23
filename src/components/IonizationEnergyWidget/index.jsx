import "./index.css"
import { useState } from "react"

export const IonizationEnergyWidget = ({ionizationEnergyArray}) => {
   const [arrayIndex,setArrayIndex] = useState(0)
   const [energyUnit, setEnergyUnit] = useState('kJ/mol')
   return (<div>
        <label>Ionization Energy: </label>
        <select class="ie-number-selector" onChange={
            (e) => {
                let index = parseInt(e.target.value);
                setArrayIndex(index)

            }
        }>
            <option value="0">1st</option>
            <option value="1">2nd</option>
            <option value="2">3rd</option>
            <option value="3">4th</option>

        </select>

        <span>
            { ionizationEnergyArray[arrayIndex] }
        </span>

        <select class="unit-selector" value={energyUnit}>
            <option value="kJ/mol">kJ/mol</option>
            <option value="eV">eV</option>
        </select>
    </div>)
}