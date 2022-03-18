import './styles/ResultatTest.css'
import axios from 'axios';
import { useState } from 'react';
import Result from './Result';
const ResultatTest = (props) => {
	const [updateUser, setUpdateUser]=useState([])
	

	const calculResult = () => {
		if (props.score >= 20) {
			return <div className="good"><div className="sousTitres">Excellent !
			<div className="point">
				Vous avez optenu {props.score} points
			</div>
			<div className='paraf'>
				Tu as otenu un sans faute.
				N'hésite pas à consulter les documents fournis dans l'application, dans l'onglet infos préventions.
			</div>
			</div></div>;
		} else if (props.score < 20 && props.score >= 10) {
			return <div className="moyen"><div className="sousTitres">Bon acquis
			<div className="point">
				Vous avez optenu {props.score} points
			</div>
			<div className='paraf'>
				Les connaissances sont làil ne reste plus qu'à les approfondir.
				N'hésite pas à consulter les documents fournis dans l'application, dans l'onglet infos préventions.
			</div>
				</div></div>;
		} else if (props.score < 10) {
			return <div className="echec"><div className="sousTitres">Tu feras mieux la<br></br> prochaine fois...<div className='point'>
				Vous avez optenu {props.score} points
			</div>
			<div className='paraf'>
				Ta sécurité est au coeur de nos valeurs.Mieux t'informer est notre priorité.
				N'hésite pas à consulter les documents fournis dans l'application, dans l'onglet infos préventions.
			</div>
			</div></div>;
		}
	};

	const handleClick=()=>{
		return (
		axios.put('http://localhost:4242/user/1',{points:props.score})
		 .then(res=> setUpdateUser(res.data.updateUser))
			
	)}

	return <>

	<div className="">{calculResult()}
	</div>
	<div className="buttonresgame">
	
		<button className="button1" onclick={handleClick()}>Page Suivante</button>
	
	</div>
	</>
	};

export default ResultatTest;
