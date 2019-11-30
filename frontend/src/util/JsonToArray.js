
function JsonToArray(json){
    let obj = JSON.parse(json)
    let array = Object.values(obj)
    return array 
}


export default JsonToArray