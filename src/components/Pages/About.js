import styles from "./About.module.css";
const About = (props) => {
	return (
		<div className={styles.about} id={props.id}>
			I’m a software developer based in San Jose, CA. Although most recently I
			was working as a project engineer and estimator for a major general
			contractor, web development has been my side passion for the last couple
			of years. I have taken a number of in-depth Udemy bootcamp courses
			including in React, NodeJS, CSS, and Bootstrap. Now I am working on a
			couple of projects - check them out below. I am looking for opportunities
			to contribute and grow in web development. Please reach out if you have an
			opportunity you would like to discuss.
			<br /> I'm fluent in Russian and Hebrew, with interests in history and
			ice-hockey.
		</div>
	);
};
export default About;
