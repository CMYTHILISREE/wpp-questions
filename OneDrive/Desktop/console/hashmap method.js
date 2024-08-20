var createPairs = function (nums){
    let count =0;
    let map = {};
    for(let n in nums){
        if(map(n)){
            count++;
        }
    }
  return count;
 
};

const result = createPairs([1,2,3,1,1,3]);
console.log(result);