import { elementData } from "../data/data";

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

function getBackgroundColor(theme,series){
    let seriesKey = getSeriesKey(series)
    return getBackgroundColorWithSeriesKey(theme,seriesKey)
}


function searchElements(searchString){
    let resultsArray =elementData.filter((elementInfo) => {
        return  elementInfo.name.includes(searchString) || 
                elementInfo.symbol.toUpperCase() === searchString.toUpperCase() ||
                elementInfo.atomicNumber === parseInt(searchString);
            })

    return resultsArray;
}

export { searchElements,getBackgroundColor}