const numbers = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];

const suits = [
	{
		icon: '♥',
		color: 'red',
	},{
		icon: '♠',
		color: 'black',
	},{
		icon: '♣',
		color: 'red',
	},{
		icon: '♦',
		color: 'black',
	}
];

const container = document.getElementById('container');

function createCard(number, suit) {
	const cardEl = document.createElement('div');

	cardEl.classList.add('card');

	if(suit.color=== 'red') {
		cardEl.classList.add('red');
	}

	cardEl.innerHTML = `
	
		<span class="number top">
			${number}
		</span>
		<p class="suit">
			${suit.icon}
		</p>
		<span class="number bottom">
			${number}
		</span>
	`;

	container.appendChild(cardEl);
}

// Creating the cards

suits.forEach(suit => {
	numbers.forEach(number=> {
		createCard(number,suit);
	})
})