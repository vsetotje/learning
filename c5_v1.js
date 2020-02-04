// Coding challenge 5 Final using function
var johnCalc = {
    paid: [124,48,268,180,42],
    tips: [],
    total: [],
    calcTips: function()
    {
        var pers;
        for (var i = 0; i < johnCalc.paid.length; i++){
            if (johnCalc.paid[i] < 50) {
                pers = 0.20;
            } else if (johnCalc.paid[i] > 50 && johnCalc.paid[i] < 200) {
                pers = 0.15;
            } else {
                pers = 0.1;
            }
            johnCalc.tips[i] = johnCalc.paid[i] * pers;
            johnCalc.total[i] = johnCalc.paid[i] + johnCalc.paid[i] * pers;
        };
        
        
    }
}

johnCalc.calcTips();
console.log(johnCalc);
var markCalc = {
    paid: [77,375,110,45],
    tips: [],
    total: [],
    calcTips: function()
    {
        var pers;
        for (var i = 0; i < markCalc.paid.length; i++){
            if (markCalc.paid[i] < 100) {
                pers = 0.20;
            } else if (markCalc.paid[i] > 100 && markCalc.paid[i] < 300) {
                pers = 0.10;
            } else {
                pers = 0.25;
            }
            markCalc.tips[i] = markCalc.paid[i] * pers;
            markCalc.total[i] = markCalc.paid[i] + markCalc.paid[i] * pers;
        }
    }
}
markCalc.calcTips();
console.log(markCalc);
//doing the last part the simpler way

var markTipTotal = 0;

for (var i = 0; i < markCalc.tips.length; i++)
    {
    markTipTotal = markTipTotal + markCalc.tips[i];
    };
console.log(markTipTotal/markCalc.tips.length);

var johnTipTotal = 0;

for (var i = 0; i < johnCalc.tips.length; i++)
    {
    johnTipTotal = johnTipTotal + johnCalc.tips[i];
    };
console.log(johnTipTotal/johnCalc.tips.length);

if (johnTipTotal > markTipTotal){
    console.log('John tips on average more than Mark');
} else {
    console.log('Mark tips on average more than John');
};
// doing last part with function

function calcAV(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++)
    {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}
var avj = calcAV(johnCalc.tips);
console.log(avj);
var avm = calcAV(markCalc.tips);
console.log(avm);
if (avj > avm){
    console.log('John tips on average more than Mark');
} else {
    console.log('Mark tips on average more than John');
};