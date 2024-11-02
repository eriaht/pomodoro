import TimersHeader from "./TimersHeader";

import styles from "./Timers.module.css";
import TimersList from "./TimersList";
function Timers() {
  return (
    <div className={styles.timers}>
      <TimersHeader />
      <TimersList />
    </div>
  );
}

export default Timers;
