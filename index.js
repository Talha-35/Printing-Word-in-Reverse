
// 1- ) inputa ulaşıp değer tanımlayacağız
// 2- ) butona ulaşıp değer tanımlayacağız
// 3- ) butona tıklayınca inputu ters çevirmesi için fonksiyonu yazacağız
// 4- ) sonucu resulta göndereceğiz

const input = document.querySelector("#input");
const button = document.querySelector("#button");
const result = document.querySelector("#result");

button.addEventListener("click" , reserveStr);


function reserveStr() {   
    newStr = input.value.split(" ").reverse()
    lastStr = "";
    for (let i = 0; i < newStr.length; i++) {        
       lastStr += newStr[i] + " "    
    }
    
    result.innerText = lastStr;
    console.log(lastStr)
    userInput.focus();
    userInput.value = "";
}




















