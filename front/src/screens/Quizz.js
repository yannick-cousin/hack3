import './styles/Quizz.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
const Quizz = () => {
	const [questions, setQuestions] = useState();
	const [selectedQuestion, setSelectedQuestion] = useState('');
	const [reponses, setReponses] = useState(0);
	const [nbQuestion, setNbQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [gameFinished, setGameFinished] = useState(false);
	const [previousQuestion, setPreviousQuestion] = useState(0);
	const handleValidation = () => {};

	console.log(questions);

	const handleResult = (reponse) => {
		const selectedAnswer = document.querySelector(reponse.value);
		//console.log('HANDLERESULT SELECTEDANSWER QUERYSELECTOR', selectedAnswer);
		// for(let i=0;selectedAnswer.length;i++){
		//
		// }
		setNbQuestion(nbQuestion + 1);
		if (nbQuestion === 4) {
			setGameFinished(true);
		}
		if (reponse.trueFalse) {
			setScore(score + 1);
			console.log('Score', score);
		}
		//console.log(nbQuestion);
	};

	useEffect(() => {
		if (!questions) {
			axios
				.get(`${process.env.REACT_APP_BACK}/questions`)
				.then((res) => res.data)
				.then((res) => console.log(res) || setQuestions(res));
		} else {
			//console.log('ELSE QUESTION', questions);
			let newArr = questions.splice(previousQuestion - 1, 1);
			//console.log('enleve', newArr);
			let idQuestion = 0;
			idQuestion = Math.floor(Math.random() * questions.length);
			setSelectedQuestion(questions[idQuestion]);
			//console.log('IDQUESTIONFRONT', idQuestion);
			setPreviousQuestion(questions[idQuestion].id);
			axios
				.get(
					`${process.env.REACT_APP_BACK}/reponses/${questions[idQuestion].id}`
				)
				.then((res) => res.data)
				.then((res) => console.log(res) || setReponses(res));
		}
	}, [questions, nbQuestion]);

	return (
		<div>
			{gameFinished ? (
				''
			) : (
				<div className="quizzContainer">
					<h1 className="title">Quizz</h1>
					<h2 className="question">{selectedQuestion.question}</h2>
					<div className="answersContainer">
						{reponses
							? reponses.map((reponse) => (
									<button
										key={reponse.id}
										className="answer"
										onClick={() => handleResult(reponse)}
									>
										{reponse.reponse}
									</button>
							  ))
							: ''}
					</div>
				</div>
			)}
		</div>
	);
};
export default Quizz;
