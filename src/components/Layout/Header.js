import React, { useEffect, useState, useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../../assets/logo.svg";
import resume from "../../assets/resume.pdf";
import styles from "./Header.module.css";

export default function Header() {
	const [isNavVisible, setIsNavVisible] = useState(true);
	const [isSmallScreen, setIsSmallScreen] = useState(false);
	const [navShadowVisible, setNavShadowVisible] = useState(false);

	const navRef = useRef();

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

	const scroll = window.addEventListener("scroll", changeNav);

	const toggleNav = () => {
		setIsNavVisible(!isNavVisible);
	};
	return (
		<header
			className={
				navShadowVisible
					? `${styles.Header} ${styles.Header_scrolled}`
					: styles.Header
			}
			ref={navRef}
		>
			<img src={logo} className={styles.Logo} alt="Logo" />
			{(isNavVisible || !isSmallScreen) && (
				<nav className={styles.Nav}>
					<Link to="#about">1. About</Link>
					<Link to="#projects">2. Projects</Link>
					<Link to="#skills">3. Skills</Link>
					<Link to="#contact">4. Contact</Link>
					<a
						className={styles.resume_button}
						href={resume}
						target="_blank"
						rel="noopener noreferrer"
					>
						Resume
					</a>
					{/* <button>Logout</button> */}
				</nav>
			)}
			<button onClick={toggleNav} className={styles.Burger}>
				🍔
			</button>
		</header>
	);
}
