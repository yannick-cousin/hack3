import Bai from '../components/Bai'
import Header from '../components/Header'
import ToPrevention from '../components/ToPrevention'
import Result from '../components/Result'
import Progress from '../components/Progress'
import ManagerLastPage from '../components/ManagerLastPage'
import { useState } from 'react'
import './styles/LastPage.css'
import Footer from '../components/Footer'

const LastPage = (props) => {
  const [baiOpen, setBaiOpen] = useState(true)

  return (
    <>
      <Header />
      <div className='lastPageContainer'>
        <div className='baiContainer'>
          <Bai setBaiOpen={setBaiOpen} baiOpen={baiOpen} />
        </div>
        <div className={!baiOpen ? 'toPrevContainer' : 'hidden'}>
          <ToPrevention />
        </div>
        <div className={!baiOpen && props.isManager === 1 ? 'managerLastPageContainer' : 'hidden'}>
          <ManagerLastPage />
        </div>

        <div className={!baiOpen ? 'resultContainer' : 'hidden'}>
          <Result points={props.points} />
        </div>
        <div className={!baiOpen ? 'progressContainer' : 'hidden'}>
          <Progress />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}
export default LastPage
