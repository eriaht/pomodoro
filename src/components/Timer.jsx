import Divider from "./Divider";
import styles from "./Timer.module.css";
function Timer() {
  return (
    <div className={styles.timer}>
      <h2>25:00</h2>
      {/* <Divider width={60} /> */}
    </div>
  );
}

export default Timer;
