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
        }
    }
}
johnCalc.calcTips();
console.log(johnCalc);