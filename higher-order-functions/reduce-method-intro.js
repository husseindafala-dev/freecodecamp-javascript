// Using the for loop for addition in an array

const numbers = [1, 2, 3, 4];

let total = 0;

for (let i = 0; i < numbers.length; i++) {
	total += numbers[i];
}

console.log(total);




/* reduce() = combine many - one
 * accumulator = your storage
 * currentValue = item you're processing now
 * return = updated storage
 */


// Using reduce ()

const numberz = [1, 2, 3, 4, 5];

const totals = numberz.reduce(function (acc, num){
	return acc + num;
}, 0);

console.log(total);
