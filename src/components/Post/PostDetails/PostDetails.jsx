import styles from "./PostDetails.module.scss";

import Button from "../../Button/Button";
import Filter from "../Filter/Filter";

import closeIcon from "@/src/assets/images/icons/close.svg";

// import { useState, useEffect } from "react";

export default function PostDetails({
  src,
  title,
  children,
  date,
  filters,
  onClick,
}) {
  return (
    <div
      className={styles.postDetails}
      // style={{ height: numberOfLine <= 2 && "100%" }}
    >
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
      <img src={src} alt={title} className={styles.postDetails__image} />
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
