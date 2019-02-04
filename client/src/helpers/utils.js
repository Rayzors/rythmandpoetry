export const throttle = (fn, wait) => {
    var time = Date.now();
    return function () {
        if ((time + wait - Date.now()) < 0) {
            fn();
            time = Date.now();
        }
    }
}

/**
 * Compare if 2 arrays have the same items
 * @param {Array} array1 
 * @param {Array} array2 
 */
export const arrayEquals = ( array1, array2 ) => array1.every( e => array2.includes(e) )

/**
 * Compare if 2 objects are the same
 * @param {Object} obj1 
 * @param {Object} obj2 
 */
export const objectEquals = ( obj1, obj2 ) => JSON.stringify( obj1 ) === JSON.stringify( obj2 )

export const createRouteNameFromString = string => {
    let routeString = string.toLowerCase()
    routeString = routeString.split(' ').join('-')
    return routeString
}