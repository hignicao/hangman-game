function Letter({ start, guessLetter, lettersGuessed, letter, k, won, lost }) {
	const cond = !start || lettersGuessed.includes(letter) || won || lost;
	return (
		<button data-identifier="letter" disabled={cond} key={k} onClick={() => guessLetter(letter)} className={cond ? "letter disabled" : "letter"}>
			{letter}
		</button>
	);
}

export default function Letters({ start, guessLetter, lettersGuessed, won, lost }) {
	const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	return (
		<div className="letters">
			{alphabet.map((l, i) => (
				<Letter start={start} guessLetter={guessLetter} lettersGuessed={lettersGuessed} letter={l} key={i} won={won} lost={lost} />
			))}
		</div>
	);
}
