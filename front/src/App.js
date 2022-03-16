import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Profil from './components/Profils';
import Home from './screens/Home';
import Login from './components/Login';
import Game from './screens/Game';

const App = () => {
	const { isAuthenticated, isLoading } = useAuth0();
	// if (isLoading) {
	// 	return <div>Loading</div>;
	// }

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/game" element={<Game />} />
			</Routes>
			{/* {isAuthenticated ? : <Login />} */}
		</div>
	);
};

export default App;
