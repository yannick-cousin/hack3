import './styles/ManagerLastPage.css'
import conv from '../assets/retours.svg'
import stats from '../assets/stats.svg'

const ManagerLastPage = () => {
  return (
    <div className='managerLastPage'>
      <div className='stats'>
        <div className='boutonRond'>
          <img src={stats} alt='bulleDeConversation' width='60px' />
        </div>
        <p className='blabla'>STATISTIQUES</p>
      </div>
      <div className='retours'>
        <div className='boutonRond'>
          <img src={conv} alt='bulleDeConversation' width='60px' />
        </div>
        <div className='blabla'>RETOURS EQUIPE</div>
      </div>
    </div>
  )
}
export default ManagerLastPage
