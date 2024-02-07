//Object
let myConsole = {

}

myConsole = {
	name: 'Alex',
	age: 35,
}

// window.alert(myConsole.age);
// window.alert(myConsole.name);

let man = {
	name: 'Alex',
	age: 34,
}

window.console.log(man.age);
man.age = 41;
window.console.log(man.age);
window.console.table(man);



const laptop1 = {
	name: 'zenbook',
	manufacturer: 'ASUS',
	price: 1000,
}
const laptop2 = {
	name: 'macbook',
	manufacturer: {
		title: 'APPLE',
		factoriesCount: 10,
		factoryAddress: 'China, JohueLee 12',
	},
	price: 3000,
}

const moneyTransfering = {
	from: 'dimych',
	to: 'ivan',
	amount: 10,
}

window.console.table(laptop2);
window.console.table(laptop2.manufacturer);

// laptop2.manufacturer.factoryAddress.toUpperCase();
window.console.log(laptop2.manufacturer.factoryAddress.toUpperCase());
laptop2.manufacturer.factoryAddress = 'China, newAddres 15';
window.console.log(laptop2);

let room = {
	wall1: {
		hasWindow: true,
		color: 'white',
		conditioner: {
			manufacturer: 'ASUS',
			power: 220,
		},
	},
	wall2: {
		hasWindow: false,
		color: 'white',
		conditioner: null,
	},
	wall3: {
		hasWindow: false,
		color: 'white',
		conditioner: null,
	},
	wall4: {
		hasWindow: false,
		color: 'white',
		conditioner: null,
	},

}

window.console.table(room);
window.console.log(room);
window.console.log(room.wall1.conditioner.manufacturer);

//refctoring code
const vocabulary = {
	words: {
		word0: {
			original: 'Wassup',
			translation: 'Здарова',
		},
		word1: {
			original: 'Bye',
			translation: 'Пока',
		},
		word2: {
			original: 'Programmer',
			translation: 'Программист',
		},
	},
	wordCount: 3,
}


const notificationMessages = {
	start: {
		hello: 'hello man.',
	},
	result: {
		finishSuccess: 'Молодец. Хороший результат',
		finishUnsuccess: 'Молодец. Но старайся результат',
	},
}

const settings = {
	correctAnswersMinPercent: 50,
}

const result = {
	correctAnswersCount: 0,
}

alert(notificationMessages.start.hello);
const userAnswer0 = prompt(vocabulary.words.word0.original);
alert(userAnswer0 === vocabulary.words.word0.translation);
if (userAnswer0 === vocabulary.words.word0.translation) {
	result.correctAnswersCount = result.correctAnswersCount + 1;
}

const userAnswer1 = prompt(vocabulary.words.word1.original);
alert(userAnswer1 === vocabulary.words.word1.translation);
if (userAnswer1 === vocabulary.words.word1.translation) {
	result.correctAnswersCount = result.correctAnswersCount + 1;
}
const userAnswer2 = prompt(vocabulary.words.word2.original);
alert(userAnswer2 === vocabulary.words.word2.translation);
if (userAnswer2 === vocabulary.words.word2.translation) {
	result.correctAnswersCount = result.correctAnswersCount + 1;
}

const userCorrectAnswersPercent = result.correctAnswersCount / vocabulary.words.wordCount * 100;
if (userCorrectAnswersPercent > settings.correctAnswersMinPercent) {
	alert(notificationMessages.result.finishSuccess);
} else {
	alert(notificationMessages.result.finishUnsuccess);
}

console.log(result.correctAnswersCount);