const button = document.querySelector('.button');

const onButtonEnter = () => {
	button.classList.add('active')
	setTimeout( () => {
		button.classList.remove('active');
	}, 
	2000
	)
}

const isEnter = (evt) => {
	if (evt.key = 'Enter') return true
}

const buttonControl = () => {
	button.addEventListener('keydown', (evt) => {if (isEnter) onButtonEnter()})
}

export default buttonControl;
