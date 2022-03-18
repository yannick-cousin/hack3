import logo from '../assets/usersmiley.svg'
import './styles/Header.css'

const Header = (props) => {
  console.log(props)
  return (
    <div className='header'>
      <div className='user'>
        <p>{props.firstname}</p>
      </div>
      <img src={logo} alt='user' />
    </div>
  )
}

export default Header
