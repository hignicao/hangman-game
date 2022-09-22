import { useState } from "react";
import Game from "./Game";
import Guess from "./Guess";
import Letters from "./Letters";
import words from "./words.js";
import forca0 from "../images/forca0.png";
import forca1 from "../images/forca1.png";
import forca2 from "../images/forca2.png";
import forca3 from "../images/forca3.png";
import forca4 from "../images/forca4.png";
import forca5 from "../images/forca5.png";
import forca6 from "../images/forca6.png";

export default function App() {
	const [wordLetters] = useState(words[Math.floor(Math.random() * words.length)].split(""));
	const [lettersGuessed, setLettersGuessed] = useState([]);
	const [misses, setMisses] = useState(0);
	const [start, setStart] = useState(false);
	const [forca, setForca] = useState(forca0);

	function guessLetter(letter) {
		setLettersGuessed([...lettersGuessed, letter]);
		if (!wordLetters.includes(letter)) {
			setMisses(misses + 1);

		} else {
			setMisses(misses);
		}
	}

	console.log(wordLetters);
	console.log(lettersGuessed);
	console.log(misses);

	return (
		<main>
			<Game start={start} setStart={setStart} wordLetters={wordLetters} lettersGuessed={lettersGuessed} forca={forca} />
			<Letters start={start} guessLetter={guessLetter} lettersGuessed={lettersGuessed} />
			<Guess />
		</main>
	);
}
