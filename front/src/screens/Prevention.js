import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Documents from '../components/Documents';
import Header from '../components/Header';
import Footer from '../components/Footer';

import folder from '../assets/dossier_blanc.png';
import logoblanc from '../assets/logoblanc.png';
import './styles/Prevention.css';

const Prevention = (props) => {
	const [documents, setDocuments] = useState([]);
	// const { isAuthenticated, user } = useAuth0();

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_BACK}/prevention/`)
			.then((response) => response.data)
			.then((data) => setDocuments(data));
	}, []);

	return (
		<>
			<Header firstname={props.firstname} />
			<div className="prevention">
				{/* {isAuthenticated ? <Login /> : ''} */}
				{/* <Profils /> */}
				{/* {console.log('Var USER', user)} */}
				<div className="entete entetePrev">
					<h1 className="title">
						La sécurité est une compétence professionnelle
					</h1>
				</div>
				<div className={props.previousPage === 1 && 'hidden'}>
					<Link className="launchGame" to="/">
						<div className="back">Retour à la page d'accueil</div>
					</Link>
				</div>
				<div className={props.previousPage === 0 && 'hidden'}>
					<Link className="launchGame" to="/lastPage">
						<div className="back">Retour à la page d'accueil</div>
					</Link>
				</div>
				<div className="folders">
					<div className="start">
						<img src={folder} width="50px" />
						<div className="blabla titresSections textButton">
							Informations prévention
						</div>
					</div>
					<div className="blabla2">
						Retrouvez des informations complémentaires concernant votre sécurité
					</div>
					<div className="documents">
						{documents.map((doc) => (
							<Documents
								key={doc.id}
								title={doc.label}
								description={doc.description}
								url={doc.url}
							/>
						))}
					</div>
				</div>
				<div className="footerBis">
					<img src={logoblanc} alt="ENEDIS" style={{ width: '40%' }} />
				</div>
			</div>
		</>
	);
};

export default Prevention;
