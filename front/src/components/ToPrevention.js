import folder from '../assets/dossier_blanc.png';
import { Link } from 'react-router-dom';

const ToPrevention = (props) => {
	return (
		<Link to={`/preventions/`}>
			<div className="start" onClick={() => props.setPreviousPage(1)}>
				<img src={folder} width="50px" />
				<div className="titresSections blabla textButton">
					Informations prévention
				</div>
			</div>
		</Link>
	);
};
export default ToPrevention;
