import logo from '../assets/usersmiley.svg';
import './styles/Header.css';

const Header = () => {
	return (
		<div className="header">
			<div className="user">Utilisateur</div>
			<img src={logo} alt="user" />
		</div>
	);
};

export default Header;