function statsFinder(array) {
let = total = 0;
for(let i = 0; i<array.lenghth; i++){
    total += array[i];

}
let average = total / array.lenghth;
return average
}

console.log(statsFinder([500, 400, 400, 375, 300, 350, 325, 300]));


module.exports = statsFinder;

for(let i = 0; i < 10; i++){
    console.log(i);
}
