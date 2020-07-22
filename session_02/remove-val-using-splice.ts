/** splice() method lets you remove a range of values 
 *      and returns an array with removed elemetns,
 *          but it doesn't alter the original array
*/

 let pets: string[] = ["dog", "cat", "fish", "parrot", "budgie", "guniea pig"];

 /* It takes in an index at which to start 
        and a number of how many elements we want to remove
            It returns an array containing the removed elements
 */
 let removedElements = pets.splice(2, 3); // removing 3 items starting at index 2
 for (let i = 0; i < removedElements.length; i++) {    // returns [fish, parrot, budgie]
     console.log(removedElements[i]);
 }
