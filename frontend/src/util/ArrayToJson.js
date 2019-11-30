function ArrayToJson(array){    
    let obj = Object.assign({},array)
    let json = JSON.stringify(obj)
    return json
}

export default ArrayToJson