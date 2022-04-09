// import { Link } from "react-router-dom";
// import styles from "./Intro.module.css";
const Intro = (props) => {
	return (
		<div className="intro" id={props.id}>
			<div className="intro_name">Hi, my name is</div>
			<br />
			<div className="intro_name_job">
				Yan Brunshteyn. <br />I build things for the web.
			</div>
			<br />
			<div className="intro_parag">
				I’m a software engineer specializing in designing and building web
				products from the ground up. Currently I’m focused on building a
				platform for Dads to interact, share ideas, and enhance their
				relationship with their kids - to make dads cool again!
			</div>
			<br />
			<div className="dad_app_github">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.github.com/yanichik"
				>
					Check it out here!
				</a>
			</div>
		</div>
	);
};
export default Intro;
