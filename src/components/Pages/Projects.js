// import { useState } from "react";
// const projectsList = {
// 	dadApp: "dadApp",
// 	salonMVP: "salonMVP",
// 	nextBeeClone: "nextBeeClone",
// 	weatherApp: "weatherApp",
// 	yelpCamp: "yelpCamp",
// 	authApp: "authApp",
// };
const Projects = (props) => {
	// const [displayProject, setDisplayProject] = useState(projectsList.salonMVP);
	// const salonMvpDiv = <div></div>;
	return (
		<div className="projects" id={props.id}>
			<div className="projects_header">
				<span className="Nav_number">02.&ensp;</span>
				<span className="Nav_link">P</span>rojects
			</div>
			<br />
			<div className="projects_parag"></div>
		</div>
	);
};
export default Projects;
