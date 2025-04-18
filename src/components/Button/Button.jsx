import styles from "./Button.module.scss";

export default function Button({ onClick, src, alt, children }) {
	return (
		<button onClick={onClick} className={styles.button}>
			{src && <img src={src} alt={alt} className={styles.img} width={24} />}
			{children && <p className={styles.text}>{children}</p>}
		</button>
	);
}
