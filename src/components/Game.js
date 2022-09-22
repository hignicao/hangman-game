export default function Game({ start, setStart, wordLetters, lettersGuessed, forca }) {
	return (
		<div className="game">
			<img src={forca} alt="Forca vazia" />
			<div className="button-word">
				<button onClick={() => setStart(true)}>Sortear Palavra</button>
				<div className={start ? "word" : "hidden"}>{wordLetters.map((l) => (lettersGuessed.includes(l) ? <span className="word-letter"> {l} </span> : <span className="word-letter"> _ </span>))}</div>
			</div>
		</div>
	);
}
