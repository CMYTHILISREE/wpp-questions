var shuffle = function(nums, n) {
    const arr=[];
    for(let i=0;i<n;i++){
        arr.push(nums[i],nums[n+i]);
    }
    return arr;
};
const result = shuffle([1,2,3,4,5,6],3);
console.log(result);