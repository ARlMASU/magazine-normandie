import styles from "./Filter.module.scss";

export default function Filter({ children }) {
	return (
		<div className={styles.filter}>
			<p className={styles.filter__text}>{children}</p>
		</div>
	);
}
