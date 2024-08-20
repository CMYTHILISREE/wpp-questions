var twoSum = function(nums, target) {
  let arr = nums.map((num, index) => ({ num, index }));
  let start = 0;
  let end = arr.length-1;

  arr.sort((a,b)=>(a.num-b.num));
  while(start<end){
      let sum = arr[start].num+arr[end].num;
      if(sum == target){
          return [arr[start].index,arr[end].index];
          
      }else if(sum<target){
          start++;     
      }else {
          end--;
      }
  }
  return [];
};