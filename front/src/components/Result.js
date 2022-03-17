import axios from 'axios'
import { useState, useEffect } from 'react'

const Result = () => {
  const [points, setPoints] = useState()

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACK}/prevention/`)
      .then((response) => response.data)
      .then((data) => setPoints(data))
  }, [])

  return (
    <div>
      <div className='sousTitres'>
        <p>Vos résultats</p>
      </div>
      <p>{points} points</p>
      <ul>
        <li>
          <p>Niveau 1</p>
        </li>
      </ul>
    </div>
  )
}
export default Result
