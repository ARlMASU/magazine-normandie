import styles from "./PostDetails.module.scss";

import Button from "../../Button/Button";
import Filter from "../Filter/Filter";
import Link from "./Link/Link";
import Loader from "../Loader/Loader";

import closeIcon from "@/src/assets/images/icons/close.svg";

import { useState, useRef } from "react";

export default function PostDetails({
  src,
  title,
  children,
  date,
  filters,
  links,
  onClick,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const placeholderRef = useRef(null);

  return (
    <div className={styles.postDetails}>
      <section className={styles.postDetails__buttonWrap}>
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
      </section>
      {isLoading && (
        <div ref={placeholderRef} className={styles.postDetails__imageLoading}>
          <Loader />
        </div>
      )}
      <img
        src={src}
        alt={title}
        className={styles.postDetails__image}
        style={{ display: isLoading && "none" }}
        onLoad={() => setIsLoading(false)}
      />
      <hgroup className={styles.postDetails__postInfo}>
        <h1 className={styles.postDetails__postInfo_title}>{title}</h1>
        <h2 className={styles.postDetails__postInfo_date}>{date}</h2>
        <div className={styles.postDetails__postInfo_filters} id="root">
          {filters.map((filter, id) => (
            <Filter key={id} fontSize={1}>
              {filter}
            </Filter>
          ))}
        </div>
      </hgroup>
      <p className={styles.postDetails__detailsText}>
        {children.split("\n").map((line, index) => (
          <span key={index} className={styles.postDetails__detailsText_span}>
            {line}
            <br />
          </span>
        ))}
      </p>
      <section className={styles.postDetails__links}>
        {links.map((link, key) => {
          const srcName = link.text.split(" ")[0].toLowerCase();
          return (
            <Link
              key={key}
              href={link.href}
              src={`/images/linksIcons/${srcName}.svg`}
              // src={facebookIcon}
              alt={link.text}
            >
              {link.text}
            </Link>
          );
        })}
      </section>
    </div>
  );
}
