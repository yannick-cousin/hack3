import { useState } from 'react';

const ResultatTest = (props) => {
	const [result, setResult] = useState(6);

	const calculResult = () => {
		if (props.score >= 20) {
			return <div>Excellent</div>;
		} else if (props.score < 20 && props.score > 10) {
			return <div>C'est moyen</div>;
		} else if (props.score <= 10) {
			return <div>T'es une merde !</div>;
		}
	};

	return <div className="pouet">{calculResult()}</div>;
};

export default ResultatTest;
