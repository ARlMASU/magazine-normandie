import styles from "./Timeline.module.scss";

import Line from "./Line/Line";

import { useEffect, useRef } from "react";

export default function Timeline({}) {
  const timelineRef = useRef(null);

  useEffect(() => {
    // requestAnimationFrame(() => {
    if (timelineRef.current) {
      const timelineWidth = timelineRef.current.offsetWidth;
      console.log("timelineWidth = " + timelineWidth + "px");
    }
    // });
  }, [timelineRef]);

  return (
    <div className={styles.timeline} ref={timelineRef}>
      <Line width={8} height={120} opacity={1}></Line>
    </div>
  );
}
