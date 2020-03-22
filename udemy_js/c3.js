//3rd code challenge
var allPaid = [124,48,268];
var allTips = new Array();
var allTotal = new Array();
//var allTips = new Array[];
//var allTotal = new Array[];
console.log(allPaid);
console.log(allTips);
function howmuch(bill){
    if (bill <= 50){
        allTips.push(bill*20/100);
        allTotal.push(bill+(bill*20/100));
    }
    else if(bill > 50 && bill < 200 ){
        allTips.push(bill*15/100);
        allTotal.push(bill+(bill*15/100));
    } else {
        allTips.push(bill*10/100);
        allTotal.push(bill+(bill*10/100));
    }
}
console.log(howmuch(allPaid[0]))
console.log(howmuch(allPaid[1]))
console.log(howmuch(allPaid[2]))
console.log(allTips);
console.log(allTotal);
