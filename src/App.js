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
					<Intro id="intro" />
					<About id="about" />
					<Projects id="projects" />
					<Skills id="skills" />
					<Contact id="contact" />
				</section>
			</div>
		</Fragment>
	);
}

export default App;
