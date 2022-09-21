export default function Guess() {
	return (
		<div className="guess">
			<label htmlFor="guess">Já sei a palavra!</label>
			<input type="text" id="guess" />
			<button>Chutar</button>
		</div>
	);
}
