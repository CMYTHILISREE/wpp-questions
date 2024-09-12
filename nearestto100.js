function nearest(a,b){
   let diff1 = Math.abs(100-a);
   let diff2 = Math.abs(100-b);
   if(diff1<diff2){
    return a;
   } if(diff2<diff1){
    return b;
   }
}

console.log(nearest(90, 89));


console.log(nearest(-90, -89));




console.log(nearest(90, 90));