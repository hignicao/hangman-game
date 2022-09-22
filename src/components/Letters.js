function Letter({ start, guessLetter, lettersGuessed, letter, k }) {
	return (
		<>
			{!start || lettersGuessed.includes(letter) ? (
				<button key={k} className="letter disabled">
					{letter}
				</button>
			) : (
				<button key={k} onClick={() => guessLetter(letter)} className="letter">
					{letter}
				</button>
			)}
		</>
	);
}

export default function Letters({ start, guessLetter, lettersGuessed }) {
	const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	return (
		<div className="letters">
			{alphabet.map((l, i) => (
				<Letter start={start} guessLetter={guessLetter} lettersGuessed={lettersGuessed} letter={l} key={i} />
			))}
		</div>
	);
}
