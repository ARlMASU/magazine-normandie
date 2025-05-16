import styles from "./App.module.scss";

import Archives from "./pages//Archives/Archives";

export default function App() {
  return (
    <main className={styles.app}>
      <Archives className={styles.app__archives} />
    </main>
  );
}
