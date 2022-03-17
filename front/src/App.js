import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Connexion from './screens/Connexion';

import Home from './screens/Home';


import Prevention from './screens/Prevention';
import Quizz from './screens/Quizz';
import LastPage from './screens/LastPage';

const App = () => {
	// const { isAuthenticated, isLoading } = useAuth0();
	// if (isLoading) {
	// 	return <div>Loading</div>;
	// }
	const { isAuthenticated, isLoading } = useAuth0();

	if (isLoading) {
		return <div>Loading</div>;
	}

	return isAuthenticated ? (
		<div className="App">
			<Routes>
				<Route path="/connexion" element={<Connexion />} />
				<Route path="/" element={<Home />} />
				<Route path="/game" element={<Quizz />} />
				<Route path="/preventions" element={<Prevention />} />
				<Route path="/lastpage" element={<LastPage />} />
			</Routes>
		</div>
	) : (
		<>
			<Connexion />
		</>
	);
};

export default App;
