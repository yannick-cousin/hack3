import './styles/Footer.css';
import logoblanc from '../assets/logoblanc.png';
import fil from '../assets/ENEDIS_FIL_CONCEPTUEL_FOND_BLANC_RVB_EXE_02.png';

const Footer = () => {
	return (
		<div className="footer">
			<div className="fil">
				<img src={fil} alt="deco" />
			</div>
			<div className="logo">
				<img src={logoblanc} alt="ENEDIS" />
			</div>
		</div>
	);
};

export default Footer;