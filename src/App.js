import { Fragment } from "react";
import styles from "./App.module.css";
import Header from "./components/Layout/Header";
import Intro from "./components/Pages/Intro";
import About from "./components/Pages/About";
import Projects from "./components/Pages/Projects";
import Skills from "./components/Pages/Skills";
import Contact from "./components/Pages/Contact";

function App() {
	return (
		<Fragment>
			<div className={styles.layout}>
				<Header />
				<section className={styles.content}>
					<Intro classes="anchor" id="intro" />
					<About classes="anchor" id="about" />
					<Projects classes="anchor" id="projects" />
					<Skills classes="anchor" id="skills" />
					<Contact classes="anchor" id="contact" />
				</section>
			</div>
		</Fragment>
	);
}

export default App;
