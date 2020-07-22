/** splice() method lets you remove a range of values
 *      and returns an array with removed elemetns,
 *          but it doesn't alter the original array
*/
var pets = ["dog", "cat", "fish", "parrot", "budgie", "guniea pig"];
/* It takes in an index at which to start
       and a number of how many elements we want to remove
           It returns an array containing the removed elements
*/
var removedElements = pets.splice(2, 3); // removing 3 items starting at index 2
for (var i = 0; i < removedElements.length; i++) { //original array not changed
    console.log(removedElements[i]);
}
