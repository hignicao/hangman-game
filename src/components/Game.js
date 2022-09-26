import imageArray from "../utils/imageImports";
import styled from "styled-components";

export default function Game({ start, startGame, wordLetters, lettersGuessed, misses, won, lost }) {
	return (
		<GameDiv>
			<img src={imageArray[misses]} alt="Forca" />
			<ButtonWordDiv>
				<button onClick={startGame}>Sortear Palavra</button>
				<div className={start ? "word" : "hidden"}>
					{wordLetters.map((l, i) =>
						lettersGuessed.includes(l) || won || lost ? (
							<span key={i} className={won ? "word-letters won" : lost ? "word-letters lost" : "word-letters"}>
								{" "}
								{l}{" "}
							</span>
						) : (
							<span key={i} className="word-letters">
								{" "}
								_{" "}
							</span>
						)
					)}
				</div>
			</ButtonWordDiv>
		</GameDiv>
	);
}

const GameDiv = styled.div`
	height: 525px;
	width: 750px;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	img {
		height: 100%;
	}

	@media (max-width: 768px) {
		width: 360px;
		height: 260px;
	}
`;

const ButtonWordDiv = styled.div`
	padding-top: 40px;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-end;
	button {
		color: white;
		font-size: 16px;
		font-weight: 700;
		background-color: #239b55;
		border: none;
		padding: 15px 20px;
		border-radius: 8px;
	}

	@media (max-width: 768px) {
		padding-top: 14px;

		button {
			font-size: 14px;
			padding: 9px 12px;
		}
	}
`;
