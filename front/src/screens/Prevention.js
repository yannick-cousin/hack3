import { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios'
import Documents from '../components/Documents'
import Header from '../components/Header'
import folder from '../assets/dossier_blanc.png'
import './styles/Prevention.css'

const Prevention = () => {
  const [documents, setDocuments] = useState([])
  // const { isAuthenticated, user } = useAuth0();

  console.log(documents)

  useEffect(() => {
    axios
      .get(`http://localhost:4242/prevention/`)
      .then((response) => response.data)
      .then((data) => setDocuments(data))
  }, [])

  return (
    <div className='prevention'>
      <Header />
      {/* {isAuthenticated ? <Login /> : ''} */}
      {/* <Profils /> */}
      {/* {console.log('Var USER', user)} */}
      <div className='entete'>
        <h1 className='title'>La sécurité est une compétence professionnelle</h1>
      </div>
      <div className='folders'>
        <div className='start'>
          <img src={folder} />
          <div className='blabla titresSections'>Informations prévention</div>
        </div>
        <div className='blabla2'>Vous trouverez ici les fondamentaux</div>
        <div className='documents'>
          {documents.map((doc) => (
            <Documents key={doc.id} title={doc.title} description={doc.description} url={doc.url} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Prevention
