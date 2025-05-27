import styles from "./Modal.module.scss";

export default function Modal({ children, onClick, smallText }) {
  return (
    <>
      <div className={styles.backdrop} onClick={onClick}></div>
      <div
        className={`${styles.modal} ${smallText && styles.modal_smallText}`}
        // style={smallText && { top: "auto", bottom: 0 }}
      >
        {children}
      </div>
    </>
  );
}
