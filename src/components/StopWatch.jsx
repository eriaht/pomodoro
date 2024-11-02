import Timer from "./Timer";

import styles from "./StopWatch.module.css";
function StopWatch() {
  return (
    <div className={styles.stopWatch}>
      <div>
        <p className="cherry-bomb-one-regular">Stop watch</p>
      </div>
      <Timer />
      <div className={`${styles.stopWatchButton}`}>
        <button className="btn">Start</button>
      </div>
    </div>
  );
}

export default StopWatch;
