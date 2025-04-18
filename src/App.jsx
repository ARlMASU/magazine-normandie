import styles from "./App.module.scss";

import Post from "./components/Post/Post";

import simonGronwskiPostImage from "./assets/images/postsImages/simonGronowski.jpg";

export default function App() {
	return (
		<>
			<Post src={simonGronwskiPostImage} alt="Temoignage de Simon Gronowski">
				Simon Gronowski, rescapé de la déportation, à St-Michel, pour un
				témoignage bouleversant.
			</Post>
		</>
	);
}
