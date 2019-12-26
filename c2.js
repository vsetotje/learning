var t1g1,t1g2,t1g3,t2g1,t2g2,t2g3,t3g1,t3g2,t3g3,t1a,t2a,t3a,bestteam;
t1g1 = 89;
t1g2 = 120;
t1g3 = 103;
t2g1 = 116;
t2g2 = 94;
t2g3 = 123;
t3g1 = 97;
t3g2 = 134;
t3g3 = 105;
t1a = (t1g1+t1g2+t1g3)/3;
console.log(t1a);
t2a = (t2g1+t2g2+t2g3)/3;
console.log(t2a);
t3a = (t3g1+t3g2+t3g3)/3;
console.log(t3a);

//if (t1a === t2a || t1a ==== t3a || t2a === t3a) {
 //   console 
 t1a = 120;
 t2a = 120;
 t3a = 120;
if (t1a > t2a && t1a > t3a) { 
    console.log('Team 1 is a winner with '+ t1a + ' average score');
} else if (t2a > t1a && t2a > t3a) { 
    console.log('Team 2 is a winner with '+ t2a + ' average score');
} else if (t3a > t1a && t3a > t2a) {
    console.log('Team 3 is a winner with '+ t3a + ' average score');
} else if (t1a === t2a && t1a > t3a){
    console.log('Team 1 and Team 2 have the same avarage '+ t1a + ' and it is bigger than Team 3');
} else if (t1a === t3a && t1a > t2a){
    console.log('Team 1 and Team 3 have the same avarage '+ t1a + ' and it is bigger than Team 2');
} else if (t2a === t3a && t2a > t1a){
    console.log('Team 2 and Team 3 have the same avarage '+ t2a + ' and it is bigger than Team 1');
} else if (t2a === t3a && t2a === t1a){
    console.log('All teams have the same avarage '+ t1a + ' . No winner!');
}
