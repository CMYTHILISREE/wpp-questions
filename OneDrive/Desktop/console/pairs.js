var createPairs = function (nums){
    let count =0;
    for(i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            if(nums[i] === nums[j]){
                 count+=1;
               
            }
        }  
    }
  return count;
 
};

const result = createPairs([1,2,3,1,1,3]);
console.log(result);