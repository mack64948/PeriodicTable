
/** Iterates through all of the element 
 * parent containers and applies the function 'fnc'
 * to each one individually
 * 
 * 
 *  @params     fnc -> a function that takes an element parent container as an arg
 *              callback -> a callback function executed upon completion of the iterative application of 'fnc'
 * 
 *  @return      none
 *   */
const transformElements = ((fnc,callback) => {
    let elementContainers = document.querySelectorAll(".element-container:not(.filler):not(.row-label):not(.column-label")
    
    for(let i = 0; i < elementContainers.length; i++){
        let elementContainer = elementContainers[i];
        fnc(elementContainer);
    }

    if(callback !== null && callback !== undefined){
        callback();
    }
   
})


/** Sets the border color for each element parent container to black
 * 
 * 
 *  @params     callback -> a callback function executed upon completion of the iterative application of 'fnc'
 *  @return     none
 *   */
const restoreDefaultBorders = (callback) => {
    transformElements((elementContainer) => {
        elementContainer.style.border = "2px solid black";
    }, () => {
        console.log("Border color restored")
    })
   
}

export { transformElements, restoreDefaultBorders }