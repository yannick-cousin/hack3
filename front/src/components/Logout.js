import { useAuth0 } from '@auth0/auth0-react';

const Logout = () => {
    const { logout } = useAuth0(); 

    return (
        <button className="button2" onClick={() => logout({ returnTo: window.location.origin})}>
            Se déconnecter
        </button>
    )
}; 

export default Logout; 