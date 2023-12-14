const item = document.querySelector('#item').content.querySelector('li');
const list = document.querySelector('.list');
const result = document.querySelector('.your-result');

const response = await fetch('data.json');
const data = await response.json();

const createItem = (data) => {
	const {category, score, icon} = data;
	const newItem = item.cloneNode(true);
	newItem.classList.add(`${category.toLowerCase()}`);
	newItem.querySelector('img').src = icon;
	newItem.querySelector('.category').textContent = category;
	newItem.querySelector('.total').textContent = score;
	list.appendChild(newItem);
} 

const renderData = (data) => {
	list.innerHTML = '';
	let count = 0;
	data.forEach((it) => {createItem(it); count += it.score;});
	result.textContent = Math.round(count / data.length);
}

const getData = () => {
	renderData(data);
}
export default getData;

