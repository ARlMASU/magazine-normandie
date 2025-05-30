import styles from "./App.module.scss";

import Archives from "./pages//Archives/Archives";

import { useState, useEffect } from "react";

export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <main className={styles.app}>
      <Archives className={styles.app__archives} windowWidth={windowWidth} />
    </main>
  );
}
