import './App.css'
import UserContextProvider from './context/UserContext'
import { Routes, Route } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import Connexion from './screens/Connexion'
import Game from './screens/Game'
import Result from './components/Result'

import Home from './screens/Home'

import Prevention from './screens/Prevention'
import Quizz from './screens/Quizz'
import LastPage from './screens/LastPage'

const App = () => {
  
  const { isAuthenticated, isLoading } = useAuth0()

  

  if (isLoading) {
    return <div>Loading</div>
  }

  

  return isAuthenticated ? (
    <div className='App'>
		<UserContextProvider>
			<Routes>
				<Route path='/connexion' element={<Connexion />} />
				<Route path='/' element={<Home />} />
				<Route path='/quizz' element={<Quizz  />} />
				<Route path='/preventions' element={<Prevention />}/>
				<Route path='/lastpage' element={<LastPage />} />
				<Route path='/game' element={<Game />} />
				<Route path='/result' element={<Result />}/>
			</Routes>
		</UserContextProvider>
    </div>
  ) : (
    <>
      <Connexion />
    </>
  )
}

export default App
