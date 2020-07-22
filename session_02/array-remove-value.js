/** Examples of removing an element from an array */
var arr = [1, 2, 3, 4];
/* pop() removes an element from the end of the array */
arr.pop(); // array is now [1, 2, 3]
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log("--------------------");
/* shift() removes an element from the start of an array */
arr.shift(); // array is now [2, 3]
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
