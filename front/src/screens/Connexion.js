// import Login from '../components/Login';
import { useAuth0 } from '@auth0/auth0-react';
import './styles/Connexion.css';
import logoBleu from '../assets/logobleu.png';

const Connexion = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        <div className='connexion'>
            <img src={logoBleu} alt='logo enedis' style={{ width: '60%' }}/>
            <div className='bienvenue'>
                <h1 className="titres" style={{color: 'var(--titreAccueil)'}}> Bienvenue dans votre espace Kesturisk </h1>
                
                <div className='boutonEntrer'>
                    <button className="button2 entrer" style={{ width: '50%' }} onClick={()=>loginWithRedirect()}>ENTRER</button>
                </div> 
            </div>   
        </div>
    )
}

export default Connexion;