import './styles/Bai.css'
import conv from '../assets/conversationBleu.png'
import { useState } from 'react'

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
        <button className=' lpButton' onClick={() => props.setBaiOpen(true)}>
          <div className='imgConversation'>
            <img src={conv} alt='bulleDeConversation' width='50px' />
          </div>
          <div className='titresSections textButton'>Votre retour concernant la sécurité</div>
        </button>
      </div>
      <div className={props.baiOpen ? 'lpPopupContainer' : 'hidden'}>
        <div className='popupLogo'>
          <img src={conv} alt='bulleDeConversation' width='70px' />
        </div>

        <form className='retourForm'>
          <textarea
            type='text'
            className='inputRetour'
            placeholder='Quelles sont les difficultés que vous rencontrez à appliquer ces mesures de sécurité ?'
            onChange={(e) => changeRetour(e)}
            value={updateRetour}
          ></textarea>
          <div>
            <input type='checkbox' id='sendToSecu' name='sendToSecu' value='sendToSecu'></input>
            <label for='sendToSecu' style={{ border: 'none' }}>
              Envoyer au responsable de sécurité uniquement
            </label>
          </div>
          <div className='buttonsBai'>
            <button type='button' className='button1 buttonBai' onClick={() => sendRetour()}>
              C'est parti !
            </button>
            <button type='button' className='button1  buttonBai' onClick={() => sendRetour()}>
              Pas maintenant !
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Bai
