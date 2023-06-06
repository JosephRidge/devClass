/**
 *  => OPERATORS
 * - subtract
 * - multiply
 * - division
 * - modulus
 * - addition
 *
 */

//  add delete feature

let x = 0;
let y = 0; // mutable
const z = 10; // immutable

// BODMAS
// mulitplication

function multiplyNumbers(x, y) {
  // multiply the two numbers
  let product = x * y;
  console.log("the product of", x, "by", y, "is", product);
  // return the result
  return product;
}

// division
function divisoinOperation(x, y) {
  // divide two numbers
  let value = x / y;
  console.log("the result of dividing ", x, "by", y, "is", value);
  // return divison
  return value;
}

// addition
function summationOperation(x, y) {
  // add the two elements
  let sum = x + y;
  console.log("the result of adding  ", x, "and", y, "is", sum);
  // return the result
  return sum;
}


/**
 *
 * Hi , to use this funtion make sure your first parameter is greater than the second parameter
 *  so as not bring a negative unless that the order required
 */
function subtractionOperation(x, y) {
  // subtrcating the valuers
  let result = x - y;
  console.log("the result of subtractiong  ", x, "and", y, "is", result);

  // return the result
  return result;
}

// modulus\
function checkIfIsEvenNumber(x) {
  let remainder = x % 2;
  if(remainder === 0){
   console.log("the value ", x, "is EVEN!");
  }else{
   console.log("the value ", x, "is ODD!");
  }

  return remainder;
}

// check if number is odd
function checkIfNumberIsOdd(x){
 // get modulus iof value wwith 3
 let result = x%3;
//   console log statenmnt to allow printing the values
 // return the result
}
// check check if a number is a diviosr of another 


//  testing the fucntions
//  mutplicatiob
let product = multiplyNumbers(11, 12);
console.log(product);

// division
let divisionResult = divisoinOperation(123400, 2000);
console.log(divisionResult);

// additoin
let sum = summationOperation(13,97);
console.log(sum)


console.log("------------------------------------------")
/**
 * GREATER THAN VALUE: (>)
 * - checks if value on ythe left side is greater than value on the right side
 * -return true or false 
 * 
 */
console.log("is 10 greater than 1: ",10>1);

/**
 * LESS THAN (<)
 * - chceck what os the on the left side and checks if it is greater than what is on the right side
 * - this should return a boolean vlaue of either true or false
 */

console.log("is 10 LESS than 1: ",10<1);

/**
 * LESS  THAN OR EQUAL TO (<=)
 * - check the value on the ;left  side and check if it is 
 * - less than or equall to the value on the right side 
 */

console.log("is 10 LESS than OR EQUAL TO 10: ",10<=10);
/**
 * EQUALITY copmarospn operator(===)
 * - check if value ojn left side is rqual to value on the right side
 * 
 */

console.log("is 10 equal to 10: ",10 === 10);

/**
 * NOT EQUAL TO(!=)
 * - comapres what is obn the
 *  left and what is on the
 *  right checking is they are not equal 
 * - returns true or false depeneding on equality
 */
console.log("is 10 is not equal to 1: ",10 != 1);
/**
 * NOT (!)
 * - used to negate a boolean value
 * 
 */

/**
 * NOT EQUAL TO(!=)
 * - comapres what is obn the
 *  left and what is on the
 *  right checking is they are not equal 
 * - returns true or false depeneding on equality
 */
console.log("is true ngated to false: ",!true);



console.log("------------------------------------------")


//  implement a for loop
//  creating your initializer
//  setting the maximum digit
/*
let x = 0;
let maxNumber = 10;
/**
 * for loop takes in threee values or parameters seperated by a semi colon
 * - intializer : sets the strt point of ypour loop
 * - condition : the condition allows the code block to run until the condition if false
 * - incrementior or decrementor - incrementor increases the intial value by 1 the decrementor descreases the value by 1
 * 
 
for(x=0;x<=maxNumber ;x+=2){
  // console.log("Running loop for the loop for the",x,"time")
  console.log(` Running loop for the ${x} time.`);
}

x = 0 ; // overrridedn the value of x
// do....while 

do {
  // block of statements to be run comes
  console.log("pounding garlic ",x, "time.");
  x++;
}
while(x<=maxNumber)

x =10; 
maxNumber = 20;
// while loop
while(x<maxNumber){
  console.log("pounding ginger ",x, "time.");
  x++; // increments the value of x by 1
}


 */

/*


// print hellow world on console
console.log("Hellow World!");

// variables

// immutable variable using key word const
const nameOfPerson= "RON";
// mutable variabkes using let key word 
let age = 24;
let school  = "Strathmore";
age = 76;

//  loging our variable
// console.log("NAME: ",nameOfPerson," AGE : ",age);
// console.log(`NAME : ${nameOfPerson} , AGE : ${age}`);

// types of variable
//  numbers
const year =2023;
// console.log(year);
// boolean
let isLoggedInn = true;
// console.log(isLoggedInn);
// array
let fruits  = ['apple', 'mango', 'orange','passion'];
// console.log(fruits);
// console.log(fruits[2]);

// check size of Array
console.log(fruits.length)

// object
let bottle = {
  type:"water bottle",
  color:"yellow",
  brand:"BlueBand",
  isOld:true,
  content:["Water", "Salt", "Sugar"],
  yearOfManufacture:1997
};
let bottleContent = bottle.content;
console.log(bottleContent[2])

//functions

/**
 * WHAT: Addition
 * take one variabl eand add to another variable 
 * return a result
 
function addition(){
    // variable 1 &    variable 2
    let x =10;
    let y =12;
    // addition
    let sum = x+y;
    return sum;
}

 // function -parameterized
function minus(x,y){
    // two or more values (x & y)
    let subtraction = x -y;
    return subtraction;
}
//  call the function 
let subtraction = minus(29, 45);
// console.log(subtraction);
let sum = addition();
// console.log(sum);

*/
//  loops
/**
 *  - iterations
 *  - conditional  *
 */
//  for loop

// do while loop
