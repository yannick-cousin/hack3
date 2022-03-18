import './App.css';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useState, useEffect } from 'react';
import Connexion from './screens/Connexion';
import Game from './screens/Game';
import Result from './components/Result';
import Home from './screens/Home';
import Prevention from './screens/Prevention';
import Quizz from './screens/Quizz';
import LastPage from './screens/LastPage';

const App = () => {
	const [datas, setDatas] = useState([]);
	const [points, setPoints] = useState([]);
	const [id, setId] = useState(1);
	const [isManager, setIsManager] = useState([]);
	const { isAuthenticated, isLoading } = useAuth0();

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_BACK}/user/1`)
			.then((res) => res.data)
			.then((res) => console.log('points', res) || setDatas(res));
	}, []);

	useEffect(() => {
		setPoints(datas.points);
		setId(datas.id);
		setIsManager(datas.manager);
	}, [datas]);

	if (isLoading) {
		return <div>Loading</div>;
	}

	console.log(datas.firstname);

	return isAuthenticated ? (
		<div className="App">
			<Routes>
				<Route path="/connexion" element={<Connexion />} />
				<Route
					path="/"
					element={<Home isManager={isManager} firstname={datas.firstname} />}
				/>
				<Route path="/quizz" element={<Quizz firstname={datas.firstname} />} />
				<Route
					path="/preventions"
					element={<Prevention firstname={datas.firstname} />}
				/>
				<Route
					path="/lastpage"
					element={
						<LastPage
							isManager={isManager}
							points={points}
							firstname={datas.firstname}
						/>
					}
				/>
				<Route path="/game" element={<Game firstname={datas.firstname} />} />
				<Route
					path="/result"
					element={<Result firstname={datas.firstname} />}
				/>
			</Routes>
		</div>
	) : (
		<>
			<Connexion />
		</>
	);
};

export default App;
