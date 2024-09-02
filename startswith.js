function checkExists(str){
 if(str.length<4){
    return false;
 }
 let newStr = str.substring(0,4);
 if(newStr == "Java"){
    return true;
 }else{
    return false;
 }
}
console.log(checkExists("Javascript"));
console.log(checkExists("fdr"));
console.log(checkExists("mythili"));