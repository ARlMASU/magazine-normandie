import styles from "./Modal.module.scss";

export default function Modal({ children, onClick }) {
	return (
		<>
			<div className={styles.backdrop} onClick={onClick}></div>
			<div className={styles.modal}>{children}</div>
			{/* <dialog >{children}</dialog> */}
		</>
	);
}
