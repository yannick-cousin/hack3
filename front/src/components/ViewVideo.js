import { useEffect, useState } from 'react'
import axios from 'axios'
import Footer from '../components/Footer'
import Header from '../components/Header'

const ViewVideo = () => {
  const [url, setUrl] = useState()

  useEffect(() => {
    axios
      .get(`http://localhost:4242/videos`)
      .then((res) => res.data)
      .then((res) => setUrl(res))
  }, [])

  return (
    <div className='viewvideo'>
      <Header />
      <iframe
        src={`https://www.youtube.com/embed/${url}`}
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope'
        allowfullscreen
        className='player'
      ></iframe>
      <Footer />
    </div>
  )
}

export default ViewVideo
