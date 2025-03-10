//Solve these problems:

//#1 Create a one line function that adds adds two parameters

const sums = (a,b) => a+b;

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3)
 //answer is 13

//Currying: What does the last line return?
const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)

//answer is 31


//Currying: What does the last line return?
const sum1 = (a, b) => a + b
const curriedSum1 = (a) => (b) => a + b
const add5 = curriedSum1(5)
add5(12)
//answer 17



//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add6 = (num) => num + 5;
compose(add1, add6)(10)
//answer is 16