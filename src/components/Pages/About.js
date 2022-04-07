// import styles from "./About.module.css";
const About = (props) => {
	return (
		<div className="about" id={props.id}>
			<div className="about_me">
				<span className="Nav_number">01.&ensp;</span>
				<span className="Nav_link">A</span>bout Me
			</div>
			<br />
			<div className="about_me_parag">
				I’m a software developer based in San Jose, CA. Until recently I was
				working as a project engineer and estimator for a major general
				contractor, while web development has been my side passion for the last
				couple of years. I have developed many projects (see below) and
				completed a number of Udemy bootcamp courses including in React, NodeJS,
				CSS, and Bootstrap. At this time, I am continuing to develop and am
				looking for opportunities to join a great firm where I can contribute
				and further grow in web development. Please reach out if you have an
				opportunity you would like to discuss.
				<br />
				<br /> On a side note, I am fluent in Russian and Hebrew, with interests
				in history and ice-hockey.
			</div>
		</div>
	);
};
export default About;
