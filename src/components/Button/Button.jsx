import styles from "./Button.module.scss";

import { useState } from "react";

export default function Button({
  children,
  onClick,
  src,
  alt,
  color,
  bora,
  fontSize,
  paddingTopBottom,
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
  return (
    <button
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={styles.button}
      style={{
        paddingRight: src ? (children ? "1.25rem" : ".5rem") : "1rem",
        // if there's an icon and a text, put paddingRight to 1.25rem
        // 		else if there's an icon but no text, put paddingRight to 1rem
        // else if there's no icon, put paddingRight to 1rem
        paddingLeft: children ? "1rem" : ".5rem",
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
          style={{ height: `${fontSize * 1.25}rem` }}
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
np}
