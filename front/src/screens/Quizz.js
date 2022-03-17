import './styles/Quizz.css'
import {useEffect, useState} from "react";
import axios from "axios";
const Quizz =()=>{
  const [questions,setQuestions]=useState()
  const [change,setChange]=useState(false)
  const [selectedQuestion,setSelectedQuestion]=useState('')
  const [reponses,setReponses]=useState('')
  const randomQuestion=(questions)=>{
    if(questions) {
      let idQuestion = 0
      idQuestion = Math.floor(Math.random() * questions.length)
      setSelectedQuestion(questions[idQuestion])
      console.log('SELECTED QUESTION', selectedQuestion)
    }
  }
  useEffect(()=>{
    if(!questions){
      axios.get(`http://localhost:3030/questions`).
      then((res)=>res.data).
      then((res)=>console.log(res) || setQuestions(res))
      setChange(true)
    }else{
      console.log('ELSE QUESTION',questions)
      let idQuestion = 0
      idQuestion = Math.floor(Math.random() * questions.length)
      setSelectedQuestion(questions[idQuestion])
      console.log('IDQUESTIONFRONT',idQuestion)
      axios.get(`http://localhost:3030/reponses/${questions[idQuestion].id}`).
      then((res)=>res.data).then((res)=>console.log(res)||setReponses(res))
    }
  },[questions])
  useEffect(()=>{

  },[change])

  return(
    <div>
      <div className='quizzContainer'>
        <h1 className='title' >Quizz</h1>
        <h2 className='question'>{selectedQuestion.question}</h2>
        <div className='answersContainer'>
          {reponses?reponses.map(reponse=><button key={reponse.id} className='answer'>{reponse.reponse}</button>):''}
        </div>
        <button className='validation'>Validation</button>
      </div>
    </div>
  )
}
export default Quizz