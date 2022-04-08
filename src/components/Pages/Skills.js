// import styles from "./Skills.module.css";
import Html5 from "../../assets/Html5";
import Css3 from "../../assets/Css3";
import Js from "../../assets/Js";
const Skills = (props) => {
	return (
		<div className="skills" id={props.id}>
			<div className="skills_header">
				<span className="Nav_number">03.&ensp;</span>
				<span className="Nav_link">S</span>kills
			</div>
			<br />
			<div className="skills_parag">
				<span className="languages">
					Languages:
					<span className="language_icons">
						<Html5 />
						<Css3 />
						<Js />
					</span>
				</span>
				<br /> Frontend: React, Bootstrap, Redux, EJS Backend: Node.js, Express,
				RESTful API, MongoDB Tools: Git, npm, VS Code
			</div>
		</div>
	);
};
export default Skills;
