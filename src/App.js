import { useEffect, useState, Fragment } from "react";
// import { Fragment } from "react";
import Header from "./components/Layout/Header";
import Sidelinks from "./components/Layout/Sidelinks";
import Intro from "./components/Pages/Intro";
import About from "./components/Pages/About";
import Projects from "./components/Pages/Projects";
import Skills from "./components/Pages/Skills";
import Contact from "./components/Pages/Contact";
import Logo from "./components/Pages/Logo";
import "./style/Scss/stylesheets.scss";

function App() {
	const [animateLogo, setAnimateLogo] = useState(true);
	const [animateLogoRemove, setAnimateLogoRemove] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setAnimateLogoRemove(true);
		}, 2000);
		setTimeout(() => {
			setAnimateLogo(false);
			setAnimateLogoRemove(false);
		}, 3000);
	}, []);
	return (
		<Fragment>
			{animateLogo && <Logo animateLogoRemove={animateLogoRemove} />}
			{!animateLogo && (
				<div className="layout">
					<Header />
					<Sidelinks />
					<section className="content">
						<Intro classes="anchor" id="intro" />
						<About classes="anchor" id="about" />
						<Projects classes="anchor" id="projects" />
						<Skills classes="anchor" id="skills" />
						<Contact classes="anchor" id="contact" />
					</section>
				</div>
			)}
		</Fragment>
	);
}

export default App;
