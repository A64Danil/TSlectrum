import Currency from "./source.js";
const myCurrency = new Currency(200.44);
console.log(myCurrency);
console.log(myCurrency.dollars());
// // console.log(myCurrency.cents());
// console.log('-------------------');
// const item = myCurrency.add(10);
// console.log(item.dollars());
// console.log(myCurrency.format(true));
// // console.log(myCurrency.toString());
// // console.log(myCurrency.toJSON());
// console.log(myCurrency.dollars());
//
// console.log('-------------------');
// console.log(item.add(23));
// console.log(item.dollars());
// console.log(myCurrency.add(20) === myCurrency); // false даёт
console.log('distribute', myCurrency.distribute(15));
console.log('divide', myCurrency.divide(10));
console.log('subtract', myCurrency.subtract(10));
console.log('multipl', myCurrency.multiply(10));
