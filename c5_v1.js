// Coding challenge 5 Final using function
var johnCalc = {
    paid: [124,48,268,180,42],
    tips: [],
    total: [],
    jSum: 0,
    jSumAv: 0,
    calcTips: function()
    {
        var perc;
        for (var i = 0; i < johnCalc.paid.length; i++){
            if (johnCalc.paid[i] < 50) {
                perc = 0.20;
            } else if (johnCalc.paid[i] > 50 && johnCalc.paid[i] < 200) {
                perc = 0.15;
            } else {
                perc = 0.1;
            }
            johnCalc.tips[i] = johnCalc.paid[i] * perc;
            johnCalc.total[i] = johnCalc.paid[i] + johnCalc.paid[i] * perc;
            // just a test to make the av calculation within the main function and not ouside.
            //Here we sum tips
            this.jSum = this.jSum + this.tips[i];
        };
        //Here we calculate an av number
        this.jSumAv = this.jSum / johnCalc.tips.length;
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
        var perc;
        for (var i = 0; i < markCalc.paid.length; i++){
            if (markCalc.paid[i] < 100) {
                perc = 0.20;
            } else if (markCalc.paid[i] > 100 && markCalc.paid[i] < 300) {
                perc = 0.10;
            } else {
                perc = 0.25;
            }
            markCalc.tips[i] = markCalc.paid[i] * perc;
            markCalc.total[i] = markCalc.paid[i] + markCalc.paid[i] * perc;
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

// whole array as an argument for the function
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