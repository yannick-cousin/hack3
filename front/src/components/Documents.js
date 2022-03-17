import '../screens/styles/Prevention.css';

const Documents = (props) => {
	return (
		<div className="elDoc">
			<div className="titre">{props.title}</div>
			<div className="description">{props.description}</div>
		</div>
	);
};

export default Documents;
