import check from '../assets/verified_black_24dp.svg'
import './styles/Result.css'

const Result = (props) => {
  return (
    <div>
      <div className='resultText'>
        <p className='sousTitres'>Vos résultats</p>
        <p className='txtNoir'>{props.points} POINTS</p>
      </div>

      <ul>
        <li>
          <div className='listContent'>
            <div>
              <img src={check} alt='badge checkmark vert' width='30px' fill='var(--second)' />
            </div>
            <div>
              <p>niveau 1</p>
            </div>
          </div>
        </li>

        <li>
          <div className='listContent'>
            <div>
              <img src={check} alt='badge checkmark vert' width='30px' color='var(--second)' />
            </div>
            <div>
              <p>niveau 2</p>
            </div>
          </div>
        </li>
        <li>
          <div className='listContent'>
            <div>
              <img src={check} alt='badge checkmark vert' width='30px' color='var(--second)' />
            </div>
            <div>
              <p>niveau 3</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}
export default Result
