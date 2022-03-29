import styles from "./About.module.css";
const About = (props) => {
	return (
		<div className={styles.about} id={props.id}>
      About Me
		</div>
	);
};
export default About;
