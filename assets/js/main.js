let morseAlphabet = [
	{ letter: "1", morseCode: ".----" },
	{ letter: "2", morseCode: "..---" },
	{ letter: "3", morseCode: "...--" },
	{ letter: "4", morseCode: "....-" },
	{ letter: "5", morseCode: "....." },
	{ letter: "6", morseCode: "-...." },
	{ letter: "7", morseCode: "--..." },
	{ letter: "8", morseCode: "---.." },
	{ letter: "9", morseCode: "----." },
	{ letter: "0", morseCode: "-----" },
	{ letter: " ", morseCode: "    " },
	{ letter: "A", morseCode: ".-" },
	{ letter: "B", morseCode: "-..." },
	{ letter: "C", morseCode: "-.-." },
	{ letter: "D", morseCode: "-.." },
	{ letter: "E", morseCode: "." },
	{ letter: "F", morseCode: "..-." },
	{ letter: "G", morseCode: "--." },
	{ letter: "H", morseCode: "...." },
	{ letter: "I", morseCode: ".." },
	{ letter: "J", morseCode: ".---" },
	{ letter: "K", morseCode: "-.-" },
	{ letter: "L", morseCode: ".-.." },
	{ letter: "M", morseCode: "--" },
	{ letter: "N", morseCode: "-." },
	{ letter: "O", morseCode: "---" },
	{ letter: "P", morseCode: ".--." },
	{ letter: "Q", morseCode: "--.-" },
	{ letter: "R", morseCode: ".-." },
	{ letter: "S", morseCode: "..." },
	{ letter: "T", morseCode: "-" },
	{ letter: "U", morseCode: "..-" },
	{ letter: "V", morseCode: "...-" },
	{ letter: "W", morseCode: ".--" },
	{ letter: "X", morseCode: "-..-" },
	{ letter: "Y", morseCode: "-.--" },
	{ letter: "Z", morseCode: "--.." },
];

const btn = document.querySelector("button");
const output = document.querySelector("div");
const explanation = document.querySelector("article");

btn.addEventListener("click", () => {
	event.preventDefault();
	output.innerHTML = "";
	//userinput auslesen und in Grossbuchstaben speichern
	const userInput = document.querySelector("input").value.toUpperCase();
	//auf sonderzeichen checken - es sind nur zeichen von 0-9, A-Z und Leerzeichen erlaubt
	function checkForInvalidChars() {
		//neue Variable - alle Buchstaben/Zahlen/Leerzeichen werden durch "" ersetzt, wenn also ein sonderzeichen vorhanden waere, wuerde es stehen bleiben
		const checkedInput = userInput.replace(/[^0-9a-zA-Z\s]/g, "");
		//wenn also sonderzeichen stehen bleiben und checkedInput somit ungleich userInput ist wird ein true zurueck gegeben
		if (checkedInput !== userInput) {
			return true;
		}
	}

	if (checkForInvalidChars(userInput) == true) {
		output.innerHTML = `Unerlaubte Zeichen gefunden. Erlaubt sind nur Zahlen von 0 bis 9 und Buchstaben von A bis Z.`;
		explanation.innerHTML = "";
	} else {
		explanation.innerHTML = `<u>Explanation</u><br>`;
		//userInput in ein Array verwandeln!!!
		const userInputArray = userInput.split("");
		console.log(userInputArray);
		//fuer jedes element(buchstabe) des Arrays (userInputArray)  wird die funktion morsAlphabet.find aufgerufen
		userInputArray.forEach(buchstabe => {
			const morseAlphabetObject = morseAlphabet.find(
				morseArrayElem => morseArrayElem.letter === buchstabe,
			); //in der variable morseLetter wird jeweils ein Objekt gespeichert, dass mit einem buchstaben aus dem userInputArray uebereinstimmt
			console.log(morseAlphabetObject);

			//morsecode wird ausgegeben
			output.innerHTML += `${morseAlphabetObject.morseCode}  `;

			//beim "Leerzeichen" wird ein "/" augegeben und in der eplanation ein Zeilenumbruch
			if (morseAlphabetObject.letter == " ") {
				output.innerHTML += `${morseAlphabetObject.morseCode} / `;
				explanation.innerHTML += `<br>`;
			}
			//wenn kein 'Leerzeichen' dann wird die explanation ganz normal ausgegeben
			else {
				explanation.innerHTML += `${buchstabe}= ${morseAlphabetObject.morseCode}<br>`;
			}
		});
	}
});

//DARKMODE
const body = document.querySelector("body");
const toggleBtn = document.querySelector("img");

toggleBtn.addEventListener("click", () => body.classList.toggle("dark"));
