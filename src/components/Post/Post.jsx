import styles from "./Post.module.scss";

import Button from "../Button/Button";

import arrowRight from "../../assets/images/icons/arrow_right.svg";

export default function Post({ src, alt, children }) {
	return (
		<div className={styles.wrapper}>
			<img src={src} alt={alt} className={styles.image} />
			<div className={styles.textNButtonWrapper}>
				<p className={styles.text}>{children}</p>
				<div className={styles.wrapperButton}>
					<Button src={arrowRight} alt="Arrow right">
						En savoir plus
					</Button>
				</div>
			</div>
		</div>
	);
}
