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

const spacing = 5;

const container = document.getElementById('container');

const shuffleBtn = document.getElementById('shuffle');

function createCard({number, suit, suit_idx, number_idx}) {
	const cardEl = document.createElement('div');

	cardEl.classList.add('card');

	if(suit.color=== 'red') {
		cardEl.classList.add('red');
	}

	cardEl.style.top = suit_idx * 175 + spacing * suit_idx + 'px';
	cardEl.style.left = number_idx * 120 + spacing * number_idx + 'px';

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

suits.forEach((suit, suit_idx) => {
	numbers.forEach((number, number_idx)=> {
		const cardDetails = {
			number,
			suit,
			suit_idx,
			number_idx,
		};
		createCard(cardDetails);
	});
});

shuffleBtn.addEventListener('click', () => {
	const cards = document.querySelectorAll('.card');

	cards.forEach((card, idx) => {
		setTimeout(() => {
		card.style.top = '50%';
		card.style.left = '50%';
		}, idx * 200);
	})
})