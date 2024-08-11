const today = new Date();
const day = today.getDay();
const date = today.getDate();
let hour = today.getHours();
const min = today.getMinutes();
const sec = today.getSeconds();
const daylist = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];


let Meridiem = (hour>=12) ? "pm" : "am" ;

hour = (hour>=12) ? hour-12 : hour ;

if(hour == 0 && Meridiem == "pm"){
    if(min == 0 && sec ==0){
        hour = 12;
        Meridiem = "Noon"
    }else{
        hour = 12;
        Meridiem = "pm"
    } 
}
if(hour == 0 && Meridiem == "am"){
    if(min == 0 && sec ==0){
        hour = 12;
        Meridiem = "Midnight"
    }else{
        hour = 12;
        Meridiem = "am"
    } 
}

console.log(`Current date and day and time is ${date} ${daylist[day]} ${hour}:${min}:${sec} ${Meridiem}`)