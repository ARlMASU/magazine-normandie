import { Link, useLocation } from "react-router-dom";
import styles from "./Nav.module.scss";

import { useState } from "react";

export default function Nav() {
  const location = useLocation();

  const handleCurrentLocation = () => {
    if (location.pathname.slice(1) === "") {
      return "chronologie";
    } else {
      return location.pathname.slice(1);
    }
  };

  const [selectedButton, setSelectedButton] = useState(handleCurrentLocation);

  function handleTimelineButtonClick(buttonClicked) {
    if (selectedButton !== buttonClicked) {
      setSelectedButton("chronologie");
    }
  }

  function handleArchivesButtonClick(buttonClicked) {
    if (selectedButton !== buttonClicked) {
      setSelectedButton("archives");
    }
  }

  return (
    <nav className={styles.nav}>
      <>
        <div
          className={`${styles.nav__sliderBg} ${
            selectedButton === "chronologie"
              ? styles.nav__sliderBg_timeline
              : styles.nav__sliderBg_archives
          }`}
        ></div>
        <Link
          to="/chronologie"
          onClick={() => handleTimelineButtonClick("chronologie")}
          className={`${styles.nav__link} ${
            selectedButton === "chronologie" && styles.nav__link_selected
          }`}
        >
          <div
            className={`${styles.nav__link__img} ${
              styles.nav__link__img_timeline
            } ${
              selectedButton === "chronologie" && styles.nav__link_selected__img
            }`}
          />
          <p
            className={`${styles.nav__link__text} ${
              selectedButton === "chronologie" &&
              styles.nav__link_selected__text
            }`}
          >
            Chronologie
          </p>
        </Link>
        <Link
          to="/archives"
          onClick={() => handleArchivesButtonClick("archives")}
          className={styles.nav__link}
        >
          <div
            className={`${styles.nav__link__img} ${
              styles.nav__link__img_archives
            } ${
              selectedButton === "archives" && styles.nav__link_selected__img
            }`}
          />
          <p
            className={`${styles.nav__link__text} ${
              selectedButton === "archives" && styles.nav__link_selected__text
            }`}
          >
            Archives
          </p>
        </Link>
      </>
    </nav>
  );
}
