var isLongPressedName = function(name, typed) {
    let set = new Set(typed);
     const ans = [...name].every(x => set.has(x));  
        if(ans === true){
            for(i=0;i<typed.length;i++){
                if(typed[i]=== typed[i+1]){
                    return true;
                }else{
                    return false;
                }
            }
        }
    };
const result = isLongPressedName("mythili","mythili");
console.log(result);