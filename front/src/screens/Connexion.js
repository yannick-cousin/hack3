// import Login from '../components/Login';
import { useAuth0 } from '@auth0/auth0-react';

import logoBleu from '../assets/logobleu.png';
import fil from '../assets/ENEDIS_FIL_CONCEPTUEL_FOND_BLEU_RVB_EXE_12.png'; 

import './styles/Connexion.css';

const Connexion = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        <div className='connexion'>
            <img src={logoBleu} alt='logo enedis' style={{ width: '60%', marginTop: '80px'}}/>
            <div className='bienvenue'>
                <h1 className="titres" style={{color: 'var(--titreAccueil)'}}> Bienvenue dans votre espace Kesturisk </h1>
                <div className='boutonEntrer'>
                    <button className="button2 entrer" style={{ width: '50%' }} onClick={()=>loginWithRedirect()}>ENTRER</button>
                </div> 
            </div>   
            <div style={{display:'flex', justifyContent : 'flex-start', zIndex: 0, backgroundColor: 'var(--main)'}}>
                <img src={fil} alt='fil' style={{ width: '150%'}}  />
            </div>
        </div>
    )
}

export default Connexion;