import Login from '../components/Login';
import Profils from '../components/Profils';
import { useAuth0 } from '@auth0/auth0-react';
import './styles/Home.css';
import bulb from '../assets/bulb.svg';

const Home = () => {
	const { isAuthenticated, user } = useAuth0();

	return (
		<div>
			{isAuthenticated ? <Login /> : ''}
			{/* <Profils /> */}
			{console.log('Var USER', user)}
			<div className="entete">
				<h1 className="title">
					La sécurité est une compétence professionnelle
				</h1>
				<p className="description">
					Parce que rentrer chez soi en bonne santé est important, nous
					proposons, chaque jour, un petit quizz ou une petite vidéo afin de
					vous rappeler quelques élements de sécurité de façon ludique.{' '}
				</p>
			</div>

			<div className="astuces">
				<span className="material-icons-outlined">tips_and_updates</span>
			</div>
			<div className="defi">
				Lancer le défi du jour
				<div className="launchGame">C'est parti !</div>
			</div>
		</div>
	);
};

export default Home;
