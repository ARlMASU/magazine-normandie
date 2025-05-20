import styles from "./Post.module.scss";

import Button from "../Button/Button";
import Filter from "./Filter/Filter";

import arrowRight from "../../assets/images/icons/arrow_right.svg";

export default function Post({ src, alt, children, date, filters }) {
	return (
		<div className={styles.post}>
			<img src={src} alt={alt} className={styles.post__image} />
			<div className={styles.post__main}>
				<div className={styles.post__main_text}>
					<p className={styles.post__main_text_title}>{children}</p>
					<p className={styles.post__main_text_date}>{date}</p>
				</div>
				<div className={styles.post__main_classesAndOptions} id="root">
					{filters.map((filter, id) => (
						<Filter key={id}>{filter}</Filter>
					))}
				</div>
				<Button
					className={styles.post__main_button}
					src={arrowRight}
					alt="Arrow right"
					color="on-primary"
					fillContainer
					bg="primary"
					bgHover="primary-hover"
					bgActive="primary-active"
				>
					En savoir plus
				</Button>
			</div>
		</div>
	);
}
