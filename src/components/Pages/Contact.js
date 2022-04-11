// import styles from "./Contact.module.css";
const Contact = (props) => {
	return (
		<div className="contact" id={props.id}>
			<div className="contact_header">
				<span className="Nav_number">04.&ensp;</span>
				<span className="Nav_link">G</span>et in touch
			</div>
			<br />
			<div className="contact_parag">
				<br />
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, omnis
				ipsa fugiat ullam natus consectetur quo iure eveniet libero pariatur!
				<a
					className="contact_button"
					href="mailto: brunshte@gmail.com"
					id={props.id}
					rel="noopener noreferrer"
				>
					<span className="contact_text">Get in touch!</span>
				</a>
				<br />
			</div>
		</div>
	);
};
export default Contact;
