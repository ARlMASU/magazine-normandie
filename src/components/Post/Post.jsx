import styles from "./Post.module.scss";

import Button from "../Button/Button";
import Filter from "./Filter/Filter";
import Loader from "./Loader/Loader";

import arrowIcon from "../../assets/images/icons/arrow.svg";

import { useState, useRef } from "react";

export default function Post({
  src,
  children,
  date,
  filters,
  onClick,
  animationDelay,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const placeholderRef = useRef(null);

  return (
    <div
      className={styles.post}
      style={{
        animationDelay: `${animationDelay}s`,
      }}
      onClick={onClick}
    >
      {isLoading && (
        <div ref={placeholderRef} className={styles.post__imageLoading}>
          <Loader />
        </div>
      )}
      <img
        src={src}
        className={styles.post__image}
        style={{ display: isLoading && "none" }}
        onLoad={() => setIsLoading(false)}
      />
      <div className={styles.post__main}>
        <div className={styles.post__main_text}>
          <p className={styles.post__main_text_title}>{children}</p>
          <p className={styles.post__main_text_date}>{date}</p>
        </div>
        <div className={styles.post__main_filters} id="root">
          {filters.map((filter, id) => (
            <Filter key={id}>{filter}</Filter>
          ))}
        </div>
        <Button
          className={styles.post__main_button}
          src={arrowIcon}
          alt="Arrow right"
          color="on-primary"
          fillContainer
          bg="primary"
          bgHover="primary-hover"
          bgActive="primary-active"
          onClick={onClick}
        >
          En savoir plus
        </Button>
      </div>
    </div>
  );
}
