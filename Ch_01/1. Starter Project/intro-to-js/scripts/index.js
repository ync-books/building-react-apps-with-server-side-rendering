var ResultContainer = document.getElementById("ResultContainer");

/* let vs. var */
// let variables are only available in the block
// if(true){
//     let letVariable = "Variable using let";
// }
// ResultContainer.innerHTML =  letVariable;
//ResultContainer.innerHTML = "Setting up the environment!";

/* Rest parameter */
// function sum(...inputs) {
//     var result = 0;
//     for(let i of inputs){
//         result += i;
//     }
//     return result;
// }
//
// function sum(input1, input2, ...remainingInputs) {
//     var result = input1 + input2;
//     for(let i of remainingInputs){
//         result += i;
//     }
//     return result;
// }
//ResultContainer.innerHTML = sum(5, 10, 5, 5);

/* Destructuring and Spread */
// let fruits = ['Apple', 'Watermelon', 'Grapes'];
// let [fruit1, fruit2, fruit3] = fruits;
// ResultContainer.innerHTML = fruit2;  // Watermelon

// skip element
// let [fruit1, , fruit2] = fruits;
// ResultContainer.innerHTML = fruit2;  // Grapes

// let [fruit1, ...OtherFruits] = fruits;
// ResultContainer.innerHTML = OtherFruits;  // Watermelon, Grapes

// Objects can be destructured
// let Fruits = {Fruit1: 'Apple', Fruit2: 'Watermelon'};
// let {Fruit1, Fruit2} = Fruits;
// ResultContainer.innerHTML = Fruit1;  // Apple

// destructuring in functions
function sum(a, b, c){
    return a+b+c;
}
let input = [5,9,6];
ResultContainer.innerHTML = sum(...input);  //20