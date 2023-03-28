import { getElementByAtomicNumber } from "../data/data";
import { colorDict } from "./helper_functions";
import { getSeriesKey } from "./helper_functions";
import { getAtomicWeightModeColor } from "./helper_functions";
/**
 *      Helper class that creates a style objects based on an element data object
 *      The style object can be used for the style attribute to format an individual element container
 *      The basic layout of the periodic table should already be established 
 */

const styleDictionary = {

    "light": {
        "alkaliMetals": {
            backgroundColor : "orange",
            color: "black",
            borderColor: "black"
        },
        "alkalineEarthMetals": {
            backgroundColor : "yellow",
            color: "black",
            borderColor: "black"
        },
        "reactiveNonMetals": {
            backgroundColor : "green",
            color: "black",
            borderColor: "black"
        },
        "transitionMetals": {
            backgroundColor : "pink",
            color: "black",
            borderColor: "black"
        },
        "postTransitionMetals": {
            backgroundColor : "lightblue",
            color: "black",
            borderColor: "black"
        },
        "metalloids": {
            backgroundColor : "teal",
            color: "black",
            borderColor: "black"
        },
        "nobleGases": {
            backgroundColor : "plumn",
            color: "black",
            borderColor: "black"
        },
        "lanthanoids": {
            backgroundColor : "beige",
            color: "black",
            borderColor: "black"
        },
        "actinoids": {
            backgroundColor : "violent",
            color: "black",
            borderColor: "black"
        },
        "noSeries": {
            backgroundColor : "grey",
            color: "black",
            borderColor: "black"
        },
    },

    "dark": {

        "alkaliMetals": {
            backgroundColor : "brown",
            color: "white",
            borderColor: "black"
        },
        "alkalineEarthMetals": {
            backgroundColor : "darkgoldenrod",
            color: "white",
            borderColor: "black"
        },
        "reactiveNonMetals": {
            backgroundColor : "darkgreen",
            color: "white",
            borderColor: "black"
        },
        "transitionMetals": {
            backgroundColor : "maroon",
            color: "white",
            borderColor: "black"
        },
        "postTransitionMetals": {
            backgroundColor : "darkslateblue",
            color: "white",
            borderColor: "black"
        },
        "metalloids": {
            backgroundColor : "darkseagreen",
            color: "white",
            borderColor: "black"
        },
        "nobleGases": {
            backgroundColor : "darkorchid",
            color: "white",
            borderColor: "black"
        },
        "lanthanoids": {
            backgroundColor : "olive",
            color: "white",
            borderColor: "black"
        },
        "actinoids": {
            backgroundColor : "mediumpurple",
            color: "white",
            borderColor: "black"
        },
        "noSeries": {
            backgroundColor : "grey",
            color: "white",
            borderColor: "black"
        }


    }
}

class StyleGenerator{
    VALID_THEMES = ['light','dark']
    VALID_MODES = ['regular']
    
    static CreateAtomicWeightStyleObject(elementInfo){
        let amColor = getAtomicWeightModeColor(elementInfo)
        return {
            backgroundColor: amColor,
            color: "blue",
            textShadow: "2px 2px 3px black"
        }
    }

    static ApplySearchResultFormatting(elementInfo,searchResults,searchIsActive,styleObj){
        
        let inResults = searchResults.includes(elementInfo)

    
        styleObj = {...styleObj, 
            opacity: (searchIsActive && !inResults ? "0.5" : "1"),
           
        }
        
        return styleObj
    }

    static CreateStyleObject(atomicNumber,mode,theme){

        let el = getElementByAtomicNumber(atomicNumber)
        let series = el.series 
        let seriesKey = getSeriesKey(series)
      
        switch(mode){
            case "regular":
                return styleDictionary[theme][seriesKey]
            case 'atomic-weight':
                return StyleGenerator.CreateAtomicWeightStyleObject(el)
            default:
                return styleDictionary[theme][series]
        }
       

    }

}

export { StyleGenerator}