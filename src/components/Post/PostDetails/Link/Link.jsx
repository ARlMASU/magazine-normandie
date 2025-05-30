import styles from "./Link.module.scss";

export default function Link({ href, src, alt, children }) {
  return (
    <a target="_blank" className={styles.link} href={href}>
      <img src={src} alt={alt} className={styles.link__img} />
      <p className={styles.link__p}>{children}</p>
    </a>
  );
}
