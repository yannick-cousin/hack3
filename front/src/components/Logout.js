import { useAuth0 } from '@auth0/auth0-react';
import './styles/Logout.css';
import sortie from '../assets/logout.svg';


const Logout = () => {
    const { logout } = useAuth0(); 

    return (
        <img src={sortie} id="sortie" alt="" onClick={() => logout({ returnTo: window.location.origin})}/>
    )
}; 

export default Logout; 