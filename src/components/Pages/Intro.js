import { Link } from "react-router-dom";
import styles from "./Intro.module.css";
const Intro = (props) => {
	return (
		<div className={styles.intro} id={props.id}>
			<div className={styles.intro_name}>Hi, my name is</div>
			<br />
			<div className={styles.intro_name_job}>
				Yan Brunshteyn. <br />I build things for the web.
			</div>
			<br />
			<div className={styles.intro_parag}>
				I’m a software engineer specializing in designing and building web
				products from the ground up. Currently, I’m focused on building a
				platform for Dads to interact and share ideas for how to make their
				relationships with their kids meaningful and awesome!
			</div>
			<br />
			<a
				className={styles.github}
				target="_blank"
				rel="noopener noreferrer"
				href="https://www.github.com/yanichik"
			>
				Check Out My Github!
			</a>
		</div>
	);
};
export default Intro;
