import styles from "./Button.module.scss";

export default function Button({
  children,
  onClick,
  src,
  alt,
  bg,
  color,
  bora,
  fontSize,
  paddingTopBottom,
  fillContainer,
}) {
  return (
    <button
      onClick={onClick}
      className={styles.button}
      style={{
        paddingRight: src && "1.25rem",
        paddingTop: `${paddingTopBottom}rem`,
        paddingBottom: `${paddingTopBottom}rem`,
        background: `var(--${bg})`,
        borderRadius: `${bora}rem`,
        width: fillContainer && "100%",
      }}
    >
      {src && (
        <img
          src={src}
          alt={alt}
          className={styles.button__img}
          style={{ fill: `var(--${color})`, height: `${fontSize*1.25}rem` }}
        />
      )}
      {children && (
        <p
          className={styles.button__text}
          style={{ fontSize: `${fontSize}rem`, color: `var(--${color})` }}
        >
          {children}
        </p>
      )}
    </button>
  );
}
