
const word0 = 'Wassup';
const word0Translate = 'Здарова';

const word1 = 'Bye';
const word1Translate = 'Пока';

const word2 = 'Programmer';
const word2Translate = 'Программист';

const finishMessage = 'Молодец';

const wodsCount = 3;

let wordsCorrectCount = 3;

let correctAnswersCount = 0;

const correctAnswersMinPercent = 50;

const finishSuccessMessage = "Молодец. Good result";
const finishUnsuccessMessage = "Молодец. Но старайся лучше";

let userAnswer0;
let userAnswer1;
let userAnswer2;
let userCorrectPercent;

userAnswer0 = prompt(word0);
alert(userAnswer0 === word0Translate);
if (userAnswer0 === word0Translate) {
	correctAnswersCount++;
}

userAnswer1 = prompt(word1);
alert(userAnswer1 === word1Translate);
if (userAnswer1 === word1Translate) {
	correctAnswersCount++;
}

userAnswer2 = prompt(word2);
alert(userAnswer2 === word2Translate);
if (userAnswer2 === word2Translate) {
	correctAnswersCount++;
}

alert(`${finishMessage} ${correctAnswersCount}`);

userCorrectPercent = correctAnswersCount / wordsCorrectCount * 100;
if (userCorrectPercent > correctAnswersCount) {
	alert(finishSuccessMessage);
} else {
	alert(finishUnsuccessMessage);
}