import styles from "./Filter.module.scss";

export default function Filter({ children, fontSize }) {
	return (
		<div className={styles.filter}>
			<p className={styles.filter__text} style={{ fontSize: `${fontSize}rem` }}>
				{children}
			</p>
		</div>
	);
}
