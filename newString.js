function newString(str){
    if(str.length<3){
        return str.toUpperCase();
    }else{
     let firstHalf = (str.substring(0,3)).toLowerCase();
     let secondtHalf = str.substring(3,str.length);
     return firstHalf + secondtHalf;
    }
}


console.log(newString("PYTHON"));


console.log(newString("Py"));


console.log(newString("JAVAScript")); 