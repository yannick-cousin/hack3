import { Link } from 'react-router-dom';
import './styles/Home.css';
import bulb from '../assets/bulb.png';
import Header from '../components/Header';
import logoblanc from '../assets/logoblanc.png';
import Logout from '../components/Logout'; 
import fil from '../assets/ENEDIS_FIL_CONCEPTUEL_FOND_BLANC_RVB_EXE_02.png';

const Home = () => {

	return (
		<div className="home">
			<Header />
			{/* {isAuthenticated ? <Login /> : ''} */}
			{/* <Profils /> */}
			{/* {console.log('Var USER', user)} */}
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
				<img src={bulb} alt="astuce" />
			</div>
			<div className="defi">
				Lancer le défi du jour
				<Link className="launchGame" to="/game">
					C'est parti !
				</Link>
				{/* <div className="launchGame">C'est parti !</div> */}
			</div>
			<Logout />
			<div className="basdepage">
				{/* <div className="fil">
					<img src={fil} alt="deco" />
				</div> */}
				<div className="logo">
					<img src={logoblanc} alt="ENEDIS" />
				</div>
				
			</div>
		</div>
	);
};

export default Home;
