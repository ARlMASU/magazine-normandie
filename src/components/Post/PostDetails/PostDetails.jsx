import styles from "./PostDetails.module.scss";

import Button from "../../Button/Button";
import Filter from "../Filter/Filter";

import closeIcon from "@/src/assets/images/icons/close.svg";

import { useState, useRef } from "react";

export default function PostDetails({
  src,
  title,
  children,
  date,
  filters,
  onClick,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const placeholderRef = useRef(null);

  return (
    <div className={styles.postDetails}>
      <div className={styles.postDetails__buttonWrap}>
        <Button
          src={closeIcon}
          alt="Close"
          bora={1}
          color="on-surface-1"
          bg="surface-2"
          bgHover="primary-variant-hover"
          bgActive="primary-variant-active"
          onClick={onClick}
          className={styles.postDetails__buttonWrap_button}
        ></Button>
      </div>
      {isLoading && <p ref={placeholderRef}>Loading...</p>}
      <img
        src={src}
        alt={title}
        className={styles.postDetails__image}
        style={{ display: isLoading && "none" }}
        onLoad={() => setIsLoading(false)}
      />
      <div className={styles.postDetails__postInfo}>
        <h1 className={styles.postDetails__postInfo_title}>{title}</h1>
        <h2 className={styles.postDetails__postInfo_date}>{date}</h2>
        <div className={styles.postDetails__postInfo_filters} id="root">
          {filters.map((filter, id) => (
            <Filter key={id} fontSize={1}>
              {filter}
            </Filter>
          ))}
        </div>
      </div>
      <p className={styles.postDetails__detailsText}>
        {children.split("\n").map((line, index) => (
          <span key={index} className={styles.postDetails__detailsText_span}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </div>
  );
}
