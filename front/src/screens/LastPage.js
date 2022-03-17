import Bai from '../components/Bai'
import Header from '../components/Header'
import ToPrevention from '../components/ToPrevention'
import Result from '../components/Result'
import Progress from '../components/Progress'
import { useState } from 'react'
import './styles/LastPage.css'

const LastPage = () => {
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
        <div className={!baiOpen ? 'resultContainer' : 'hidden'}>
          <Result />
        </div>
        <div className={!baiOpen ? 'progressContainer' : 'hidden'}>
          <Progress />
        </div>
      </div>
    </>
  )
}
export default LastPage
