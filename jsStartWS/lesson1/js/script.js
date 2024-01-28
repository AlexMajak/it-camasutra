//LESSON 1

// const word0 = 'Wassup';
// const word0Translate = 'Здарова';

// const word1 = 'Bye';
// const word1Translate = 'Пока';

// const word2 = 'Programmer';
// const word2Translate = 'Программист';

// const finishMessage = 'Молодец';

// const wodsCount = 3;

// let wordsCorrectCount = 3;

// let correctAnswersCount = 0;

// const correctAnswersMinPercent = 50;

// const finishSuccessMessage = "Молодец. Good result";
// const finishUnsuccessMessage = "Молодец. Но старайся лучше";

// let userAnswer0;
// let userAnswer1;
// let userAnswer2;
// let userCorrectPercent;
// // const userInput = window.prompt('write something');
// const BR = '<br>';

// userAnswer0 = prompt(word0);
// document.write(userAnswer0 === word0Translate, BR);
// if (userAnswer0 === word0Translate) {
// 	correctAnswersCount++;
// }

// userAnswer1 = prompt(word1);
// document.write(userAnswer1 === word1Translate, BR);
// if (userAnswer1 === word1Translate) {
// 	correctAnswersCount++;
// }

// userAnswer2 = prompt(word2);
// document.write(userAnswer2 === word2Translate, BR);
// if (userAnswer2 === word2Translate) {
// 	correctAnswersCount++;
// }

// alert(`${finishMessage} ${correctAnswersCount}`);

// userCorrectPercent = correctAnswersCount / wordsCorrectCount * 100;
// if (userCorrectPercent > correctAnswersCount) {
// 	alert(finishSuccessMessage);
// } else {
// 	alert(finishUnsuccessMessage);
// }


//LESSON2

// document.write('START', '<br>');

// if (true) {
// 	document.write('Product purchased');
// } else {
// 	document.write('Not enough money')
// }

// document.write('<br>', 'END');

// let balance = +window.prompt('Input your balance', 110);
// const productPrice = window.Number(window.prompt('Input product price', 110));

// document.write('Start', '<br>');

// if (balance >= productPrice) {
// if (productPrice <= balance) {
// 	document.write('You can buy this product');
// } else {
// 	document.write('You dont have enougth money');
// }

// if (Number.isNaN(balance) || Number.isNaN(productPrice)) {
// 	document.write('Input a number');
// } else {
// 	if (balance < productPrice) {
// 		document.write('You dont have enougth money');
// 	} else {
// 		document.write('You can buy this product');
// 	}
// }


// if (!(Number.isNaN(balance) || Number.isNaN(productPrice))) {
// 	if (balance < productPrice) {
// 		document.write('You dont have enougth money');
// 	} else {
// 		document.write('You can buy this product');
// 	}
// } else {
// 	document.write('Input a number');
// }

// document.write('<br>', 'END');


let balance = window.Number(window.prompt('Input your balance', 200));
const productPriceOne = window.Number(window.prompt('Input product price product one', 50));
const productPriceTwo = window.Number(window.prompt('Input product price product two', 60));
const productPriceThree = window.Number(window.prompt('Input product price product three', 70));

document.write('Start', '<br>');
if (Number.isNaN(balance) || Number.isNaN(productPriceOne) || Number.isNaN(productPriceTwo) || Number.isNaN(productPriceThree)) {
	document.write('Input a number');
} else {
	if (balance >= productPriceOne) {
		document.write('You buy product One', '<br>');
		document.write('Your balance ' + (balance - productPriceOne), '<br>');
	} else {
		document.write('You dont have enougth money', '<br>');
	}
	balance = balance - productPriceOne;
	if (balance >= productPriceTwo) {
		document.write('You buy product Two', '<br>');
		document.write('Your balance ' + (balance - productPriceTwo), '<br>');
	} else {
		document.write('You dont have enougth money from product Two', '<br>');
	}
	balance = balance - productPriceTwo;
	if (balance >= productPriceThree) {
		document.write('You buyproduct Three', '<br>');
		document.write('Your balance ' + (balance - productPriceThree), '<br>');
	} else {
		document.write('You dont have enougth money from product Three');
	}

}
document.write('<br>', 'END');