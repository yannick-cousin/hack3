import './styles/ResultatTest.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Result from './Result';
import { Link } from 'react-router-dom';

const ResultatTest = (props) => {
	//const [updateUser, setUpdateUser] = useState([]);
	const [points, setPoints] = useState(0);

	console.log(points);
	console.log(props.incrementPoints);

	const calculResult = () => {
		if (props.score >= 20) {
			return (
				<div className="good">
					<div className="sousTitres">
						Excellent !
						<div className="point">Vous avez obtenu {props.score} points</div>
						<div className="paraf">
							Tu as otenu un sans faute. N'hésite pas à consulter les documents
							fournis dans l'application, dans l'onglet infos préventions.
						</div>
					</div>
				</div>
			);
		} else if (props.score < 20 && props.score >= 10) {
			return (
				<div className="moyen">
					<div className="sousTitres">
						Bon acquis
						<div className="point">Vous avez obtenu {props.score} points</div>
						<div className="paraf">
							Les connaissances sont là, il ne reste plus qu'à les approfondir.
							N'hésite pas à consulter les documents fournis dans l'application,
							dans l'onglet infos préventions.
						</div>
					</div>
				</div>
			);
		} else if (props.score < 10) {
			return (
				<div className="echec">
					<div className="sousTitres">
						Tu feras mieux la<br></br> prochaine fois...
						<div className="point">Vous avez obtenu {props.score} points</div>
						<div className="paraf">
							Ta sécurité est au coeur de nos valeurs et de nos priorités. Mieux
							t'informer est notre priorité. N'hésite pas à consulter les
							documents fournis dans l'application, dans l'onglet infos
							préventions.
						</div>
					</div>
				</div>
			);
		}
	};

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_BACK}/user/1`)
			.then((res) => setPoints(res.data.points));
	}, []);

	useEffect(() => {
		axios
			.put(`${process.env.REACT_APP_BACK}/user/1`, {
				points: points + props.score,
			})
			.then((res) => props.setIncrementPoints(points + props.score));
	}, [points]);

	return (
		<>
			<div className="">{calculResult()}</div>
			<div className="buttonresgame">
				<Link to={`/lastPage/`}>
					<button
						className="button1"
						onClick={() => props.setIncrementPoints(!props.incrementPoints)}
					>
						Page Suivante
					</button>
				</Link>
			</div>
		</>
	);
};

export default ResultatTest;
