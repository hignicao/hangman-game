import { useState } from "react";
import Game from "./Game";
import Guess from "./Guess";
import Letters from "./Letters";
import words from "../utils/words";

export default function App() {
	const [start, setStart] = useState(false);
	const [won, setWon] = useState(false);
	const [lost, setLost] = useState(false);
	const [wordLetters, setWordLetters] = useState([]);
	const [wordWithoutAccent, setWordWithoutAccent] = useState([]);
	const [lettersGuessed, setLettersGuessed] = useState([]);
	const [wordGuessed, setWordGuessed] = useState("");
	const [misses, setMisses] = useState(0);
	const [hits, setHits] = useState(0);
	const word = words[Math.floor(Math.random() * words.length)];

	function startGame() {
		setStart(true);
		setWordLetters(word.split(""));
		setWordWithoutAccent(
			word
				.normalize("NFD")
				.replace(/[\u0300-\u036f]/g, "")
				.split("")
		);
		setWon(false);
		setLost(false);
		setLettersGuessed([]);
		setMisses(0);
		setHits(0);
	}

	function guessLetter(letter) {
		const elements = [];

		wordWithoutAccent.forEach((e, i) => {
			if (e === letter) {
				elements.push(wordLetters[i]);
			}
		});

		setLettersGuessed([...lettersGuessed, ...elements, letter]);
		if (!wordWithoutAccent.includes(letter)) {
			setMisses(misses + 1);
			misses === 5 ? setLost(true) : setLost(false);
		} else {
			const i = wordWithoutAccent.filter((l) => l === letter).length;
			setHits(hits + i);
			hits === wordWithoutAccent.length - 1 ? setWon(true) : setWon(false);
		}
	}

	function changedInput(e) {
		setWordGuessed(e.target.value);
	}

	function guessWord() {
		if (wordGuessed === wordLetters.join("")) {
			setWon(true);
		} else {
			setMisses(6);
			setLost(true);
		}
	}

	console.log(lettersGuessed)

	return (
		<main>
			<h1>Jogo da Forca</h1>
			<Game start={start} startGame={startGame} wordLetters={wordLetters} lettersGuessed={lettersGuessed} misses={misses} won={won} lost={lost} />
			<Letters start={start} guessLetter={guessLetter} lettersGuessed={lettersGuessed} won={won} lost={lost} />
			<Guess start={start} won={won} lost={lost} guessWord={guessWord} changedInput={changedInput} />
		</main>
	);
}
