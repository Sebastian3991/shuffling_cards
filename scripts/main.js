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

let positions = [];

const spacing = 5;

const container = document.getElementById('container');

const shuffleBtn = document.getElementById('shuffle');

function createCard({number, suit, suit_idx, number_idx}) {
	const cardEl = document.createElement('div');

	cardEl.classList.add('card');

	if(suit.color=== 'red') {
		cardEl.classList.add('red');
	}

	const TOP = suit_idx * 175 + spacing * suit_idx + 'px';

	const LEFT = number_idx * 120 + spacing * number_idx + 'px';

	positions.push([TOP, LEFT]);

	cardEl.style.top = TOP;
	cardEl.style.left = LEFT;

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
		card.style.zIndex = 52-idx; 
		card.style.top = '50%';
		card.style.left = '50%';
		}, idx * 20);
	});

	setTimeout(shuffleBack, 52*20 + 500);
});

function shuffleBack() {
	//shuffle the positions
	shufflePositions();


	const cards = document.querySelectorAll('.card');

	cards.forEach((card, idx) => {
		setTimeout(() => {
		card.style.top = positions[idx][0];
		card.style.left = positions[idx][1];
		}, idx * 20);
	});

}

function shufflePositions() {
	for(let i=0; i<1000; i++) {
		const rand1 = Math.floor(Math.random()*52);
		const rand2 = Math.floor(Math.random()*52);
		
		const temp = positions[rand1]
		positions[rand1] = positions[rand2];
		positions[rand2] = temp;
	}
}