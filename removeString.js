function removeString(str1,position){
    if(position<0 || position>=str1.length ){
        console.log("invalid position");
    }
    let result = str1.slice(0,position)+str1.slice(position+1);
    return result;
}
console.log(removeString("mythili",4));
