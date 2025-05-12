import styles from "./ClassAndOption.module.scss";

export default function ClassAndOption({ children }) {
	return (
		<div className={styles.classAndOption}>
			<p className={styles.classAndOption__text}>{children}</p>
		</div>
	);
}
