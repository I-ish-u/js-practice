// using this array,
var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// 4. Remove "Apples" from the array.
console.log(array.splice(1,1));

// 1. Remove the Banana from the array.
console.log(array.shift());

// 2. Sort the array in order.
console.log(array.sort());

// 3. Put "Kiwi" at the end of the array.
console.log(array.push("kiwi"));




// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])

var array3=["Kiwi", "Oranges", "Blueberries"];
console.log(array.reverse());

// using this array,
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(array2[1][1])
// access "Oranges".