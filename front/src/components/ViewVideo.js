import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ResultatTest from './ResultatTest'
import './styles/ViewVideo.css'

const ViewVideo = () => {
  const [url, setUrl] = useState()
  const [selectedUrl, setSelectedUrl] = useState('')
  const [resultatTest, setResultatTest] = useState(false)
  const [nbUrl, setNbUrl] = useState(0)

  useEffect(() => {
    if (!url) {
      axios
        .get(`http://localhost:3030/videos`)
        .then((res) => res.data)
        .then((res) => setUrl(res))
    } else {
      let idUrl = 0
      idUrl = Math.floor(Math.random() * url.length)
      setSelectedUrl(url[idUrl])
    }
  }, [url, nbUrl])

  console.log(selectedUrl)

  return (
    <div className='viewvideo'>
      <Header />
      <div className={!resultatTest ? 'videoContainer' : 'hidden'}>
        <div>
          <p className='titresSections blabla titreVideo'>{selectedUrl.title}</p>
        </div>
        <div>
          <iframe
            src={`https://www.youtube.com/embed/${selectedUrl.link}`}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope'
            allowFullScreen
            className='player'
          ></iframe>
        </div>
        <button className='button2' onClick={() => setResultatTest(true)}>
          Voir mon score
        </button>
        <div className={!resultatTest && 'hidden'}>
          <ResultatTest />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ViewVideo
