import './styles/Progress.css';

const Progress = () => {
	return (
		<div className="progress">
			<p className="titresSections blabla marginbottomProgress">
				Votre progression
			</p>
			<div className="barreProgression">
				<div className="progressGreen"></div>
				<div className="progressGrey"></div>
			</div>
		</div>
	);
};
export default Progress;
