import './App.css'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import Connexion from './screens/Connexion'
import Game from './screens/Game'
import { useState, useEffect } from 'react'

import Home from './screens/Home'

import Prevention from './screens/Prevention'
import Quizz from './screens/Quizz'
import LastPage from './screens/LastPage'

const App = () => {
  const [datas, setDatas] = useState([])
  const [points, setPoints] = useState([])
  const [id, setId] = useState(1)
  const [isManager, setIsManager] = useState([])
  // const { isAuthenticated, isLoading } = useAuth0();
  // if (isLoading) {
  // 	return <div>Loading</div>;
  // }

  const { isAuthenticated, isLoading } = useAuth0()

  useEffect(() => {
    axios
      .get(`http://localhost:3030/user/1`)
      .then((res) => res.data)
      .then((res) => console.log('points', res) || setDatas(res))
  }, [])

  useEffect(() => {
    setPoints(datas.points)
    setId(datas.id)
    setIsManager(datas.manager)
  }, [datas])

  if (isLoading) {
    return <div>Loading</div>
  }

  return isAuthenticated ? (
    <div className='App'>
      <Routes>
        <Route path='/connexion' element={<Connexion />} />
        <Route path='/' element={<Home />} />
        <Route path='/quizz' element={<Quizz />} />
        <Route path='/preventions' element={<Prevention />} />
        <Route path='/lastpage' element={<LastPage isManager={isManager} points={points} />} />
        <Route path='/game' element={<Game />} />
      </Routes>
    </div>
  ) : (
    <>
      <Connexion />
    </>
  )
}

export default App
