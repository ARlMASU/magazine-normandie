import { Outlet } from "react-router-dom";

import styles from "./App.module.scss";

import Nav from "./components/Nav/Nav";

export default function App() {
	return (
		<main className={styles.app}>
			<Nav />
			<Outlet />
		</main>
	);
}
