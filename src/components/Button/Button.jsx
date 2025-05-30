import styles from "./Button.module.scss";

import { useEffect, useState } from "react";

export default function Button({
  children,
  onClick,
  src,
  alt,
  color,
  bora,
  fontSize,
  paddingTopBottom,
  paddingRight,
  paddingLeft,
  fillContainer,
  bg,
  bgHover,
  bgActive,
}) {
  const [mouseIsDown, setMouseIsDown] = useState(false);
  const [mouseIsHovering, setMouseIsHovering] = useState(false);

  const handleMouseDown = () => {
    setMouseIsDown(true);
  };

  const handleMouseUp = () => {
    setMouseIsDown(false);
  };

  const handleMouseEnter = () => {
    setMouseIsHovering(true);
  };

  const handleMouseLeave = () => {
    setMouseIsHovering(false);
  };

  function handlePaddingRight() {
    if (paddingRight !== null) {
      return `${paddingRight}rem`;
    } else if (src !== null) {
      if (children !== null) {
        return "1.25rem";
      } else {
        return ".5rem";
      }
    } else {
      return "1rem";
    }
  }

  function handlePaddingLeft() {
    if (paddingLeft !== null) {
      return `${paddingLeft}rem`;
    } else if (children !== null) {
      return "1rem";
    } else {
      return "1rem";
    }
  }
  return (
    <button
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={styles.button}
      style={{
        paddingRight: handlePaddingRight(),
        paddingLeft: handlePaddingLeft(),
        paddingTop: `${paddingTopBottom}rem`,
        paddingBottom: `${paddingTopBottom}rem`,
        borderRadius: `${bora}rem`,
        width: fillContainer && "100%", // if fillContainer exist, put width to 100%
        background: mouseIsDown
          ? `var(--${bgActive})`
          : mouseIsHovering
          ? `var(--${bgHover})`
          : `var(--${bg})`,
        // if mouseIsDown returns true, show bgActive's color,
        // if not, if mouseIsHovering returns true, show bgHover's color,
        // if not, show bg's color
      }}
    >
      {src && (
        <img
          src={src}
          alt={alt}
          className={styles.button__img}
          style={{ height: `${fontSize * 1.125}rem` }}
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
  np;
}
