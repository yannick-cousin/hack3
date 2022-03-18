import { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios'
import Documents from '../components/Documents'
import Header from '../components/Header'
import Footer from '../components/Footer'

import folder from '../assets/dossier_blanc.png'
import logoblanc from '../assets/logoblanc.png'
import './styles/Prevention.css'

const Prevention = () => {
  const [documents, setDocuments] = useState([])
  // const { isAuthenticated, user } = useAuth0();

  console.log(documents)

  useEffect(() => {
    axios
      .get(`http://localhost:3030/prevention/`)
      .then((response) => response.data)
      .then((data) => setDocuments(data))
  }, [])

  return (
    <>
      <Header />
      <div className='prevention'>
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
          <div className='blabla2'>Retrouvez des informations complémentaires concernant votre sécurité</div>
          <div className='documents'>
            {documents.map((doc) => (
              <Documents key={doc.id} title={doc.title} description={doc.description} url={doc.url} />
            ))}
          </div>
        </div>
        <div className='footerBis'>
          <img src={logoblanc} alt='ENEDIS' style={{ width: '40%' }} />
        </div>
      </div>
    </>
  )
}

export default Prevention
