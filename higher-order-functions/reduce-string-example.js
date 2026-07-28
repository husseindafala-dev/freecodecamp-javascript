const words = ["JavaScript", "is", "powerful"];

const sentence = word.reduce(function (acc, word){
	return acc + "" + word;
});

console.log(sentence);
