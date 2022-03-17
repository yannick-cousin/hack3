import folder from '../assets/dossier_blanc.png'
import { Link } from 'react-router-dom'

const ToPrevention = () => {
  return (
    <Link to={`/preventions/`}>
      <div className='start'>
        <img src={folder} />
        <div className='titresSections blabla'>Informations prévention</div>
      </div>
    </Link>
  )
}
export default ToPrevention
