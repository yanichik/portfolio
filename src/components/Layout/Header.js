import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../../assets/logo.svg";
import resume from "../../assets/resume.pdf";
import styles from "./Header.module.css";

export default function Header() {
	const [isNavVisible, setIsNavVisible] = useState(true);
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

	const toggleNav = () => {
		setIsNavVisible(!isNavVisible);
	};

	const scrollWithOffset = (el) => {
		const vh = window.innerHeight;
		const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
		const yOffset = (vh / 2) * -1;
		window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
	};

	return (
		<header
			className={
				navShadowVisible
					? `${styles.Header} ${styles.Header_scrolled}`
					: styles.Header
			}
		>
			<img src={logo} className={styles.Logo} alt="Logo" />
			{(isNavVisible || !isSmallScreen) && (
				<nav className={styles.Nav}>
					<Link smooth to="#about" scroll={(el) => scrollWithOffset(el)}>
						<span className={styles.Nav_number}>01. </span>
						<span className={styles.Nav_link}>A</span>bout
					</Link>
					<Link smooth to="#projects" scroll={(el) => scrollWithOffset(el)}>
						<span className={styles.Nav_number}>02. </span>
						<span className={styles.Nav_link}>P</span>rojects
					</Link>
					<Link smooth to="#skills" scroll={(el) => scrollWithOffset(el)}>
						<span className={styles.Nav_number}>03. </span>
						<span className={styles.Nav_link}>S</span>kills
					</Link>
					<Link smooth to="#contact" scroll={(el) => scrollWithOffset(el)}>
						<span className={styles.Nav_number}>04. </span>
						<span className={styles.Nav_link}>C</span>ontact
					</Link>
					<a
						className={styles.resume_button}
						href={resume}
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className={styles.Nav_link}>R</span>esume
					</a>
				</nav>
			)}
			<button onClick={toggleNav} className={styles.Burger}>
				🍔
			</button>
		</header>
	);
}
