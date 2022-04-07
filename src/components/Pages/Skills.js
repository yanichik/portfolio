// import styles from "./Skills.module.css";
const Skills = (props) => {
	return (
		<div className="skills" id={props.id}>
			<div className="skills_header">
				<span className="Nav_number">03.&ensp;</span>
				<span className="Nav_link">S</span>kills
			</div>
			<br />
			<div className="skills_parag">
				<span>Languages: HTML, CSS, JavaScript (ES6)</span>
				Frontend: React, Bootstrap, Redux, EJS Backend: Node.js, Express,
				RESTful API, MongoDB Tools: Git, npm, VS Code
			</div>
		</div>
	);
};
export default Skills;
