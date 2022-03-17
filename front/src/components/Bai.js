import './styles/Bai.css'
import conv from '../assets/conversensation.png'
import { useState } from 'react'
import axios from 'axios'

const Bai = (props) => {
  const [updateRetour, setUpdateRetour] = useState('')

  const changeRetour = (e) => {
    setUpdateRetour(e.target.value)
  }

  const sendRetour = () => {
    if (updateRetour) {
      setUpdateRetour('')
    }
    props.setBaiOpen(false)
  }

  return (
    <div>
      <div className={!props.baiOpen ? 'lpButtonContainer' : 'hidden'}>
        <button className='titresSections' onClick={() => props.setBaiOpen(true)}>
          Votre retour
        </button>
      </div>
      <div className={props.baiOpen ? 'lpPopupContainer' : 'hidden'}>
        <div className='popupLogo'>{/* <img src={conv} alt='bulleDeConversation' /> */}</div>

        <form className='retourForm'>
          <input
            type='text'
            className='inputRetour'
            placeholder='Quelles sont les difficultés que vous rencontrez à appliquer ces mesures de sécurité ?'
            onChange={(e) => changeRetour(e)}
            value={updateRetour}
          ></input>
          <div>
            <input type='checkbox' id='sendToSecu' name='sendToSecu' value='sendToSecu'></input>
            <label for='sendToSecu'>Envoyer au responsable de sécurité uniquement</label>
          </div>
          <button type='button' className='buttonSendRetour' onClick={() => sendRetour()}>
            C'est parti !
          </button>
        </form>
      </div>
    </div>
  )
}
export default Bai
