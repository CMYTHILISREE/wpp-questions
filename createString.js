function createString(str){
    let newStr = "";
    for(let i = str.length-1;i>=str.length-3;i--){
        newStr = newStr+str[i];
    }
    if(str.length>=3){
        return newStr+str+newStr;
    }else{
         return false;
    }
  
}
console.log(createString("ff"));