//1
const addToCart = (cart, item) => {
	return [...cart, item];
};

const cart = ['apple', 'banana'];
const newCart = addToCart(cart, 'orange');
console.log(newCart);

//2
const user = {
	name: 'Alice',
	profile: {
		settings: {
			theme: 'dark',
			notifications: true
		}
	}
};

const userClone = structuredClone(user);
userClone.profile.settings.theme = 'light';
console.log(user.profile.settings.theme);

//3
function getLogger() {
	const logs = [];

	return {
		addLog(message) {
			logs.push(message);
		},
		getLogs() {
			return [...logs]; // возврат копии массива, чтобы избежать внутреннего состояния извне
		}
	};
}

const logger = getLogger();
logger.addLog('Session started');

const logsReference = logger.getLogs();
logsReference.push('User logged in');

console.log(logger.getLogs());

/* 

Вопрос: 
Создает ли это потенциальную проблему?

Ответ: 
Да, потому что данные внутри объекта доступны для прямого изменения, 
это может привести к различным побочным эффектам

*/

//4
const objUser = {
	name: 'Alice',
	profile: {
		settings: {
			theme: 'light'
		}
	}
};

const enableDarkTheme = (objUser) => {
	const userCopy = structuredClone(objUser);

	if (userCopy.profile && userCopy.profile.settings) {
    userCopy.profile.settings.theme = 'dark';
  };

	return userCopy;
}

const updatedUser = enableDarkTheme(objUser);
console.log(updatedUser.profile.settings.theme);
console.log(objUser.profile.settings.theme);