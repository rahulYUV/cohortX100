// // Array handbook

// // Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// // concat(), forEach(), map(), filter(), reduce(), find(), sort()



let papa=["bindeshwari prasad", 48,true,'2 lpa'];
let mummy =["everthing"];

let child= Array('rahul');
console.log(child);
// let fruits = new Array("apple ", "mango ","litchi","banana");
// console.log(fruits);
// for(let i =0;i<fruits.length;i++){
//     console.log(fruits[i]);

// // }
// fruits.forEach(function(e){
//     console.log(e)
// });

let fruits=[];
console.log(fruits)
fruits.push("banana")
console.log(fruits);
fruits.pop();
console.log(fruits);

// const players=["rohitm", "sikhar","virat", "klRahul","kuldeep"];
// players.shift();
// players.shift();
// players.shift();
// players.unshift('abc');

// console.log(players)


 



let first = [1,2,3];
let second =[2,3,4,5];
console.log(first.concat(second))
first.forEach(function(e){
    // console.log(e )
})
let testing = [1,2,4];
let tt = testing.pop();
console.log(tt); //4
let start = testing.shift();
console.log(start); //1
console.log(testing); // 2

testing.unshift(22);
console.log(testing);









// // Run each function to see the output, play and learn by doing.

// // push()
// function pushExample(arr, element) {
//     console.log("Original Array:", arr);
  
//     arr.push(element);
//     console.log("After push:", arr);
//   }
//   pushExample([1, 2, 3], 4);
  
//   // pop()
//   function popExample(arr) {
//     console.log("Original Array:", arr);
  
//     arr.pop();
//     console.log("After pop:", arr);
//   }
//   popExample([1, 2, 3]);
  
//   // shift()
//   function shiftExample(arr) {
//     console.log("Original Array:", arr);
  
//     arr.shift();
//     console.log("After shift:", arr);
//   }
//   shiftExample([1, 2, 3]);
  
//   // unshift()
//   function unshiftExample(arr, element) {
//     console.log("Original Array:", arr);
  
//     arr.unshift(element);
//     console.log("After unshift:", arr);
//   }
//   unshiftExample([1, 2, 3], 0);
  
//   // concat()
//   function concatExample(arr1, arr2) {
//     console.log("Original Arrays:", arr1, arr2);
  
//     let arr3 = arr1.concat(arr2);
//     console.log("After concat:", arr3);
//   }
//   concatExample([1, 2, 3], [4, 5, 6]);
  
//   // forEach()
//   function forEachExample(arr) {
//     console.log("Original Array:", arr);
  
//     arr.forEach(function(item, index) {
//       console.log(item, index);
//     });
//   }
//   forEachExample([1, 2, 3]);
  
//   // map()
//   function mapExample(arr) {
//     console.log("Original Array:", arr);
  
//     let newArr = arr.map(function(item) {
//       return item * 2;
//     });
//     console.log("After map:", newArr);
//   }
//   mapExample([1, 2, 3]);
  
//   // filter()
//   function filterExample(arr) {
//     console.log("Original Array:", arr);
  
//     let newArr = arr.filter(function(item) {
//       return item > 3;
//     });
//     console.log("After filter:", newArr);
//   }
//   filterExample([1, 2, 3, 4, 5]);
  
//   // find()
//   function findExample(arr) {
//     console.log("Original Array:", arr);
  
//     let found = arr.find(function(item) {
//       return item > 3;
//     });
//     console.log("After find:", found);
//   }
//   findExample([1, 2, 3, 4, 5]);
  
//   // sort()
//   function sortExample(arr) {
//     console.log("Original Array:", arr);
  
//     arr.sort(function(a, b) {
//       return a - b;
//     });
//     console.log("After sort:", arr);
//   }
//   sortExample([5, 2, 3, 4, 1]);
  