//Coding challenge 4 
var Mark = {
    firstname:'Mark',
    lastname: 'Jonhson',
    height: '1.85',
    weight: '80',
    calcMBMI: function(){
        this.BMI = this.weight/(this.height*this.height);
    }
};
var John = {
    firstname:'John',
    lastname: 'Markson',
    height: '1.70',
    weight: '70',
    calcJBMI: function(){
        this.BMI = this.weight/(this.height*this.height);
    }
};
Mark.calcMBMI();
John.calcJBMI();
console.log(Mark.BMI);
console.log(John.BMI);

if (Mark.BMI > John.BMI) {
    console.log(Mark.firstname + ' ' + Mark.lastname + ' BMI = ' + Mark.BMI + ' and is bigger than ' + John.firstname + ' BMI')
} else if (Mark.BMI < John.BMI) {
    console.log(John.firstname + ' ' + John.lastname + ' BMI = ' + John.BMI + ' and is bigger than ' + Mark.firstname + ' BMI')
} else {
    console.log (Mark.firstname + ' and ' + John.firstname + ' have the same BMI')
};