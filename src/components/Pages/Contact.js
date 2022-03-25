import styles from "./Contact.module.css";
const Contact = (props) => {
	return (
		<div className={styles.email}>
			<a href="mailto: brunshte@gmail.com" id={props.id}>
				Send Email
			</a>
		</div>
	);
};
export default Contact;
