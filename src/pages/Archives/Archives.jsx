import styles from "./Archives.module.scss";

import data from "@/data.json";

import Button from "@/src/components/Button/Button";
import Post from "../../components/Post/Post";

import FiltersIcon from "../../assets/images/icons/filters.svg";

export default function Archives() {
	return (
		<div className={styles.archives}>
			<div className={styles.archives__filtersButton}>
				<Button
					src={FiltersIcon}
					alt="Filtres"
					color="primary"
					bora={1}
					fontSize={1.25}
					paddingTopBottom={0.75}
					bg="primary-variant"
					bgHover="primary-variant-hover"
					bgActive="primary-variant-active"
				>
					Filtres
				</Button>
			</div>
			<div className={styles.archives__postsWrapper}>
				<div className={styles.archives__postsWrapper__posts}>
					{data.posts.map((post, id) => (
						<Post
							key={id}
							className={styles.post}
							src={`../public/images/postsImages/${post.src}`}
							alt={post.title}
							date={post.date}
							filters={post.filters}
						>
							{post.title}
						</Post>
					))}
				</div>
			</div>
		</div>
	);
}
