// import styles from "./Skills.module.css";
import Html5 from "../../assets/Html5";
import Css3 from "../../assets/Css3";
import Js from "../../assets/Js";
import logo from "../../assets/logo.svg";
// import ejs from "../../assets/ejs.jpeg";
import ejs from "../../assets/ejs.png";
// import Ejs from "../../assets/Ejs";
import Bootstrap from "../../assets/Bootstrap";
import ReduxIcon from "../../assets/ReduxIcon";
import NodeJs from "../../assets/NodeJs";
import expressJs from "../../assets/expressJs.png";
import restfulApi from "../../assets/restfulApi.png";
import MondoDb from "../../assets/MongoDb";
import Git from "../../assets/Git";
import Npm from "../../assets/Npm";
import VsCode from "../../assets/VsCode";

const Skills = (props) => {
	return (
		<div className="skills" id={props.id}>
			<div className="skills_header">
				<span className="Nav_number">03.&ensp;</span>
				<span className="Nav_link">S</span>kills
			</div>
			<br />
			<div className="skills_parag">
				<span className="skills_items">
					Languages:
					<span className="skills_icons">
						<Html5 />
						<Css3 />
						<Js />
					</span>
				</span>
				<br />
				<span className="skills_items">
					Frontend:
					<span className="skills_icons">
						<img src={logo} className="svg" alt="React Logo" /> <Bootstrap />
						<ReduxIcon />
						<span className="ejs">
							<span className='ejs_title'>EJS&nbsp;</span>
							<img src={ejs} className="svg ejs" alt="EJS Logo" />
						</span>
					</span>
				</span>
				<span className="skills_items">
					Backend:
					<span className="skills_icons">
						<NodeJs />
						<img
							className="svg expressJs"
							src={expressJs}
							alt="ExpressJS Logo"
						/>
						<img className="svg" src={restfulApi} alt="Rest API Icon" />
						<MondoDb />
					</span>
				</span>
				<span className="skills_items">
					Tools:
					<span className="skills_icons">
						<Git />
						<Npm />
						<VsCode />
					</span>
				</span>
			</div>
		</div>
	);
};
export default Skills;
