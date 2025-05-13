import styles from "./App.module.scss";

import Post from "./components/Post/Post";
import Timeline from "./components/Timeline/Timeline";

import simonGronwskiPostImage from "./assets/images/postsImages/Temoignage-de-Simon-Gronowski.png";

const classesAndOptions = ["1e", "2e", "3e", "4e", "5e", "6e"];

export default function App() {
	let timelineWidth;

	return (
		<main className={styles.app}>
			<Post
				src={simonGronwskiPostImage}
				alt="Temoignage de Simon Gronowski"
				className={styles.post}
				date="24->26 mars 2025"
				classesAndOptions={classesAndOptions}
			>
				Témoignage de Simon Gronowski
			</Post>
			<Timeline></Timeline>
		</main>
	);
}
