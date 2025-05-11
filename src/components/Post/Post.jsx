import styles from "./Post.module.scss";

import Button from "../Button/Button";

import arrowRight from "../../assets/images/icons/arrow_right.svg";

export default function Post({ src, alt, children }) {
  return (
    <div className={styles.post}>
      <img src={src} alt={alt} className={styles.post__image} />
      <div className={styles.post__main}>
        <p className={styles.post__main_text}>{children}</p>
        <Button
          className={styles.post__main_button}
          src={arrowRight}
          alt="Arrow right"
        >
          En savoir plus
        </Button>
      </div>
    </div>
  );
}
