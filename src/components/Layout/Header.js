import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../../assets/logo.svg";
import resume from "../../assets/resume.pdf";
// import styles from "./Header.module.css";

export default function Header(props) {
	const [isSmallScreen, setIsSmallScreen] = useState(false);
	const [navShadowVisible, setNavShadowVisible] = useState(false);

	const handleMediaQueryChange = (mediaQuery) => {
		if (mediaQuery.matches) {
			setIsSmallScreen(true);
		} else {
			setIsSmallScreen(false);
		}
	};
	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 700px)");
		mediaQuery.addEventListener("change", handleMediaQueryChange);
		handleMediaQueryChange(mediaQuery);

		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
		};
	}, []);

	const changeNav = () => {
		if (window.scrollY > 50) {
			// console.log("scrolled 50");
			setNavShadowVisible(true);
		} else {
			// console.log("back to 0");
			setNavShadowVisible(false);
		}
	};

	window.addEventListener("scroll", changeNav);

	const scrollWithOffset = (el) => {
		const vh = window.innerHeight;
		const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
		const yOffset = (vh / 5) * -1;
		window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
	};

	// let headerClasses =
	// 	"Header" + navShadowVisible
	// 		? "Header_scrolled"
	// 		: "" + props.animateHeader
	// 		? "animate__lightSpeedInLeft"
	// 		: "";

	return (
		<header className={navShadowVisible ? "Header Header_scrolled" : "Header"}>
			<img src={logo} className="header_logo animate__animated animate__lightSpeedInLeft" alt="Header Logo" />
			{!isSmallScreen && (
				<nav className="Nav animate__animated animate__lightSpeedInLeft">
					<Link smooth to="#about" scroll={(el) => scrollWithOffset(el)}>
						<span className="Nav_number">01.&ensp;</span>
						<span className="Nav_link">A</span>bout
					</Link>
					<Link smooth to="#projects" scroll={(el) => scrollWithOffset(el)}>
						<span className="Nav_number">02.&ensp;</span>
						<span className="Nav_link">P</span>rojects
					</Link>
					<Link smooth to="#skills" scroll={(el) => scrollWithOffset(el)}>
						<span className="Nav_number">03.&ensp;</span>
						<span className="Nav_link">S</span>kills
					</Link>
					<Link smooth to="#contact" scroll={(el) => scrollWithOffset(el)}>
						<span className="Nav_number">04.&ensp;</span>
						<span className="Nav_link">C</span>ontact
					</Link>
					<a
						className="resume_button"
						href={resume}
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className="resume_text">Resume</span>
					</a>
				</nav>
			)}
		</header>
	);
}
