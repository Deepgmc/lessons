export function keyToIndexObj(arr){
    return arr.reduce((newArr, element) => {
        newArr[element.id] = element
        return newArr
    }, {});
}

export function mapToArr(obj){
    return Object.keys(obj).map(id => obj[id])
}