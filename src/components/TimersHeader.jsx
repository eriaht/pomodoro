import styles from "./Timers.module.css";

function TimersHeader() {
  return (
    <div className={styles.timersHeader}>
      <p className="cherry-bomb-one-regular">Timers</p>
      <button className={styles.newTimerBtn}>
        <svg
          width="22px"
          height="22px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 12H20M12 4V20" stroke="#000000" />
        </svg>
      </button>
    </div>
  );
}

export default TimersHeader;
