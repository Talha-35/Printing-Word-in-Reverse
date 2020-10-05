

function ab(a) {   
    newStr = a.split(" ").reverse()
    lastStr = "";
    for (let i = 0; i < newStr.length; i++) {        
       lastStr += newStr[i] + " "    
    }
    return lastStr
}


console.log(ab("Bugün hava çok güzel"))

