var findIntersectionValues = function(nums1, nums2) {
    const arr =[0,0];
  
    for(i=0;i<nums1.length;i++){
        
            if(nums2.includes(nums1[i])){
               arr[0]+=1;
            }
        }
            for(j=0;j<nums2.length;j++){
                if(nums1.includes(nums2[j])){
                arr[1]+=1;
             }
        
    }
    return arr;
};
const result = findIntersectionValues([2,3,2],[1,2]);
console.log(result);