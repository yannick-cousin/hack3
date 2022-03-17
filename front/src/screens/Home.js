import { Link } from 'react-router-dom';
import './styles/Home.css';
import attentif from '../assets/attentif.png'
import bulb from '../assets/bulb.png';
import epi from '../assets/epi.png'; 
import Header from '../components/Header';
import integrite from '../assets/intégrité.png'; 
import Info from '../assets/info.png'; 
import logoblanc from '../assets/logoblanc.png';
import noDrogues from '../assets/noDrogues.png'; 
import noTel from '../assets/noTel.png'; 
import reflechis from '../assets/reflechis.png'; 
import fil from '../assets/ENEDIS_FIL_CONCEPTUEL_FOND_BLANC_RVB_EXE_02.png';
import vatMaltCC from '../assets/vatMaltCC.png'; 
import belek from '../assets/belek.png'; 

const Home = () => {

	return (
		<div className="home">
			<Header />
			<div className="entete">
				<h1 className="titres">
					La sécurité est une compétence professionnelle
				</h1>
				<p className="description">
					Parce que rentrer chez soi en bonne santé est important, nous vous
					proposons, chaque jour, un défi afin de vous rappeler quelques élements de sécurité de façon ludique.{' '}
				</p>
			</div>

			<div className="astuces">
				<img src={bulb} alt="astuce" />
			</div>
			<div className="defi">
				<div className="go">
					<p> Lancer le défi du jour {' '}</p> 
					<img src={Info} alt="info" style={{ width: '8%', marginLeft: '16px'}}/> 
				</div>
				<Link className="launchGame" to="/game">
					C'est parti !
				</Link>
			</div>
			<div className='fondamentaux'>
				<img src={attentif} alt="attentif" className="div1" style={{ width: '72%', marginLeft: '16px'}}/> 
				<img src={reflechis} alt="reflechis" className="div2"style={{ width: '72%', marginLeft: '16px'}}/> 
				<img src={noTel} alt="noTel" className="div3" style={{ width: '72%', marginLeft: '16px'}}/> 
				<img src={noDrogues} alt="noDrogues" className="div4" style={{ width: '72%', marginLeft: '16px'}}/>
				<img src={epi} alt="epi" className="div5" style={{ width: '72%', marginLeft: '16px'}}/>  
				<img src={integrite} alt="integrite" className="div6" style={{ width: '72%', marginLeft: '16px'}}/>
				<img src={vatMaltCC} alt="vatMaltCC" className="div7" style={{ width: '72%', marginLeft: '16px'}}/>
				<img src={belek} alt="belek" className="div8" style={{ width: '72%', marginLeft: '16px'}}/>  
			</div>
			<div className="basdepage">
				{/* <div className="fil">
					<img src={fil} alt="deco" />
				</div> */}
				<div className="logo">
					<img src={logoblanc} alt="ENEDIS" />
				</div>
				
			</div>
		</div>
	);
};

export default Home;
