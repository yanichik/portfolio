// import styles from "./Card.module.css";
const Card = (props) => {
	return (
		<div className={`Card ${props.classes}`}>{props.children}</div>
		// <div className={`${styles.Card} ${props.classes}`}>{props.children}</div>
	);
};

export default Card;
