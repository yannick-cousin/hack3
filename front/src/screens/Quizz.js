import './styles/Quizz.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ResultatTest from '../components/ResultatTest';

const Quizz = () => {
	const [questions, setQuestions] = useState();
	const [selectedQuestion, setSelectedQuestion] = useState('');
	const [reponses, setReponses] = useState(0);
	const [nbQuestion, setNbQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [gameFinished, setGameFinished] = useState(false);
	const [previousQuestion, setPreviousQuestion] = useState(0);


	console.log('Score', score);

	const handleResult = (reponse) => {
		const selectedAnswer = document.querySelector(reponse.value);
		setNbQuestion(nbQuestion + 1);
		if (nbQuestion === 4) {
			setGameFinished(true);
		}
		if (reponse.trueFalse) {
			setScore(score + 5);
		}
	};

	useEffect(() => {
		if (!questions) {
			axios
				.get(`${process.env.REACT_APP_BACK}/questions`)
				.then((res) => res.data)
				.then((res) => setQuestions(res));
		} else {
			let newArr = questions.splice(previousQuestion - 1, 1);
			let idQuestion = 0;
			idQuestion = Math.floor(Math.random() * questions.length);
			setSelectedQuestion(questions[idQuestion]);
			setPreviousQuestion(questions[idQuestion].id);
			axios
				.get(
					`${process.env.REACT_APP_BACK}/reponses/${questions[idQuestion].id}`
				)
				.then((res) => res.data)
				.then((res) => setReponses(res));
		}
	}, [questions, nbQuestion]);

	return (
		<div>
			<Header />
			{gameFinished ? (
				<ResultatTest score={score} />
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
			<Footer />
		</div>
	);
};
export default Quizz;
