import styles from "./Modal.module.scss";

export default function Modal({ children, onClick, smallText, filtersMenu }) {
  return (
    <>
      <div className={styles.backdrop} onClick={onClick}></div>
      <div
        className={`
          ${styles.modal}
          ${smallText && styles.modal_smallText}
          ${filtersMenu && styles.modal_filtersMenu}
        `}
      >
        {children}
      </div>
    </>
  );
}
