var prefixProduct = function (arr){
   
    for(i=1;i<arr.length;i++){
        arr[i] = arr[i]*arr[i-1] ;   
    }
    
  return arr; 
}
const result = prefixProduct([1,2,3,4,5]);
console.log(result);
