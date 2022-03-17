import axios from 'axios'
import Bai from '../components/Bai'
import Header from '../components/Header'
import ToPrevention from '../components/ToPrevention'
import Result from '../components/Result'
import Progress from '../components/Progress'
import ManagerLastPage from '../components/ManagerLastPage'
import { useState, useEffect } from 'react'
import './styles/LastPage.css'
import Footer from '../components/Footer'

const LastPage = () => {
  const [datas, setDatas] = useState([])
  const [points, setPoints] = useState([])
  const [baiOpen, setBaiOpen] = useState(true)
  const [id, setId] = useState(1)
  const [isManager, setIsManager] = useState([])

  useEffect(() => {
    axios
      .get(`http://localhost:4242/user/1`)
      .then((res) => res.data)
      .then((res) => console.log('points', res) || setDatas(res))
  }, [])

  useEffect(() => {
    setPoints(datas.points)
    setId(datas.id)
    setIsManager(datas.manager)
  }, [datas])

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
        <div className={!baiOpen && isManager === 1 ? 'managerLastPageContainer' : 'hidden'}>
          <ManagerLastPage />
        </div>

        <div className={!baiOpen ? 'resultContainer' : 'hidden'}>
          <Result points={points} />
        </div>
        <div className={!baiOpen ? 'progressContainer' : 'hidden'}>
          <Progress />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  )
}
export default LastPage
