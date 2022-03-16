import './App.css';
// import { Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Profil from './components/Profils';
import Home from './screens/Home';

const App = () => {
	const { isAuthenticated, isLoading } = useAuth0();
	// if (isLoading) {
	// 	return <div>Loading</div>;
	// }

	return (
		
		<div className="App">
			{!isAuthenticated?<Login />:<Home />}
			
			
		</div>
	
		
	)
	)
};

export default App;
