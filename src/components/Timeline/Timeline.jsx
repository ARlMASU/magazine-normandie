import styles from "./Timeline.module.scss";

import Line from "./Line/Line";

import { useEffect, useRef, createElement } from "react";

export default function Timeline({}) {
	const timelineRef = useRef(null);

	useEffect(() => {
		if (timelineRef.current) {
			const timelineCenterX =
				(timelineRef.current.offsetLeft * 2 + timelineRef.current.offsetWidth) /
				2;
		}
	}, [timelineRef]);


	return (
		<div className={styles.timeline} ref={timelineRef}>
			<Line width={8} height={120} opacity={1}></Line>
		</div>
	);
}
