import Logout from './Logout'
import logo from '../assets/usersmiley.svg'
import './styles/Header.css'

const Header = (props) => {
  return (
    <div className='header'>
      <Logout />
      <div className='user'>
        <p>{props.firstname}</p>
        <img src={logo} alt='user' />
      </div>
    </div>
  )
}

export default Header
