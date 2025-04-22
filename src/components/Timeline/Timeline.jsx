import styles from "./Timeline.module.scss";

import Line from "./Line/Line";

import { useEffect, useRef } from "react";

export default function Timeline({timelineWidth}) {
	const timelineRef = useRef(null);
	// console.log(timelineRef.current.width);

	useEffect(() => {
		timelineWidth = timelineRef.current.offsetWidth;
	}, [timelineRef]);

	return (
		<div className={styles.timeline} ref={timelineRef}>
			<Line width={8} height={120} opacity={1}></Line>
		</div>
	);
}
