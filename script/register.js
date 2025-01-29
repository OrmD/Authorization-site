const name = document.getElementById('inputName')
const email = document.getElementById('inputEmail')
const password = document.getElementById('inputPassword')
const registBtn = document.getElementById('reg-btn')
const authBtn = document.getElementById('auth-button')
const errorBlock = document.querySelector('.error-block')
const succesBlock = document.querySelector('.succes-block')

import {
	visibilityPassword,
	validateField,
	addClassErrorForInput,
	goToAuthPage,
	eye,
	block
} from "./functions.js"

visibilityPassword(block, password, eye)
addClassErrorForInput(errorBlock)
if (authBtn) {
	goToAuthPage(authBtn);
}

let users = {}

// Функція для створення нового користувача
export function User(name, email, password) {
	this.name = name,
		this.email = email,
		this.password = password
}

// Функція для створення унікального ID
function createId(users) {
	return Object.keys(users).length
}

registBtn.addEventListener('click', () => {

	const nameUser = name.value.trim();
	const emailUser = email.value.trim();
	const passwordUser = password.value.trim();
	if (
		validateField(name, nameUser, 'імені', 1) &&
		validateField(email, emailUser, 'email', 5) &&
		validateField(password, passwordUser, 'пароля', 8)
	) {
		console.log('Усі поля заповнені!');
		const user = new User(nameUser, emailUser, passwordUser)

		const userId = 'user' + createId(users)
		users[userId] = user
		console.log(users);
		localStorage.setItem('users', JSON.stringify(users));
		succesBlock.classList.add('anim')
		setTimeout(() => {
			succesBlock.classList.remove('anim')
			name.value = ""
			email.value = ""
			password.value = ""
		}, 2000);
	}
})

// Завантаження користувачів з localStorage
const storedUsers = JSON.parse(localStorage.getItem('users')) || {};
Object.assign(users, storedUsers);

window.addEventListener('load', () => {
	const container = document.querySelector('.registration__conteiner');
	// Додати клас для анімації через 0.5 секунди після завантаження
	setTimeout(() => {
		container.classList.add('active');
	}, 0); // 0.5 секунди
});
