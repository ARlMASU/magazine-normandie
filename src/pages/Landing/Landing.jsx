import styles from "./Landing.module.scss";

import Button from "@/src/components/Button/Button";

import logo from "@/src/assets/images/logo.svg";
import arrowIcon from "@/src/assets/images/icons/arrow.svg";
import githubIcon from "@/src/assets/images/github.svg";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Landing({}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div className={styles.landing}>
      <img src={logo} alt="Logo" className={styles.landing__logo} />
      <span className={styles.landing__text}>
        <h1 className={styles.landing__text__title}>
          Découvrez notre Magazine Web
        </h1>
        <p className={styles.landing__text__paragraph}>
          Regroupant les différentes activités de l'Institut Saint-Michel de
          Verviers autour de la thématique Devoir de Mémoire au cours de l'année
          scolaire 2024-2025.
        </p>
      </span>
      <Link to="/chronologie" className={styles.landing__link}>
        <Button
          src={arrowIcon}
          alt="Flèche vers la droite"
          color="surface-0"
          bora={4}
          fontSize={windowWidth >= 1000 ? 2 : windowWidth >= 400 ? 1.5 : 1.25}
          gap={0.5}
          paddingTopBottom={windowWidth >= 400 ? 1 : 0.75}
          paddingLeft={windowWidth >= 400 ? 3 : 1.75}
          paddingRight={windowWidth >= 400 ? 2.5 : 1.5}
          bg="primary"
          bgHover="primary-hover"
          bgActive="primary-active"
          reverse
        >
          Découvrir
        </Button>
      </Link>
      <a
        href="https://github.com/ARlMASU/magazine-normandie.git"
        target="_blank"
        className={styles.landing__githubLink}
      >
        <img
          src={githubIcon}
          alt="Github"
          className={styles.landing__githubLink__logo}
        />
        <p className={styles.landing__githubLink__text}>Github</p>
      </a>
    </div>
  );
}
