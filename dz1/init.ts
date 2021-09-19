import Currency from "./source.js";

const myCurrency = new Currency(200.44);

console.log(myCurrency)
console.log(myCurrency.dollars())
console.log(myCurrency.cents())
console.log('-------------------')
console.log(myCurrency.add(10).dollars())
console.log(myCurrency.format(true))
console.log(myCurrency.toString())
console.log(myCurrency.toJSON())
