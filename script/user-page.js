const exit = document.getElementById('exit-btn')
const containerForInfo = document.querySelectorAll('.user-main__info-block')

const loggetUser = JSON.parse(localStorage.getItem('loggedInUser'))
import { goToAuthPage } from "./functions.js"

if (exit) {
	goToAuthPage(exit)
	if (loggetUser) {
		const logUserName = loggetUser.name
		const logUserEmail = loggetUser.email
		const logUserPassword = loggetUser.password
		for (let i = 0; i < containerForInfo.length; i++) {
			const element = containerForInfo[i];
			if (i === 0) {
				element.innerHTML += `<span">${logUserName} </span>`
			} else if (i === 1) {
				element.innerHTML += `<span">${logUserEmail}</span>`
			} else if (i === 2) {
				element.innerHTML += `<span">${logUserPassword}</span>`
			} else {
				break
			}
		}

	} else {
		window.location.href = '../index.html';
	}
}

window.addEventListener('load', () => {
	const container = document.querySelector('.user-main__body');
	// Додати клас для анімації через 0.5 секунди після завантаження
	setTimeout(() => {
		container.classList.add('active');
	}, 500); // 0.5 секунди
});

