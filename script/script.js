const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	autoplay: {
		delay: 3000,
	},
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});
const registerButton = document.getElementById('regist-btn')
const authButton = document.getElementById('auth-btn')
const password = document.getElementById('password-auth')

import {
	validateField,
	errorBlock,
	addClassErrorForInput,
	visibilityPassword,
	block,
	eye
} from "./functions.js";

addClassErrorForInput(errorBlock)
visibilityPassword(block, password, eye)

if (registerButton) {
	registerButton.addEventListener('click', () => {
		// Перехід на сторінку реєстрації
		window.location.href = 'pages/registration.html';
	});
}

// Перевірка даних з локал стора з введеними у
document.getElementById('auth-btn').addEventListener('click', function (event) {
	// Скасовуємо стандартну поведінку браузера (перезавантаження сторінки)
	event.preventDefault();
	// Ваш код для обробки кліку (наприклад, перевірка введених даних)
});
authButton.addEventListener('click', function () {
	// Отримуємо список користувачів із localStorage
	const users = JSON.parse(localStorage.getItem('users'));

	// Отримуємо значення введених даних
	const emailInput = document.getElementById('email-auth').value.trim();
	const passwordInput = document.getElementById('password-auth').value.trim();

	if (users) {
		for (let userKey in users) {
			const user = users[userKey];
			if (user.email === emailInput && user.password === passwordInput) {
				localStorage.setItem('loggedInUser', JSON.stringify(user));
				window.location.href = 'pages/user-page.html';
				break;  // Виходимо з циклу, якщо знайдений користувач
			} else {
				errorBlock.innerHTML = `<p>Користувача не знайдено. Перевірте введені дані</p>`;
				errorBlock.classList.add('anim');
			}
			if (validateField(document.getElementById('email-auth'), emailInput, 'email', 6) &&
				validateField(document.getElementById('password-auth'), passwordInput, 'пароль', 8)) {
				return true
			}
		}
	} else if (validateField(document.getElementById('email-auth'), emailInput, 'email', 6) &&
		validateField(document.getElementById('password-auth'), passwordInput, 'пароль', 8)) {
		errorBlock.classList.add('anim')
	}


});

window.addEventListener("popstate", () => {
	window.location.href = window.location.href; // Примусове перенаправлення
});

window.addEventListener('load', () => {
	const container = document.querySelector('.log-in__container');
	// Додати клас для анімації через 0.5 секунди після завантаження
	setTimeout(() => {
		container.classList.add('active');
	}, 500); // 0.5 секунди
});
