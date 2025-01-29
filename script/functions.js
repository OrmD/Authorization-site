// Експорт елемента для виведення помилок
export const errorBlock = document.querySelector('.error-block');

/**
 * Перевіряє валідність поля, враховуючи мінімальну довжину та формат (для email).
 * Показує повідомлення про помилку, якщо перевірка не пройдена.
 */
export function validateField(field, value, fieldName, number) {
	// Перевірка мінімальної довжини
	if (value.length < number) {
		errorBlock.innerHTML = `<p>Введіть у поле ${fieldName}, ${number} або більше символів</p>`;
		errorBlock.classList.add('anim'); // Додаємо клас анімації для блоку з помилкою
		field.parentElement.classList.add('error-input'); // Позначаємо поле як помилкове
		console.log(`Недостатня кількість символів у полі ${field.getAttribute('name')}`);
		return false;
	}

	// Перевірка формату email, якщо перевіряється email
	if (fieldName === 'email') {
		const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		if (!emailPattern.test(value)) {
			errorBlock.innerHTML = '<p>Невірний формат Email.</p>';
			errorBlock.classList.add('anim'); // Анімація для повідомлення про помилку
			field.parentElement.classList.add('error-input'); // Додаємо помилковий стиль полю
			console.log(`Невірний формат Email у полі ${field.getAttribute('name')}`);
			return false;
		}
	}
	return true; // Якщо перевірки пройдені, повертаємо true
}

/**
 * Видаляє стилі помилки для поля після кліку на нього.
 * Видаляє повідомлення про помилку.
 */
export function addClassErrorForInput(errorBlock) {
	document.addEventListener('click', (event) => {
		const elem = event.target; // Елемент, на який клікнули
		const parentElem = elem.parentElement; // Його батьківський елемент
		if (elem && parentElem.classList.contains('error-input')) {
			parentElem.classList.remove('error-input'); // Видаляємо клас помилки
			errorBlock.classList.remove('anim'); // Прибираємо анімацію помилки
		}
	});
}

// Експорт елементів для роботи з функцією зміни видимості пароля
export const block = document.querySelector('.block-svg');
export const eye = document.getElementById('eye');

/**
 * Перемикає видимість пароля (відображення текстом чи приховування).
 * Змінює відповідну іконку.
 */
export function visibilityPassword(block, passInput, icon) {
	block.onclick = function () {
		// Перемикаємо тип поля між 'password' і 'text'
		if (passInput.getAttribute('type') === 'password') {
			passInput.setAttribute('type', 'text');
			icon.src = '../image-file/SVG/eye.svg'; // Змінюємо іконку на "відкрите око"
		} else {
			passInput.setAttribute('type', 'password');
			icon.src = '../image-file/SVG/eye-off.svg'; // Змінюємо іконку на "закрите око"
		}
	};
}

/**
 * Видаляє інформацію про користувача та перенаправляє на сторінку авторизації.
 */
export function goToAuthPage(btn) {
	btn.addEventListener('click', () => {
		localStorage.removeItem('loggedInUser'); // Видаляємо збереженого користувача
		let baseURL;
		if (window.location.hostname.includes('github.io')) {
			// Якщо на GitHub Pages
			baseURL = window.location.origin + '/' + window.location.pathname.split('/')[1] + '/';
		} else {
			// Якщо не на GitHub Pages (наприклад, локальний сервер)
			baseURL = window.location.origin + '/';
		}
		window.location.href = baseURL + 'index.html';
	});
}
