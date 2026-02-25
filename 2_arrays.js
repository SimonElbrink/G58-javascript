
let numbers = [1, 2, 3, 4, 5];

console.log(numbers[2]); // Output: 3
console.log(numbers[20]); // Output: Undefined

numbers[1] = 10;
console.log(numbers); // Output: [1, 10, 3, 4, 5]

numbers.push(6, 7); // adding to array
console.log(numbers); // Output: [1, 10, 3, 4, 5, 6, 7]

let lastElement = numbers.pop();
console.log(lastElement); // Output: 7
console.log(numbers); // Output: [1, 10, 3, 4, 5, 6]



for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

console.log("#######")

numbers.forEach((number) => {
  console.log(number);
});


let evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // Output: [10, 4, 6]



let squaredNumbers = numbers.map((number) => number * number);
console.log(squaredNumbers); // Output: [1, 100, 9, 16, 25, 36]


// Output: [1, 10, 3, 4, 5, 6]
let sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // Output: 29


/*
 sort() sorts the elements of an array. 
 Note that by default, sort() converts elements to strings and compares their UTF-16 code unit values. 
 For numerical sorting, you need to provide a comparison function.
 */
console.log(numbers.sort()); // Output: [1, 10, 3, 4, 5, 6]
console.log(numbers.reverse());


let fruits = ["apple", "banana", "orange", "grape"];
// The first parameter is the index where you want to start making changes.
// The second parameter is the number of elements to remove (in this case, 0 means no removal).
// Subsequent parameters are the elements to add.
fruits.splice(2, 0, "kiwi");

console.log(fruits); 
// Output: ['apple', 'banana', 'kiwi', 'orange', 'grape']

let lastIndexOfBanana = fruits.lastIndexOf("banana");
console.log(lastIndexOfBanana); // Output: 1

// Removing 'banana' using splice
let bananaMoved= fruits.toSpliced(lastIndexOfBanana, 1);
console.log(bananaMove); // Output: ['apple', 'kiwi', 'orange', 'grape']
