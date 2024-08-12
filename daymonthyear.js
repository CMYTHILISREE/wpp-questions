const today = new Date();
let month = today.getMonth()+1;
let date = today.getDate();
const year = today.getFullYear();
if(month <10){
    month = "0"+month;
}
if(date <10){
    date = "0"+day;
}
console.log(`${date}//${month}//${year}`);