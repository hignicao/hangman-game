function Letter({ letter, k }) {
	return (
		<button key={k} className="letter">
			{letter}
		</button>
	);
}

export default function Letters() {
	const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	return (
		<div className="letters">
			{alfabeto.map((l, i) => (
				<Letter letter={l} key={i} />
			))}
		</div>
	);
}
