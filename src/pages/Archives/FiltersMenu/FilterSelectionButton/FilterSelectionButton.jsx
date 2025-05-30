import styles from "./FilterSelectionButton.module.scss";

import checkIcon from "@/src/assets/images/icons/check.svg";

export default function FilterSelectionButton({
  children,
  isSelected,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`
        ${styles.filterSelectionButton}
        ${isSelected && styles.filterSelectionButton_selected}
      `}
    >
      {isSelected && (
        <img
          src={checkIcon}
          alt="Sélectionné"
          className={isSelected && styles.filterSelectionButton_selected__icon}
        />
      )}
      <p
        className={`
        ${styles.filterSelectionButton__text}
        ${isSelected && styles.filterSelectionButton_selected__text}
      `}
      >
        {children}
      </p>
    </button>
  );
}
