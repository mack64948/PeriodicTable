import { elementData } from "../data/data";
import { getLinearNormalizedAtomicWeight } from "../data/data";

const colorDict = {

    "light": {
        "alkaliMetals": "orange",
        "alkalineEarthMetals": "yellow",
        "reactiveNonMetals": "green",
        "transitionMetals": "pink",
        "postTransitionMetals": "lightblue",
        "metalloids": "teal",
        "nobleGases": "plum",
        "lanthanoids": "beige",
        "actinoids": "violet",
        "noSeries": "grey"
    },

    "dark": {

        "alkaliMetals": "brown",
        "alkalineEarthMetals": "darkgoldenrod",
        "reactiveNonMetals": "darkgreen",
        "transitionMetals": "maroon",
        "postTransitionMetals": "darkslateblue",
        "metalloids": "darkseagreen",
        "nobleGases": "darkorchid",
        "lanthanoids": "olive",
        "actinoids": "mediumpurple",
        "noSeries": "grey"


    }

}


function getSeriesKey(series){
    let seriesKey;
    switch(series){
        case "No series":
            seriesKey = "noSeries"
            break
        case "Actinoids":
            seriesKey = "actinoids"
            break
        case "Lanthanoids":
            seriesKey = "lanthanoids"
            break
        case "Reactive nonmetals":
            seriesKey = "reactiveNonMetals"
            break
        case "Post-transition metals":
            seriesKey = "postTransitionMetals"
            break
        case "Metalloids":
            seriesKey = "metalloids";
            break;
        case "Alkali metals":
            seriesKey = "alkaliMetals"
            break;
        case "Alkaline earth metals":
            seriesKey = "alkalineEarthMetals"
            break;
        case "Transition metals":
            seriesKey = "transitionMetals"
            break;
        case "Noble gases":
            seriesKey = "nobleGases";
            break;
        default:
            seriesKey = "reactiveNonmetals"
            break;
    }
    return seriesKey;
}


function getBackgroundColorWithSeriesKey(theme,seriesKey){
    return colorDict[theme][seriesKey]
}

function getSeriesColor(theme,series){
    let seriesKey = getSeriesKey(series)
    return getBackgroundColorWithSeriesKey(theme,seriesKey)
}

function getAtomicWeightBGColor(elementInfo){
    let normalizedAW = getLinearNormalizedAtomicWeight(elementInfo.atomicWeight)
    let greenVal = 255*(1-normalizedAW);
    let blueVal = 255*(1-normalizedAW);

    return `rgb(255,${greenVal},${blueVal})`;
}

function getElementColor(mode,theme,elementInfo,currentStateOfMatter){
    switch(mode){
        case "regular":
            return getSeriesColor(theme,elementInfo.series)
        case "slg":
            return getSeriesColor(theme,elementInfo.series)
          
        case "state-of-matter":
            if(theme === 'dark'){
                switch(currentStateOfMatter){
                    case 'solid':
                        return 'red';
                    case 'liquid':
                        return 'orangered';
                    case 'gas':
                        return 'yellow';;
                }
            } else {
                switch(currentStateOfMatter){
                    case 'solid':
                        return "darkblue;"
                    case 'liquid':
                        return "blue";
                    case 'gas':
                        return "lightblue";
                }
            }
            break;
        case 'atomic-weight':
            return getAtomicWeightBGColor(elementInfo)
        default:
            return getSeriesColor(theme,elementInfo.series)

    }

}


function searchElements(searchString){
    let resultsArray =elementData.filter((elementInfo) => {
        return  elementInfo.name.includes(searchString) || 
                elementInfo.symbol.toUpperCase() === searchString.toUpperCase() ||
                elementInfo.atomicNumber === parseInt(searchString);
            })

    return resultsArray;
}

function determineState(mp,bp,currentTemp){

}

function convertTemp(fromUnit,fromVal,toUnit){
    const validUnits = ['C','F','K']

    console.log(`fromUnit: ${fromUnit}, toUnit: ${toUnit}, fromVal: ${fromVal}`)
    if(!validUnits.includes(fromUnit) || !validUnits.includes(toUnit)){
        return fromVal;
    }

    if(fromUnit === toUnit){
        return fromVal;
    }

    switch(fromUnit){
        case 'C':
            if(toUnit === 'K'){
                return fromVal + 273.15;
            } else {
                return (fromVal * 9/5) + 32
            }
          
        case 'K':
            if(toUnit === 'C'){
                return fromVal - 273.15;
            } else {
                return ((fromVal - 273.15) * 9/5) + 32
            }
            break;
        case 'F':
            if(toUnit === 'C'){
                return (fromVal - 32) * 5/9
            } else {
                return ((fromVal - 32) * 5/9) + 273.15
            };
        default:
            return fromVal;
    }
}

function getAllElementWithState(stateOfMatter, userTemp){
    switch(stateOfMatter){
        case 'solid':
            return elementData.filter((elementInfo) => {
                return userTemp > elementInfo.mp && userTemp < elementInfo.bp
            })
           
        case 'liquid':
            return elementData.filter((elementInfo) => {
                return userTemp > elementInfo.bp;
            })
      
        case 'gas':
            return elementData.filter((elementInfo) => {
                return userTemp < elementInfo.mp;
            })
        default:
            break;
    }
}

function getAtomicNumberFromTableDataString(dataString){
    let startIndex = dataString.indexOf("atnum-") + 6;
    let numStr = dataString.slice(startIndex)
   
    let result =  parseInt(numStr);

    return result
}

export { getAtomicNumberFromTableDataString, determineState, convertTemp, getElementColor, searchElements,getSeriesColor, getAtomicWeightBGColor}