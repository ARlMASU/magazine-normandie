import styles from "./Archives.module.scss";

import data from "@/data.json";

import Button from "@/src/components/Button/Button";
import Post from "../../components/Post/Post";
import Modal from "@/src/components/Modal/Modal";
import PostDetails from "@/src/components/Post/PostDetails/PostDetails";

import FiltersIcon from "@/src/assets/images/icons/filters.svg";

import { useState, useRef } from "react";

export default function Archives() {
	const [openPostDetails, setOpenPostDetails] = useState(false);
	const [selectedPost, setSelectedPost] = useState(null);

	const dialogRef = useRef(null);

	function handleOpenPostDetails(id) {
		setSelectedPost(data.posts.find((post) => post.id === id));
		setOpenPostDetails(true);
	}

	// const dialog = document.querySelector("archives__modal");

	return (
		<div className={styles.archives}>
			{openPostDetails && (
				<Modal
					onClick={() => setOpenPostDetails(false)}
					className={styles.archives__modal}
				>
					<PostDetails
						src={`../../../public/images/postsDetailsImages/${selectedPost.src}`}
						title={selectedPost.title}
						date={selectedPost.date}
						filters={selectedPost.filters}
						className={styles.archives__postDetails}
						onClick={() => setOpenPostDetails(false)}
					>
						{selectedPost.details}
					</PostDetails>
				</Modal>
			)}
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
					{data.posts.toReversed().map((post) => (
						<Post
							key={post.id}
							className={styles.post}
							src={`../../../public/images/postsImages/${post.src}`}
							date={post.date}
							filters={post.filters}
							onClick={() => handleOpenPostDetails(post.id)}
							// onClick={dialog.openModal()}
							// onClick={() => dialogRef.current?.showModal()}
						>
							{post.title}
						</Post>
					))}
					<div
						className={styles.archives__postsWrapper__posts__bottomSpacer}
					></div>
				</div>
			</div>
		</div>
	);
}
