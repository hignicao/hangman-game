export default function Guess({start, won, lost}) {
	const cond = !start || won || lost;
	return (
		<div className="guess">
			<label htmlFor="guess">Já sei a palavra!</label>
			<input disabled={cond} type="text" id="guess" />
			<button disabled={cond} >Chutar</button>
		</div>
	);
}
