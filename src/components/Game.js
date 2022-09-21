import forca0 from "../images/forca0.png";
// import forca1 from '../images/forca1.png';
// import forca2 from '../images/forca2.png';
// import forca3 from '../images/forca3.png';
// import forca4 from '../images/forca4.png';
// import forca5 from '../images/forca5.png';
// import forca6 from '../images/forca6.png';

export default function Game() {
	return (
		<div className="game">
			<img src={forca0} alt="Forca vazia" />
			<button>Escolher Palavra</button>
		</div>
	);
}
