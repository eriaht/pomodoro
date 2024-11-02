import Divider from "./Divider";
import styles from "./TimersList.module.css";
import TimersListItem from "./TimersListItem";
function TimersList() {
  return (
    <ul className={styles.timersList}>
      <TimersListItem timer={{ name: "Coding timer", time: 25 }} />
      <TimersListItem timer={{ name: "Study timer", time: 30 }} />
    </ul>
  );
}

export default TimersList;
