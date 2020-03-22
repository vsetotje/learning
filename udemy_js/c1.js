var JohnH, MarkH, JohnM, MarkM, BmiJ, BmiM;
JohnH = 1,9;
JohnM = 85;
MarkH = 1,85;
MarkM = 101;
BmiJ = JohnM / (JohnH * JohnH);
BmiM = MarkM / (MarkM * MarkM);
var BmiC = BmiM > BmiJ;
console.log("John's BMI is higher than Mark's?" + BmiC)
