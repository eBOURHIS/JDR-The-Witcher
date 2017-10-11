document.addEventListener("DOMContentLoaded", function () {
	var gold = 50;
	qr('#play').addEventListener('click', function () {
		if (gold >= 50) {
			gold = gold - 0;
			loot();
		} else {
			alert("Vous n'avez pas assez d'or !");
		}

	});

	function charId(str) {
		var tmpChar, restr = "";
		for (var i = 0; i < str.length; i++) {
			tmpChar = String.charCodeAt(str[i]);
			if (tmpChar >= 244 && tmpChar <= 50111 || tmpChar == 32 || tmpChar == 39) {
				continue;
			} else {
				restr += str[i];
			}
		}
		return restr;
	}

	function inventaire(item, rarity) {
		var id = charId(item['nom']);

		console.log(id);

		item["number"]++;

		qr("#butin").textContent = item["nom"];
		qr("#butin").className = rarity;


		if (item["number"] <= 1) {
			qr('#inventaire').innerHTML += "<tr id='i" + id + "'>";
			qr('#i' + id).innerHTML = "";
			qr('#i' + id).innerHTML += "<td class='" + rarity + "'>" + item['nom'] + "</td>";
			qr('#i' + id).innerHTML += "<td class='" + rarity + "'>" + item['number'] +  "</td>";
			qr('#i' + id).innerHTML += "<td class='" + rarity + "'>" + item['desc'] +  "</td></tr>";
			qr('#i' + id).innerHTML += "<td class='" + rarity + "'>" + item['effet'] +  "</td></tr>";
			qr('#i' + id).innerHTML += "<td class='" + rarity + "'>" + item['classe'] +  "</td></tr>";
		} else {
			qr('#i' + id).innerHTML = "";
			qr('#i' + id).innerHTML += "<td class='" + rarity + "'>" + item['nom'] + "</td>";
			qr('#i' + id).innerHTML += "<td class='" + rarity + "'>" + item['number'] + "</td>";
			qr('#i' + id).innerHTML += "<td class='" + rarity + "'>" + item['desc'] + "</td></tr>";
			qr('#i' + id).innerHTML += "<td class='" + rarity + "'>" + item['effet'] + "</td></tr>";
			qr('#i' + id).innerHTML += "<td class='" + rarity + "'>" + item['classe'] + "</td></tr>";

		}

	}

	function loot() {
		var uncommonSound = new Audio('../musique/sound.wav');

		var n = Math.floor((Math.random() * (1000 - 1) + 1)), tmpRarity;
		console.log(n);

		qr('#count').textContent = parseInt(qr('#count').textContent) + 1;

		if (n == 1) { //Mythique 0.1% - 1
			tmpRarity = "mythique";
		} else if (n >= 2 && n <= 4) { // Légendaire 0.3% - 3
			tmpRarity = "legendaire";
		} else if (n >= 5 && n <= 14) { // Épique 1% - 10
			tmpRarity = 'epique';
		} else if (n >= 15 && n <= 64) { // Rare 5% - 50
			tmpRarity = 'rare';
		} else if (n >= 65 && n <= 214) { // Peu commun 15% - 150
			tmpRarity = 'peuCommun';
			//uncommonSound.play();
		} else if (n >= 215 && n <= 1000) { // Commun 78.5% - 525
			tmpRarity = 'commun';
		}
		inventaire(stuff[tmpRarity].rand(), tmpRarity);
	}
});
