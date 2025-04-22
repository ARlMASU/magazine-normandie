import styles from "./App.module.scss";

import Post from "./components/Post/Post";
import Timeline from "./components/Timeline/Timeline";

import simonGronwskiPostImage from "./assets/images/postsImages/simonGronowski.jpg";

export default function App() {
	return (
		<main className={styles.wrapperAll}>
			<Post
				src={simonGronwskiPostImage}
				alt="Temoignage de Simon Gronowski"
				className={styles.post}
			>
				Simon Gronowski, rescapé de la déportation, à St-Michel, pour un
				témoignage bouleversant.
			</Post>
			<Timeline></Timeline>
		</main>
	);
}
