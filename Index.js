const playerName = prompt("Quel est votre nom ?");

const rightPrice = Math.ceil(Math.random() * 100);
let guessedPrice = null;

while (guessedPrice !== rightPrice) {
	guessedPrice = parseInt(prompt("Devinez le prix (entre 1 et 100) :"), 10);

	if (guessedPrice > rightPrice) {
		alert("C’est moins");
	} else if (guessedPrice < rightPrice) {
		alert("C’est plus");
	} else if (guessedPrice === rightPrice) {
		alert(`Bravo ${playerName}, tu as gagné !`);
	}
}
