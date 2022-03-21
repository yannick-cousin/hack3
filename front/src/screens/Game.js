import Quizz from './Quizz';
import ViewVideo from '../components/ViewVideo.js';
import { useState, useEffect } from 'react';

const Game = (props) => {
	const [typeGame, setTypeGame] = useState();

	useEffect(() => {
		setTypeGame(Math.floor(Math.random() * 2));
	}, []);

	//console.log(typeGame)

	return (
		<div>
			{typeGame === 0 && (
				<div>
					<Quizz
						firstname={props.firstname}
						setIncrementPoints={props.setIncrementPoints}
						incrementPoints={props.incrementPoints}
					/>
				</div>
			)}
			{typeGame === 1 && (
				<div>
					<ViewVideo
						firstname={props.firstname}
						setIncrementPoints={props.setIncrementPoints}
						incrementPoints={props.incrementPoints}
					/>
				</div>
			)}
		</div>
	);
};
export default Game;
