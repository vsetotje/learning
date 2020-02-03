// Coding challenge 5 Final
var allPaidJ = [124,48,268,180,42];
var allTipsJ = new Array();
var allTotalJ = new Array();
for (var i = 0; i < allPaidJ.length; i++)
{
    if (allPaidJ[i] <= 50){
        allTipsJ.push(allPaidJ[i]*20/100);
        allTotalJ.push(allPaidJ[i]+(allPaidJ[i]*20/100));
    }
    else if(allPaidJ[i] > 50 && allPaidJ[i] < 200 ){
        allTipsJ.push(allPaidJ[i]*15/100);
        allTotalJ.push(allPaidJ[i]+(allPaidJ[i]*15/100));
    } else {
        allTipsJ.push(allPaidJ[i]*10/100);
        allTotalJ.push(allPaidJ[i]+(allPaidJ[i]*10/100));
    }
}
//Just to test the output
/*
for (var i=0; i < allTipsJ.length; i++){
    console.log(allTipsJ[i]);
}
for (var i=0; i < allTotalJ.length; i++){
    console.log(allTotalJ[i]);
}
*/
var allPaidM = [77,375,110,45];
var allTipsM = new Array();
var allTotalM = new Array();
for (var i = 0; i < allPaidM.length; i++)
{
    if (allPaidM[i] <= 100){
        allTipsM.push(allPaidM[i]*20/100);
        allTotalM.push(allPaidM[i]+(allPaidM[i]*20/100));
    }
    else if(allPaidM[i] > 100 && allPaidM[i] < 300 ){
        allTipsM.push(allPaidM[i]*10/100);
        allTotalM.push(allPaidJ[i]+(allPaidM[i]*10/100));
    } else {
        allTipsM.push(allPaidM[i]*25/100);
        allTotalM.push(allPaidM[i]+(allPaidM[i]*25/100));
    }
}
//Just to test the output
/*
for (var i=0; i < allTipsM.length; i++){
    console.log(allTipsM[i]);
}
for (var i=0; i < allTotalM.length; i++){
    console.log(allTotalM[i]);
}
*/
var avTipsJ = 0;
for (i = 0; i < allTipsJ.length; i++){
    avTipsJ = avTipsJ + allTipsJ[i];
}
avTipsJ = avTipsJ/allTipsJ.length;
console.log(avTipsJ);

var avTipsM = 0;
for (i = 0; i < allTipsM.length; i++){
    avTipsM = avTipsM + allTipsM[i];
}
avTipsM = avTipsM/allTipsM.length;

console.log(avTipsM);

if (avTipsJ > avTipsM){
    console.log('John tips on average more than Mark');
} else {
    console.log('Mark tips on average more than John')
};


