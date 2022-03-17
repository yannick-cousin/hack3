import { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios'
import Documents from '../components/Documents'
import Login from '../components/Login'
import folder from '../assets/dossier_blanc.png'
import './styles/Prevention.css'

const Prevention = () => {
  const [documents, setDocuments] = useState([])
  const { isAuthenticated, user } = useAuth0()

  console.log(documents)

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACK}/prevention/`)
      .then((response) => response.data)
      .then((data) => setDocuments(data))
  }, [])

  return (
    <div className='prevention'>
      {isAuthenticated ? <Login /> : ''}
      {/* <Profils /> */}
      {console.log('Var USER', user)}
      <div className='entete'>
        <h1 className='title'>La sécurité est une compétence professionnelle</h1>
        <p className='description'>
          Parce que rentrer chez soi en bonne santé est important, nous proposons, chaque jour, un petit quizz ou une petite vidéo afin de vous rappeler quelques élements de sécurité de façon ludique.{' '}
        </p>
      </div>
      <div className='folders'>
        <div className='start'>
          <img src={folder} />
          <div className='blabla'>Informations prévention</div>
        </div>
        <div className='blabla2'>Vous trouverez ici les fondamentaux</div>
        <div className='documents'>
          {documents.map((doc) => (
            <Documents key={doc.id} title={doc.title} description={doc.description} url={doc.title} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Prevention
