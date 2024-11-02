import styles from "./TimersListItem.module.css";
function TimersListItem({ timer }) {
  return (
    <li className={styles.timersListItem}>
      <span className={styles.timerName}>{timer.name}</span>
      <span>{`${timer.time}:00`}</span>
      <div className={styles.timersButton}>
        <span>&uarr;</span>
      </div>
    </li>
  );
}

export default TimersListItem;
