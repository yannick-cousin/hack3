import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Game from './screens/Game';
import Home from './screens/Home';
import Quizz from './screens/Quizz'
import Login from './components/Login';
import Prevention from './screens/Prevention';
import Profil from './components/Profils';
import ResultatTest from './components/ResultatTest';

const App = () => {
	// const { isAuthenticated, isLoading } = useAuth0();
	// if (isLoading) {
	// 	return <div>Loading</div>;
	// }

	return (
		<div className="App">
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/" element={<Home />} />
				<Route path="/game" element={<Quizz />} />
				<Route path="/preventions" element={<Prevention />} />
				<Route path='/result' element={<ResultatTest/>}/>
			</Routes>
			{/* {isAuthenticated ? : <Login />} */}
		</div>
	);
};

export default App;
