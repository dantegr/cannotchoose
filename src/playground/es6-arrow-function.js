/* function square(x) {
  return x * x;
};

console.log(square(3));

//const squareArrow = (x) => {
  //return x * x;
//};

const squareArrow = (x) => x * x;


console.log(squareArrow(4));

const getFirstname1 = (name) => {
  if (name) {
    firstName = name.split(' ')[0];
    return firstName;
  } else {
    return undefined;
  }
};

const getFirstname2 = (name) => name.split(' ')[0]; */

const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((number) => this.multiplyBy * number);
  }

};

console.log(multiplier.multiply());
