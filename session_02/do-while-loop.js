/**
 * do-while loop is similar to while loop, but
 *  it executes the code block at least once
 *      and then checks the condition
 */
/* This will only execute 9 times (from 0 to 9) */
var i = 1;
do {
    console.log("i = " + i);
    i++;
} while (i < 10);
console.log("----------------------");
/* This will execute 10 times (from 0 to */
var j = 1;
do {
    console.log("j = " + j);
    j++;
} while (j <= 10);
