//loop
// document.write('a', '<br>');
// document.write('a', '<br>');
// document.write('a', '<br>');
//исходные данные
// const repeatCount = window.prompt('Введите число от 1 до 5', 5);
// if (repeatCount <= 0 || repeatCount > 5) {
// 	alert('Введите число от 1 до 5');
// } else {
// 	//инициализация стартового значения
// 	let index = 1;
// 	//проверка
// 	if (index <= repeatCount) {
// 		//целевое действие
// 		document.write('a1', '<br>');
// 	} else {
// 		document.write('The end');
// 	}

// 	//инкрементируем индекс
// 	index = 2;
// 	if (index <= repeatCount) {
// 		document.write('a2', '<br>');
// 	} else {
// 		document.write('The end');
// 	}

// 	index = 3;
// 	if (index <= repeatCount) {
// 		document.write('a3', '<br>');
// 	} else {
// 		document.write('The end');
// 	}

// 	index = 4;
// 	if (index <= repeatCount) {
// 		document.write('a4', '<br>');
// 	} else {
// 		document.write('The end');
// 	}

// 	index = 5;
// 	if (index <= repeatCount) {
// 		document.write('a5', '<br>');
// 	} else {
// 		document.write('The end');
// 	}
// }


// index = window.prompt('Введите число от 1 до 5', 5);
// if (index <= 5 || index > 0) {
// 	if (index <= repeatCount) {

// 	} else {
// 		document.write('The end');
// 	}
// } else {
// 	alert('Введите число от 1 до 5')
// }


//исходные данные
// const repeatCount = window.prompt('Введите число от 1 до 10', 10);
// if (repeatCount < 1 || repeatCount > 10) {
// 	alert('Введите число от 1 до 10');
// } else {
// 	for (let index = 1; index <= repeatCount; index++) {
// 		document.write('a', '<br>');
// 	}
// }

let grades = [5, 4, 3, 5, 4, 5, 4, 3, 5, 4];
// document.write(grades[0], '<br>');
// document.write(grades[1], '<br>');
// document.write(grades[2], '<br>');
// document.write(grades[3], '<br>');
// document.write(grades[4], '<br>');

for (let index = 0; index < grades.length; index++) {
	const element = grades[index];
	document.write(element, '<br>');
}

//Массив названий книг в библиотеке
let book1 = 'Война и мир';
let book2 = 'Мастер и Маргарита';
let book3 = 'Преступление и наказание';
//console.log(book2); мастер и маргарита
let books = ['Война и мир', 'Мастер и Маргарита', 'Преступление и наказание'];
for (let i = 0; i < books.length; i++) {
	document.write(books[i], '<br>');
}

let person = [
	{
		name: 'Анна',
		surname: 'Смирнова',
		birthYear: 1990,
	},
	{
		name: 'Иван',
		surname: 'Петров',
		birthYear: 1985,
	}
]

for (let i = 0; i < person.length; i++) {
	document.write(person[i].name, '<br>');
}

let shoppingLists = [
	['молоко', 'хлеб', 'яйца'],
	['сок', 'мороженное'],
	['корм для кота', 'шампунь'],
]

// let list = shoppingLists[2];
// product = list[0];
// console.log(product)
// console.log(shoppingLists[2][0]);

//без цикла
let list = shoppingLists[0];
let product0 = list[0];
let product1 = list[1];
let product2 = list[2];

list = shoppingLists[1];
product0 = list[0];
product1 = list[1];

list = shoppingLists[2];
product0 = list[0];
product1 = list[1];

//цикл for
//extract subarrays from main array
for (let i = 0; i < shoppingLists.length; i++) {
	let list = shoppingLists[i];
	document.write('Список', i + 1, '<br>');
	document.write('______________', '<br>');
	for (let n = 0; n < list.length; n++) {
		document.write(n + 1, ' - ', list[n], '<br>');
	}
	document.write('<br>');
}

const result = {
	correctAnswersCount: 0,
}
let words = [
	{
		original: 'hi',
		translation: 'здарова',
	},
	{
		original: 'bye',
		translation: 'пока',
	},
	{
		original: 'programmer',
		translation: 'программист',
	},
	{
		original: 'laptop',
		translation: 'ноутбук',
	},
	{
		original: 'lawyer',
		translation: 'юрист',
	},
];

const mistakesAnswersArray = [];
const correctAnswersArray = [];

for (let i = 0; i < words.length; i++) {
	let userAnswer = prompt(words[i].original);
	if (userAnswer === words[i].translation) {
		result.correctAnswersCount++;

		correctAnswersArray.push(words[i].translation);
	} else {
		mistakesAnswersArray.push(words[i].translation);
	}

}

const userCorrectAnswersPercent = result.correctAnswersCount / words.length * 100;


if (userCorrectAnswersPercent > 50) {
	document.write('Вы молодец', '<br>');
	document.write("--------------------", '<br>', '<br>')
} else {
	document.write("Старайтесь лучше", '<br>')
	document.write("--------------------", '<br>')
}

document.write('Answers with mistake', '<br>');
document.write('--------------------', '<br>');
document.write(mistakesAnswersArray, '<br>', '<br>');
document.write('Correct answers', '<br>', '------------------------', '<br>');
document.write(correctAnswersArray, '<br>');

