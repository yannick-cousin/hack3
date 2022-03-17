import download from '../assets/file_download_black_48dp.svg';
import '../screens/styles/Prevention.css';
import { useState } from 'react';

const Documents = (props) => {
	const [viewMore, setViewMore] = useState(false);

	const iWantView = () => {
		setViewMore(!viewMore);
	};

	return (
		<div className={viewMore ? 'elDoc active' : 'elDoc'}>
			<div className="haut">
				<div className="buttomreveal" onClick={() => iWantView()}>
					<div className={viewMore ? 'premierebarre active' : 'premierebarre'}>
						\
					</div>
					<div className={viewMore ? 'secondebarre active' : 'secondebarre'}>
						/
					</div>
				</div>
				<div className="titre">{props.title}</div>
			</div>
			<div className={viewMore ? 'description' : 'cache'}>
				{props.description}
			</div>
			<div className={viewMore ? 'thelink' : 'cache'}>
				<a href={`${process.env.REACT_APP_BACK}/${props.url}`}>
					<img src={download} alt="pdflogo" />
				</a>
			</div>
		</div>
	);
};

export default Documents;
