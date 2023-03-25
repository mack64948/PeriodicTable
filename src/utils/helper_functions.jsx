import { elementData } from "../data/data";
import { getLinearNormalizedAtomicWeight } from "../data/data";

/**
 *  Stores the color for each element series based on the current theme
 *  There are only two themes, 'light' and 'dark,' each one having its own color
 *  scheme for periodic table elements
 */
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


/**
 *  An adapter function for obtaining the 'colorDict' key necessary to
 *  access the color corresponding to a given element series
 * 
 *  This function is intended to standardize the key names based on different
 *  systems of nomenclature and naming conventions present in the source data
 * 
 *  @params  series (str) -> The string form of an element series name
 */

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


/**
 *  Gets an element series color based on the current theme
 *  Accesses the 'colorDict' dictionary with the standardized series key
 *  
 *  @params  theme (str) -> 'light' or 'dark'
 *              seriesKey (str) -> Standardized key for accessing the appropriate value from the colorDict
 */

function getThemeColorWithSeriesKey(theme,seriesKey){
    return colorDict[theme][seriesKey]
}

/**
 *  Gets an element series color based on the current theme
 *  Accesses the 'colorDict' dictionary with the non-standardized series key
 *  and utilizes helper functions to standardize the 'colorDict' key
 * 
 *  @params  theme (str) -> 'light' or 'dark'
 *           series (str) -> Non-standardized key for accessing the appropriate value from the colorDict
 * 
 *  @returns  color (str) -> verbose color name for element series
*/

function getSeriesColor(theme,series){
    let seriesKey = getSeriesKey(series)
    return getThemeColorWithSeriesKey(theme,seriesKey)
}


/**
 *  When the user clicks on the 'atomic weight' display container in the sidebar,
 *  element colors are represents on a normalized red scale with shades of red representing
 *  relative atomic weights
 * 
 *  @params  elementInfo (object) -> data object wrapper for element information
 *             
 * 
 *  @returns  color (str) -> gets normalized color for element's atomic weight based on a red scale
*/

function getAtomicWeightModeColor(elementInfo){
    let normalizedAW = getLinearNormalizedAtomicWeight(elementInfo.atomicWeight)
    let greenVal = 255*(1-normalizedAW);
    let blueVal = 255*(1-normalizedAW);

    return `rgb(255,${greenVal},${blueVal})`;
}

/**
 *  Gets the element color based on theme, mode, and current state of matter
 *  
 * 
 *  @params  elementInfo (object) -> data object wrapper for element information
 *           theme (str) -> 'light' or 'dark'
 *           mode (str) ->  'regular', 'atomic-weight', etc.
 *           state of matter (str) -> 'solid', 'liquid', or 'gas'
 *  
 * @returns  color (str) -> gets the element colors based on combination of param values above
*/

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
            return getAtomicWeightModeColor(elementInfo)
        default:
            return getSeriesColor(theme,elementInfo.series)

    }

}


/**
 *  Filters elements based on user's provided search string
 *  
 * 
 *  @params     searchString (str) -> user-inputted string that contains query terms that can be used
 *              to filter the elements; the query terms can include atomic number, element name, and element symbol
 * @returns     array (str) -> result set for filter operation
*/



function searchElements(searchString){
    let resultsArray =elementData.filter((elementInfo) => {
        return  elementInfo.name.includes(searchString) || 
                elementInfo.symbol.toUpperCase() === searchString.toUpperCase() ||
                elementInfo.atomicNumber === parseInt(searchString);
            })

    return resultsArray;
}


/**
 *  Converts temperature from one temperature unit to another
 *  Valid temperature units include 'K', 'C', and 'F'
 * 
 *  @params     fromUnit (str)  -> the original temperature unit
 *              toUnit (str)    -> the final temperature unit
 *              fromVal (float) -> the temperature value being converted  
 *  @returns    toVal (float) -> the converted temperature value
*/


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

/**
 *  Gets the integer value for an atomic number based on the class name assigned to the <div> parent container for the element
 * 
 *  @params   stateOfMatter (str) -> the state of matter being used to filter the elements (i.e. 'solid','liquid','gas')  
 *            userTemp (float) -> current value of user-adjusted temperature (stored in global state)
 *                                 
 *  @returns    element object array (array) ->  result set of elements
*/

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


/**
 *  Gets the integer value for an atomic number based on the class name assigned to the <div> parent container for the element
 * 
 *  @params     dataString (str)  ->    the class name used to target an periodic table grid-item
 *                                      this class name contains the atomic number for the element being display
 *  @returns    atomicNumber (int) ->   the atomic number for the desired element
*/

function getAtomicNumberFromTableDataString(dataString){
    let startIndex = dataString.indexOf("atnum-") + 6;
    let numStr = dataString.slice(startIndex)
   
    let result =  parseInt(numStr);

    return result
}

export { getAtomicNumberFromTableDataString, 
    convertTemp, 
    getElementColor, 
    searchElements,
    getSeriesColor, 
    getAtomicWeightModeColor
}